import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const colors = {
    shopping: "#FCAC12",
    food: "#FD3C4A",
    subscription: '#7F3DFF'
}
const CategoryCard = ({ title, prices, percent, type }) => {
    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4, borderWidth: 1, padding: 4, borderRadius: 25, borderColor: "#F1F1FA" }}>
                    <View style={[styles.circle, { backgroundColor: `${colors[title.toLowerCase()]}` }]}></View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={[styles.prices, type == "income" && { color: "green" }]}>{prices}</Text>
            </View>
            <View style={{ width: "100%" }}>
                <View style={styles.bar}>
                    <View style={[styles.fillBar, { width: `${percent}%`, backgroundColor: `${colors[title.toLowerCase()]}` }]}></View>
                </View>
            </View>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FCFCFC",
        padding: 16,
        borderRadius: 15
    },

    block1: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4
    },
    title: {
        fontWeight: "bold"
    },
    prices: {
        color: "red",
        fontSize: 24
    },
    bar: {
        backgroundColor: "gray",
        width: "100%",
        height: 10,
        borderRadius: 25
    },
    fillBar: {
        backgroundColor: "red",
        height: 10,
        borderRadius: 25
    },
    circle: {
        backgroundColor: "red",
        height: 16,
        width: 16,
        borderRadius: 25
    }
})