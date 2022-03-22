import React, { useEffect, useState } from 'react'

function Card({name}) {

  const [cityDatas, setCityDatas] = useState({})

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c9691a6409a4f0aa1a1e0eba2d123e0b`).then(data=>data.json()).then(data=>data.main).then(data=>setCityDatas(data))
  },[])

  return (
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{(cityDatas.temp+(-272.15)).toFixed(1)}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card