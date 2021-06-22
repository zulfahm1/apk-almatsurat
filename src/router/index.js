import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import {Home,zikirPagi,zikirPetang,About,Splash,catatanKaki} from '../screens'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="zikirPagi" component={zikirPagi}/>
            <Stack.Screen name="zikirPetang" component={zikirPetang}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="catatanKaki" component={catatanKaki}/>
        </Stack.Navigator>
    )
}
export default Router;                   