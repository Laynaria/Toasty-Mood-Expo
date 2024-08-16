import { Image, Text, View } from "react-native";

export default function TimelineCard({ toast, img }) {
  const date = new Date(toast.date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daySuffix = ["st", "nd", "rd"];

  return (
    <View>
      <Image source={img} />
      <Text>{toast.note}</Text>

      <Text>{`${months[date.getMonth()]} ${date.getDate()}${
        date.getDate() > 3 ? "th" : daySuffix[date.getDate() - 1]
      }`}</Text>
    </View>
  );
}
