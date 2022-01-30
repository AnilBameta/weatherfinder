import React, {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER } from '../Graphql/Queries';
export default function Home() {
    const [city,setCity] = useState()

    const [getWeather, {data,error}] = useLazyQuery(GET_WEATHER, {
        variables: {name:city}
    })

    if(error) return <h1>Error Found</h1>;
    if (data) {
        console.log(data)
    }

    return (
        <div className='home'>
            <h1>Search for Weather</h1>
            <input type= "text" placeholder= "City Name.." onChange={(e)=> setCity(e.target.value)}/>
            <button onClick={getWeather}>Search</button>
            {data && (
                <>
            <h1>{data.getCityByName.name}</h1>
            <h1>{data.getCityByName.weather.summary.title}</h1>
            <h1>{data.getCityByName.weather.temperature.actual}</h1>
            </>
            )}
            
        </div>
    )
}