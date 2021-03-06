import React, { Component } from "react";
import { View, Text, Platform, Image, TouchableOpacity } from "react-native";
import { AppContext } from "./ContextProvider";
import tinycolor from "tinycolor2";
import styles from "./headerStyles";
import moment from "moment";

const Header = ({ header_color, left_icon, accent, status_bar }) => {
  var color1 = tinycolor(header_color);
  var text_color = color1.isDark() ? "#fff" : "#000";
  var accent_color = tinycolor(accent);
  var accent_text_color = accent_color.isDark() ? "#fff" : "#000";
  const marginTop = status_bar && Platform.OS == "ios" ? 0 : 0;
  var icon = color1.isDark()
    ? require("../icons/calendar_today_white.png")
    : require("../icons/calendar_today_black.png");
  var arrow_down = color1.isDark()
    ? require("../icons/arrow_drop_down_white.png")
    : require("../icons/arrow_drop_down_black.png");

  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <View
            style={[
              styles.container,
              { backgroundColor: header_color, marginTop: marginTop },
            ]}
          >
            <View style={styles.text_row}>
              <TouchableOpacity
                style={styles.day_box}
                onPress={() => {
                  let yesterday = moment(context.date).subtract(1, "day");
                  context.setDate(
                    new Date(
                      yesterday.year(),
                      yesterday.month(),
                      yesterday.date()
                    )
                  );
                }}
              >
                <View
                  style={[styles.circle, { backgroundColor: accent_color }]}
                >
                  <Text style={[styles.day, { color: accent_text_color }]}>
                    {moment(context.date)
                      .subtract(1, "day")
                      .format("ddd")
                      .substr(0, 2)}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.center}>
                <Text style={[styles.month, { color: text_color }]}>
                  {moment(context.date).format("dddd")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.day_box}
                onPress={() => {
                  let tomorrow = moment(context.date).add(1, "day");
                  context.setDate(
                    new Date(tomorrow.year(), tomorrow.month(), tomorrow.date())
                  );
                }}
              >
                <View
                  style={[styles.circle, { backgroundColor: accent_color }]}
                >
                  <Text style={[styles.day, { color: accent_text_color }]}>
                    {moment(context.date)
                      .add(1, "day")
                      .format("ddd")
                      .substr(0, 2)}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.img}
                onPress={() => context.goToToday()}
              >
                <Image source={icon} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
