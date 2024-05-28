import React, { useContext, useState } from "react";
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from "react-native";

import EditIcon from "../assets/svg/edit.svg";
import LogOutIcon from "../assets/svg/logout.svg";
import MainButton from "../components/button/MainButton";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile({ navigation }) {
    const [openModal, setOpenModal] = useState(false);

    const { setUser } = useContext(GlobalContext);

    return (
        <View style={styles.container}>
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
                            Logout?
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
                            Are you sure do you wanna logout?
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
                                    console.log("Logout Successfully");
                                    setOpenModal((prev) => !prev);
                                    setUser(undefined);
                                    navigation.navigate("HomeOnboard");
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <View>
                <Image />
                <View>
                    <Text>Username</Text>
                    <Text>Hao Anh Phan</Text>
                </View>
                <EditIcon width={32} height={32} stroke="red" />
            </View>
            <View style={{ padding: 16, backgroundColor: "#fff" }}>
                <TouchableOpacity
                    onPress={() => {
                        setOpenModal(true);
                    }}
                >
                    <View style={{ flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <View style={{ backgroundColor: "#FFE2E4", padding: 10, borderRadius: 16 }}>
                            <LogOutIcon width={32} height={32} fill="red" />
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F6F6F6",
    },
});
