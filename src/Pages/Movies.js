import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination";


 const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        //console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
        //it will create no of pages it have
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
// eslint-disable-next-line
      }, [page]);
    return (
        <div>
          <span className="pageTitle">Discover Movies</span>
      
          <div className="trending">
            {content &&
              content.map((c) => (
                <SingleContent
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type="movie"
                  vote_average={c.vote_average}
                />
              ))}
          </div>
          {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
          )}
        </div>
      );
    
}

export default Movies