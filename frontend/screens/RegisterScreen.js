import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    ActivityIndicator,
  } from 'react-native';

import React, {useState} from 'react';
import Eye from '../assets/eye.png';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';
import registerLogo from '../assets/register.png';
const widthScreen = Dimensions.get('window').width;

const RegisterScreen = ({navigation}) =>  {
    const [visibleEntry, setVisibleEntry] = useState(true);
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <View style={styles.container}>
           
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 120}}>
            <Image source={registerLogo} style={{width: 300, height: 300}} />
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
                <Pressable style={{backgroundColor:'#FFF'}} onPress={() => {}}>
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
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // form
    formContainer: {
      gap: 20,
    },
    textInput: {
        height: 50,
      borderWidth: 1,
      borderColor: '#F1F1FA',
      paddingHorizontal: 20,
      borderRadius: 20,
      fontFamily: 'Inter-Medium',
      color: '#000',
    },
    inputPasswordContainer: {
      borderWidth: 1,
      borderColor: '#F1F1FA',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 20,
    },
    inputPassword: {
        height: 50,
      fontFamily: 'Inter-Medium',
      width: '100%',
      color: '#000',
    },
    eye: {
      width: 20,
      height: 15,
    },
    checked: {
      width: 60,
      height: 60,
    },
    signupBtn: {
      backgroundColor: '#7F3DFF',
      width: widthScreen - 45,
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