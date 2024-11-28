import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Link href="/">Go to home screen</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})