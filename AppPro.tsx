import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

export default function AppPro(): JSX.Element {

    const isDarkMode = useColorScheme() === 'dark'


    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>Samandeep Singh</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    darkText: {
        color: "white"
    },

    lightText: {
        color: "red"
    }


})