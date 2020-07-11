import React from "react";
import { View } from "react-native";
import HrLine from "./HrLine";

const DrawnGrid = ({ onGridPress }) =>
  [...Array(24 * 3)].map((val, i) => (
    <HrLine key={i} onGridPress={onGridPress} slot={i} />
  ));

export default DrawnGrid;
