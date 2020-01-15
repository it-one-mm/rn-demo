import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
    },
    {
        initialRouteName: "Components",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return <AppContainer />;
};

export default App;
