import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Text } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import Button from '../../components/Button';
import { Container, Checkins, InfoCheck } from './styles';

export default function Chekin() {
  const [checkins, setCheckins] = useState([{}])
  const id = useSelector(state => state.auth.student_id) || 1

  useEffect( () => {
    carregarProdutos()
  },[])

  carregarProdutos = async () => {
      const resposta = await api.get(`students/${id}/checkins`)
      const dados = resposta.data.rows
      setCheckins(dados)
  }
  renderItens =  ({item}) => (
    <InfoCheck >
         <Text> Check-in #{item.id}</Text>
         <Text> { item.createdAt && (formatRelative(parseISO(item.createdAt), new Date(), { locale: pt }))}</Text>
     </InfoCheck>
  )

  return (
    <Container>
      <Button onPress={console.log("")}>
        Novo Check-In
      </Button>
      <Checkins
         data = { checkins }
         keyExtractor = { item => String(item.id) }
         renderItem = { renderItens }
         onEndReachedThreshold = {0.1}
      />
    </Container>
 );
}

/**
 *       if (page === producInfo.pages) return
      const pageNumber = page + 1
      carregarProdutos(pageNumber)

      onEndReached = { carregaMais

      ?page=${page}
 */
