import React from 'react'

function MovieCard(props) {
    return (
        <div >
            <div className="card card-compact border border-black w-96 bg-base-100 shadow-xl mb-8 max-h-120 min-h-120 bg-gradient-to-r from-gray-200 to-gray-700">
                <figure><img src={props.haci.Poster} alt={props.haci.Title} className='max-h-96 min-h-96 mt-12 ' /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-left">Film Adı: {props.haci.Title}</h2>
                    <h4 className="card-title justify-left">Yapım Yılı:{props.haci.Year}</h4>

                </div>
            </div>
        </div>


    )
}

export default MovieCard