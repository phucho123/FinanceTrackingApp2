import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Select from '../../components/Select'
import ChangeTypeButton from '../../components/ChangeTypeButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { LineChart, PieChart } from 'react-native-gifted-charts';
import TransactionCard from '../../components/TransactionCard';
import CategoryCard from '../../components/CategoryCard';

const data1 = [
    { label: 'Day', value: 'day' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
];

const data2 = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }, { value: 70 }, { value: 60 }, { value: 70 }]

const data3 = [
    { label: "Transaction", value: "transaction" },
    { label: "Category", value: "category" }
]

const Transaction = () => {
    const [typeGraph, setTypeGraph] = useState("linechart");
    const [typeFinance, setTypeFinance] = useState("income");
    const [transactionOrCategory, setTransactionOrCategory] = useState("default");
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.block1}>
                    <Select data={data1} style={{ width: 100 }} />
                    <View style={styles.changeGraphTypeButton}>
                        <ChangeTypeButton
                            type1={
                                <TouchableOpacity style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "100%", alignItems: "center" }}
                                    onPress={() => setTypeGraph("linechart")}
                                >
                                    <Fontisto name="share" size={24}
                                        color={typeGraph == "linechart" ? "white" : "#7F3DFF"}
                                        onPress={() => setTypeGraph("linechart")} />
                                </TouchableOpacity>
                            }

                            type2={
                                <TouchableOpacity style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "100%", alignItems: "center" }}
                                    onPress={() => setTypeGraph("piechart")}
                                >
                                    <Fontisto name="pie-chart-1" size={24}
                                        color={typeGraph == "piechart" ? "white" : "#7F3DFF"}
                                        onPress={() => setTypeGraph("piechart")} />
                                </TouchableOpacity>
                            }

                            typeSelect={typeGraph == "linechart" ? 1 : 2}

                            style={
                                StyleSheet.create({
                                    container: {
                                        width: 100,
                                        borderRadius: 15
                                    },
                                    block: typeGraph == "linechart" ? {
                                        height: "100%",
                                        padding: 8,
                                        borderTopLeftRadius: 13,
                                        borderBottomLeftRadius: 13,
                                        backgroundColor: "#7F3DFF"
                                    } : {
                                        height: "100%",
                                        padding: 8,
                                        borderTopRightRadius: 13,
                                        borderBottomRightRadius: 13,
                                        backgroundColor: "#7F3DFF"
                                    }
                                })
                            }
                        />
                    </View>
                </View>

                <View style={styles.block2}>
                    <Text style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        marginBottom: 10
                    }}>$345</Text>
                    <View style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                        {
                            typeGraph == "linechart" ? <LineChart data={data2} areaChart startFillColor1='#7F3DFF' /> :
                                <PieChart data={data2} donut innerRadius={100} outerRadius={150} />
                        }
                    </View>


                </View>
                <View style={styles.block3}>
                    <ChangeTypeButton
                        type1={
                            <TouchableOpacity style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "100%", alignItems: "center" }}
                                onPress={() => setTypeFinance("expense")}
                            >
                                <Text
                                    style={typeFinance == "expense" ? { color: "white" } : { color: "black" }}
                                    onPress={() => setTypeFinance("expense")}
                                >Expense</Text>
                            </TouchableOpacity>
                        }

                        type2={
                            <TouchableOpacity style={{ width: "100%", flexDirection: "row", justifyContent: "center", height: "100%", alignItems: "center" }}
                                onPress={() => setTypeFinance("income")}
                            >
                                <Text
                                    style={typeFinance == "income" ? { color: "white" } : { color: "black" }}
                                >Income</Text>
                            </TouchableOpacity>
                        }

                        typeSelect={typeFinance == "expense" ? 1 : 2}

                        style={
                            StyleSheet.create({
                                container: {
                                    width: "100%",
                                    height: 50,
                                    borderRadius: 25,
                                    padding: 2
                                },
                                block: {
                                    borderRadius: 25,
                                    backgroundColor: "#7F3DFF"
                                }
                            })
                        }
                    />
                </View>

                <View style={styles.block4}>
                    <View>
                        <Select data={data3} style={{ width: 130 }} onChangeF={(item) => setTransactionOrCategory(item.value)} />
                    </View>
                </View>

                <View style={styles.block5}>
                    {transactionOrCategory == "category" && <CategoryCard percent={30} title={"Food"} prices={"-$120"} type={"expense"} />}
                    {transactionOrCategory == "transaction" && <TransactionCard title={"Food"} prices={"-$120"} time={"10:00 AM"} type={"expense"} />}
                </View>
            </View>
        </ScrollView>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        padding: 8,
    },

    block1: {
        // width: "1000px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    block2: {
        marginBottom: 8
    },
    block3: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignContent: "center"
    },
    block4: {
        marginTop: 8,
    },
    block5: {
        marginTop: 8,
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
    },

    changeGraphTypeButton: {
        flexDirection: "row",
        gap: 2
    }
})