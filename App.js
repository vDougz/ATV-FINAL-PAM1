import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerMenu from "./drawerMenu/DrawerMenu";
import Home from "./screens/Home";


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="DrawerMenu">

<Stack.Screen
        name="DrawerMenu"
        component={DrawerMenu}
        options={{title:'', headerShown:false}}
        />

<Stack.Screen
        name="Home"
        component={Home}
        options={{title:"HOME"}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  )

}