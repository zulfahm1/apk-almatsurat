import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'

const catatanKaki = ({name,desc,navigation, route}) => {
    const data = route.params
    console.log(data)
    return (
        <View>
            <Header name="catatan" desc=" Sayyidul Istighfar"/>
           
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:40,fontSize:13,lineHeight:20}}>
            {data.data}

 </Text>
            
            
        </View>
    )
}

export default catatanKaki

const styles = StyleSheet.create({})
