import React, { useEffect, useState } from 'react';
import Tmdb from './data/Tmdb';
import './App.css';
import MovieList from './components/movieList';
import FeaturedMovie from './components/featuredMovie';
import Header from './components/header';

function App() {
  const [movieData, setMovieData] = useState<Array<any>>()
  const [featuredData, setFeaturedData] = useState<any>(null)
  const [blackHeader, setBlackHeader] = useState("")
  
  useEffect(function(){
    const loadAll = async() => {
      const movieData = await Tmdb.getHomeList()
      setMovieData(movieData)

      const originals = movieData.filter( list => list.slug == "originals")
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      console.log(randomChosen)
      const chosen = originals[0].items.results[randomChosen]
      const chosenData = await Tmdb.getDetailedInfo(chosen.id)
      setFeaturedData(chosenData)
      console.log(chosenData)
    }
    loadAll()
  },[])

  useEffect(function(){
    const scrollListener = () =>{
      if(window.scrollY > 20){
        setBlackHeader("black-header")
      }else{
        setBlackHeader("")
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className="App">
      <Header class={blackHeader}/>
      {
        featuredData != null? <FeaturedMovie data={featuredData}/>:null
      }
      <div>
        {
          movieData?.map((item, key)=>(
            <MovieList title={item.title} dataList={item.items} key={key}/>
          ))
        }
      </div>
      <footer>
        Feito por Carlos Henrique Cândido Oliveira (carlosholiveiradev@outlook.com)<br/>
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  );
}

export default App;
