import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { handleClearAllData } from "../../services/settingsService";

export default function ClearAllData() {
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  return (
    <View>
      <Pressable onPress={() => setIsDeleteModal(true)}>
        <Text>Delete Toasts</Text>
      </Pressable>

      {isDeleteModal ? (
        <View>
          <Text>Are you sure? </Text>
          <Pressable onPress={() => handleClearAllData(setIsDeleteModal)}>
            <Text>Yes</Text>
          </Pressable>
          <Pressable onPress={() => setIsDeleteModal(false)}>
            <Text>No</Text>
          </Pressable>
        </View>
      ) : (
        ""
      )}
    </View>
  );
}
