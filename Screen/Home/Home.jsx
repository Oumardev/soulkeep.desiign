import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import UserImg from '../../assets/img/user.png'
import RecapImg from '../../assets/img/recap_icon.png'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
       <View style={styles.headerProfile}>
            <Image source={UserImg} style={styles.imgProfile} />
       </View>
        <View style={styles.welcome}>
            <Text style={styles.welcomeTxt}>Bienvenue, Oumar CISSE</Text>
        </View>
       <View style={styles.body}>
            <View style={styles.recapCard}>
                <Image source={RecapImg} style={styles.recapImg} />
                <Text style={styles.recapTxt}>Recapitulatif</Text>
            </View>

            <TouchableOpacity style={styles.doneButton}>
              <Text style={styles.doneButtonTxt}>Pointage</Text>
            </TouchableOpacity>
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2F2F2',
        flex: 1
    },
    imgProfile:{
        width: 75,
        height: 67,
    },  
    headerProfile:{
        justifyContent:'center',
        alignItems:'center',
        height:200
    },
    welcome:{
        margin: 20,
        marginLeft: 30
    },
    welcomeTxt:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '27px',
        color: '#757575'
    },
    recapCard:{
        width: 200,
        height: 140,
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: -2, height: 5},  
        shadowColor: '#171717',  
        shadowOpacity: 0.1,  
        borderRadius: 30,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:30
    },
    recapImg:{
        width: 60,
        height: 56,
    },
    body:{
        justifyContent:'center',
        alignItems:'center'
    },
    recapTxt:{
        color: '#2E3A59',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        margin: 5
    },
    doneButton:{
        backgroundColor: '#F8774A',
        height: 50,
        width: 321,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:30,
        marginTop: 120
      },
      doneButtonTxt:{
        fontSize:17,
        fontWeight:'600',
        color: 'white'
      }
})