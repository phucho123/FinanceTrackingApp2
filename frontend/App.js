import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import IncomeTransaction from './screens/FinancialReport/IncomeTransaction';
import ExpenseTransaction from './screens/FinancialReport/ExpenseTransaction';
import Expense from "./screens/FinancialReport/Expense";
import Income from "./screens/FinancialReport/Income";
import Budget from "./screens/FinancialReport/Budget";
import Quote from "./screens/FinancialReport/Quote"
const Stack = createNativeStackNavigator();

function App(){
    const [fontLoaded, fontError] = useFonts({
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    });

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    options={{ headerShown: false }}
                    name="Quote"
                    component={Quote}
                />
            {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="IncomeTransaction"
                    component={IncomeTransaction}
                /> */}

                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="OnboardingScreen"
                    component={OnboardingScreen}
                /> */}

                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="LoginScreen"
                    component={LoginScreen}
                />

                <Stack.Screen
                    options={{ headerShown: false}}
                    name="RegisterScreen"
                    component={RegisterScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;