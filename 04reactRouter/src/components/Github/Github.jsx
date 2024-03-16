import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
   
//    const [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/ritik0027')
//         .then(response=>response.json())
//         .then(data=>{ console.log(data);
//             setData(data);
//         })
//     },[])
    
    return (
        <div className='text-3xl bg-gray-600 text-white p-3 text-center'>Github Followers :{data.followers}
        <img src={data.avatar_url} alt='Git Picture'/>
        </div>
    )
}

export default Github
 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/as1212')
    //console.log(response)
    .then(response=>response.json())
    console.log(response)
    return response
}