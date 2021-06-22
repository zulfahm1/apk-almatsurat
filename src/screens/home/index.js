import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native'
import axios from 'axios'

const Home = ({navigation}) => {

    const [jadwal, setJadwal] = useState({})
    const [day, setDay]       = useState('')


    useEffect(() => {
        
        handleDate()
    }, [])

    useEffect(() => {
        handleJadwal()
    }, [jadwal])

    console.log(day)

    const handleDate = () => {
        const newDate = new Date()
        console.log(newDate)

        const yr = newDate.getFullYear()
        const bl = newDate.getMonth()
        const hr = newDate.getDate()

        function konfert(param){
            const baru = param.toString()

            if (baru.length == 1){
                return '0'+param
            }else{
                return param
            }
        }

        setDay(`${yr}-${konfert(bl + 1)}-${hr}`)
    }

    const handleJadwal = () => {
        axios.get('https://api.banghasan.com/sholat/format/json/jadwal/kota/702/tanggal/'+day).then(res =>{
            setJadwal(res.data.jadwal.data)
        }). catch(err => console.log(err.response))
    }

    return (
        
       <View style={{flex: 1,backgroundColor: '#fff',}}>
            <TouchableOpacity style={styles.homePosition}>
                <Image style={styles.warning} source={require('../../assets/logo/home.png')} />
                <Text style={{fontSize:12,paddingLeft:5,color: "#00722D"}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.warningPosition} onPress={() => navigation.navigate('About')}>
                <Image style={styles.warning} source={require('../../assets/logo/warning.png')} />
            </TouchableOpacity>

            
            <View style={{ alignItems: 'center'}}>
                <Text >jadwal sholat {jadwal.tanggal}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'green', padding: 10 }}>
                <View style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>shubuh</Text>
                    <Text style={{ color: 'green' }}>{jadwal.subuh}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>dzuhur</Text>
                    <Text style={{ color: 'green' }}>{jadwal.dzuhur}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>ashar</Text>
                    <Text style={{ color: 'green' }}>{jadwal.ashar}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>maghrib</Text>
                    <Text style={{ color: 'green' }}>{jadwal.maghrib}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>isya</Text>
                    <Text style={{ color: 'green' }}>{jadwal.isya}</Text>
                </View>
            </View>



           <ScrollView>
           <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('zikirPagi')}>
                    <Image style={styles.logo} source={require('../../assets/logo/pagi.png')} />
                </TouchableOpacity>
                <View style={{height:35}}></View>
                <TouchableOpacity onPress={() => navigation.navigate('zikirPetang')}>
                    <Image style={styles.logo} source={require('../../assets/logo/petang.png')} />
                </TouchableOpacity>
                <View style={{height:72}}></View>
                    <Text style={{paddingHorizontal:15,color: "#00722D",textAlign:'center',maxWidth:300,fontSize:13}}>
                        “Maka bersabarlah kamu, karena sesungguhnya janji Allah itu benar, dan mohonlah ampunan untuk dosamu dan bertasbihlah seraya memuji Tuhanmu pada waktu sore dan pagi”
                    </Text>
                <View style={{height:8}}></View>
                    <Text style={{paddingHorizontal:15,color: "#00722D",textAlign:'center',maxWidth:246,fontSize:13}}>
                    QS. Ghafir: 55)
                </Text>
            </View>
           </ScrollView>
       </View>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {  alignItems: 'center', justifyContent: 'center',paddingTop:60},
    logo: {width: 304, height: 125},
    warning: {width: 24, height: 24},
    warningPosition:{position:'absolute', right:28,top:36},
    homePosition:{position:'absolute', left:28,top:36,flexDirection:'row',alignItems:'center'},
})
