var gulp = require('gulp');
var source = require('vinyl-source-stream');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');

var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var less = require('gulp-less');

gulp.task('default', ['bundle']); 

gulp.task('less', function () {
  gulp.src('./less/bootstrap-select.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

var examplesPath = './examples/';

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task('bundle', function() {
  var folders = getFolders(examplesPath);

  var tasks = folders.map(function(folder) {
        return browserify({
            entries: examplesPath + folder +'/app.jsx',
            transform: [reactify, babelify]
        })
        .bundle()
        .on('error', function(err){
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest(path.join(examplesPath, folder)));
   });

  return merge(tasks);
});