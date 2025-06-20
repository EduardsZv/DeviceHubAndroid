import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 12,
        marginBottom: 16,
        borderRadius: 6,
    },
    message: {
        marginTop: 16,
        textAlign: 'center',
        color: 'green',
    },
})