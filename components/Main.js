import React, { Component } from "react";
import Home from "./Home";
import { View, Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TasksListComponent from "./TasksListComponent";
import Constants from "expo-constants";

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const TaskListNavigator = createStackNavigator(
  {
    TaskList: { screen: TasksListComponent },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    TaskList: { screen: TaskListNavigator },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
      // style={{
      //   flex: 1,
      //   paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      // }}
      >
        <AppNavigator />
        <Home />
      </View>
    );
  }
}

export default Main;
