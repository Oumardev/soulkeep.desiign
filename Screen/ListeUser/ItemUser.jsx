import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

export default function ItemUser({id,active,name,setSelected}) {


    const COLOR = active ? '#5E8052' : '#6B6B6B'
    return (
        <TouchableOpacity 
            style={{...styles.item, backgroundColor: COLOR }}
            onPress={()=> setSelected(prevState => [...prevState, id])}
        >
            <Text style={styles.txt}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        height: 50,
        justifyContent:'center'
    },

    txt:{
        color: 'white',
        marginLeft: 13
    }
})