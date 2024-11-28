// rnfs
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function Contact() {

    const router = useRouter()

    // รับค่าผ่าน URL ด้วย useLocalSearchParams()
    const { name, fullname, email, tel, company } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            
            <Text style={{fontSize: 50, textAlign:'center'}}>Contact Page</Text>
            <Text style={{fontSize: 20, textAlign:'center'}}>Name: {name}</Text>
            <Text style={{fontSize: 20, textAlign:'center'}}>Fullname: {email}</Text>
            <Text style={{fontSize: 20, textAlign:'center'}}>Email: {fullname}</Text>
            <Text style={{fontSize: 20, textAlign:'center'}}>Tel: {tel}</Text>
            <Text style={{fontSize: 20, textAlign:'center'}}>Company: {company}</Text>

            <Text>&nbsp;</Text>

            <Button 
                title='Go Back' 
                onPress={() => router.back()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})