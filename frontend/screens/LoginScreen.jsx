import {
    Dimensions,
    ActivityIndicator,
    Image,
    Pressable,
    Text,
    TextInput,
    View,
    StyleSheet,
    Alert,
} from "react-native";
import { apiBaseUrl } from "../config";

import React, { useState } from "react";
import axios from "axios";

import EyeIcon from "../assets/svg/eye-regular.svg";
import SlashEyeIcon from "../assets/svg/eye-slash-regular.svg";
import { primaryColor } from "../styles/global";
import MainButton from "../components/button/MainButton";

const widthScreen = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
    const [visibleEntry, setVisibleEntry] = useState(false);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            console.log("Email:", email);
            console.log("Password:", password);

            const response = await axios.post(
                `${apiBaseUrl}/auth/login`,
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setLoading(false);
            if (response.status === 201) {
                // 201 for created
                console.log("sfds");
                Alert.alert("Login Successful", `Token: ${response.data.token}`);
                navigation.navigate("HomeScreen");
            } else {
                console.log("Error:", response.data.message);
                setError(response.data.message || "Login failed");
            }
        } catch (error) {
            console.log("Error details:", error.response ? error.response.data : error.message);
            setLoading(false);
            setError(error.response ? error.response.data.message : "An error occurred. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#91919F"
                    value={email}
                    onChangeText={(value) => setEmail(value.trim())}
                />
                <View style={styles.inputPasswordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        placeholderTextColor="#91919F"
                        value={password}
                        secureTextEntry={!visibleEntry}
                        onChangeText={(value) => setPassword(value.trim())}
                    />
                    <Pressable onPress={() => setVisibleEntry(!visibleEntry)}>
                        {!visibleEntry ? (
                            <EyeIcon width={24} height={24} fill="#91919F" />
                        ) : (
                            <SlashEyeIcon width={24} height={24} fill="#91919F" />
                        )}
                    </Pressable>
                </View>

                <MainButton
                    buttonSize="large"
                    buttonType="primary"
                    textType="primaryText"
                    title="Login"
                    pressHandler={handleSubmit}
                />

                <Text style={{ textAlign: "center", color: primaryColor, fontWeight: "bold", fontSize: 16 }}>
                    Forgot Password?
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "#91919F",
                            fontFamily: "Inter-Medium",
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >
                        Don't have an account yet?{" "}
                        <Text
                            onPress={() => navigation.navigate("RegisterScreen")}
                            style={{ textDecorationLine: "underline", color: "#7F3DFF", fontFamily: "Inter-SemiBold" }}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
    },

    // header
    headerContainer: {
        marginTop: 140,
        flexDirection: "row",
        justifyContent: "center",
    },
    backButton: {
        width: 50,
        height: 30,
    },
    headerTitle: {
        fontFamily: "Inter-SemiBold",
        color: "#000",
        fontSize: 18,
        marginTop: 140,
    },

    // form
    formContainer: {
        marginTop: 90,
        gap: 20,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "#F1F1FA",
        paddingHorizontal: 20,
        borderRadius: 20,
        fontFamily: "Inter-Medium",
        color: "#000",
    },
    inputPasswordContainer: {
        height: 50,
        borderWidth: 1,
        borderColor: "#F1F1FA",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
    },
    inputPassword: {
        fontFamily: "Inter-Medium",
        width: "100%",
        color: "#000",
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
        backgroundColor: "#7F3DFF",
        width: widthScreen - 35,
        textAlign: "center",
        color: "#FCFCFC",
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        paddingVertical: 15,
        marginTop: 10,
        borderRadius: 10,
    },
});

export default LoginScreen;
