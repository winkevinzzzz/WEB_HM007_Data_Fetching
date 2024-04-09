export async function getMovieService(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}

export async function getActionMovie(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?genre=Action');
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}
export async function getDramaMovie(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama');
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}
export async function getScienceFictionMovie(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?genre=Science_Fiction');
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}
export async function getCrimeMovie(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?Crime');
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}

export async function getMovieID(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const data = await res.json();
    // console.log("movie data :",data)
    return data;
}
 
