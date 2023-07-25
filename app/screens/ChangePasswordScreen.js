import React, { useState } from 'react';
import {View, StyleSheet, Button, Image, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native';

import colors from '../config/colors';
import { Feather } from '@expo/vector-icons';

const ChangePasswordScreen = () => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [ showOldPassword, setShowOldPassword ] = useState(true)
    const [ showNewPassword, setShowNewPassword ] = useState(true)

    const toggleOldPassword = () => {
        setShowOldPassword(prevState => !prevState)
    }

    const toggleNewPassword = () => {
        setShowNewPassword(prevState => !prevState)
    }

    return (
        <View style={{ 
            paddingVertical: 75, 
            paddingHorizontal: 23 }}>
            <View>
                <Text style={{ 
                    fontSize: 32, 
                    fontWeight: 'bold', 
                    color: colors.inkDarkest, 
                    paddingTop: 52,
                     }}>
                        Change Password
                </Text>
            </View>

            <View style={{ paddingTop: 25}}>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center' }}>

                    <TextInput
                        style={styles.input}
                        placeholder="Old Password"
                        inputMode='text'
                        onChangeText={(text) => setOldPassword(text)}
                        value={oldPassword}
                        secureTextEntry={showOldPassword}
                    />

                    <TouchableWithoutFeedback onPress={toggleOldPassword}>
                        <Feather 
                            name={showOldPassword ? 'eye-off' : 'eye'} 
                            size={20}
                            style={{ 
                                position: 'absolute',
                                right: 16,
                                top: 12 }} />
                    </TouchableWithoutFeedback>
                </View>

                <View>

                    <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        inputMode='text'
                        onChangeText={(text) => setNewPassword(text)}
                        value={newPassword}
                        secureTextEntry={showNewPassword}
                    />

                    <TouchableWithoutFeedback onPress={toggleNewPassword}>
                        <Feather 
                            name={showNewPassword ? 'eye-off' : 'eye'} 
                            size={20}
                            style={{ 
                                position: 'absolute',
                                right: 16,
                                top: 12 }} />
                    </TouchableWithoutFeedback>
                </View>
            </View>

            <TouchableOpacity style={{ width: '100%'}} >
                <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </TouchableOpacity>
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

    submitButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6B4EFF',
        borderRadius: 48
    },

    submitText: {
        color: 'white'
    },
})

export default ChangePasswordScreen;
