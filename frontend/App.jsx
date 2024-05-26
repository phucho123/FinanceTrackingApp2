import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import IncomeTransaction from "./screens/FinancialReport/IncomeTransaction";
import ExpenseTransaction from "./screens/FinancialReport/ExpenseTransaction";
import Expense from "./screens/FinancialReport/Expense";
import Income from "./screens/FinancialReport/Income";
import Budget from "./screens/FinancialReport/Budget";
import Quote from "./screens/FinancialReport/Quote";
import HomeScreen from "./screens/HomeScreen";
import Transaction from "./screens/Transaction/Transaction";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import MainTabs from "./tabs/MainTabs";
import CreateBudget from "./screens/Budget/CreateBudget";
import DetailBudget from "./screens/Budget/DetailBudget";
import { primaryColor } from "./styles/global";

const Stack = createNativeStackNavigator();

function App() {
    const [fontsLoaded, fontError] = useFonts({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    });

    if (!fontsLoaded && !fontError) {
        return <Text>Font not loaded...</Text>;
    }

    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <TouchableOpacity>
                                <AntDesign name="arrowleft" style={{ fontSize: 24 }} />
                            </TouchableOpacity>
                        ),
                    }}
                    name="Transaction"
                    component={Transaction}
                />
                <Stack.Screen options={{ headerShown: false }} name="Homescreen" component={HomeSceen} />
                <Stack.Screen options={{ headerShown: false }} name="IncomeTransaction" component={IncomeTransaction} />

                <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />

                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />

                <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator> */}
            <Stack.Navigator>
                <Stack.Screen name="Budget" component={MainTabs} options={{ headerShown: false }} />
                <Stack.Screen
                    name="CreateBudget"
                    component={CreateBudget}
                    options={{
                        title: "Create Budget",
                        headerStyle: {
                            backgroundColor: primaryColor,
                        },
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontSize: 18,
                            color: "#fff",
                            fontFamily: "Inter-Bold",
                        },
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="DetailBudget"
                    component={DetailBudget}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="EditBudget"
                    component={CreateBudget}
                    options={{
                        title: "Edit Budget",
                        headerStyle: {
                            backgroundColor: primaryColor,
                        },
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontSize: 18,
                            color: "#fff",
                            fontFamily: "Inter-Bold",
                        },
                        headerShadowVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
