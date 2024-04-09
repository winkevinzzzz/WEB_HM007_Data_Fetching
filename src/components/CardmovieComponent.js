import { getMovieService } from "@/services/moives.service";
import Link from "next/link";
import React from "react";
const CardmovieComponent = async () => {
  const allMovie = await getMovieService();
  return (
    <div className="flex flex-row  overflow-auto">
      {allMovie.payload.map((data) => (
        <Link key={data.movie_id} href={`/view-movie-details/${data.movie_id}`}>
          <div className="flex mr-6">
            <div className="card w-96 bg-red-50 shadow-xl">
              <figure>
                <img src={data.image ? data.image : "../bg.jpeg"} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title line-clamp-1">{data.movie_title}</h2>
                <p className=" line-clamp-2">{data.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardmovieComponent;
