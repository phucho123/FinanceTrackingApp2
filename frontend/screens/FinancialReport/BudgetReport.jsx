import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import ArrowLeftIcon from "../../assets/svg/arrow-left.svg";
import ShoppingIcon from "../../assets/svg/shopping-bag.svg";
import RecurringBillIcon from "../../assets/svg/recurring-bill.svg";
import RestaurantIcon from "../../assets/svg/restaurant.svg";
import CarIcon from "../../assets/svg/car.svg";
import SalaryIcon from "../../assets/svg/salary.svg";
import PlaneIcon from "../../assets/svg/plane-solid.svg";
import ShoppingBagIcon from "../../assets/svg/shopping-bag.svg";
import { primaryColor } from "../../styles/global";

import axios from "axios";
import { apiBaseUrl } from "../../config";
import { GlobalContext } from "../../context/GlobalContext";

export default function BudgetReport({ route, navigation }) {
    const [budgetList, setBudgetList] = useState();

    const { user, setLoading } = useContext(GlobalContext);

    const getBudgetList = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${apiBaseUrl}/budgets?userId=${user._id}`);
            if (response.status === 200) {
                setBudgetList(response.data);
                setLoading(false);
            } else {
                console.log("Error:", response.data.message);
                setError(response.data.message || "Get list of budgets failed");
            }
        } catch (error) {
            console.log("Error details:", error.response ? error.response.data : error.message);
            setLoading(false);
            setError(error.response ? error.response.data.message : "An error occurred. Please try again.");
        }
    };

    useEffect(() => {
        getBudgetList();
    }, []);

    const renderIcon = (categoryName) => {
        switch (categoryName) {
            case "Shopping":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#FCEED4" }}>
                        <ShoppingBagIcon width={24} height={24} fill="orange" />
                    </View>
                );
            case "Subscription":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#EEE5FF" }}>
                        <RecurringBillIcon width={24} height={24} fill="#7F3DFF" />
                    </View>
                );
            case "Food":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#FDD5D7" }}>
                        <RestaurantIcon width={24} height={24} fill="#FD3C4A" />
                    </View>
                );
            case "Salary":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#CFFAEA" }}>
                        <SalaryIcon width={24} height={24} />
                    </View>
                );
            case "Transporting":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#BDDCFF" }}>
                        <CarIcon width={24} height={24} fill="#0077FF" />
                    </View>
                );

            case "Travel":
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#85caed" }}>
                        <PlaneIcon width={24} height={24} fill="#0077FF" />
                    </View>
                );
            default:
                return (
                    <View style={{ ...styles.iconContainer, backgroundColor: "#ccc" }}>
                        <Text>{categoryName[0]}</Text>
                    </View>
                );
        }
    };

    const renderContent = (budgetList) => {
        const exceedBudgets = budgetList.filter((budget) => {
            const { spendMoney, maxMoney } = budget;
            return spendMoney > maxMoney;
        });

        const count = exceedBudgets.length;
        const total = budgetList.length;

        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("QuoteReport")}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {count === 0 ? (
                        <Text>Everything is alright</Text>
                    ) : (
                        <>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 32,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    width: 340,
                                }}
                            >{`${count} of ${total} Budget exceed the limit`}</Text>
                            <View style={{ marginTop: 24 }}>
                                {exceedBudgets.map((budget) => {
                                    const { categoryName } = budget;
                                    return (
                                        <View style={styles.categoryContainer}>
                                            {renderIcon(categoryName)}
                                            <Text style={styles.categoryName}>{categoryName}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </>
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={styles.barItem}></View>
                <View style={styles.barItem}></View>
                <View style={[styles.barItem, styles.activeBarItem]}></View>
                <View style={styles.barItem}></View>
            </View>

            <View style={styles.timeContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeTransaction")}>
                    <ArrowLeftIcon width={32} height={32} fill="#fff" />
                </TouchableOpacity>
                <Text
                    style={{
                        color: "rgba(255,255, 255, 0.7)",
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    This Month
                </Text>
                <Text style={{ color: primaryColor }}>abcxyz</Text>
            </View>

            {budgetList && renderContent(budgetList)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
        paddingTop: 32,
    },
    barContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        marginHorizontal: 13,
    },
    barItem: {
        height: 4,
        width: 85,
        backgroundColor: "rgba(255, 255, 255, 0.24)",
        borderRadius: 6,
    },
    activeBarItem: {
        backgroundColor: "#fff",
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 32,
    },
    moneyTotal: {
        color: "#ffffff",
        fontSize: 64,
        fontWeight: "bold",
        marginTop: 16,
    },
    cartContainer: {
        backgroundColor: "#fff",
        borderRadius: 24,
        marginHorizontal: 16,
        alignItems: "center",
    },
    mainText: {
        color: "#0d0e0f",
        fontSize: 24,
        fontWeight: "bold",
        width: 200,
    },
    categoryContainer: {
        backgroundColor: "#fbfbfb",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#E3E5E5",
        marginBottom: 10,
        marginTop: 5,
    },
    iconContainer: {
        padding: 5,
        borderRadius: 10,
    },
    categoryName: {
        color: "#0d0e0f",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    biggestMoney: {
        color: "#0d0e0f",
        fontSize: 36,
        fontWeight: "bold",
    },
});
