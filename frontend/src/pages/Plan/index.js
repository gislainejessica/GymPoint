import React, { useEffect, useState, useMemo }  from 'react';
import Tabela from '../../components/TableList';
import Info from '../../components/PageInfo';
import api from '../../services/api'

import { Container } from './styles';

export default function Plan() {

  const  title = ["TÍTULO","DURAÇÃO", "VALOR MENSAL"]
  const [students, setStudents] = useState([])

  const dados = useMemo(() => {
    const lista = []
    students.map(student => {
      const lstStudent = [student.title, student.duration, student.price]
      lista.push(lstStudent)
    }) 
    return lista
  },[students])

  useEffect(() => {
    async function loadPlanos(){
      const response = await api.get('planos')
      setStudents(response.data)
    }
    loadPlanos()
   }, [])
 
  return (
    <Container>
      <Info title={"Gerenciamento de Planos"} button />
      <Tabela title={title} data={dados} />
    </Container>
  );
}
