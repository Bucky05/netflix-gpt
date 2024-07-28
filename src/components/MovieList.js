import React from 'react';
import MovieCard from './MovieCard';
import { useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const MovieList = ({title, movies}) => {
    const scrollableRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const listRef = useRef(null);
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);   
  
      scrollableRef.current.style.cursor = 'grabbing';
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const xOffset = e.clientX - startX;
      scrollableRef.current.scrollLeft = scrollLeft - xOffset;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      scrollableRef.current.style.cursor = 'default';
    };
  
    useEffect(() => {
      const listElement = listRef.current;
  
      const handleScroll = () => {
        if (!listElement) return; // Check if listElement is still valid
  
        const scrollRight = listElement.scrollLeft + listElement.clientWidth >= listElement.scrollWidth - 10;
        if (scrollRight) {
          listElement.scrollLeft += 10;
          requestAnimationFrame(handleScroll);
        }
      };
  
      if (listElement) {
        listElement.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if (listElement) {
          listElement.removeEventListener('scroll', handleScroll);   
  
        }
      };
    }, []);
  return (
    <div className='px-2 '>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll' ref={scrollableRef}onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
           
            <div className='flex'>
                {movies?.length > 0 && movies.map((movie) => (<Link to={`movie/${movie.id}`} ><MovieCard posterPath={ movie.poster_path} /> </Link>))}
                 
            </div>
        </div>
    </div>
  )
}

export default MovieList
