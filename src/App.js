
import './App.css';
// import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState, useEffect } from 'react';

function App() {

  const [movieListData, setMovieListData] = useState([]);

  // useEffect(() => {
  //   // https://www.omdbapi.com/?i=tt3896198&apikey=153eb4d2
  //   fetch("https://www.omdbapi.com/?i=tt3896198&apikey=153eb4d2")
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       setMovieListData(data)
  //     })
  // }, [movieListData]);


  // console.log(movieListData);


  // KAdircan Not: 

  // Bu SAyfada yukardaki fetch cekilmior. ana sayfa yapılacak.. film yoksa hata veriyor... 






  return (
    <div className="App bg-gradient-to-r from-gray-700 to-gray-200	">
      <Navbar />
      <Search setMovieListData={setMovieListData} />
      <MovieList movieListData={movieListData} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
