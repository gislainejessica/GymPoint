import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Image, Text, View } from 'react-native';
import Button from '../../components/Button'
import { Container, Checkins, InfoCheck } from './styles';

import api from '../../services/api'

import Header from '../../assets/header.png'
export default function Chekin() {
  const [checkins, setCheckins] = useState([])
  const [page, setPage] = useState(1)
  const id = useSelector(state => state.auth.student_id) || 1

  useEffect( () => {
    carregarProdutos()
  },[])

  carregarProdutos = async (page = 1) => {
      const resposta = await api.get(`students/${id}/checkins`)
      const dados = resposta.data.rows
      //setPage(page)
      setCheckins(dados)
  }
  renderItens =  ({item}) => (
    <InfoCheck >
         <Text> Check-in #{item.id}</Text>
         <Text> {item.createdAt}</Text>
     </InfoCheck>
  )
  carregaMais = () => {

  }
  return (
    <Container>
      <Button onPress={console.log("oi")}>
        Novo Check-In
      </Button>
      <Checkins
         data = { checkins }
         keyExtractor = { item => item.id }
         renderItem = { renderItens}
         onEndReached = { carregaMais }
         onEndReachedThreshold = {0.1}
      />

    </Container>
 );
}

 Chekin.navigationOptions = ({ navigation }) => ({
  headerBackImage: () => (
    <Image source={Header}/>
  )
})
/**
 *       if (page === producInfo.pages) return
      const pageNumber = page + 1
      carregarProdutos(pageNumber)


      ?page=${page}
 */
