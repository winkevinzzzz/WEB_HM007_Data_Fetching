import ActionmovieComponent from "@/components/ActionmovieComponent";
import CardmovieComponent from "@/components/CardmovieComponent";
import CrimemovieComponent from "@/components/CrimemovieComponent";
import DramamovieComponent from "@/components/DramamovieComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SciencefictionmovieComponent from "@/components/SciencefictionmovieComponent";
import { getMovieService } from "@/services/moives.service";
import Image from "next/image";

export default async function Home() {
  const allMovie = await getMovieService;
  return (
    <>
    <div className='bg-red-800'>
      <div className=' overflow-auto'>
    <NavbarComponent></NavbarComponent>
    </div>
    <div className=' mx-10'>
    <div className='font-bold text-2xl text-red-50 my-6'>ALL MOVIE {'>'}</div>
    <CardmovieComponent ></CardmovieComponent>
    <div className='font-bold text-2xl text-red-50 my-6'>ACTION MOVIE {'>'}</div>
    <ActionmovieComponent></ActionmovieComponent>
    <div className='font-bold text-2xl text-red-50 my-6'>DRAMA MOVIE {'>'}</div>
    <DramamovieComponent></DramamovieComponent>
    <div className='font-bold text-2xl text-red-50 my-6'>SCIENE FICTION MOVIE {'>'}</div>
    <SciencefictionmovieComponent></SciencefictionmovieComponent>
    <div className='font-bold text-2xl text-red-50 my-6'>CRIME MOVIE {'>'}</div>
    <CrimemovieComponent></CrimemovieComponent>
    </div>
    </div>
    </>
  );
}
