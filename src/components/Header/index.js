import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'

const Header = ({name,desc}) => {
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'#00722D',height:80}}>
           <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:13,alignItems:'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.logo} source={require('../../assets/logo/left.png')} />
                </TouchableOpacity>
                <View style={{alignItems:'center'}}>
                    <Text style={{ color:'white',fontSize:20,fontWeight:'600' }}>{name}</Text>
                    <Text style={{ color:'white',fontSize:14,fontWeight:'500' }}>{desc}</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.share} source={require('../../assets/logo/share.png')} />
                </TouchableOpacity>
            </View>
               
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    logo: {width: 24, height: 24},
    share: {width: 20, height: 20},
})




