import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Local } from "../types/local";
import { Link } from "expo-router";

type Props = {
  data: Local;
};

export const LocalItem = ({ data }: Props) => {
  return (
    <Link href={`/local/${data.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: data.image }}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.km}>{data.km.toFixed(2)} Km</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#1B9EB8",
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1B9EB8",
  },
  description: {
    fontSize: 13,
    color: "#55555",
    marginBottom: 10,
  },
  km: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    color: "#225574",
  },
});
