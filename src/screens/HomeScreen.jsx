import React from "react";
import { StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    // console.log(navigation);
    return (
        <>
            <Button
                onPress={() => navigation.navigate("Components")}
                title="Go to Components Demo"
            />

            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List Demo"
                color="#883986"
            />
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
