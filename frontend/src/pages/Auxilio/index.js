import React ,{ useEffect, useState, useMemo}from 'react';
import Tabela from '../../components/TableList';
import api from '../../services/api';
import Info from '../../components/PageInfo';

// import { Container } from './styles';

export default function Auxilio() {
    const title = [ "ALUNO"]
    const [students, setStudents] = useState([])

    const dados = useMemo(() => {
      const lista = []
      students.map(student => {
        const lstStudent = [student.name]
        lista.push(lstStudent)
      }) 
      return lista
    },[students])
  
    useEffect(() => {
      async function loadMatriculas(){
        const response = await api.get('helper-orders')
        setStudents(response.data)
      }
      loadMatriculas()
     }, [])
  
  return (
    <>
      <Info title={"Pedidos de Auxílio"} />
      <Tabela title={title} data={dados} type={"1"}/>
    </>
  );
}
