import React, { useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { supabase } from '@/lib/supabase'

export default function Index() {
    // ✅ Sign in anonymously when the component loads
    useEffect(() => {
        const signInAnon = async () => {
            const { data, error } = await supabase.auth.signInAnonymously()
            if (error) {
                console.error('Auth error:', error.message)
            } else {
                console.log('Signed in:', data)
            }
        }

        signInAnon()
    }, [])

    const handleInsert = async () => {
        const { data, error } = await supabase
            .from('test_table')
            .insert([{ data: 'Hello, Supabase!' }])

        if (error) {
            console.error('Insert error:', error)
        } else {
            console.log('Data inserted:', data)
        }
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={handleInsert}>
                <Text style={styles.buttonText}>Send to Supabases</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
