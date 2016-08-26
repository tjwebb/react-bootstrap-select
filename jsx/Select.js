/* global React, $ */
'use strict'; 

require('../js/bootstrap-select');

var BootstrapSelect = React.createClass({displayName: 'BootstrapSelect',
  getInitialState: function () {
    return {
      open: false
    };
  },
  componentDidUpdate: function () {
    var select = $(this.getDOMNode()).find('div.bootstrap-select');
    select.toggleClass('open', this.state.open);
  },
  componentWillUnmount: function () {
    var self = this;
    var select = $(this.getDOMNode()).find('select');

    var button = $(this.getDOMNode()).find('button');
    var dropdown = $(this.getDOMNode()).find('.dropdown-menu.open');
    var items = $(this.getDOMNode()).find('ul.dropdown-menu li a');

    $('html').off('click');
    button.off('click');
    items.off('click');
  },
  componentDidMount: function () {
    var self = this;
    var select = $(this.getDOMNode()).find('select');
    $(select).selectpicker();

    var button = $(this.getDOMNode()).find('button');
    var dropdown = $(this.getDOMNode()).find('.dropdown-menu.open');
    var items = $(this.getDOMNode()).find('ul.dropdown-menu li a');

    $('html').click(function () {
      self.setState({ open: false });
    });

    button.click(function (e) {
      e.stopPropagation();
      self.setState({ open: !self.state.open });
    });

    items.click(function () {
      if (self.props.multiple) return;
      self.setState({ open: !self.state.open });
    });
  },
  render: function () {
    return (
      <React.Bootstrap.Input {...this.props} type='select' />
    );
  }
});

module.exports = BootstrapSelect;
