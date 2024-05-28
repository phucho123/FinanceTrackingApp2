import React, { Component, useState, Easing, useRef } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform,
    StatusBar,
    Modal,
    FlatList,
    ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
// npm install react-native-animatable
// npm install react-native-reanimated react-native-gesture-handler

import avatarImage from "../assets/images/avatar.jpg";
import chartImage from "../assets/images/chart.png";

import ShoppingBagIcon from "../assets/svg/shopping-bag.svg";
import ArrowDownIcon from "../assets/svg/arrow-down-2.svg";
import NotificationIcon from "../assets/svg/notification.svg";
import IncomeIcon from "../assets/svg/income.svg";
import ExpenseIcon from "../assets/svg/expense.svg";
import RecurringBillIcon from "../assets/svg/recurring-bill.svg";
import HomeIcon from "../assets/svg/home.svg";
import RestaurantIcon from "../assets/svg/restaurant.svg";

import { primaryColor } from "../styles/global";

var { height } = Dimensions.get("window");
var box_count = 2;
var box_height = height / box_count;
const widthScreen = Dimensions.get("window").width;

const monthList = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
];

const timeList = ["Today", "Week", "Month", "Year"];

function InOutCart({ color, iconComponent, title, money }) {
    return (
        <View
            style={{
                backgroundColor: color,
                flexDirection: "row",
                padding: 16,
                borderRadius: 32,
                alignItems: "center",
            }}
        >
            <View style={{ backgroundColor: "#fff", padding: 12, borderRadius: 16 }}>{iconComponent}</View>
            <View style={{ marginLeft: 10 }}>
                <Text
                    style={{
                        fontFamily: "Inter-Medium",
                        color: "#FCFCFC",
                        fontSize: 14,
                    }}
                >
                    {title}
                </Text>
                <Text style={{ fontFamily: "Inter-SemiBold", color: "#FCFCFC", fontSize: 22 }}>${money}</Text>
            </View>
        </View>
    );
}

export default function HomeScreen({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("Random");
    const [isExpanded, setIsExpanded] = useState(false);
    const [monthModalOpen, setMonthModalOpen] = useState(false);
    const rotation = new Animated.Value(0); // Khởi tạo giá trị ban đầu của rotation
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(timeList[0]);

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
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.16)",
                    }}
                >
                    <View style={{ backgroundColor: "#fff" }}>
                        {monthList.map((monthItem, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible((prev) => !prev);
                                        setSelectedValue(monthItem.name);
                                    }}
                                    key={index}
                                >
                                    <Text
                                        style={{
                                            width: 300,
                                            paddingVertical: 10,
                                            textAlign: "center",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        {monthItem.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </Modal>
            <View style={[styles.box1]}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View
                        style={{
                            padding: 3,
                            backgroundColor: "#fff",
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: primaryColor,
                        }}
                    >
                        <Image source={avatarImage} style={styles.avatar} />
                    </View>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderRadius: 16,
                            flexDirection: "row",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#F1F1FA",
                        }}
                        onPress={() => setModalVisible((prev) => !prev)}
                    >
                        <ArrowDownIcon fill={primaryColor} />
                        <Text style={{ fontSize: 14, fontFamily: "Inter-Medium", marginLeft: 2 }}>{selectedValue}</Text>
                    </TouchableOpacity>
                    <NotificationIcon fill={primaryColor} />
                </View>
                <Text style={styles.text}>Account Ballace</Text>
                <Text style={styles.text1}>$5500</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: 30,
                    }}
                >
                    <InOutCart
                        title="Income"
                        color="#00A86B"
                        iconComponent={<IncomeIcon fill="#00A86B" />}
                        money={5000}
                    />
                    <InOutCart
                        title="Expenses"
                        color="#FD3C4A"
                        iconComponent={<ExpenseIcon fill="#FD3C4A" />}
                        money={1200}
                    />
                </View>
            </View>
            <View style={[styles.box2]}>
                <Text
                    style={{
                        marginTop: 10,
                        marginLeft: 20,
                        fontFamily: "Inter-SemiBold",
                        color: "#0D0E0F",
                        fontSize: 18,
                    }}
                >
                    Spend Frequency
                </Text>
                {/* <Image source={chartImage} style={{ width: "100%", height: 170, marginTop: 20 }} /> */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        fontFamily: "Inter-Medium",
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: "#FCFCFC",
                        marginHorizontal: 16,
                    }}
                >
                    {timeList.map((time, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setSelectedTime(time)}
                                key={index}
                                style={
                                    selectedTime === time
                                        ? [styles.timeContainer, styles.selectedTimeContainer]
                                        : styles.timeContainer
                                }
                            >
                                <Text
                                    style={
                                        selectedTime === time
                                            ? [styles.timeText, styles.selectedTimeText]
                                            : styles.timeText
                                    }
                                >
                                    {time}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginVertical: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#292B2D",
                                fontFamily: "Inter-SemiBold",
                            }}
                        >
                            Recent Transaction
                        </Text>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 5,
                                paddingHorizontal: 15,
                                borderRadius: 32,
                                backgroundColor: "#EEE5FF",
                            }}
                        >
                            <Text style={{ fontSize: 14, fontFamily: "Inter-Medium", color: primaryColor }}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ marginHorizontal: 16, marginBottom: 50 }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#FCFCFC",
                            padding: 16,
                            borderRadius: 24,
                            marginBottom: 10,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ padding: 10, borderRadius: 16, backgroundColor: "#FCEED4" }}>
                                <ShoppingBagIcon width={40} height={40} fill="orange" />
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Inter-Medium" }}>Shopping</Text>
                                <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>
                                    Buy some grocery
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontFamily: "Inter-SemiBold", color: "#FD3C4A" }}>- $120</Text>
                            <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>10:00 AM</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#FCFCFC",
                            padding: 16,
                            borderRadius: 24,
                            marginBottom: 10,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ padding: 10, borderRadius: 16, backgroundColor: "#EEE5FF" }}>
                                <RecurringBillIcon width={40} height={40} fill={primaryColor} />
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Inter-Medium" }}>Subscription</Text>
                                <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>
                                    Disney+ Annual..
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontFamily: "Inter-SemiBold", color: "#FD3C4A" }}>- $80</Text>
                            <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>03:30 AM</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "#FCFCFC",
                            padding: 16,
                            borderRadius: 24,
                            marginBottom: 10,
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ padding: 10, borderRadius: 16, backgroundColor: "#FDD5D7" }}>
                                <RestaurantIcon width={40} height={40} fill="#FD3C4A" />
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Inter-Medium" }}>Food</Text>
                                <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>
                                    Buy a noodle
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontFamily: "Inter-SemiBold", color: "#FD3C4A" }}>- $32</Text>
                            <Text style={{ fontSize: 13, fontFamily: "Inter-Medium", color: "#91919F" }}>07:30 AM</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* <View
                style={{
                    height: 73,
                    width: widthScreen,
                    backgroundColor: "#FCFCFC",
                }}
            >
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ height: 50, width: 50 }}>
                        <HomeIcon fill="black" />
                        <Text style={{ marginLeft: 20, fontSize: 10, fontFamily: "Inter-Medium" }}>Home</Text>
                    </View>
                    <View style={{ height: 50, width: 50 }}>
                        <Image
                            source={transactionicon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 10,
                                marginTop: 10,
                            }}
                        ></Image>
                        <Text style={{ marginLeft: -5, fontSize: 10, fontFamily: "Inter-Medium" }}>Transaction</Text>
                    </View>

                    <TouchableOpacity onPress={handlePress}>
                        <Animated.View
                            style={[
                                styles.quickericon,
                                {
                                    transform: [
                                        {
                                            rotate: rotation.interpolate({
                                                inputRange: [0, 45],
                                                outputRange: ["0deg", "45deg"],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Image
                                source={quickericon} // Đường dẫn tới hình ảnh của bạn
                                style={styles.quickericon2}
                            />
                        </Animated.View>
                    </TouchableOpacity>

                    <View style={{ height: 50, width: 50 }}>
                        <Image
                            source={budgeticon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 10,
                                marginTop: 10,
                            }}
                        ></Image>
                        <Text style={{ marginLeft: 7, fontSize: 10, fontFamily: "Inter-Medium" }}>Budget</Text>
                    </View>
                    <View style={{ height: 50, width: 50 }}>
                        <Image
                            source={profileicon}
                            style={{
                                width: 24,
                                height: 24,
                                marginLeft: 7,
                                marginTop: 10,
                            }}
                        ></Image>
                        <Text style={{ marginLeft: 4, fontSize: 10, fontFamily: "Inter-Medium" }}>Profile</Text>
                    </View>
                </View>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    box1: {
        backgroundColor: "#FFF6E5",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingBottom: 16,
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight + 16,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 100,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    chooseMonth: {
        justifyContent: "center",
        width: 160,
        height: 40,
        borderRadius: 100,
        borderColor: "#afeeee",
        borderWidth: 0.5,
    },
    text: {
        fontSize: 14,
        marginTop: 15,
        fontFamily: "Inter-Medium",
        textAlign: "center",
        color: "#91919F",
    },
    text1: {
        fontSize: 40,
        marginTop: 10,
        fontFamily: "Inter-SemiBold",
        textAlign: "center",
        color: "#161719",
    },
    income: {
        marginTop: 30,
        height: 80,
        width: 164,
        backgroundColor: "#00A86B",
        borderRadius: 30,
    },
    expenses: {
        marginTop: 30,
        height: 80,
        width: 164,
        backgroundColor: "#FD3C4A",
        borderRadius: 30,
    },

    box2: {
        backgroundColor: "#ffffff",
        height: height - 312 - 40,
    },
    timeContainer: {
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 20,
        flex: 1,
    },
    selectedTimeContainer: {
        backgroundColor: "#FCEED4",
    },
    timeText: {
        fontSize: 14,
        color: "#91919F",
        fontFamily: "Inter-Medium",
        textAlign: "center",
    },
    selectedTimeText: {
        color: "#FCAC12",
        fontFamily: "Inter-Bold",
    },
});
