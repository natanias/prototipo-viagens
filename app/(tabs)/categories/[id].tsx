import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllLocal } from "../../../services/local";
import { LocalItem } from "../../../components/LocalItem";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";
import { getLocaisByCategory } from "../../../services/local";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idCategory = parseInt(id as string);

  const category = getCategoryById(idCategory);
  if (!category) return router.back();

  const locais = getLocaisByCategory(idCategory);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category.title }} />
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
