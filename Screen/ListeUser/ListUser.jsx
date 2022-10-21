import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ChurchImg from '../../assets/img/church_icon.jpg'
import ItemUser from './ItemUser';

export default function ListUser() {
  const data = [
    {key:'1',value:'User 1'},
    {key:'2',value:'User 2'},
    {key:'3',value:'User 3'},
    {key:'4',value:'User 4'},
    {key:'5',value:'User 5'}
  ];

  const [selected, setSelected] = React.useState([])

  return (
    <View style={styles.container}>
        <Image style={styles.headerImg} source={ChurchImg}/>
        <View style={styles.containerBottom}>
          <Text style={styles.title}>Liste</Text>

            <TextInput inlineImageLeft={'search_icon'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} placeholder='Rechercher le nom' style={styles.datePickerStyle} />
            <View style={styles.resultBox}>
                {
                    data.map((item)=> <ItemUser key={item.key} active={selected.includes(item.key)} id={item.key} name={item.value} setSelected={setSelected}/> )
                }
            </View>
            <TouchableOpacity style={styles.doneButton}>
              <Text style={styles.doneButtonTxt}>Terminer</Text>
              <AntDesign name='arrowright' color={'white'} size={20}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    headerImg:{
      width:414,
      height:295,
      opacity:0.4,
      top:0,
      left:0,
      position: 'absolute'
    },
    containerBottom:{
      backgroundColor:'#FFFFFF',
      shadowOffset: {width: 2, height: 12},  
      shadowColor: '#171717',  
      shadowOpacity: 0.7,  
      height: 721,
      borderRadius:30,
      left: 0,
      top: 233
    },

    title:{
      margin:30,
      fontWeight: '500',
      fontSize: 25,
      lineHeight: 30,
      color: '#0A191E'
    },

    selectStyle:{
      margin: 15,
      backgroundColor:'#A19C9C'
    },

    selectDropDownStyle:{
      marginLeft:15,
      marginRight:15,
      backgroundColor:'#6B6B6B'
    },
    doneButton:{
      backgroundColor: '#F8774A',
      height: 50,
      width: 150,
      justifyContent:'center',
      alignItems: 'center',
      flexDirection:'row',
      borderRadius:30,
      left: 200,
      top: 470,
      position:'absolute'
    },
    doneButtonTxt:{
      fontSize:17,
      fontWeight:'600',
      color: 'white'
    },
    datePickerStyle:{
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#A19C9C',
        height: 42,
        borderRadius:10,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    dateTxt:{
        color:'white',
        fontWeight:'500'
    },
    resultBox:{
        backgroundColor:'#A19C9C',
        height:300,
        margin:15,
        borderBottomEndRadius:20,
        borderBottomLeftRadius: 20
        
    }
})
