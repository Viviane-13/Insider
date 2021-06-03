import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons'

import {ContainerButton,Item} from './styles'

export default function ListItem({data}){
  return(
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => alert('Teste')}>
        <Feather name='link' color='#FFF' size ={24}/>
        <Item numberOfLines={1}>{data.long_url}</Item>
      </ContainerButton>
    </View>
  )
}