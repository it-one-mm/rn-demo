import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const ListScreen = () => {
    const friendList = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 30 },
        { name: "Friend #3", age: 40 },
        { name: "Friend #4", age: 22 },
        { name: "Friend #5", age: 32 },
        { name: "Friend #6", age: 42 },
        { name: "Friend #7", age: 25 },
        { name: "Friend #8", age: 35 },
        { name: "Friend #9", age: 28 },
        { name: "Friend #10", age: 34 },
    ];
    return (
        <>
            <FlatList
                keyExtractor={item => item.name}
                data={friendList}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.name} - Age {item.age}
                    </Text>
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 30,
        paddingLeft: 20,
    },
});

export default ListScreen;
