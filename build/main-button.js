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
    var IconResting = this.props.iconButtonResting;
    var IconActive = this.props.iconButtonActive;
    if (this.props.label) {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick, "data-mfb-label": this.props.label },
        React.createElement(IconResting, { className: iconResting }),
        React.createElement(IconActive, { className: iconActive })
      );
    } else {
      return React.createElement(
        "a",
        { href: this.props.href, className: mainClass, onClick: this.props.onClick },
        React.createElement(IconResting, { className: iconResting }),
        React.createElement(IconActive, { className: iconActive })
      );
    }
  }
});

module.exports = MainButton;