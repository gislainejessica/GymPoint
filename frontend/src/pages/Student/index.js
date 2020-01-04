import React, { useEffect, useState, useMemo } from 'react';
import Info from '../../components/PageInfo';
import Tabela from '../../components/TableList';

import api from '../../services/api';

// import { Container, Side, Box} from './styles';

export default function Student() {
 
  const  title = [ "NOME","EMAIL", "IDADE"]
  const [students, setStudents] = useState([])

  const dados = useMemo(() => {
    const lista = []
    students.map(student => {
      const lstStudent = [student.name, student.email, student.idade]
      lista.push(lstStudent)
    }) 
    return lista
  },[students])

  useEffect(() => {
      async function loadStudents(){
      const response = await api.get('students')
      setStudents(response.data)
    }
    loadStudents()
   }, [])
 

  return (
   <>
      <Info title={"Gerenciamento de Alunos"} button input={"Buscar alunos"} />
      <Tabela title = {title} data={dados} />
   </>
  );
}
