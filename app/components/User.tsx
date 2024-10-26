import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export const User = () => {
  return (
    <View className=" items-center ">
      <Avatar className="w-32 h-32 border-4 border-white">
        <AvatarImage source={{ uri: "https://github.com/natanias.png" }} />
        <AvatarFallback> RG</AvatarFallback>
      </Avatar>
      <Text className="text-cyan-600 font-bold text-2xl mt-4">
        Natanias Santos Souza
      </Text>
      <Text className="text-slate-300 text-lg">@nathan_s0</Text>
    </View>
  );
};
