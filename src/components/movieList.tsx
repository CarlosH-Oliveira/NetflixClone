import { useState } from "react"
import './movieList.css';

interface props{
    title:""
    dataList:any
}

export default function MovieList (props:props) {
    const [movieRowMargin, setMovieRowMargin] = useState(0)
    const handleLeftArrow = () => {
        if(movieRowMargin < 0){
            if(movieRowMargin + Math.round(window.innerWidth / 2) <= 0){
                setMovieRowMargin(movieRowMargin + Math.round(window.innerWidth / 2))
            }else{
                setMovieRowMargin(0)
            }
        }
    }

    const handleRightArrow = () => {
        if(movieRowMargin > ((props.dataList.results.length * 100)*(-1))){
            if(movieRowMargin - (movieRowMargin - Math.round(window.innerWidth / 2)) < (props.dataList.results.length * 151.5)*(-1)){
                setMovieRowMargin((props.dataList.results.length * 100)*(-1))
            }else{
                setMovieRowMargin(movieRowMargin - Math.round(window.innerWidth / 2))
            }
        }
    }

    return(
        <div className="movie-container">
            <h3><strong>{props.title}</strong></h3>

            <div className="movie-row-left" onClick={event => handleLeftArrow()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
            </div>

            <div className="movie-row-right" onClick={event => handleRightArrow()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
            </div>

            <div className="movie-row-block">
                <div className="movie-row" style={{marginLeft : movieRowMargin, width : props.dataList.results.length * 200}}>
                    {props.dataList.results.map((item:any, key:any) => (
                            <div className="movie-item" key={key}>
                                <img src={"https://image.tmdb.org/t/p/w300"+item.poster_path} alt="..."/>
                            </div>
                    ))}
                </div>
            </div>
                
        </div>
    )
}