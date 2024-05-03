import React, { Component, useState, Easing, useRef } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity, Animated
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
// npm install @react-native-picker/picker --save
import * as Animatable from 'react-native-animatable';
// npm install react-native-animatable
// npm install react-native-reanimated react-native-gesture-handler


import avatar from '../assets/avatar.png';
import chooseMonth from '../assets/choosemonth.png';
import incomelogo from '../assets/incomelogo.png'
import notilogo from '../assets/notilogo.png';
import exspenseslogo from '../assets/exspenses.png';
import chart from '../assets/chart.png';
import shoppingicon from '../assets/shoppingicon.png';
import subcriptionicon from '../assets/subcriptionicon.png';
import homeicon from '../assets/homeicon.png';
import transactionicon from '../assets/transactionicon.png';
import quickericon from '../assets/quickericon.png';
import budgeticon from '../assets/budgeticon.png';
import profileicon from '../assets/profileicon.png';
import quickiconexpen from '../assets/quickiconexpen.png';
import quickicontran from '../assets/quickicontran.png'
import quickiconincome from '../assets/quickiconincome.png'



var { height } = Dimensions.get('window');
var box_count = 2;
var box_height = height / box_count;
const widthScreen = Dimensions.get('window').width;


const HomeScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('option');
    const [isExpanded, setIsExpanded] = useState(false);
    const rotation = new Animated.Value(0); // Khởi tạo giá trị ban đầu của rotation

    const handlePress = () => {
        const toValue2 = isExpanded ? -45 : 45;

        Animated.timing(rotation, {
            toValue: toValue2,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.box1]}>
                <Image
                    source={avatar}
                    style={styles.avatar}
                />
                <View style={styles.center}>
                    <View style={styles.chooseMonth}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="January" value="January" />
                            <Picker.Item label="February" value="February " />
                            <Picker.Item label="March" value="March" />
                            <Picker.Item label="April" value="April" />
                            <Picker.Item label="May" value="May" />
                            <Picker.Item label="June" value="June" />
                            <Picker.Item label="July" value="July" />
                            <Picker.Item label="August" value="August" />
                            <Picker.Item label="September" value="September" />
                            <Picker.Item label="October" value="October" />
                            <Picker.Item label="November" value="November" />
                            <Picker.Item label="December" value="December" />
                        </Picker>
                    </View>
                </View>
                <Image
                    source={notilogo}
                    style={styles.notilogo}
                />
                <Text style={styles.text}>
                    Account Ballace
                </Text>
                <Text style={styles.text1}>
                    $5500
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={styles.income}>
                        <Image
                            source={incomelogo}
                            resizeMode="cover"
                            style={[styles.incomelogo]}
                        />
                        <Text style={{ marginTop: -45, marginLeft: 70, fontFamily: 'Inter-Medium', color: '#FCFCFC', fontSize: 14 }}>
                            Income
                        </Text>
                        <Text style={{ marginLeft: 70, fontFamily: 'Inter-SemiBold', color: '#FCFCFC', fontSize: 22 }}>
                            $5000
                        </Text>
                    </View>
                    <View style={styles.expenses}>
                        <Image
                            source={exspenseslogo}
                            resizeMode="cover"
                            style={[styles.incomelogo]}
                        />
                        <Text style={{ marginTop: -45, marginLeft: 70, fontFamily: 'Inter-Medium', color: '#FCFCFC', fontSize: 14 }}>
                            Expenses
                        </Text>
                        <Text style={{ marginLeft: 70, fontFamily: 'Inter-SemiBold', color: '#FCFCFC', fontSize: 22 }}>
                            $1200
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.box2]}>
                <Text style={{ marginTop: 10, marginLeft: 20, fontFamily: 'Inter-SemiBold', color: '#0D0E0F', fontSize: 18 }}>
                    Spend Frequency
                </Text>
                <Image
                    source={chart}
                    style={{ width: widthScreen, height: 170, marginRight: 20 }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', fontFamily: 'Inter-Medium' }}>
                    <View style={{ height: 34, width: 86, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center', marginTop: 6 }}> Today </Text>
                    </View>
                    <View style={{ height: 34, width: 86, backgroundColor: 'white', fontFamily: 'Inter-Medium' }}>
                        <Text style={{ textAlign: 'center', marginTop: 6 }}> Week </Text>
                    </View>
                    <View style={{ height: 34, width: 86, backgroundColor: 'white', fontFamily: 'Inter-Medium' }}>
                        <Text style={{ textAlign: 'center', marginTop: 6 }}> Month </Text>
                    </View>
                    <View style={{ height: 34, width: 86, backgroundColor: 'white', fontFamily: 'Inter-Medium' }}>
                        <Text style={{ textAlign: 'center', marginTop: 6 }}> Year </Text>
                    </View>
                </View>
                <Text style={{ marginTop: 10, marginLeft: 20, fontFamily: 'Inter-SemiBold', color: '#0D0E0F', fontSize: 18 }}>
                    Recent Transaction
                </Text>
                <Text style={styles.buttonseeall}>
                    See all
                </Text>
                <View>
                    <Image source={shoppingicon}
                        style={{
                            height: 60,
                            width: 60,
                            marginLeft: 40,
                            marginTop: 10,
                        }}>
                    </Image>
                    <Text style={styles.recenttrantext}>
                        Shopping
                    </Text>
                    <Text style={styles.recenttrantext1}>
                        Buy some grocery
                    </Text>
                    <Text style={styles.recenttrantext2}>
                        -$120
                    </Text>
                    <Text style={styles.recenttrantext3}>
                        10:00 AM
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image source={subcriptionicon}
                        style={{
                            height: 60,
                            width: 60,
                            marginLeft: 40,
                            marginTop: 10,
                        }}>
                    </Image>

                    <Text style={styles.recenttrantext}>
                        Subcription
                    </Text>
                    <Text style={styles.recenttrantext1}>
                        Disney + Annual...
                    </Text>
                    <Text style={styles.recenttrantext2}>
                        -$20
                    </Text>
                    <Text style={styles.recenttrantext3}>
                        08:00 PM
                    </Text>
                    {isExpanded && (
                        <View>
                        <Image source={quickiconincome}
                            style={{
                                height: 54,
                                width: 54,
                                marginLeft: 100,
                                marginTop: -40,
                            }} />
                            <Image source={quickiconexpen}
                            style={{
                                height: 54,
                                width: 54,
                                marginLeft: widthScreen-54-100,
                                marginTop: -55,

                            }} />
                            <Image source={quickicontran}
                            style={{
                                height: 54,
                                width: 54,
                                marginLeft: widthScreen/2-27,
                                marginTop: -100,

                            }} />
                        </View>

                    )}
                </View>
            </View>
            <View style={{
                height: 73,
                width: widthScreen,
                backgroundColor: "#FCFCFC",
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ height: 50, width: 50 }} >
                        <Image source={homeicon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 22,
                                marginTop: 10
                            }}>

                        </Image>
                        <Text style={{ marginLeft: 20, fontSize: 10, fontFamily: "Inter-Medium" }}>
                            Home
                        </Text>
                    </View>
                    <View style={{ height: 50, width: 50 }} >
                        <Image source={transactionicon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 10,
                                marginTop: 10
                            }}>

                        </Image>
                        <Text style={{ marginLeft: -5, fontSize: 10, fontFamily: "Inter-Medium" }}>
                            Transaction
                        </Text>
                    </View>



                    <TouchableOpacity onPress={handlePress}>
                        <Animated.View style={[styles.quickericon, {
                            transform: [{
                                rotate: rotation.interpolate({
                                    inputRange: [0, 45],
                                    outputRange: ['0deg', '45deg']
                                })
                            }]
                        }]}>
                            <Image
                                source={quickericon} // Đường dẫn tới hình ảnh của bạn
                                style={styles.quickericon2}
                            />

                        </Animated.View>
                    </TouchableOpacity>

                    <View style={{ height: 50, width: 50 }} >
                        <Image source={budgeticon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 10,
                                marginTop: 10
                            }}>

                        </Image>
                        <Text style={{ marginLeft: 7, fontSize: 10, fontFamily: "Inter-Medium" }}>
                            Budget
                        </Text>
                    </View>
                    <View style={{ height: 50, width: 50 }} >
                        <Image source={profileicon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 7,
                                marginTop: 10
                            }}>

                        </Image>
                        <Text style={{ marginLeft: 4, fontSize: 10, fontFamily: "Inter-Medium" }}>
                            Profile
                        </Text>
                    </View>
                </View>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    quickericon: {
        width: 57, // Kích thước của hình ảnh
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'center center',
        marginTop: -15,
        position: 'relative',
    },

    quickericon2: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    recenttrantext: {
        marginTop: -60,
        marginLeft: 112,
        fontFamily: 'Inter-Medium',
        fontSize: 16
    },
    recenttrantext1: {
        marginTop: 15,
        marginLeft: 112,
        fontFamily: 'Inter-Medium',
        fontSize: 13
    },
    recenttrantext2: {
        marginTop: -50,
        marginLeft: widthScreen - 80,
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        color: '#FD3C4A'
    },
    recenttrantext3: {
        marginTop: 10,
        marginLeft: widthScreen - 92,
        fontFamily: 'Inter-Medium',
        fontSize: 13,
    },
    buttonseeall: {
        height: 32,
        width: 78,
        marginTop: -27,
        marginLeft: widthScreen - 100,
        backgroundColor: '#EEE5FF',
        fontFamily: 'Inter-Medium',
        color: '#7F3DFF',
        fontSize: 14,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: "center",
    },
    box1: {
        height: 312,
        backgroundColor: '#F8EDD8',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    avatar: {
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 54
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseMonth: {
        justifyContent: 'center',
        width: 160,
        height: 40,
        borderRadius: 100,
        borderColor: '#afeeee',
        borderWidth: 0.5,
        marginTop: -40,
    },
    notilogo: {
        width: 32,
        height: 32,
        marginLeft: widthScreen - 47,
        marginTop: -40
    },
    text: {
        fontSize: 14,
        marginTop: 15,
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
        color: '#91919F',
    },
    text1: {
        fontSize: 40,
        marginTop: 10,
        fontFamily: 'Inter-SemiBold',
        textAlign: 'center',
        color: '#161719',
    },
    income: {
        marginTop: 30,
        height: 80,
        width: 164,
        backgroundColor: '#00A86B',
        borderRadius: 30,

    },
    expenses: {
        marginTop: 30,
        height: 80,
        width: 164,
        backgroundColor: '#FD3C4A',
        borderRadius: 30
    },
    incomelogo: {
        height: 40,
        width: 40,
        backgroundColor: '#f5fffa',
        marginLeft: 16,
        marginTop: 20,
        borderRadius: 10,
    },
    box2: {
        backgroundColor: '#ffffff',
        height: height - 312 - 40,
    },

});
export default HomeScreen;
