import { getActionMovie } from '@/services/moives.service';
import React from 'react'
import Link from "next/link";

const ActionmovieComponent = async() => {
    const ActionMovie = await getActionMovie();

  return (
    <div>
        {/* ActionmovieComponent */}
        <div className='flex flex-row overflow-auto'>
    {ActionMovie.payload.map((data)=>(
<Link key={data.movie_id} href={`/view-movie-details/${data.movie_id}`}>
<div className='flex mr-6' key={data.movie_id}>
<div className="card w-96 bg-red-50 shadow-xl">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-1">
    {data.movie_title}
    </h2>
    <p className=" line-clamp-2">{data.description}</p>
  </div>
</div>
</div></Link>
    ))}
</div>
    </div>
  )
}

export default ActionmovieComponent