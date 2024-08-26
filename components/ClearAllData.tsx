import { Pressable, Text, View } from "react-native";

import { deleteToasts } from "../services/storage";
import { useState } from "react";

export default function ClearAllData() {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleDelete = async () => {
    await deleteToasts();
    setIsDeleteModal(false);
  };

  return (
    <View>
      <Pressable onPress={() => setIsDeleteModal(true)}>
        <Text>Delete Toasts</Text>
      </Pressable>

      {isDeleteModal ? (
        <View>
          <Text>Are you sure? </Text>
          <Pressable onPress={handleDelete}>
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
