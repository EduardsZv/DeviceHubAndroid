// App.js or GyroscopeScreen.js
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function GyroscopeSensor() {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {
        const subscription = Gyroscope.addListener(gyroscopeData => {
            setData(gyroscopeData);
        });

        // Optional: set update interval
        Gyroscope.setUpdateInterval(10); // 500ms = 2 times per second

        return () => subscription.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>x: {data.x.toFixed(3)}</Text>
            <Text style={styles.text}>y: {data.y.toFixed(3)}</Text>
            <Text style={styles.text}>z: {data.z.toFixed(3)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginVertical: 10,
    },
});
