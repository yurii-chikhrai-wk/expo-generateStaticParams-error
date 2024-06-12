import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  console.error("generateStaticParams __dirname", __dirname);

  return [];
}

export default function Page() {
  const { id } = useLocalSearchParams();

  return <Text>Game ID: {id}</Text>;
}
