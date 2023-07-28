import React, { useState } from 'react'
import {View, StyleSheet, TextInput, SafeAreaView, Button, Text, TouchableOpacity} from 'react-native'

const LoginScreen = ({ navigation, someProps }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        
        console.log('Email:', email)
        console.log('Password:', password)
        console.log(someProps)

        someProps.status.setStatus(true)
    }

    return (
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Login</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    inputMode='email'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />

                <TouchableOpacity style={{ width: '100%'}} onPress={handleLogin}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ paddingVertical: 24}}>
                    <Text style={{ color: '#2E3E5C'}}>
                        Do you have an account? <Text 
                                style={{ color: '#6B4EFF'}} 
                                onPress={() => navigation.navigate('Register')}>
                                    Sign Up
                                </Text>
                    </Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 23,
        marginTop: 50,
    },
    input: {
        width: '100%',
        height: 48,
        borderColor: '#E3E5E5',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    headingContainer: {
        justifyContent: 'flex-start', 
        width: '100%',
        paddingVertical: 50
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#090A0A'
    },
    loginButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6B4EFF',
        borderRadius: 48
    },
    loginText: {
        color: 'white'
    },
})

export default LoginScreen
