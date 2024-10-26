import { View, StyleSheet, FlatList } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/CategoryItem";

export default function Screen() {
  const categories = getAllCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
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
    marginTop: 70,
  },
  list: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
