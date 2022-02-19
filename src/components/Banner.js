import React,{useEffect,useState} from 'react';
import axios from 'axios';
function Banner() {
  const[movies,setMovies] = useState([]);
  document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
  useEffect(function(){
     axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=1bbb5df8791aaf2d2eb6ad3e33c536b9&page=1').then((res)=> 
             {
                 console.table(res.data.results)
                 setMovies(res.data.results[0])
             }
             
     )
  })
  
  return <>
      <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] 
            h-[80vh] bg-center 
            bg-cover flex items-end
        `}>
            <div className='text-white bg opacity-80
            text-3xl p-2 bg-gray-900 w-full flex justify-center
            '>{movies.title}</div>
      </div>
      
  </>;
}

export default Banner;
