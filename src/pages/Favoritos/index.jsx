import { useEffect, useState } from 'react';
import './index.css';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('@tonflix');
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const handleExcluirFilme = (index) => {
    // Cria uma cópia da lista de filmes
    const novaLista = [...filmes];
    
    // Remove o filme correspondente ao índice
    novaLista.splice(index, 1);
    
    // Atualiza o estado e o localStorage
    setFilmes(novaLista);
    localStorage.setItem('@tonflix', JSON.stringify(novaLista));
    alert('Filme excluido com sucesso...')
  };

  return (
    <div className='container'>
      <div>
        <h1>Minha lista de filmes...</h1>
        <ul>
          {filmes.map((filme, index) => (
            <li key={index}>
              <div className='central'>
                <img
                  className='foto'
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt={filme.title}
                />
                <strong>{filme.title}</strong>
              </div>
              <div className='excluir central' onClick={() => handleExcluirFilme(index)}>
                Excluir
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favoritos;
