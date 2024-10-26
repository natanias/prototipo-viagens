import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen(){
    
    const handleStart = () => {
        router.replace("/home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo-safeTrip.png")} style={styles.logo} resizeMode="cover" />
            <Text style={styles.h1}>Safe Trip</Text>
            <Text style={styles.h2}>Sua viagem segura começa aqui.</Text>
            <Button title="Começar" onPress={handleStart} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        width: 250,
        height: 250,
        marginBottom: 20
    },
    h1:{
        fontSize: 32,
        fontWeight: "800",
        color: "#1b9eb8"
    },
    h2:{
        fontSize: 16,
        color: "#0d212d",
        marginBottom: 20,
    }
    
});