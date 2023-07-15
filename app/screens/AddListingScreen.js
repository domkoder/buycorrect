import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Button, Image, Text, TouchableOpacity, TextInput} from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import RNPickerSelect from 'react-native-picker-select'

import {Feather} from '@expo/vector-icons'

const AddListingScreen = () => {

    const [imageUri, setImageUri] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [condition, setCondition] = useState('')
    const [description, setDescription] = useState('')

    const categories = [
        {
          label: "category 1",
          value: "category 1",
        },
        {
          label: "category 2",
          value: "category 2",
        },
        {
          label: "category 3",
          value: "category 3",
        },
    ];

    const conditions = [
        {
          label: "condition 1",
          value: "condition 1",
        },
        {
          label: "condition 2",
          value: "condition 2",
        },
        {
          label: "condition 3",
          value: "condition 3",
        },
    ];

    const requestPermission = async () => {   
        const result = await ImagePicker.requestCameraPermissionsAsync();

        if(!result.granted) {
            alert('You need to enable permission to access the library')
        }
    }

    useEffect(() => {
        requestPermission();
    }, [])

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync()

            if(!result.canceled) {
                setImageUri(result.assets[0].uri)
            }
        } catch (error) {
            console.log('Error reading an image', error)
        }
    }

    return (
        <View style={{ paddingTop: 80 }}>
            <View style={{ paddingHorizontal: 23}}>
                {/* <Text>I'm here</Text> */}

                <View style={{ flexDirection: 'row'}}>

                    {imageUri && (
                        <View style={{ borderRadius: 16, overflow: 'hidden', marginRight: 16}}>
                            <Image source={{ uri: imageUri}} style={{ width: 88, height: 88 }} />
                        </View>
                    )}

                    <TouchableOpacity onPress={selectImage}>
                        <View style={{ borderRadius: 16, backgroundColor: '#CCCCCC', width: 88, height: 88 }}>
                            <Feather name='camera' size={30} color='#131214' style={{ padding: 29 }} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingTop: 25}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        inputMode='text'
                        onChangeText={(text) => setTitle(text)}
                        value={title}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        inputMode='text'
                        onChangeText={(text) => setPrice(text)}
                        value={price}
                    />

                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={category}
                        onValueChange={(value) => {setCategory(value)}}
                        items={categories}
                        placeholder={{ label: 'Category', value: ''}}
                    />

                    <RNPickerSelect
                        style={pickerSelectStyles}
                        value={condition}
                        onValueChange={(value) => {setCondition(value)}}
                        items={conditions}
                        placeholder={{ label: 'Condition', value: ''}}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        inputMode='text'
                        onChangeText={(text) => setDescription(text)}
                        value={description}
                        multiline={true}
                    />
                </View>

                <TouchableOpacity style={{ width: '100%'}} >
                    <View style={styles.postButton}>
                        <Text style={styles.postText}>Post</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ width: '100%'}} >
                    <View style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </View>
                </TouchableOpacity>
                
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderColor: '#E3E5E5',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
    },

    postButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6B4EFF',
        borderRadius: 48
    },
    postText: {
        color: 'white'
    },

    cancelButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        marginTop: 18,
        backgroundColor: '#E7E7FF',
        borderRadius: 48
    },
    cancelText: {
        color: '#6B4EFF'
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
    //   fontSize: 16,
      height: 48,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#E3E5E5',
      borderRadius: 8,
      color: 'black',
      marginBottom: 16,
      paddingHorizontal: 8,
      paddingRight: 30, // to ensure the text is not obscured by the arrow icon
    },
});

export default AddListingScreen;
