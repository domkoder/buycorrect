import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import photo from '../assets/product_detail.png'

export default function ProductDetails({ route }) {
  return (
    <ScrollView style={{flex: 1}}>
      <Image source={photo} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.price}>&#8358;190,00</Text>
      </View>

      <TouchableOpacity style={{ paddingHorizontal: 23}}>
        <View style={styles.contactButton}>
            <Text style={styles.contactText}>Contact Seller</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.description}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.body}>A favourite returns. Made for the runner looking for a shoe they can wear daily the Nike Air Zoom Quest Structure 23 keeps </Text>

        <View>
            <Text>
                <Text style={styles.span}>Condition:</Text> New
            </Text>

            <Text>
                <Text style={styles.span}>Category:</Text> Fashion
            </Text>

            <Text>
                <Text style={styles.span}>School:</Text> University of Jos
            </Text>
        </View>
      </View>

        <View style={styles.profile}>
            <View style={styles.profilePicture}>
                <Image source={require('../assets/profile.png')} />
            </View>
            <View style={{ paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Nandom</Text>
                <Text style={{ fontSize: 16 }}>nandom@buycorrect.com</Text>
            </View>
        </View>
        <View style={{ paddingHorizontal: 23, paddingBottom: 24 }}>
            <Text style={{ color: '#583AEE', fontSize: 14 }}>Drop a review</Text>
        </View>

        <View style={{ paddingHorizontal: 23 }}>
            <Text style={styles.reviewHeading}>Seller Reviews</Text>

            <View style={styles.review}>
                <View style={styles.reviewPicture}>
                    <Image source={require('../assets/profile.png')} />
                </View>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold'}}>Plangkat</Text>
                        <Text style={{ color: '#6C7072', fontSize: 14 }}>5 Mar</Text>
                    </View>
                    <Text style={{ fontSize: 14 }}>Hi, I put together some photos from Hi, I put together some photos from...Hi, I put together some photos from...</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 10,
        fontSize: 16
    },
    contactButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6B4EFF',
        borderRadius: 48
    },
    contactText: {
        color: 'white'
    },
    description: {
        padding: 23,
    },
    detailsContainer: {
        padding: 23
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 341,
        overflow: 'hidden'
    },
    price: {
        fontSize: 16,
        fontWeight: 'medium',
        color: '#6B4EFF'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 27,
        paddingHorizontal: 23,
    },
    profilePicture: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center'
    },
    review: {
        flexDirection: 'row',
        alignItems: ''
    },
    reviewHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 24
    },
    reviewPicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center'
    },
    span: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#090A0A'
    }
})
