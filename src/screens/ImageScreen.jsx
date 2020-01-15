import React from "react";
import { StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                score={4}
            />

            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
                score={7}
            />

            <ImageDetail
                title="Mountain"
                imageSource={{
                    uri:
                        "https://facebook.github.io/react-native/img/tiny_logo.png",
                }}
                score={9}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
