import { useState } from 'react';
import './featuredMovie.css';

interface props{
    data:any
}

export default function FeaturedMovie (props:props) {
    var image_path = props.data.backdrop_path!=null?props.data.backdrop_path:props.data.poster_path
    return(
        <section className="featured" style={{backgroundImage:"url(https://image.tmdb.org/t/p/original"+image_path+")"}}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className='featured-container'>
                        <h1 className='featured-name'>{props.data.name?props.data.name:props.data.title}</h1>
                        <div className='featured-info'>
                            <div className='featured-points'>
                                {Math.round(props.data.vote_average)} pontos
                            </div>
                            <div className='featured-seasons'>
                                {props.data.number_of_seasons!=undefined?<div>{props.data.number_of_seasons} {props.data.number_of_seasons==1?"temporada":"temporadas"}</div>:null} 
                            </div>
                            <div className='featured-year'>
                                {props.data.first_air_date?props.data.first_air_date.split("-")[0]:props.data.release_date.split("-")[0]}
                            </div>
                        </div>
                        <div className='featured-overview'>
                            {props.data.overview}
                        </div>
                        <div className='featured-buttons'>
                            <a href="" className='watch-featured'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                                <p className='featured-watch-text'>Assistir</p>
                            </a>
                            <a href="" className='add-to-list-featured'>+ Minha Lista</a>
                        </div>
                        <div className='featured-genres'>
                        <strong>Gêneros: </strong>{props.data.genres.map((item:any, key:any) => (
                                key>0&&item.name!="Soap"?", "+item.name:item.name!="Soap"?item.name:null
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}