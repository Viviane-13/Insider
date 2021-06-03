import React from "react";
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Share } from "react-native";
import { ModalContainer, Container,Header, LinkArea, Title,LongURL, ShortLinkArea, ShortLinkUrl} from "./styles";
import { Feather } from "@expo/vector-icons";
import Clipboard from 'expo-clipboard';

export default function ModalLink({onClose,data}) {

  function copyLink(){
    Clipboard.setString(data.link);
    alert('Link copiado com sucesso: ');
  }
  async function handleShare(){
    try {
      const result = await Share.share({
        message:`Link: ${data.link}`
      });
      if(result === Share.sharedAction){
        if(result.activetyType){
          console.log('ActivityType');
        }else{
          console.log('Compartilhado com sucesso');
        }
      }else if (result.action === Share.dismissedAction){
        console.log('Modal Fechado');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>
      
      <Container>
        <Header>
          <TouchableOpacity>
            <Feather name="x" color="#212743" size={30} onPress={onClose} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongURL numberOfLines={1}>{data.long_url}</LongURL>
          <ShortLinkArea
            activeOpacity={1}
            onPress = {copyLink}
          >
            <ShortLinkUrl
              numberOfLines={1}
            >{data.link}
            </ShortLinkUrl>
            <TouchableOpacity onPress = {copyLink}>
              <Feather
                name= "copy"
                color = "#FFF"
                size = {25}
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
