import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import UserImg from '../../assets/img/user.png'
import ShareImg from '../../assets/img/share.png'
import BookImg from '../../assets/img/book.png'
import ContactImg from '../../assets/img/contact.png'

export default function Profile() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.backRowBox}><Ionicons name='chevron-back' size={30}/></View>
            <View style={styles.logOutBox}><Feather name='log-out' color={'white'} size={30}/></View>
        </View>
        
        <View style={styles.headerDetails}>
            <Text style={styles.myProfileTxt}>Mon profile</Text>
            <Text style={styles.detailsPersTxt}>Details personnels</Text>
        </View>
        <ScrollView>
            <View style={styles.cardDetails}>
                <Image style={styles.imageCard} source={UserImg} />
                <View style={styles.leftContentCard}>
                    <Text style={styles.companyName}>Entreprise Test</Text>
                    <Text style={styles.companyMail}>mail@test.com</Text>
                    <View style={styles.bar} />
                    <Text style={styles.companyNumber}>+225 0798227737</Text>
                </View>
            </View>

            <View style={styles.barCard}>
                <Text style={styles.barCardTxt}>Partager l’application</Text>
                <Image style={styles.barCardImg} source={ShareImg} />
            </View>
            <View style={styles.barCard}>
                <Text style={styles.barCardTxt}>Manuel d’utilisation</Text>
                <Image style={styles.barCardImg} source={BookImg} />
            </View>
            <View style={styles.barCard}>
                <Text style={styles.barCardTxt}>Nous contactez</Text>
                <Image style={styles.barCardImg} source={ContactImg} />
            </View>

            <View style={styles.editButton}>
                <Text style={styles.editTxt}>Modifier</Text>
            </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F5F8',
        flex: 1
    },
    header:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:60,
        marginLeft: 20,
        marginRight:20
    },
    backRowBox:{
        padding:5
    },
    logOutBox:{
        backgroundColor:'red',
        padding:5,
        borderRadius:10,
        opacity:0.6
    },
    headerDetails:{
        marginTop: 30,
        marginLeft: 30
    },
    myProfileTxt:{
        fontSize:34,
        marginBottom: 25
    },
    detailsPersTxt:{
        fontSize: 18
    },
    cardDetails:{
        backgroundColor: 'white',
        borderRadius: 15,
        margin:30,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    imageCard:{
        width: 90.53,
        height: 99.38,
        marginRight: 15
    },
    leftContentCard:{},
    bar:{
        backgroundColor: '#000000',
        width: 164.14,
        height:0.5,
        marginTop:15,
        marginBottom:15
    },
    companyName:{
        fontSize: 18,
        fontWeight:'500'
    },
    companyMail:{
        fontSize:13,
        opacity: 0.5
    },
    companyNumber:{},
    barCard:{
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft:30,
        marginRight: 30,
        marginTop: 12,
        padding:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 60
    },
    barCardTxt:{
        fontSize:20,
        fontWeight: '400',
        marginLeft:10
    },
    barCardImg:{
        width:25,
        height:25,
        padding:10,
        marginRight:10
    },
    editButton:{
        backgroundColor: '#F8774A',
        marginLeft:30,
        marginRight: 30,
        marginTop: 60,
        padding:18,
        borderRadius:30
    },
    editTxt:{
        fontSize:18,
        textAlign: 'center',
        color: 'white'
    }
})