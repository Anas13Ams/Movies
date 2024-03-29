import Slider from "react-slick";

const Movie = ({title,index,overview,poster_path}) => {
  const IMAGES_API = 'https://Image.tmdb.org/t/p/w500/';
  
  return (
    <div className = "movie" key={index}>
       <h3> {title} </h3>
       <img src={IMAGES_API + poster_path} alt={title}/>
       <div className="movie-overview"> 
       {overview} </div>
       
    </div>
  )

}

export default Movie;