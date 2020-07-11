import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { AppContext } from "./ContextProvider";

const HrLine = ({ color, width, hour, onGridPress }) => (
  <AppContext.Consumer>
    {(context) => (
      <TouchableOpacity
        onPress={() => onGridPress(hour)}
        style={{
          margin: 0,
          padding: 0,
          flex: 1,
          width: `100%`,
          height: context.hour_size,
          backgroundColor: `black`,
          borderBottomColor: color,
          borderBottomWidth: width,
        }}
      >
        <Text>Hi</Text>
      </TouchableOpacity>
    )}
  </AppContext.Consumer>
);

HrLine.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

HrLine.defaultProps = {
  color: "#BABABA",
  width: 1,
};

export default HrLine;
