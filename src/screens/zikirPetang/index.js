import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import JsonFile from '../../assets/JSON/dzikir-pagi-petang.json'

const zikirPetang = ({name,desc,navigation}) => {

    console.log('JsonFile')
    return (
        <View>
            <Header name="Dzikir Petang" desc=" Sayyidul Istighfar"/>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:90,fontSize:18,lineHeight:28}}>َتْنَأ َّﺎﻟِإ َبْوُنُّﺬﻟا ُرِفْغَي َﺎﻟ ُهَّنِإَف ْيِل ْرِفْغاَف ْيِبْنَذِب ُءْوُبَأَو ،َّيَلَع َكِتَمْعِنِب َكَل ُءْوُبَأ ،ُتْعَنَص اَم ِّرَش ْنِم َكِب ُذْوُعَأ ،ُتْعَطَتْسا اَم َكِدْعَوَو َكِدْهَع ىَلَع اَنَأَو ،َكُدْبَع اَنَأَو ْيِنَتْقَلَخ ،َتْنَأ َّﺎﻟِإ َﻪـَلِإ َﺎﻟ ْيِّبَر َتْنَأ َّمُهَّﻞﻟَا

</Text>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:40,fontSize:13,lineHeight:20}}>
            “Ya Allah, Engkau adalah Rabb-ku, tidak ada Ilah (yang berhak diibadahi dengan benar) kecuali Engkau, Engkau-lah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku dengan-Mu semampuku. Aku berlindung kepada-Mu dari kejelekan (apa) yang kuperbuat. Aku mengakui nikmat-Mu (yang diberikan) kepadaku dan aku mengakui dosaku, oleh karena itu, ampunilah aku. Sesungguhnya tidak ada yang dapat mengampuni dosa kecuali Engkau.” 

 </Text>
            <Text style={{fontSize:13,fontWeight:'bold',paddingHorizontal:25,marginTop:15}}>
                (Dibaca pagi dan sore 1x)
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('catatanKaki')}>
                <Text style={{color:'green',fontSize:13,textDecorationLine: 'underline',paddingHorizontal:25,marginTop:15}}>
                    Catatan kaki
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default zikirPetang

const styles = StyleSheet.create({})
