import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
export default (props) => {
    
    
    const header = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 42,
					marginHorizontal: 13,
				}}>
				<View 
					style = {{
						width: 85,
						height: 1,
						backgroundColor: "#ffffff",
					}}>
				</View>
				<View 
					style = {{
						width: 85,
						height: 1,
						backgroundColor: "#ffffff",
					}}>
				</View>
				<View 
					style = {{
						width: 85,
						height: 1,
						backgroundColor: "#ffffff",
					}}>
				</View>
				<View 
					style = {{
						width: 85,
						height: 1,
						backgroundColor: "#ffffff",
					}}>
				</View>
			</View>
			
        )
    }

    const month = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 144,
					marginHorizontal: 45,
				}}>
					<Icon name="arrow-left" size={20} color="white"style = {{
						width: 26,
						height: 32,
						marginRight: 55,
					}} />
			
				<Text 
					style = {{
						color: "#ffffff",
						fontSize: 24,
						fontWeight: "bold",
						flex: 1,
					}}>
					{"This Month"}
				</Text>
			</View>
			
        )
    }

    const spend = () => {
        return (
            <Text 
				style = {{
					color: "#ffffff",
					fontSize: 32,
					fontWeight: "bold",
					marginBottom: 38,
					marginLeft: 85,
				}}>
				{"You Spend 💸"}
			</Text>
			
        )
    }

    const money = () => {
        return (
            <Text 
				style = {{
					color: "#ffffff",
					fontSize: 64,
					fontWeight: "bold",
					marginBottom: 123,
					marginLeft: 107,
				}}>
				{"$332"}
			</Text>
			
        )
    }

    const quote = () => {
        return (
            <Text 
				style = {{
					color: "#0d0e0f",
					fontSize: 24,
					fontWeight: "bold",
					textAlign: "center",
					marginBottom: 20,
					marginHorizontal: 73,
					width: 197,
				}}>
				{"and your biggest spending is from"}
			</Text>
			
        )
    }

    const shopping = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderColor: "#e3e5e5",
					borderRadius: 24,
					borderWidth: 1,
					padding: 16,
					marginBottom: 13,
					marginHorizontal: 93,
				}}>
				<View 
					style = {{
						width: 32,
						backgroundColor: "#fceed3",
						borderRadius: 8,
						paddingHorizontal: 7,
					}}>
						<FontAwesome name="shopping-bag" color="#F5A711" style = {{
							height: 18,
							marginTop: 7,
							marginBottom:10,
						}} size={20}></FontAwesome>
					
				</View>
				<Text 
					style = {{
						color: "#0d0e0f",
						fontSize: 18,
						fontWeight: "bold",
					}}>
					{"Shopping"}
				</Text>
			</View>
			
        )
    }

    const dollar = () => {
        return (
            <Text 
				style = {{
					color: "#0d0e0f",
					fontSize: 36,
					fontWeight: "bold",
					marginLeft: 125,
				}}>
				{"$ 120"}
			</Text>
			
        )
    }

    const detail = () => {
        return (
            <View 
				style = {{
					backgroundColor: "#ffffff",
					borderRadius: 24,
					paddingTop: 20,
					paddingBottom: 30,
					marginBottom: 37,
					marginHorizontal: 16,
				}}>
				{quote()}
				{shopping()}
				{dollar()}
			</View>
			
        )
    }

    const bottom = () => {
        return (
            <View 
				style = {{
					height: 5,
					backgroundColor: "#ffffff",
					borderRadius: 100,
					marginHorizontal: 120,
				}}>
			</View>
			
        )
    }

    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#ffffff",
				}}>
				<View 
					style = {{
						backgroundColor: "#fd3c4a",
						paddingVertical: 16,
					}}>
					<View 
						style = {{
							height: 10,
							flexDirection: "row",
							marginBottom: 31,
							marginHorizontal: 15,
						}}>
					</View>
					{header()}
					{month()}
					{spend()}
					{money()}
					{detail()}
					{bottom()}
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
