import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllLocal } from "../../services/local";
import { LocalItem } from "../../components/LocalItem";

export default function Screen() {
  const locais = getAllLocal();

  return (
    <View style={styles.container}>
      <FlatList
        data={locais}
        renderItem={({ item }) => <LocalItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  list: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
