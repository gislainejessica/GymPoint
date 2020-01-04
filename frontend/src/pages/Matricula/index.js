import React ,{ useEffect, useState, useMemo}from 'react';
import Tabela from '../../components/TableList';
import api from '../../services/api';

import Info from '../../components/PageInfo';

// import { Container } from './styles';

export default function Matricula() {

  const  title = ["ALUNO","PLANO", "INÍCIO", "TÉRMNINO", "ATIVA"]
  const [students, setStudents] = useState([])

  const dados = useMemo(() => {
    const lista = []
    students.map(student => {
      const lstStudent = [student.student.name, student.plano.title, student.start_date, student.end_date, student.active]
      lista.push(lstStudent)
    }) 
    return lista
  },[students])

  useEffect(() => {
    async function loadMatriculas(){
      const response = await api.get('matriculas')
      setStudents(response.data)
    }
    loadMatriculas()
   }, [])

  return (
    <>
      <Info title={"Gerenciamento de Matrículas"} button />
      <Tabela title={title} data={dados} />
    </>
  );
}
