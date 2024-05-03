import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"

const colors = {
    shopping: "#FEEED0",
    food: "#FDD5D7",
    subscription: '#EEE5FF'
}
const TransactionCard = ({ title, description, prices, time, type }) => {
    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <View style={{
                    backgroundColor: colors[title.toLowerCase()],
                    padding: 8,
                    borderRadius: 15
                }}>
                    {title == "Shopping" ? <AntDesign name="shoppingcart" size={32} color="#FCAC12" /> :
                        title == "Food" ? <MaterialIcons name="restaurant" size={32} color="#FD3C4A" /> :
                            title == "Subscription" ? <Octicons name="checklist" size={32} color="#7F3DFF" /> : null}
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.prices, type == "income" && { color: "green" }]}>{prices}</Text>
                <Text>{time}</Text>
            </View>
        </View >
    )
}

export default TransactionCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FCFCFC",
        padding: 16,
        borderRadius: 15
    },

    block1: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center"
    },
    title: {
        fontWeight: "bold"
    },
    prices: {
        color: "red"
    }
})