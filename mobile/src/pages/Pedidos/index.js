import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Text } from 'react-native';

import {formatRelative, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../services/api'

import Button from '../../components/Button'
import { Container, InfoCheck , Checkins, Title, Pedido} from './styles';

export default function Pedidos() {
  const [checkins, setCheckins] = useState([{}])
  const id = useSelector(state => state.auth.student_id) || 1

  useEffect( () => {
    carregarProdutos()
  },[])

  carregarProdutos = async () => {
      const resposta = await api.get(`students/${id}/checkins`)
      const dados = resposta.data.rows
      setCheckins(dados)
      console.log(checkins)
  }
  renderItens =  ({item}) => (
    <InfoCheck>
         <Title>
            <Text> Status Resposta</Text>
            <Text> { item.updatedAt && (formatRelative(parseISO(item.updatedAt), new Date(), { locale: pt }))}</Text>
         </Title>

         <Pedido>
           Alguma informação com algum Pedidoe porem com limtie para
           nao estrava ai
         </Pedido>
     </InfoCheck>
  )

  return (
    <Container>
    <Button onPress={console.log("renderizou")}>
      Novo Pedido de Auxílio
    </Button>

    <Checkins
         data = { checkins }
         keyExtractor = { item => String(item.id) }
         renderItem = { renderItens }
         onEndReachedThreshold = {0.1}
    />
  </Container>  );
}

