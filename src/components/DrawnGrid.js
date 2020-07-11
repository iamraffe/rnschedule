import React from "react";
import { View } from "react-native";
import HrLine from "./HrLine";

const DrawnGrid = () =>
  [...Array(24 * 3)].map((val, i) => (
    <HrLine key={i} onEventPress={onEventPress} slot={i} />
  ));

export default DrawnGrid;
