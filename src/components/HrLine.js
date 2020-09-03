import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";
import { AppContext } from "./ContextProvider";

const HrLine = ({ color, width, slot, onGridPress }) => (
  <AppContext.Consumer>
    {(context) => (
      <TouchableOpacity
        onPress={() => {
          onGridPress(slot, moment(context.date).format(`dddd`));
        }}
        style={{
          margin: 0,
          padding: 0,
          flex: 1,
          width: `100%`,
          // height: context.hour_size,
          height: 1000,
          backgroundColor: `blue`,
          borderBottomColor: color,
          borderBottomWidth: width,
        }}
      >
        <Text>{context.hour_size}</Text>
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
