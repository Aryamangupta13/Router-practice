import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export const githubData=async ()=>{
  const response = await fetch('https://api.github.com/users/Aryamangupta13')
  return response.json()
}

function GitHub() {
  //return load data for neareast ancestor loader
  const data=useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Aryamangupta13')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
      <div className='flex items-center flex-col bg-gray-600 text-white p-4 text-3xl'>
        <div>Github public Repos: {data.public_repos}</div>
      <div><img src={data.avatar_url} alt="Git picture" width={300}/></div>
      <div>name: {data.name}</div>
      <Link to="https://github.com/Aryamangupta13" className='text-xl text-cyan-500 hover:text-red-500'>github.com/Aryamangupta13</Link>
      </div>
    </>
  )
}



export default GitHub;