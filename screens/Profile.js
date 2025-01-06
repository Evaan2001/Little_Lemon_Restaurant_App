import React, { useState, useEffect, useContext } from 'react';
import { validateName, validateEmail } from '../utils';
import { Context } from '../App';

import {
    Platform,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    KeyboardAvoidingView
} from 'react-native';

export default function Profile({ route, navigation }) {
    const { userData, setUserData } = React.useContext(Context);

    const handleLogout = async () => {
        await AsyncStorage.clear();
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text>Profile Screen for {userData.name} at {userData.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})