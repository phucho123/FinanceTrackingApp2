import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';

import { Ionicons } from '@expo/vector-icons';
export default (props) => {
    
    
    const header = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 39,
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
					marginBottom: 208,
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

    const notification = () => {
        return (
            <Text 
				style = {{
					color: "#ffffff",
					fontSize: 32,
					fontWeight: "bold",
					textAlign: "center",
					marginBottom: 35,
					marginHorizontal: 55,
					width: 265,
				}}>
				{"2 of 12 Budget is exceeds the limit"}
			</Text>
			
        )
    }

    const shopping = () => {
        return (
            <View 
				style = {{
					width: 156,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderColor: "#e3e5e5",
					borderRadius: 24,
					borderWidth: 1,
					paddingVertical: 16,
				}}>
				<View 
					style = {{
						width: 32,
						backgroundColor: "#fceed3",
						borderRadius: 8,
						paddingHorizontal: 7,
						marginRight: 10,
					}}>
						<FontAwesome name="shopping-bag" color="#F5A711" style = {{
							height: 18,
							marginTop: 7,
							marginBottom:9
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

    const food = () => {
        return (
            <View 
				style = {{
					width: 116,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderColor: "#e3e5e5",
					borderRadius: 24,
					borderWidth: 1,
					padding: 16,
				}}>
				<View 
					style = {{
						width: 32,
						backgroundColor: "#fdd4d7",
						borderRadius: 8,
						paddingHorizontal: 8,
					}}>
						 <Ionicons name="pizza" color="#FD3C4A" 	style = {{
							height: 18,
							marginTop: 7,
							marginBottom:9,
							width:22
						}} size={20}></Ionicons>
					
				</View>
				<Text 
					style = {{
						color: "#0d0e0f",
						fontSize: 18,
						fontWeight: "bold",
					}}>
					{"Food"}
				</Text>
			</View>
			
        )
    }

    const category = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 301,
					marginHorizontal: 40,
				}}>
				{shopping()}
				{food()}
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
						backgroundColor: "#7e3dff",
						paddingVertical: 16,
					}}>
					<View 
						style = {{
							height: 11,
							flexDirection: "row",
							marginBottom: 31,
							marginHorizontal: 15,
						}}>
					</View>
					{header()}
					{month()}
					{notification()}
					{category()}
					{bottom()}
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
