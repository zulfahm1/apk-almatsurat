import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import Header from '../../components/Header'
import JsonFile from '../../assets/JSON/dzikir-pagi-petang.json'

const zikirPagi = ({name,desc,navigation}) => {

    const [data, setData] = useState(Object.values(JsonFile))
    const [count, setCount]= useState(0)
    const [selectedData, setSelectedData] = useState(data[0])

    useEffect(() => {
        setSelectedData
    }, [])

    const next = async () => {
        await setCount(count + 1)
        setSelectedData(data[count])
    }

    return (
       <>
        <Header name="Dzikir Pagi" desc={selectedData.title}/>
        <ScrollView>
           <TouchableOpacity onPress={() => next()}>
               <Text>Next</Text>
           </TouchableOpacity>
            <View>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:50,fontSize:23,lineHeight:34}}>َ
                {selectedData.text_arab}
            </Text>
            <Text style={{fontSize:13,fontWeight:'bold',paddingHorizontal:25,marginTop:15}}>
               
            </Text>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:10,fontSize:16,lineHeight:20}}>
                {selectedData.text_latin}
            </Text>

            <Text style={{fontSize:13,fontWeight:'bold',paddingHorizontal:25,marginTop:15}}>
                Terjemah 
            </Text>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:10,fontSize:15,lineHeight:20}}>
                {selectedData.terjemah}
            </Text>

            <Text style={{fontSize:13,fontWeight:'bold',paddingHorizontal:25,marginTop:15}}>
                Keutamaan & Riwayat Hadist
            </Text>
            <Text style={{paddingHorizontal:25,maxWidth:350,marginTop:10,fontSize:13,lineHeight:20}}>
                {selectedData.catatan}
            </Text>
            

            {/* <TouchableOpacity onPress={() => navigation.navigate('catatanKaki',{data: selectedData.catatan})}>
                <Text style={{color:'green',fontSize:13,textDecorationLine: 'underline',paddingHorizontal:25,marginTop:15}}>
                    Catatan kaki
                </Text>
            </TouchableOpacity> */}
        </View>
       </ScrollView>
       </>
    )
}

export default zikirPagi

const styles = StyleSheet.create({})
