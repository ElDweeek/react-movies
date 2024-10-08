import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import MyPagination from '../MyPagination/MyPagination';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AddToWish } from '../../Redux/Actions/WishListAction.js'
import './ListMovies.css'
import { apiKey, apiUrl } from '../../apiConfig.js';
// import 'bootstrap/dist/css/bootstrap.min.css'

const ListMovies = () => {

  const [data, setData] = useState({ films: [], totalPages: 0 })
  const [page, setPage] = useState(1)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl}?api_key=${apiKey}`, { params: { page } });
        setData({ films: res.data.results, totalPages: res.data.total_pages });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]); 

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const history = useHistory();

  const handleCardClick = (id) => {
    history.push(`/movie/${id}`);
  };


  const dispatch = useDispatch();

  const addToWish = (filmID) => {
    const storedMovies = JSON.parse(localStorage.getItem('wishList')) || [];
  
    if (storedMovies.some(storedFilm => storedFilm === filmID)) {
      console.log('Already in local storage');
    } else {
      storedMovies.push(filmID);
  
      localStorage.setItem('wishList', JSON.stringify(storedMovies));
      
      dispatch(AddToWish(storedMovies.length));
    }
  };
  console.log(data.films, data.totalPages);
  return (
    <>
      <div className="mycontainer">
        <div className="row">
          {
            data.films && data.films.length > 0 && data.films.map((film, index) => {
              return (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={film.id} >
                  <Card className='card-container border-0' role='button' onClick={() => handleCardClick(film.id)}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} />
                    <Card.Body className='pt-2 ps-1'>
                      <Card.Title className='text-truncate text-white fs-6 m-0 '>{film.title}
                      </Card.Title>
                      <Card.Text className='small-text d-flex justify-content-between'>
                        {film.release_date}
                        <span className="add-wish" onClick={(e) => {e.stopPropagation(); addToWish(film.id)}}>
                          <FontAwesomeIcon icon={faHeart} size='xl' />
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }

          {
            data.totalPages > 0 && (
              <MyPagination total={data.totalPages}
                currentPage={page}
                onChangePage={handleChangePage}
              />
            )
          }
        </div>
      </div>
    </>

  )
}


export default ListMovies;