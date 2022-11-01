import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
const index = () => {
  const [pokemon, setPokemon] = useState("")
  const [dataType, setDataType] = useState([])
  const [data, setData] = useState(undefined)

  const handleChange = (event) => {
    setPokemon(event.target.value)
  }

  useEffect(() => {
    if (data) {
      setDataType(data.types)
    }
  }, [data])

  const handleSubmit = () => {
    debugger
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div>
        {
          data && (
            <>
              <p className='name'>{data.name}</p>
              <Image width={200} height={200} src={data.sprites.front_default} className="default-image"/>
            </>
          )
        }
        {
          dataType && (
            dataType.map(type =>{
              return(
                  <p className='type'>{type.type.name}</p>

              )
            })
          )
        }
        <div className='row'>
          <input type="text" value={pokemon} onChange={value => handleChange(value)} name="pokemon" />
        </div>
          <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default index