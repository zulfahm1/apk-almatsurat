import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import Header from '../../components/Header'

const About = ({name,desc}) => {
    return (
        <View style={{paddingHorizontal:40}}>
            <Image style={styles.logo} source={require('../../assets/logo/Logo.png')} />
            <Text style={{color:'green',fontSize:13,marginTop:15,fontWeight:'bold'}}>
                Tentang Aplikasi
            </Text>
            <Text style={{color:'green',maxWidth:350,marginTop:40,fontSize:13,lineHeight:20}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             </Text>
            <Text style={{color:'green',fontSize:13,fontWeight:'bold',marginTop:15}}>
                zoelfahmisyam03@email.com
            </Text>

           
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    logo: {width: 53, height: 53,marginTop:99},
})
