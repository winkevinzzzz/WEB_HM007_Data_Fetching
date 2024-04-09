import Navbar from '@/components/Navbar'
import { getMovieID } from '@/services/moives.service';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";



const page = async ({params}) => {
    console.log("id in dynamic route : ",params.movieID)
    const movie = await getMovieID(params.movieID);
    console.log("first,", movie)
    const dateString = movie.payload.posted_at;
const date = new Date(dateString);

const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const ampm = hours >= 12 ? "pm" : "am";

const formattedDate = `${monthName}${day}-${year} ${hours % 12 || 12}:${minutes}:${seconds}${ampm}`;

  return (
    <div>
    <Navbar></Navbar>
    {/* {movie.payload((data) => ( */}
<div class="bg-red-200  py-8 h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-full w-full rounded-lg bg-gray-300  mb-4">
                    <img class="w-full h-full object-cover" src={movie.payload.image? movie.payload.image : "../bg.jpeg"} alt="Product Image"/>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{movie.payload.director}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {movie.payload.runtime}minutes
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">{movie.payload.genre}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Rating :</span>
                    <div class="flex items-center mt-2">
{movie.payload.rating >= 5 ? (
  <>
    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
  </>
) : movie.payload.rating > 4 ? (
  <>
    <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
  </>
) : movie.payload.rating > 3 ? (
  <>
    <FaStar /><FaStar /><FaStar /><CiStar /><CiStar />
  </>
) : (
  <>
    <FaStar /><FaStar /><CiStar /><CiStar /><CiStar />
  </>
)}                   
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">{movie.payload.movie_title} ({movie.payload.released_year})</span>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Movie Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {movie.payload.description}
                    </p>
                </div>
                <div class="flex mb-4">
                    <div class="mr-4">
                        
                        <span class="font-bold text-gray-700 dark:text-gray-300">{formattedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* ))} */}
    </div>
  )
}

export default page