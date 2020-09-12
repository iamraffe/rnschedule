import React from "react";
import { View } from "react-native";
import { AppContext } from "./ContextProvider";
import RowView from "./RowView";
import todayData from "../services/todayData";

const ScheduledData = ({ dataArray, onEventPress }) => (
  <AppContext.Consumer>
    {(context) => {
      const data = todayData(dataArray, context.date);
      return (
        <View
          style={{
            width: "100%",
            zIndex: Platform.OS === "ios" ? 1 : undefined,
            height: Platform.OS === "ios" ? undefined : "100%",
            position: "absolute",
          }}
        >
          {data.map((row, i) => (
            <RowView
              key={i}
              row={row}
              hour_size={context.hour_size}
              onEventPress={onEventPress}
            />
          ))}
        </View>
      );
    }}
  </AppContext.Consumer>
);

export default ScheduledData;
