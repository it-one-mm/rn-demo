import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default ImageDetail;
