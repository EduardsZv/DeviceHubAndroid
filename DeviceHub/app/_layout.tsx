import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
          <Stack.Screen name="register"
                        options={{
                            headerTitle: "Device Hub",
                            headerShown: false, // Hide the header on the home screen
                        }}/>
        <Stack.Screen name="(tabs)" 
                      options={{
                        headerTitle: "Device Hub",
                          headerLeft: () => null, // Hide the back button on the home screen
                          headerShown: false,
                      }}/>
        <Stack.Screen name="+not-found" 
                      options={{
                        headerTitle: "Not Found",
                        headerShown: true,
                      }}/>
          
      </Stack>
  )
}
