import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function TextInputDemo() {

  // สร้างตัวแปร inputName, inputEmail, inputTel โดยใช้ useState()
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputTel, setInputTel] = useState("")

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Simple Form</Text>

      <Text>Name</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputName}
        onChange={(e) => setInputName(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Name"
      />

      <Text>Email</Text>
      <TextInput
        keyboardType="email-address"
        defaultValue={inputEmail}
        onChange={(e) => setInputEmail(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Email"
      />

      <Text>Tel</Text>
      <TextInput
        keyboardType="phone-pad"
        defaultValue={inputTel}
        onChange={(e) => setInputTel(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Tel"
      />

      <Text></Text>
      <Button
        title="Submit"
        onPress={() => {
          console.log("Name:", inputName)
          console.log("Email:", inputEmail)
          console.log("Tel:", inputTel)
        }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
})
  