// rnfs
import { useState } from 'react'
import { 
    Alert,
    Button, 
    Image, 
    Modal, 
    SafeAreaView, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    View 
} from 'react-native'
import MyStyle from '@/constants/Style'
import About from '@/components/About'
import { Link, useRouter } from 'expo-router'

import BeamProfile from '@/assets/images/beam_profile.png'

export default function Index() {
    
    // สร้างตัวแปร router โดยใช้ useRouter() จาก expo-Router
    const router = useRouter()

    // สร้างฟังก์ชันแสดง Alert
    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'This is the content of the alert.',
            [
                {
                    text: 'Cancel', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม Cancel
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม OK
                    onPress: () => console.log('OK Pressed')
                },
                {
                    text: 'Yes', // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม Yes
                    onPress: () => console.log('Yes Pressed')
                }
            ],
            { cancelable: false } // ไม่สามารถกดปุ่ม Back เพื่อปิด Alert ได้ หรือไม่สามารถปิดได้โดยการกดที่พื้นหลัง
        )
    }

    // สร้างตัวแปร state สำหรับซ่อนแสดง Modal
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>

                    <StatusBar
                        // backgroundColor="#f413b4"
                        backgroundColor="transparent" // พื้นหลังโปร่งใส
                        translucent={true}
                        barStyle='light-content'
                    />

                    <Text style={[styles.text, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>RN wih Expo</Text>
                    <Text style={[styles.text, {textAlign: 'center'}]}>Lorem ipsum dolor sit </Text>
                    <Text style={[MyStyle.text,  {textAlign: 'center'}]}>Lorem ipsum dolor sit.</Text>

                    <Text style={[styles.text, {textAlign: 'center'}]}>ตัวอย่างการโหลด Component "About" เข้ามา</Text>
                    <About />

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Link ใน Expo</Text>
                    {/* Link ไปยังหน้า Contact */}
                    <Link href='/contact?name=Samit&company=ITGenius' style={[MyStyle.text, {borderColor: '#ffffff', borderStyle:'solid', borderWidth: 2, padding: 10, textAlign: 'center'}]}>Click to Contact</Link>
                

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Button ใน Expo พร้อม Query String</Text>
                    <Button
                        title='Click to Contact with query string'
                        // onPress={() => {console.log('Button Clicked')}}
                        onPress={() => router.push('/contact?name=Samit&company=ITGenius')}
                        // onPress={() => router.replace('/contact')}
                        // onPress={() => router.navigate('/contact')}

                        // router.push(path: string | object) เปลี่ยนหน้า และเก็บหน้าเก่าไว้จะสามารถกลับมาหน้าเดิมได้
                        // router.replace(path: string | object)เปลี่ยนหน้าและลบหน้าเก่าทิ้งไป จะไม่สามารถกดปุ่ม Back กลับมาหน้าเดิมได้
                        // router.back() คือการกลับหน้าก่อนหน้า เหมือนกับการกดปุ่ม "Back" ในเบราว์เซอร์
                        // router.navigate(path: string | object) คล้ายกับ router.push() ไปยังหน้าใหม่โดยไม่ต้องการจัดการสแต็กเพิ่มเติม
                        // router.reload() คือการโหลดหน้าเดิมใหม่
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Button ใน Expo พร้อม Parameter</Text>
                    <Button
                        title='Go to Contact with Params'
                        onPress={() => {
                            router.push({
                                pathname: '/contact',
                                params: {
                                    fullname: 'Samit',
                                    email: 'samit@email.com',
                                    tel: '0812345678',
                                    company: 'ITGenius',
                                }
                            })
                        }}
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>Button ใน Expo แบบ Dynamic Router</Text>
                    <Button
                        title='Go to User ID: 456'
                        onPress={() => router.push('/user/456')}
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>Button with Stack</Text>
                    <Button
                        title='Go to User Profile'
                        onPress={() => router.push('/user/profile')}
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>Router to not found</Text>
                    <Button
                        title='Go to Not Found'
                        onPress={() => router.push('/asfasfas')}
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ TouchableOpacity</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{backgroundColor: 'blue', paddingVertical: 20, borderRadius: 5}}
                        onPress={() => {
                            console.log('TouchableOpacity Clicked')
                        }}
                    >
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>Touchable Opacity</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ TouchableHighlight</Text>
                    <TouchableHighlight
                        underlayColor='#570faa'
                        style={{
                            backgroundColor: '#d8ba0d', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 5
                        }}
                        onPress={() => {
                            console.log('TouchableHighlight Clicked')
                        }}
                        >
                            <Text style={{color: 'white'}}>Touchable Highlight</Text>
                    </TouchableHighlight>


                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ TouchableWithoutFeedback</Text>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            console.log('TouchableWithoutFeedback Clicked')
                        }}
                        >
                        <Text style={{ color: 'white', textAlign:'center'}}>Touchable Without Feedback</Text>
                    </TouchableWithoutFeedback>

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Image จาก Asset</Text>
                    <Image
                        source={require('@/assets/images/samit_profile.jpg')}
                        style={{width: 120, height: 120, borderRadius: 60, marginHorizontal: 'auto'}}
                        resizeMode='cover'
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Image จาก Asset แบบ Import</Text>
                    <Image
                        source={BeamProfile}
                        style={{width: 120, height: 120, borderRadius: 60, marginHorizontal: 'auto'}}
                    />

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Image จาก URL</Text>
                    <Image
                        source={{uri: 'https://www.itgenius.co.th/assets/frondend/images/demo/logo_round.png'}}
                        style={{width: 120, height: 120, borderRadius: 60, marginHorizontal: 'auto'}}
                    />

                    
                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Alert</Text>
                    <TouchableHighlight
                        underlayColor='#aa4a0f'
                        style={{
                            backgroundColor: '#0d51d8', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => {
                            showAlert()
                        }}
                    >
                        <Text style={{color: 'white'}}>Show Alert</Text>
                    </TouchableHighlight>

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Modal</Text>
                    <Modal
                        animationType='slide' // fade, slide, none
                        transparent={true}
                        visible={modalVisible}
                        onShow={() => { console.log('Modal Show') }}
                        onRequestClose={() => { console.log('Modal Close') }}
                        >
                        <View style={{
                            flex: 1, 
                            backgroundColor: 'rgba(0, 0, 0, 0.9)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
                            justifyContent: 'center', // จัดกลางในแนวตั้ง
                            alignItems: 'center', // จัดกลางในแนวนอน
                        }}>
                            <View style={{
                            width: 300, // กำหนดความกว้างของ Modal
                            backgroundColor: '#fff', // สีพื้นหลังของ Modal
                            borderRadius: 10, // มุมโค้งมนของ Modal
                            padding: 20, // ระยะห่างภายใน
                            alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
                            }}>
                            <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                <Button
                                    title='Submit'
                                    onPress={() => {
                                        console.log('Submit Modal')
                                    }}
                                />
                                <Button
                                    title='X Close'
                                    onPress={() => {
                                        setModalVisible(false)
                                    }}
                                />
                            </View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableHighlight
                        underlayColor='#aa4a0f'
                        style={{
                            backgroundColor: '#0d51d8', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => {
                            setModalVisible(true)
                        }}
                    >
                        <Text style={{color: 'white'}}>Show Moda</Text>
                    </TouchableHighlight>

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Text Input</Text>
                    <TouchableHighlight
                        underlayColor='#aa4a0f'
                        style={{
                            backgroundColor: '#0d51d8', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => router.push('/textinputdemo')}
                    >
                        <Text style={{color: 'white'}}>Open Form</Text>
                    </TouchableHighlight>


                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ Switch</Text>
                    <TouchableHighlight
                        underlayColor='#aa4a0f'
                        style={{
                            backgroundColor: '#0d51d8', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => router.push('/switchdemo')}
                    >
                        <Text style={{color: 'white'}}>Open Switch Page</Text>
                    </TouchableHighlight>

                    <Text style={[styles.text, {textAlign: 'center'}]}>การใช้ FlatList</Text>
                    <TouchableHighlight
                        underlayColor='#aa4a0f'
                        style={{
                            backgroundColor: '#0d51d8', 
                            paddingVertical: 20,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => router.push('/flatlistdemo')}
                    >
                        <Text style={{color: 'white'}}>Open FlatList Page</Text>
                    </TouchableHighlight>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#01921a',
    justifyContent: 'center',
    gap: 12,
    padding: 20
  },

  text: {
    fontSize: 16,
    color: '#ffffff',
    margin: 2
  }

})