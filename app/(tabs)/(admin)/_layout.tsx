// app/(admin)/_layout.tsx
import { Stack } from 'expo-router'

export default function AdminLayout() {
    return (
        <Stack screenOptions=
            {{
                headerShown: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#960669',
                },
                headerTintColor: '#ffffff',
            }}
        >
            {/* เส้นทางย่อยสำหรับ admin */}
            <Stack.Screen name="user/[id]" options={{title: 'User Details'}} />
            <Stack.Screen name="user/profile" options={{title: 'User Profile'}} />
            
        </Stack>
    )
}