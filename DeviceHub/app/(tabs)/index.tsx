import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello world.</Text>
        <Link href={"/about"} style={styles.button}>
          Go to About
        </Link>
    </View>
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
