import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

export default function AppPro(): JSX.Element {

    const darkMode = useColorScheme() === "dark";
    return (
        <View style={styles.container}>
            <Text style={darkMode ? styles.darkText : styles.whiteText}>My name is Samandeep Singh Sandhu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", //Changes things on the x-axis
        justifyContent: "center" // On y-axis
    },

    darkText: {
        color:'#FFFFFF'
    },

    whiteText: {
        color: '#000000'
    }
})