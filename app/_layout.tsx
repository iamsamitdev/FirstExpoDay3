import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack screenOptions=
        {{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#960669',
            },
            headerTintColor: '#ffffff',
        }}
    >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{title: 'Home'}} />
        <Stack.Screen name="contact" options={{title: 'Contact us'}} />
        <Stack.Screen name="textinputdemo" options={{title: 'Form Sample', headerShown: true}} />
        <Stack.Screen name="switchdemo" options={{title: 'Switch Demo', headerShown: true}} />
        <Stack.Screen name="flatlistdemo" options={{title: 'FlatList Demo', headerShown: true}} />
    </Stack>
  )
}
