import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Home} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import Router from  './src/router'
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  
  )
} 

export default App

const styles = StyleSheet.create({})
