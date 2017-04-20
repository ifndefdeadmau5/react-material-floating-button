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
    var IconResting = this.props.iconButtonResting;
    var IconActive = this.props.iconButtonActive;
    if(this.props.label){
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <IconResting className={iconResting}/>
          <IconActive className={iconActive}/>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} className={mainClass} onClick={this.props.onClick}>
          <IconResting className={iconResting}/>
          <IconActive className={iconActive}/>
        </a>
      );
    }
  }
});

module.exports = MainButton;
