import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})