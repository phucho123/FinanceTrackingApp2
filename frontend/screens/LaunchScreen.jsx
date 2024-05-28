import { View, Image, Text, StyleSheet } from "react-native";
import { primaryColor } from "../styles/global";
import { useEffect } from "react";

export default function LaunchScreen({ navigation }) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate("HomeOnboard");
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/pig-logo.png")} />
            <Text style={styles.text}>fintrack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primaryColor,
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 24,
        letterSpacing: 1.5,
        marginTop: 16,
    },
});
