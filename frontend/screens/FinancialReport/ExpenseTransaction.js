import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
export default (props) => {
    
    
    const reportDetail = () => {
		return (
			<View 
				style = {{
					position: "absolute",
					bottom: 0,
					right: 0,
					width: 375,
					height: 64,
					backgroundColor: "#ffffff",
					paddingHorizontal: 20,
				
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 23,
					}}>
						{/* <Icon name="arrow-left" size={20} color="black" style = {{
						
						marginRight: 75,
					}} /> */}
					
					
					<Text 
						style = {{
							color: "#212224",
							fontSize: 18,
							fontWeight: "bold",
							flex: 1,
							marginLeft:77,
							marginBottom:0
						}}>
						{"Financial Report"}
					</Text>
				</View>
			</View>
			
		)
	}
	
	const report = () => {
		return (
			<View 
				style={{
					position: "relative", // Đảm bảo relative position cho parent
					height: 64, // Đặt chiều cao của parent để chứa reportDetail
				}}>
					
				<View 
					style={{
						position: "absolute", // Vị trí tuyệt đối cho hình màu #7e3dff
						left: 0,
						top: 0,
						width: 48,
						height: 48,
						
						
					}}>
						
				</View>
				<Icon name="arrow-left" size={20} color="black" style = {{
						marginTop:20,
						marginRight: 75,
						marginLeft:10,
					}} />
				{reportDetail()}
			</View>
			
		)
	}
	

    const monthDetail = () => {
        return (
            <View 
				style = {{
					width: 96,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					borderColor: "#f1f1fa",
					borderRadius: 40,
					borderWidth: 1,
					paddingVertical: 14,
					marginRight: 155,
				}}>
				 <Icon name="angle-down" size={30} color="#7F3DFF" />
				<Text 
					style = {{
						color: "#212224",
						fontSize: 14,
						fontWeight: "bold",
					}}>
					{"Month"}
				</Text>
			</View>
			
        )
    }

    const share = () => {
        return (
            <View 
				style = {{
					width: 48,
				}}>
				<View 
					style = {{
						backgroundColor: "#7e3dff",
						borderColor: "#7e3dff",
						borderTopLeftRadius: 8,
						borderBottomLeftRadius: 8,
						borderWidth: 1,
						paddingHorizontal: 10,
					}}>
					<FontAwesome name="share-alt" color="white" style = {{
								height: 23,
								marginTop: 11,
								marginBottom:12,
							}} size={20}></FontAwesome>
				</View>
				<View 
					style = {{
						position: "absolute",
						bottom: 0,
						right: -48,
						width: 48,
						height: 48,
						backgroundColor: "#ffffff",
						borderColor: "#f1f1fa",
						borderTopRightRadius: 8,
						borderBottomRightRadius: 8,
						borderWidth: 1,
						paddingHorizontal: 12,
					}}>
					<FontAwesome name="pie-chart" color="#7F3DFF" style = {{
								height: 23,
								marginTop: 12,
							}} size={20}></FontAwesome>
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
					backgroundColor: "#ffffff",
					paddingVertical: 8,
					paddingHorizontal: 14,
					marginBottom: 12,
				}}>
				{monthDetail()}
				{share()}
			</View>
			
        )
    }

    const chart = () => {
        return (
            <View 
				style = {{
					height: 169,
					borderColor: "#5E27FD",
					borderWidth: 1,
				}}>
			</View>
			
        )
    }

    const main = () => {
        return (
            <View 
				style = {{
					backgroundColor: "#ffffff",
					paddingVertical: 8,
					marginBottom: 9,
				}}>
				{month()}
				<Text 
					style = {{
						color: "#000000",
						fontSize: 32,
						fontWeight: "bold",
						marginBottom: 22,
						marginLeft: 17,
					}}>
					{"$ 332"}
				</Text>
				{chart()}
			</View>
			
        )
    }

    const expense = () => {
        return (
            <View 
				style = {{
					width: 167,
					alignItems: "center",
					backgroundColor: "#7e3dff",
					borderRadius: 32,
					paddingVertical: 17,
				}}>
				<Text 
					style = {{
						color: "#fbfbfb",
						fontSize: 16,
						fontWeight: "bold",
					}}>
					{"Expense"}
				</Text>
			</View>
			
        )
    }

    const income = () => {
        return (
            <Text 
				style = {{
					color: "#000000",
					fontSize: 16,
					fontWeight: "bold",
				}}>
				{"Income"}
			</Text>
			
        )
    }

    const expenseDetail = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#f1f1fa",
					borderRadius: 32,
					paddingVertical: 4,
					paddingLeft: 4,
					paddingRight: 61,
					marginBottom: 8,
					marginHorizontal: 16,
				}}>
				{expense()}
				{income()}
			</View>
			
        )
    }

    const sort = () => {
        return (
            <View 
				style = {{
					width: 40,
					borderColor: "#f1f1fa",
					borderRadius: 8,
					borderWidth: 1,
					paddingHorizontal: 7,
				}}>
				<FontAwesome name="sort-amount-desc" style = {{
							height: 18,
							marginTop: 11,
						}}></FontAwesome>
			</View>
			
        )
    }

    const transaction = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#ffffff",
					paddingVertical: 12,
					paddingHorizontal: 16,
				}}>
				<View 
					style = {{
						width: 131,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						borderColor: "#f1f1fa",
						borderRadius: 40,
						borderWidth: 1,
						paddingVertical: 14,
						marginRight: 172,
					}}>
					<FontAwesome name="angle-down" color="#7F3DFF" style = {{
								height: 20,
								width: 14,
								marginRight: 10,
							}} size={20}></FontAwesome>
					<Text 
						style = {{
							color: "#212224",
							fontSize: 14,
							fontWeight: "bold",
						}}>
						{"Transaction"}
					</Text>
				</View>
				{sort()}
			</View>
			
        )
    }

    const shopping = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderRadius: 24,
					paddingVertical: 14,
					paddingHorizontal: 17,
					marginBottom: 8,
					marginHorizontal: 19,
				}}>
				<View 
					style = {{
						width: 60,
						backgroundColor: "#feeed0",
						borderRadius: 16,
						paddingHorizontal: 15,
						marginRight: 9,
					}}>
                        	<FontAwesome name="shopping-bag" color="#F5A711" style = {{
							height: 30,
							marginTop: 15,
							marginLeft:5,
							marginBottom:5
						}} size={20}></FontAwesome>
					
				</View>
				<View 
					style = {{
						flex: 1,
						marginRight: 4,
					}}>
					<Text 
						style = {{
							color: "#292b2d",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 17,
						}}>
						{"Shopping"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"Buy some grocery"}
					</Text>
				</View>
				<View 
					style = {{
						width: 58,
					}}>
					<Text 
						style = {{
							color: "#fd3c4a",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 16,
						}}>
						{"- $120"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"10:00 AM"}
					</Text>
				</View>
			</View>
			
        )
    }

    const subscription = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderRadius: 24,
					paddingVertical: 14,
					paddingHorizontal: 17,
					marginBottom: 8,
					marginHorizontal: 19,
				}}>
				<View 
					style = {{
						width: 60,
						backgroundColor: "#eee5ff",
						borderRadius: 16,
						paddingHorizontal: 17,
						marginRight: 9,
					}}>
                        <FontAwesome name="calendar" color="#7F3DFF" 	style = {{
							height: 32,
							marginTop: 14,
							marginLeft:3
						}} size={20}></FontAwesome>
					
				</View>
				<View 
					style = {{
						flex: 1,
						marginRight: 4,
					}}>
					<Text 
						style = {{
							color: "#292b2d",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 17,
						}}>
						{"Subscription"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"Disney+ Annual.."}
					</Text>
				</View>
				<View 
					style = {{
						width: 59,
					}}>
					<Text 
						style = {{
							color: "#fd3c4a",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 16,
						}}>
						{"- $80"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"03:30 PM"}
					</Text>
				</View>
			</View>
			
        )
    }

    const food = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderRadius: 24,
					paddingVertical: 14,
					paddingHorizontal: 17,
					marginBottom: 28,
					marginHorizontal: 19,
				}}>
				<View 
					style = {{
						width: 60,
						backgroundColor: "#fdd4d7",
						borderRadius: 16,
						paddingHorizontal: 16,
						marginRight: 10,
					}}>
                         <Ionicons name="pizza" color="#FD3C4A" 	style = {{
							height: 30,
							marginTop: 15,
							marginLeft:3,
							marginBottom:2
						}} size={20}></Ionicons>
					
				</View>
				<View 
					style = {{
						flex: 1,
						marginRight: 4,
					}}>
					<Text 
						style = {{
							color: "#292b2d",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 16,
						}}>
						{"Food"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"Buy a ramen"}
					</Text>
				</View>
				<View 
					style = {{
						width: 58,
					}}>
					<Text 
						style = {{
							color: "#fd3c4a",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 16,
						}}>
						{"- $32"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"07:30 PM"}
					</Text>
				</View>
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
				{report()}
				{main()}
				{expenseDetail()}
				{transaction()}
				{shopping()}
				{subscription()}
				{food()}
				
			</ScrollView>
		</SafeAreaView>
		
    )
}
