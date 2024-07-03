import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View>
      <Link href="/" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>

      <Link href="/timeline" asChild>
        <Pressable>
          <Text>Timeline</Text>
        </Pressable>
      </Link>

      <Link href="/shop" asChild>
        <Pressable>
          <Text>Shop</Text>
        </Pressable>
      </Link>

      <Link href="/settings" asChild>
        <Pressable>
          <Text>Settings</Text>
        </Pressable>
      </Link>
    </View>
  );
}
