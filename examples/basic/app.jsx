var React = require('react');
var { Nav, Navbar, Col } = require('react-bootstrap');
var BootstrapSelect = require('../../jsx/Select');

var Application = React.createClass({
      displayName: 'Application',
      render: function() {
        var brand = <a className='navbar-brand' href="#">Bootstrap-select usability tests</a>;

        return (
          <div className='Application'>
            <Navbar fixed-top={true} brand={brand}></Navbar>
            <div className='container'>
              <form className="form-horizontal">
                <Col lg={10}>
                  <BootstrapSelect label='"Basic"'>
                    <option>cow</option>
                    <option>bull</option>
                    <option class="get-class" disabled>ox</option>
                    <optgroup label="test" data-subtext="another test">
                      <option>ASD</option>
                      <option selected>Bla</option>
                      <option>Ble</option>
                    </optgroup>
                  </BootstrapSelect>
                </Col>
              </form>
            </div>
          </div>
        );
      }
  });

React.render(<Application />, document.getElementById('content'));
