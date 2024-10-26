import { TouchableOpacity, StyleSheet, Text, Image, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type Props = {
  data: Category;
};

export const CategoryItem = ({ data }: Props) => {
  const handleClick = () => {
    router.push(`/categories/${data.id}`);
  };
  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: data.cover }}
        resizeMode="cover"
      />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#1b9eb8",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  bg: {
    height: 150,
    backgroundColor: "#000",
    marginTop: -150,
    opacity: 0.6,
    borderRadius: 10,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
});
