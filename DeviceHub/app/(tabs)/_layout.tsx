import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#7285ff",
        }}>
            <Tabs.Screen name="index"
                          options={{
                              headerTitle: "Device Hub",
                              tabBarIcon: ({focused, color}) => (
                                  <Ionicons 
                                      name={focused ? "home" : "home-outline"} 
                                      size={24} 
                                      color="#0023ff" />
                              ),
                          }}/>
            <Tabs.Screen name="about"
                          options={{
                              headerTitle: "About",
                                tabBarIcon: ({focused, color}) => (
                                    <Ionicons name={focused ? "information-circle" : "information-circle-outline"}
                                              size={24} 
                                              color="#0023ff" />
                                ),
                          }}/>
        </Tabs>
    )
}
