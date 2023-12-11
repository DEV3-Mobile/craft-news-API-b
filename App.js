import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsScreen from './screens/NewsScreen';
import ArticleScreen from './screens/ArticleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Details" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}