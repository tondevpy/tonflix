import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './index.css';
import { format } from 'date-fns';


function Filmes() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: '49f77d92e98ae46cc56542a903ab68ad',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('Filme não encontrado...');
        });
    }
    loadingFilme();
  }, []);

  function salvarFilme() {
    let minhaLista = localStorage.getItem('@tonflix')

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

    if (hasFilme) {
      alert('Esse filme já esta na lista...')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@tonflix", JSON.stringify(filmesSalvos))
    alert('Filme salvo com sucesso...')

  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filme...</h2>
      </div>
    );
  }
  return (
    <div className="filme">
      <div className="content">
        <h1>{filme.title}</h1>
        <a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} rel='external' target='blank'>Trailer</a>
        <img
          src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
          alt={filme.title}
        />
        <p>{filme.overview} </p>
        <p><strong>Pontuação:</strong> {filme.vote_average}</p>
        <p><strong>Lançamento:</strong> {format(filme.release_date, 'dd/MM/yyyy')}</p>
          
          <button onClick={salvarFilme}>Favoritar</button>
        
      </div>
    </div>
  );
}

export default Filmes;
