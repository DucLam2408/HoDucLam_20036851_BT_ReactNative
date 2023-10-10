import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen02 from "./Screen2/screen02";
import Screen01 from "./Screen1/screen01";
const Stack = createNativeStackNavigator();
const RootApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen01"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
