import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LiveLocationTracker() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        let subscription = null;

        (async () => {
            // Request permission
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Start watching position
            subscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High, // or Location.Accuracy.Balanced
                    timeInterval: 10,               // update every 5 seconds
                    distanceInterval: 0,              // OR when distance changes
                },
                (loc) => {
                    setLocation(loc);
                }
            );
        })();

        return () => {
            if (subscription) subscription.remove(); // Clean up listener
        };
    }, []);

    let text = 'Waiting for location...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        const { latitude, longitude } = location.coords;
        text = `Latitude: ${latitude}\nLongitude: ${longitude}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
});
