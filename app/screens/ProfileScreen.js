import React from 'react';
import {View, StyleSheet, Image, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import * as Device from 'expo-device'
import colors from '../config/colors';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profilePicture}>
                    <Image source={require('../assets/profile.png')} />
                </View>
                <View style={{paddingHorizontal: 16}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Nandom</Text>
                    <Text style={{fontSize: 16}}>nandom@buycorrect.com</Text>
                </View>
            </View>

            <TouchableOpacity style={{ width: '100%', paddingHorizontal: 23 }} >
                <View style={styles.editButton}>
                    <Text style={styles.editText}>Edit Profile</Text>
                </View>
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 23, paddingTop: 16, paddingBottom: 33 }}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ChangePasswordScreen')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='lock' size={24} style={{ paddingRight: 12}} color={colors.inkDarkest} />
                            <Text>Password</Text>
                        </View>
                        <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='credit-card' size={24} style={{ paddingRight: 12}} color={colors.inkDarkest} />
                        <Text>Payment Method</Text>
                    </View>
                    <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='help-circle' size={24} style={{ paddingRight: 12}} color={colors.inkDarkest} />
                        <Text>Help</Text>
                    </View>
                    <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='file-text' size={24} style={{ paddingRight: 12}} color={colors.inkDarkest} />
                        <Text>Terms and Conditions</Text>
                    </View>
                    <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                </View>
            </View>

            <View style={{ paddingHorizontal: 23, paddingTop: 16, paddingBottom: 33 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='log-out' size={24} style={{ paddingRight: 12}} color={colors.primaryDanger} />
                        <Text>Log out</Text>
                    </View>
                    <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name='trash' size={24} style={{ paddingRight: 12}} color={colors.primaryDanger} />
                        <Text>Delete Account</Text>
                    </View>
                    <Feather name='chevron-right' size={24} color={colors.inkDarkest} />
                </View>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        paddingTop: Device.osName === 'Android' ? StatusBar.currentHeight : 55,
        backgroundColor: colors.white,
    },
    editButton: {
        width: '100%',
        alignItems: 'center',
        padding: 16,
        marginTop: 18,
        backgroundColor: colors.primaryLightest,
        borderRadius: 48
    },
    editText: {
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
        justifyContent: 'center',
    },
})

export default ProfileScreen;
