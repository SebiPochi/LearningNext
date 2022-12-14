import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Autocomplete from '@components/Autocomplete/Autocomplete'
import pokemons from '../pokemons.json'
import { useAppContext } from '../context/Context'
const index = () => {
  const [pokemon, setPokemon] = useState("")
  const [dataType, setDataType] = useState([])
  const [data, setData] = useState(undefined)
  const [pokemonList, setPokemonList] = useState(undefined)

  
  const { inputPokemon, setInputPokemon } = useAppContext()

  useEffect(()=>{
      console.log(inputPokemon);
  })

  const handleChange = (event) => {
    setPokemon(event.target.value.toLowerCase())
  }

  useEffect(() => {
    if (data) {
      setDataType(data.types)
    }
  }, [data])

  const handleSubmit = () => {
    if (pokemon) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }
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
        <button onClick={handleSubmit}>Search</button>

        <div className='row'>
          <input type="text" value={pokemon} onChange={value => handleChange(value)} name="pokemon" />
        </div>
        <Autocomplete
        suggestions={pokemons}
      />
    </div>
  )
}

export default index