import {useState} from "react";
import {supabase} from "@/lib/supabase";
import {Button, Text, TextInput, View} from "react-native";
import {Stack, useRouter} from "expo-router";
import {styles} from "@/styles";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter();
    
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setMessage(`Error: ${error.message}`)
        } else {
            setMessage('Login successful!')
            router.replace("/(tabs)");
            
        }
    }
    
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <Text style={styles.label}>
                    Login
                </Text>
                <View style={{ padding: 20 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Button title="Login" onPress={handleLogin} />
                    {message ? <Text>{message}</Text> : null}
                </View>
            </View>
        </>
        
    )
}