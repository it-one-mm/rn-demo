import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return <AppContainer />;
};

export default App;
