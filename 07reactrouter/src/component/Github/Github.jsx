import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/sudhanshu2207')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })  
    // }, [])
    
  return (
    <div className='text-white bg-gray-500 m-3 text-center p-4 text-2xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={100} />
    </div>
  )
}

export default Github

//using optimize way
export const githunInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/sudhanshu2207')
  return response.json()
}