import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
export default (props) => {
    
    
   

    const report = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#ffffff",
					paddingVertical: 23,
					paddingHorizontal: 20,
				}}>
					<Icon name="arrow-left" size={20} color="black" style = {{
						
						marginRight: 75,
					}} />
					
				{/* <Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						width: 23,
						height: 16,
						marginRight: 75,
					}}
				/> */}
				<Text 
					style = {{
						color: "#212224",
						fontSize: 18,
						fontWeight: "bold",
						flex: 1,
						marginLeft:20,
					}}>
					{"Financial Report"}
				</Text>
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
					{/* <Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 14,
							height: 6,
							marginRight: 11,
						}}
					/> */}
					<Text 
						style = {{
							color: "#212224",
							fontSize: 14,
							fontWeight: "bold",
						}}>
						{"Month"}
					</Text>
				</View>
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
								height: 20,
								marginTop: 11,
								marginBottom:12,
							}} size={20}></FontAwesome>
							{/* <Icon name="share-alt"  size={20} color="white" style = {{
								height: 20,
								marginTop: 14,
							}} /> */}
						
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
			</View>
			
        )
    }

    const mainChart = () => {
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
					{"$ 6000"}
				</Text>
				{mainChart()}
			</View>
			
        )
    }

    const expenseIncome = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#f1f1fa",
					borderRadius: 32,
					paddingVertical: 4,
					paddingLeft: 55,
					paddingRight: 4,
					marginBottom: 8,
					marginHorizontal: 16,
				}}>
				<Text 
					style = {{
						color: "#0d0e0f",
						fontSize: 16,
						fontWeight: "bold",
					}}>
					{"Expense"}
				</Text>
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
						{"Income"}
					</Text>
				</View>
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
					{/* <Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 14,
							height: 6,
							marginRight: 10,
						}}
					/> */}
					<Text 
						style = {{
							color: "#212224",
							fontSize: 14,
							fontWeight: "bold",
						}}>
						{"Transaction"}
					</Text>
				</View>
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
			</View>
			
        )
    }

    const salary = () => {
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
						backgroundColor: "#cff9ea",
						borderRadius: 16,
						paddingHorizontal: 17,
						marginRight: 9,
					}}>
							<FontAwesome name="money" color="#009961" style = {{
							height: 31,
							marginTop: 13,
							marginLeft:3,
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
							marginBottom: 16,
						}}>
						{"Salary"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"Salary for July"}
					</Text>
				</View>
				<View 
					style = {{
						width: 65,
					}}>
					<Text 
						style = {{
							color: "#00a86b",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 16,
						}}>
						{"+ $5000"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"04:30 PM"}
					</Text>
				</View>
			</View>
			
        )
    }

    const income = () => {
        return (
            <View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "#fbfbfb",
					borderRadius: 24,
					paddingVertical: 14,
					paddingHorizontal: 17,
					marginBottom: 125,
					marginHorizontal: 19,
				}}>
				<View 
					style = {{
						width: 60,
						backgroundColor: "#e3e5e5",
						borderRadius: 16,
						paddingHorizontal: 15,
						marginRight: 10,
					}}>
						<FontAwesome name="shopping-bag" color="black" style = {{
							height: 30,
							marginTop: 15,
							marginLeft:5,
							marginBottom:5,
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
						{"Passive Income"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"UI8 Sales"}
					</Text>
				</View>
				<View 
					style = {{
						width: 62,
					}}>
					<Text 
						style = {{
							color: "#00a86b",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 17,
						}}>
						{"+ $1000"}
					</Text>
					<Text 
						style = {{
							color: "#90909f",
							fontSize: 13,
							fontWeight: "bold",
							marginLeft: 1,
						}}>
						{"08:30 PM"}
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
				{expenseIncome()}
				{transaction()}
				{salary()}
				{income()}
				
			</ScrollView>
		</SafeAreaView>
		
    )
}
