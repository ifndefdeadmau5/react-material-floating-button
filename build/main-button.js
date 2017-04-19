"use strict";

var React = require("react");
var classnames = require("classnames");

var MainButton = React.createClass({
  displayName: "MainButton",

  getDefaultProps: function getDefaultProps() {
    return {
      href: "#",
      onClick: function onClick() {},
      iconResting: "",
      iconActive: "",
      label: null
    };
  },
  render: function render() {
    var iconResting = classnames("mfb-component__main-icon--resting", this.props.iconResting);
    var iconActive = classnames("mfb-component__main-icon--active", this.props.iconActive);
    var mainClass = classnames("mfb-component__button--main", this.props.className);
    var Icon = this.props.iconButton;
    if (this.props.label) {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick, "data-mfb-label": this.props.label },
        React.createElement(Icon, { className: iconResting }),
        React.createElement(Icon, { className: iconActive })
      );
    } else {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick },
        React.createElement(Icon, { className: iconResting }),
        React.createElement(Icon, { className: iconActive })
      );
    }
  }
});

module.exports = MainButton;