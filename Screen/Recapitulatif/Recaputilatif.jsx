import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ChurchImg from '../../assets/img/church_icon.jpg'
import SelectList from 'react-native-dropdown-select-list'

export default function Recapitulatif() {
  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1',value:'Exemple culte 1'},
    {key:'2',value:'Exemple culte 2'},
    {key:'3',value:'Exemple culte 3'},
    {key:'4',value:'Exemple culte 4'},
    {key:'5',value:'Exemple culte 5'}
  ];

  return (
    <View style={styles.container}>
        <Image style={styles.headerImg} source={ChurchImg}/>
        <View style={styles.containerBottom}>
          <Text style={styles.title}>Recapitulatif</Text>

            <SelectList 
                setSelected={setSelected} 
                placeholder="Choisir le culte"
                searchPlaceholder="Rechercher un culte"
                data={data}
                onSelect={() => alert(selected)} 
                inputStyles={{color:'white', fontWeight:'500'}}
                maxHeight={200}
                boxStyles={styles.selectStyle}
                dropdownStyles={styles.selectDropDownStyle}
                dropdownTextStyles={{color:'white', fontSize:17}}
            />

            <TouchableOpacity style={styles.datePickerStyle}>
                <Text style={styles.dateTxt}>Choississez la date</Text>
                <AntDesign name='calendar' color={'white'} size={20}/>
            </TouchableOpacity>

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
        paddingRight:15
    },
    dateTxt:{
        color:'white',
        fontWeight:'500'
    }
})
