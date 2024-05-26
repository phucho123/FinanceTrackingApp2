import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    ActivityIndicator,Alert
  } from 'react-native';
  import axios from 'axios';

import React, {useState} from 'react';
import Eye from '../assets/eye.png';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import { apiBaseUrl } from '../config';

const widthScreen = Dimensions.get('window').width

const RegisterScreen = ({navigation}) =>  {
    const [visibleEntry, setVisibleEntry] = useState(true);
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSignUp = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`http://${apiBaseUrl}:3000/auth/signup`, {
                name: name,
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setLoading(false);
            if (response.status === 201) { // 201 for created
                Alert.alert('Registration Successful', 'You can now log in.', [
                    { text: 'OK', onPress: () => navigation.navigate('LoginScreen') }
                ]);
            } else {
                console.log("Error:", response.data.message);
                setError(response.data.message || 'Registration failed');
            }
        } catch (error) {
            console.log("Error details:", error.response ? error.response.data : error.message);
            setLoading(false);
            setError(error.response ? error.response.data.message : 'An error occurred. Please try again.');
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{fontFamily:'Inter-SemiBold'}}>
                    Sign Up
                </Text>
            </View>

            {/* form */}
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor="#91919F"
                    value={name}
                    onChangeText={value => setName(value)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#91919F"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        placeholderTextColor="#91919F"
                        secureTextEntry={visibleEntry}
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <Pressable onPress={() => setVisibleEntry(!visibleEntry)}>
                        <Image source={Eye} style={styles.eye}/>
                    </Pressable>
                </View>
                <View
                    style = {{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        paddingRight: 30
                    }}
                >
                    <CheckBox
                        value={checked}
                        onValueChange={setChecked}
                        tintColors={{ true: '#7F3DFF' }}
                    />
                    <Text style={{ color: '#000', fontFamily: 'Inter-Medium' }}>
                        By signing up, you agre to the{' '}
                        <Text style={{ color:'#7F3DFF', fontFamily: 'Inter-Medium' }}>
                            Terms of Service and Privacy Policy
                        </Text>
                    </Text>
                </View>
                <Pressable style={{backgroundColor:'#FFF'}} onPress={handleSignUp}>
                    <Text style={styles.signupBtn}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            'Sign Up'
                        )}
                    </Text>
                    {error && (
                        <Text style={{
                            color: '#FD3C4A',
                            fontFamily: 'Inter-Medium',
                            textAlign: 'center',
                            marginTop: 10,
                        }}>
                            {error}
                        </Text>
                    )}
                </Pressable>
                <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                        style={{
                          color: '#91919F',
                          fontFamily: 'Inter-Medium',
                          textAlign: 'center',
                          alignItems: 'center',
                        }}>
                        Already have an account?{' '}
                        <Text
                          onPress={() => navigation.navigate('LoginScreen')}
                          style={{ color: '#7F3DFF', fontFamily: 'Inter-SemiBold' }}>
                          Login
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 25,
      backgroundColor: '#FCFCFC',
      flex: 1,
    },
    //header
    headerContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // form
    formContainer: {
      marginTop: 120,
      gap: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#F1F1FA',
      paddingHorizontal: 20,
      borderRadius: 10,
      fontFamily: 'Inter-Medium',
      color: '#000',
    },
    inputPasswordContainer: {
      borderWidth: 1,
      borderColor: '#F1F1FA',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 20,
    },
    inputPassword: {
      fontFamily: 'Inter-Medium',
      width: '100%',
      color: '#000',
    },
    eye: {
      width: 27,
      height: 20,
    },
    checked: {
      width: 60,
      height: 60,
    },
    signupBtn: {
      backgroundColor: '#7F3DFF',
      width: widthScreen - 35,
      textAlign: 'center',
      color: '#FCFCFC',
      fontFamily: 'Inter-SemiBold',
      fontSize: 18,
      paddingVertical: 15,
      marginTop: 10,
      borderRadius: 10,
    },
});

export default RegisterScreen;