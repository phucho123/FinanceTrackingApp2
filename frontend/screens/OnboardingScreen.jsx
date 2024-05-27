import { Image, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

const widthScreen = Dimensions.get("window").width;

const slides = [
    {
        key: "slide1",
        title: "Get Your Money On Fleek",
        text: "Create an account so you can mange your personal expenses",
        image: require("../assets/images/onboarding1.png"),
    },
    {
        key: "slide2",
        title: "Track Every Buck With Ease",
        text: "Track your transaction easily, with categories and financial report",
        image: require("../assets/images/onboarding2.png"),
    },
    {
        key: "slide3",
        title: "Tailor Your Budget, Nail Your Goals!",
        text: "You can set your daily, monthly and weekly budget with this app",
        image: require("../assets/images/onboarding3.png"),
    },
];

const renderSlide = ({ item, navigation }) => {
    return (
        <View style={styles.slideContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            {/* <View style={styles.buttonsContainer}>
                <Pressable style={{ backgroundColor: "#FFF" }} onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.signupBtn}>Sign Up</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: "#FFF" }} onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.loginBtn}>Login</Text>
                </Pressable>
            </View> */}
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {
    return (
        <AppIntroSlider
            data={slides}
            renderItem={({ item }) => renderSlide({ item, navigation })}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            showSkipButton={true}
            renderNextButton={() => {
                return (
                    <View style={{}}>
                        <Text>Next</Text>
                    </View>
                );
            }}
            renderSkipButton={() => {
                return (
                    <View>
                        <Text>Skip</Text>
                    </View>
                );
            }}
            onSkip={() => console.log("Skipped")}
            onDone={() => console.log("Done")}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 55,
        backgroundColor: "#FCFCFC",
    },
    image: {
        width: 310,
        height: 310,
        marginBottom: 25,
    },
    title: {
        fontFamily: "Inter-Bold",
        fontSize: 32,
        textAlign: "center",
        color: "#000000",
        marginBottom: 20,
    },
    text: {
        fontFamily: "Inter-Medium",
        fontSize: 16,
        textAlign: "center",
        color: "#91919F",
    },
    buttonContainer: {
        backgroundColor: "#7F3DFF",
        borderRadius: 10,
    },
    button: {
        color: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
    },
    dotStyle: {
        backgroundColor: "#EEE5FF",
        width: 8,
        height: 8,
        borderRadius: 50,
    },
    activeDotStyle: {
        backgroundColor: "#7F3DFF",
        width: 16,
        height: 16,
        borderRadius: 50,
    },
    signupBtn: {
        backgroundColor: "#7F3DFF",
        width: widthScreen - 35,
        textAlign: "center",
        color: "#FCFCFC",
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    loginBtn: {
        backgroundColor: "#EEE5FF",
        width: widthScreen - 35,
        textAlign: "center",
        color: "#7F3DFF",
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: "column",
        backgroundColor: "#FCFCFC",
        marginTop: 30,
    },
});
