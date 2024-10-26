import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
} from "react-native";
import { Button } from "../../components/button";
import { getLocalById } from "../../services/local";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idLocal = parseInt(id as string);

  const local = getLocalById(idLocal);
  if (!local) return router.back();

  const handleRotaButton = () => {
    alert("E você tem dinheiro para viajar para " + local.title + " ?");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "" }} />
      <ScrollView style={styles.area}>
        <Image
          source={{ uri: local.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{local.title}</Text>
        <Text style={styles.description}>{local.description}</Text>
        <View style={styles.localArea}>
          <Text style={styles.km}>{local.km.toFixed(2)} Km</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Iniciar Rota" onPress={handleRotaButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#1b9eb8",
  },
  description: {
    fontSize: 16,
    color: "#0d212d",
    marginBottom: 20,
  },
  localArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#cbd5e1",
  },
  km: {
    fontSize: 22,
    textAlign: "center",
    color: "#0d212d",
    fontWeight: "bold",
  },
});
