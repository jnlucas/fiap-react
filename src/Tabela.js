import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";



function Tabela(){

    const [usuarios, setUsuarios] = useState([]);
    const [id,setId] = useState("");
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    
    function salvarFormulario(){
        

        let parametros = {
            name: nome,
            email: email,
            password: senha
        }
        axios.post('https://iot.14mob.com/api-fiap/public/index.php/users', parametros).then(response => {
            if(response.status == 201){
                alert('Ebaaaaa deu certo')
            }else{
                alert('lascou')
            }
        }).catch( error => console.log(error));

    }

    function removerUsuario(id){
        console.log('funcionando' + id);

        axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then( response => {
            alert('Deu certo removi o usuario')

            window.location = "";

        }).catch( error => console.log(error));

    }

    function atualizarUsuarioApi(){

        let parametros = {
            name: nome,
            email: email,
            password: senha
        }
        axios.put('https://iot.14mob.com/api-fiap/public/index.php/users/'+ id, parametros).then(response => {
            if(response.status == 200){
                alert('Ebaaaaa deu certo')
            }else{
                alert('lascou')
            }
        }).catch( error => console.log(error));
    }

    function atualizarUsuario(usuario){
        setId(usuario.id);
        setNome(usuario.name);
        setEmail(usuario.email);
        setSenha(usuario.password);
    }
    
  useEffect(() => {
        axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
            setUsuarios(response.data.users);
            console.log(response);
        })
    },[])


  return (
      <div>
        <form className="formulario" onSubmit={event => {
            event.preventDefault();
            if(id != ''){
                atualizarUsuarioApi()
            }else{
                salvarFormulario();
            }
            return false;
        } } > 
        <label>Nome</label>
        <input name="name" value={ nome }  onChange={ e => setNome(e.target.value) } />
        <label>Email</label>
        <input name="email" value={ email } onChange={ e => setEmail(e.target.value) } />
        <label>senha</label>
        <input name="password" value={ senha } onChange={ e => setSenha(e.target.value) } />
        
        <button type="submit">Enviar</button>
        </form>

        <p>{ nome }</p>
        <p>{ email }</p>
        <p>{ senha }</p>
        
        <table className='minhaTabela'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
                </tr>
            
            </thead>  
            <tbody> 
                { usuarios.map( usuario => {
                    return (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <button onClick={ event => atualizarUsuario(usuario) } > Editar </button>
                                <button onClick={ event => removerUsuario(usuario.id) } > Deletar </button>
                            </td>
                            
                        </tr>
                        )
                } ) }
            </tbody>
        </table>
    </div>
      
      
  );
}

export default Tabela;