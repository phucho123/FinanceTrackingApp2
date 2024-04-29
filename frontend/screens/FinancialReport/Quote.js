import React from "react";
import { SafeAreaView, View, ScrollView, Text, } from "react-native";

export default (props) => {
    
    
    const header = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 143,
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

    const quote = () => {
        return (
            <Text 
				style = {{
					color: "#ffffff",
					fontSize: 32,
					fontWeight: "bold",
					marginBottom: 26,
					marginHorizontal: 16,
					width: 343,
				}}>
				{"“Financial freedom is freedom from fear.”"}
			</Text>
			
        )
    }

    const author = () => {
        return (
            <Text 
				style = {{
					color: "#ffffff",
					fontSize: 24,
					fontWeight: "bold",
					marginBottom: 313,
					marginLeft: 17,
				}}>
				{"-Robert Kiyosaki"}
			</Text>
			
        )
    }

    const detail = () => {
        return (
            <View 
				style = {{
					alignItems: "center",
					backgroundColor: "#ffffff",
					borderRadius: 16,
					paddingVertical: 21,
					marginBottom: 16,
					marginHorizontal: 15,
				}}>
				<Text 
					style = {{
						color: "#7e3dff",
						fontSize: 18,
						fontWeight: "bold",
					}}>
					{"See the full detail"}
				</Text>
			</View>
			
        )
    }

    const done = () => {
        return (
            <View 
				style = {{
					alignItems: "center",
					backgroundColor: "#ffffff",
					borderRadius: 16,
					paddingVertical: 21,
					marginBottom: 37,
					marginHorizontal: 16,
				}}>
				<Text 
					style = {{
						color: "#7e3dff",
						fontSize: 18,
						fontWeight: "bold",
					}}>
					{"Done"}
				</Text>
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
							height: 15,
							flexDirection: "row",
							marginBottom: 31,
							marginHorizontal: 15,
						}}>
					</View>
					{header()}
					{quote()}
					{author()}
					{detail()}
					{done()}
					{bottom()}
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
