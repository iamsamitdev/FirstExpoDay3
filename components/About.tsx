// rnfs
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStyle from '@/constants/Style'

export default function About() {

  return (
    <View>
      <Text style={[MyStyle.text, {backgroundColor:'#c4450b', borderColor: '#f5b731', borderStyle:'solid', textAlign:'center', borderWidth: 2, padding: 10}]}>About Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({})