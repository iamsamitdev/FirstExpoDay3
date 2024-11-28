import React, { useState } from "react"
import { StyleSheet, Switch, Text, View } from "react-native"

export default function SwitchDemo() {
  let [switchBluetooth, setSwitchBluetooth] = useState(false)
  let [switchWiFi, setSwitchWiFi] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.text}>Bluetooth</Text>
        <Switch
          value={switchBluetooth}
          onChange={(e) => setSwitchBluetooth(e.nativeEvent.value)}
        />
      </View>
      <Text style={{ marginBottom: 30 }}>
        Bluetooth : {JSON.stringify(switchBluetooth ? "ON" : "OFF")}
      </Text>

      <View style={styles.items}>
        <Text style={styles.text}>Wi-Fi</Text>
        <Switch value={switchWiFi} onValueChange={setSwitchWiFi} />
      </View>
      <Text>WiFi : {JSON.stringify(switchWiFi ? "ON" : "OFF")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 70, marginLeft: 20, marginRight: 20 },
  items: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: { fontSize: 18 },
})
