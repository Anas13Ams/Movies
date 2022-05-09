import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'
import Movie from './src/components/Movie'
import { useEffect, useState } from 'react'
import {Button, container, Row, Col} from 'react-bootstrap'
import Navbar2 from '../components/navbar'
import Slider from "react-slick";
 




export default function Home(initialData) {
  const [searchresults, setSearchResults] = useState([])
  const [formInput, setFormInputs] = useState({})
  const [searchTerm, setsearchTerm] = useState('')
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  useEffect(() => {
    
    
      setSearchResults(initialData.trendingMovies.results)
      
    return
  }, [initialData])
  


  return (
    
    <div><Navbar2/>
    <div className='container'>
   

      
      
      <Head>
      <div className='red-background'></div>
      
        <title>Movies App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel= "stylesheet" href="styles.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link />
      </Head>
    
      <Row >
      
        <form>
        
     
        </form>
        


      </Row>
      
      

    
      
      
      <div className="movie-search-results-grid">
        
        
        
        
        {searchresults?.map((each, index) => {
          
          if (each.poster_path == null) {
            each.poster_path = "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
          }
          console.log("toto");
          
         return(
           
         <Movie 
          index={each.id}
          //title={each.title}
          poster_path={each.poster_path}
          overview={each.overview}

          />
        
          )

        
        
        
        
        
        
        })}
      </div>
    </div>
    </div>
  )
}


export async function getStaticProps(context) {
  let trendingMovies = await fetch ('https://api.themoviedb.org/3/discover/movie?api_key=3dce55eccd2484cb132a35f17219dc84&language=en-US%20&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2000')
  trendingMovies = await trendingMovies.json()

  console.log (trendingMovies)
  return {
    props: {trendingMovies: trendingMovies}, // will be passed to the page component as props
  }
}
