import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        List: ListScreen,
    },
    {
        initialRouteName: "Home",
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
