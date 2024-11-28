import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { LinearGradient } from 'expo-linear-gradient'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'transparent' }, // สีพื้นหลัง ให้โปร่งใส
            headerBackground: () => (
                <LinearGradient
                    colors={['#1e57f4', '#5a98f4']}
                    start={{ x: 0, y: 0 }}  // จุดเริ่มต้น บนซ้าย
                    end={{ x: 1, y: 1 }} // จุดสิ้นสุด ล่างขวา
                    style={{ flex: 1 }}
                />
            ),
            headerTintColor: '#ffffff', // สีข้อความ Header
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', color: '#ffffff' }, // ขนาดตัวอักษรของ Tab
            tabBarStyle: { 
                backgroundColor: 'transparent',
                height: 70,
                marginBottom: 0,
                paddingTop: 5
            }, // สีพื้นหลัง Tab
            tabBarBackground: () => (
                <LinearGradient
                    colors={['#1e57f4', '#5a98f4']}
                    start={{ x: 0, y: 0 }}  // จุดเริ่มต้น บนซ้าย
                    end={{ x: 1, y: 1 }} // จุดสิ้นสุด ล่างขวา
                    style={{ flex: 1 }}
                />
            ),
            tabBarActiveTintColor: '#ffffff', // สีข้อความ Tab ที่เลือก
            tabBarInactiveTintColor: '#cccccc', // สีข้อความ Tab ที่ไม่ได้เลือก
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={focused ? 'home': 'home-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='contact' options={{
                title: 'Contact',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={focused ? 'call': 'call-outline'} color={color} />
                )
            }} />
            <Tabs.Screen name='(admin)' options={{
                title: 'Admin',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={focused ? 'person': 'person-outline'} color={color} />
                )
            }} />
        </Tabs>
    )
}