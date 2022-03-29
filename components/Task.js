import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Task = (props) => {
    return (
        <View style={styles.Item}>
            <View style={styles.ItemLeft}>
                <Text style={styles.ItemText}>{props.text}</Text>
            </View>
            <View style={styles.ItemRight}>
                <Icon name="trash-2" style={styles.IconTrash} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.50,

        elevation: 6,
    },
    ItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    ItemText: {
        maxWidth: '100%',
        fontSize: 16,
    },
    IconTrash: {
        fontSize: 24,
        color: '#556faa'
    }
});

export default Task;