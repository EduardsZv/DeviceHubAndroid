import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { supabase } from '@/lib/supabase'
import {Link} from "expo-router";
import {styles} from "@/styles";

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleRegister = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setMessage(`Error: ${error.message}`)
        } else {
            setMessage('Registration successful! Check your email to confirm.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Register</Text>
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
            <Button title="Register" onPress={handleRegister} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            
            <Link href={"/login"} style={{ marginTop: 16, textAlign: 'center', color: 'blue' }}>
                Already have an account? Log in
            </Link>
        </View>
    )
}


