import React, { Text } from 'react-native';

const requireNativeComponent =  require('react-native').requireNativeComponent;

const NMRangeSliderIOS = React.createClass({
  propTypes: {
    minimumValue: React.PropTypes.number,
    maximumValue: React.PropTypes.number,
    minimumRange: React.PropTypes.number,
    stepValue: React.PropTypes.number,
    stepValueContinuously: React.PropTypes.bool,
    continuous: React.PropTypes.bool,
    lowerValue: React.PropTypes.number,
    upperValue: React.PropTypes.number,
    lowerCenter: React.PropTypes.object, // CGPoint?
    onChange: React.PropTypes.func,
  },

  convertNativeEvent(event) {
    return [
      parseInt(event.nativeEvent.lowerValue, 10),
      parseInt(event.nativeEvent.upperValue, 10),
    ];
  },

  _onChange: function(event) {
    if (!this.props.onChange) {
      return;
    }
    this.props.onChange(this.convertNativeEvent(event));
  },

  render: function() {
    return (
      <NMRangeSlider
        {...this.props}
        onChange={this._onChange}
      />
    )
  }
});

const NMRangeSlider = requireNativeComponent('NMRangeSlider', NMRangeSliderIOS, {
  nativeOnly: {
    onChange: true,
  },
});

module.exports = NMRangeSliderIOS;