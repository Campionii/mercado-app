import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BemVindoScreen from '@/app/(tabs)/bemvindo';
import IndexScreen from '@/app/(tabs)/Index';
import ShoppingCartApp from '@/app/(tabs)/carrinho';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen name="BemVindo" component={BemVindoScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Compras" component={ShoppingCartApp} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
