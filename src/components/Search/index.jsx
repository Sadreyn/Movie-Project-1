import React, { useState } from 'react'

function Search(props) {
    const [searchMovie, setSearchMovie] = useState("");


    const handleSearchMovieChange = (e) => {
        setSearchMovie(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchMovie === "") {
            alert("Lütfen Arayacağımız Filmi Yazınız.")
            return
        }


        fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=153eb4d2`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
                props.setMovieListData(data.Search)
            })
        // .then((err) => {
        //     if (err.Search && Array.isArray(err.Search) && err.Search.length > 0) {
        //         const validMovies = err.Search.filter((movie) => movie.Title);

        //         if (validMovies.length > 0) {
        //             props.setMovieListData(validMovies);
        //         } else {
        //             console.log('Film bulunamadı.');
        //         }
        //     } else {
        //         console.log('denemel.');

        //     }
        // })








    }
    console.log(searchMovie)
    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchMovie} placeholder="Aradığınız Filmi Yazınız" className="input input-bordered w-full max-w-xs bg-gray-500 " onChange={handleSearchMovieChange} />
                <button type="submit" className="btn btn-neutral" >Ara</button>
            </form>


        </div>
    )
}

export default Search