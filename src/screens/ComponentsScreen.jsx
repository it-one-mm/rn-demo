import React from "react";
import { StyleSheet, Text } from "react-native";

const ComponentsScreen = () => {
    const name = "Min Thet Naing";

    return (
        <>
            <Text style={styles.header}>Getting Started with React Native!</Text>
            <Text style={styles.subHeader}>My name is {name}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45,
    },
    subHeader: {
        fontSize: 20,
    },
});

export default ComponentsScreen;
