import { Text } from "./components/Text";
import { View } from "./components/View";

function App() {
  return (
    <View>
      <View as="a" href="https://www.naver.com">
        Link
      </View>
      <Text as="div" color="red" size={50}>
        Text
      </Text>
    </View>
  );
}

export default App;
