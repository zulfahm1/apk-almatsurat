import React,{useEffect}from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import Header from '../../components/Header'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout( function(){
            navigation.replace('Home')
        }, 3000)
       }, [])
    return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Image style={styles.logo} source={require('../../assets/logo/Logo.png')} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    logo: {width: 97, height: 97,},
})
