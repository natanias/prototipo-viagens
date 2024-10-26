import { View, Image } from "react-native";
import { User } from "../components/User";

export default function Screen() {
  return (
    <View className="flex-1 bg-white ">
      <Image
        source={require("../../assets/assets/Banner-03.png")}
        className="w-full h-52 -mb-16"
      />
      <User />
    </View>
  );
}
