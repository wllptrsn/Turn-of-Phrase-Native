import * as React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function GameScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Game!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
   
    <View style={styles.container}>
    <Text>HOME SCREEN</Text>
      < Image source = {turnofphraselogo.png} ></Image>
      <Button
       color= '#5177b8'
        title="Play Game"
        onPress={() => navigation.navigate('Game')}
      />
      
    </View>
   
  );
}

function SettingsScreen({ navigation }) {
  return (
      <View style={styles.container}>
      <Text>Settings screen</Text>
      <Button
        color= '#5177b8'
        title="Go to Game"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator hideNavBar= {true}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}  />
      <HomeStack.Screen name="Game" component={GameScreen} options={{headerShown: false}}  />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={GameScreen} />
    </SettingsStack.Navigator>
  );
}

 const Tab = createBottomTabNavigator();

 export default function Main() {
   return (
     <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             if (route.name === 'Home') {
               iconName = focused ? 'ios-home' : 'ios-home';
             } else if (route.name === 'Settings') {
               iconName = focused ? 'ios-settings' : 'ios-settings';
             } else if (route.name === 'Sound') {
               iconName = focused ? 'ios-notifications-outline' : 'ios-notifications-outline';
             }

            return <Ionicons name={iconName} size={size} color={color} />;
           },
         })}
         tabBarOptions={{
           activeTintColor: 'purple',
           inactiveTintColor: 'black',
         }}>
         <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Sound" component={HomeStackScreen} />
         <Tab.Screen name="Settings" component={SettingsStackScreen} />
       </Tab.Navigator>
     </NavigationContainer>
   );
} 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#ffc547',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
})