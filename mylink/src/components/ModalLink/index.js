import React from "react";
import { Text, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { ModalContainer, Container,Header, LinkArea, Title,LongURL, ShortLinkArea, ShortLinkUrl} from "./styles";
import { Feather } from "@expo/vector-icons";

export default function ModalLink({onClose}) {
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
          <TouchableOpacity>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongURL numberOfLines={1}>http://google.com</LongURL>
          <ShortLinkArea
            activeOpacity={1}
          >
            <ShortLinkUrl
              numberOfLines={1}
            >http://google.com
            </ShortLinkUrl>
            <TouchableOpacity>
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
