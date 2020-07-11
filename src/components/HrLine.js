import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { AppContext } from "./ContextProvider";

const HrLine = ({ color, width, hour, onGridPress }) => (
  <AppContext.Consumer>
    {(context) => (
      <View
        style={{
          width: "100%",
          paddingTop: context.hour_size - width,
          borderBottomColor: color,
          borderBottomWidth: width,
        }}
      >
        <TouchableOpacity
          onPress={() => onGridPress(hour)}
          style={{
            margin: 0,
            padding: 0,
            flex: 1,
            width: `100%`,
            height: `100%`,
            backgroundColor: `red`,
          }}
        />
      </View>
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
