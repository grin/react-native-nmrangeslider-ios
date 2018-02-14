import React from 'react';
import PropTypes from 'prop-types';
import { Text, ColorPropType } from 'react-native';

const requireNativeComponent =  require('react-native').requireNativeComponent;
const NMRangeSliderIOS = React.createClass({
  propTypes: {
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    lowerValue: PropTypes.number,
    lowerMaximumValue: PropTypes.number,
    upperValue: PropTypes.number,
    upperMinimumValue: PropTypes.number,
    minimumRange: PropTypes.number,
    stepValue: PropTypes.number,
    stepValueContinuously: PropTypes.bool,
    continuous: PropTypes.bool,
    lowerCenter: PropTypes.object, // CGPoint?
    upperCenter: PropTypes.object, // CGPoint?
    onChange: PropTypes.func,
    trackColor: ColorPropType,
    disabled: PropTypes.bool,
  },

  componentDidMount() {
    this.setState({...this.props});
  },

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
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
        lowerValue={0}
        upperValue={0}
        disabled={false}
        {...this.state}
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
