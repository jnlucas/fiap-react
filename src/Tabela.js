import axios from "axios";
import { useEffect, useState } from "react";


function Tabela(){

    const [usuarios, setUsuarios] = useState([]);


  useEffect(() => {
        axios.get('https://iot.14mob.com/lista.json').then( response => {
            setUsuarios(response.data);
            console.log(response);
        })
    },[])


  return (
    <table className='minhaTabela'>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            </tr>
        
        </thead>  
        <tbody> 
            { usuarios.map( usuario => {
                return (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.descricao}</td>
                    </tr>
                    )
            } ) }
        </tbody>
      </table>
      
  );
}

export default Tabela;