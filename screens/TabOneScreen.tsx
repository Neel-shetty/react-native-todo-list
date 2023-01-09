import { Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { decrement, increment } from "../state/counterslice";
import type { RootState } from "../state/redux";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Text>{count}</Text>
      <Button title="increase" onPress={()=> dispatch(increment())}/>
      <Button title="decrease" onPress={()=> dispatch(decrement())}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
