import axios from "axios";
import { useEffect, useState } from "react";


function Tabela(){

    const [usuarios, setUsuarios] = useState([]);


  useEffect(() => {
        axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
            setUsuarios(response.data.users);
            console.log(response);
        })
    },[])


  return (
      <div>
        <form className="formulario">
        <label>Nome</label>
        <input name="name" value="" />
        <label>Email</label>
        <input name="email" value="" />
        <label>senha</label>
        <input name="password" value="" />
        
        <button type="submit">Enviar</button>
        </form>
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
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                        )
                } ) }
            </tbody>
        </table>
    </div>
      
      
  );
}

export default Tabela;