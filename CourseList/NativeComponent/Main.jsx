import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './Home'
import Login from './Login'
const Main = () => {
    const Stack=createStackNavigator();
  return (
    <View>
      <Text>Main</Text>
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
     </NavigationContainer>
       
    </View>
   

  )
}

export default Main

const styles = StyleSheet.create({})