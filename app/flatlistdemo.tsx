import React from "react"
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from "react-native"

export default function FlatListDemo() {
  // ข้อมูลชุดที่ใช้ใน FlatList
  const data = [
    {
      id: 1,
      name: "Workshop Python Django 5 with Next.JS 15 and Supabase",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/workshop_django_nextjs.jpg",
    },
    {
      id: 2,
      name: "Basic React Native with Expo",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_React_Native_Expo_Pic_Course.jpg",
    },
    {
      id: 3,
      name: "Basic Vue and Nuxt 3 with Prisma and Supabase",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Basic_Vue_Nuxt_Pic_Course.jpg",
    },
    {
      id: 4,
      name: "Basic Kubernetes (K8s) for Web Developer",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/k8s-for-dev-cover.jpg",
    },
    {
      id: 5,
      name: "Internet of Things with MicroPython สำหรับผู้เริ่มต้น",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/IOT_MicroPython_Cover.jpg",
    },
    {
      id: 6,
      name: "Full Stack Web Application with Go and React",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Go_and_React_PicCourse.jpg",
    },
    {
      id: 7,
      name: "Workshop Web API Spring Boot 3 Kotlin with Nuxt 3 and Docker",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/SpringBoot3_With_Nuxt3_PicCourse.jpg",
    },
    {
      id: 8,
      name: "Workshop Laravel 11 with Vue 3",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Laravel11_Vue3_Pic_Course.jpg",
    },
    {
      id: 9,
      name: "Workshop Angular 17 with .NET Core 8",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/Angular_with_NET8_PictureCourse.jpg",
    },
    {
      id: 10,
      name: "สร้างรายงานด้วย Power BI ร่วมกับ Power Query สำหรับผู้เริ่มต้น",
      imgurl:
        "https://www.itgenius.co.th/assets/frondend/images/picturecourse/PowerBI_With_Power_Query_Pic_Course.jpg",
    },
  ]

  // ฟังก์ชันสำหรับการเรนเดอร์แต่ละรายการใน FlatList
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imgurl }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data} // กำหนดข้อมูล
          renderItem={renderItem} // ฟังก์ชันสำหรับเรนเดอร์แต่ละรายการ
          keyExtractor={(item) => item.id.toString()} // กำหนด key แต่ละรายการ
          contentContainerStyle={styles.listContainer} // กำหนดสไตล์ของ FlatList
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    color: "#333",
  },
})
