import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text, Platform, StatusBar, StyleSheet } from "react-native";

import MainButton from "../../components/button/MainButton";

import TrashIcon from "../../assets/svg/trash.svg";
import ArrowLefIcon from "../../assets/svg/arrow-left.svg";
import WarningIcon from "../../assets/svg/warning.svg";

export default function DetailBudget({ navigation }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <View style={styles.container}>
            {/* Delete Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={openModal}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                    setModalVisible((prev) => !prev);
                }}
            >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
                    <View
                        style={{
                            padding: 16,
                            borderTopLeftRadius: 24,
                            borderTopRightRadius: 24,
                            backgroundColor: "#fff",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 10,
                                fontFamily: "Inter-SemiBold",
                                textAlign: "center",
                            }}
                        >
                            Remove this budget
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                marginBottom: 24,
                                fontFamily: "Inter-Medium",
                                color: "#91919F",
                                textAlign: "center",
                            }}
                        >
                            Are you sure do you wanna remove this budget?
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <MainButton
                                buttonSize="small"
                                buttonType="secondary"
                                textType="secondaryText"
                                title="No"
                                pressHandler={() => {
                                    setOpenModal((prev) => !prev);
                                }}
                            />
                            <MainButton
                                buttonSize="small"
                                buttonType="primary"
                                textType="primaryText"
                                title="Yes"
                                pressHandler={() => {
                                    console.log("This budget was deleted successfully!!!");
                                    setOpenModal((prev) => !prev);
                                    navigation.navigate("HomeBudget");
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeBudget")}>
                        <ArrowLefIcon fill="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Detail Budget</Text>
                    <TouchableOpacity onPress={() => setOpenModal((prev) => !prev)}>
                        <TrashIcon fill="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.categoryName}>Shopping</Text>
                    <View style={{ alignItems: "center", marginVertical: 24 }}>
                        <Text style={{ fontFamily: "Inter-Bold", fontSize: 24, color: "#000" }}>Remaining</Text>
                        <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 64, color: "#000" }}>$0</Text>
                    </View>
                    <View style={styles.progressBar}></View>
                    <View style={styles.warningContainer}>
                        <WarningIcon fill="#fff" />
                        <Text style={styles.warningText}>You've exceed the limit</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <MainButton
                    buttonSize="large"
                    buttonType="primary"
                    textType="primaryText"
                    pressHandler={() => {
                        navigation.navigate("EditBudget");
                    }}
                    title="Edit"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        color: "#000",
        fontFamily: "Inter-Bold",
    },
    content: {
        alignItems: "center",
        marginTop: 32,
        paddingHorizontal: 10,
    },
    categoryName: {
        width: 116,
        height: 54,
        textAlign: "center",
        lineHeight: 54,
        backgroundColor: "#FCEED4",
        color: "#0D0E0F",
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#E3E5E5",
    },
    progressBar: {
        height: 15,
        width: "100%",
        backgroundColor: "#FCAC12",
        borderRadius: 16,
    },
    warningContainer: {
        backgroundColor: "#FD3C4A",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 24,
        marginTop: 24,
    },
    warningText: {
        color: "#fff",
        fontFamily: "Inter-Medium",
        fontSize: 14,
        marginLeft: 5,
    },
    buttonContainer: {
        alignItems: "center",
        marginBottom: 16,
    },
});
