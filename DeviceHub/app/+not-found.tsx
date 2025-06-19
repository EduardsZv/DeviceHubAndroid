import {StyleSheet, View} from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.container}>
                <Link href={"/"} style={styles.button}>
                    Go back to Home screen
                </Link>
            </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#565656",
    },
    text: {
        fontSize: 20,
        color: "#ffffff",
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
        color: "#ffffff",
    }
});
