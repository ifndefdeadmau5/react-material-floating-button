'use strict';

var React = require('react');
var classnames = require('classnames');

var MainButton = React.createClass({
  getDefaultProps: function(){
    return {
      href: '#',
      onClick: function(){},
      iconResting: '',
      iconActive: '',
      label: null
    };
  },
  render: function(){
    var iconResting = classnames('mfb-component__main-icon--resting', this.props.iconResting);
    var iconActive = classnames('mfb-component__main-icon--active', this.props.iconActive);
    var mainClass = classnames('mfb-component__button--main', this.props.className);
    var Icon = this.props.iconButton;
    if(this.props.label){
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <Icon className={iconResting}/>
          <Icon className={iconActive}/>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick}>
          <Icon className={iconResting}/>
          <Icon className={iconActive}/>
        </a>
      );
    }
  }
});

module.exports = MainButton;
