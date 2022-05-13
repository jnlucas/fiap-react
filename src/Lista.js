function Lista(props){
    return(
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
              { props.usuarios.map( usuario => {
                  return (
                      <tr key={usuario.id}>
                          <td>{usuario.id}</td>
                          <td>{usuario.name}</td>
                          <td>{usuario.email}</td>
                          <td>
                          </td>
                          
                      </tr>
                      )
              } ) }
          </tbody>
      </table>
    )
}

export default Lista;