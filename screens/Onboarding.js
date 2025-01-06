import React, { useState, useEffect } from 'react';
import { validateName, validateEmail } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoadingScreen from './Loading';

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

export default function Onboarding({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [name, onChangeName] = useState('');
    const [validInfo, setValidInfo] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const saveInfo = async () => {
        try {
            setIsLoading(true)
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('email', email);
        } catch (error) {
            console.error('Error saving data:', error);
        } finally{
            setIsLoading(false)
        }

    }

    useEffect(() => {
        setValidInfo(validateName(name) && validateEmail(email));
    }, [email, name]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled"
                automaticallyAdjustKeyboardInsets={true}
            >

                <Text style={styles.H1Text}>Let us get to know you</Text>
                <View style={{ paddingVertical: 30 }}>

                    <Text style={styles.regularText}>First Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={name}
                        onChangeText={onChangeName}
                        placeholder={'What do you go by'}
                        keyboardType={'default'}
                    />

                    <Text style={styles.regularText}>Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder={'How do we reach out'}
                        keyboardType={'email-address'}
                    />
                </View>

                {!validInfo && <Pressable
                    onPress={() => { }}
                    style={styles.inActiveButton}>
                    <Text style={styles.inActiveButtonText}>Next</Text>
                </Pressable>}

                {validInfo && <Pressable
                    onPress={async () => { await saveInfo(); navigation.navigate("Home"); }}
                    style={styles.activeButton}
                >
                    <Text style={styles.activeButtonText}>Next</Text>
                </Pressable>
                }

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const cream = '#ebe8df'
const green = '#4A5E57'
const darkerGreen = '#384742'
const lightGrey = '#c2bebe'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cream,
    },
    scrollViewContent: {
        // alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1  // This ensures content can grow and be scrollable
    },
    H1Text: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'MarkaziText-Regular',
    },
    regularText: {
        fontSize: 24,
        fontFamily: 'MarkaziText-Regular',
        color: darkerGreen,
        paddingLeft: 20,
        textAlign: 'left',
    },
    inputBox: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'grey',
        backgroundColor: '#EFEFEE',
    },
    activeButton: {
        fontSize: 22,
        padding: 10,
        paddingTop: 10,
        marginVertical: 25,
        margin: 100,
        backgroundColor: green,
        borderColor: darkerGreen,
        borderWidth: 2,
        borderRadius: 50,
    },
    activeButtonText: {
        color: cream,
        textAlign: 'center',
        fontSize: 25,
    },
    inActiveButton: {
        fontSize: 22,
        padding: 10,
        paddingTop: 10,
        marginVertical: 25,
        margin: 100,
        backgroundColor: lightGrey,
        borderColor: lightGrey,
        borderWidth: 2,
        borderRadius: 50,
    },
    inActiveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
});
