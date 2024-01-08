
import MovieCard from './components/MovieCard'

function MovieList(props) {


    return (
        <div>
            <div className='flex justify-start grid grid-cols-4 ml-12 mt-12 mr-12 mb-12 max-h-96 '>
                {
                    props.movieListData.map((ahmet) => {
                        return <MovieCard haci={ahmet} />
                    })
                }
            </div>


        </div>
    )
}

export default MovieList