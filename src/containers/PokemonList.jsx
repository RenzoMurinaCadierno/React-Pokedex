import React, { useState, useEffect } from "react"
import useLocalStorageCacheState from "../hooks/useLocalStorageCacheState"
import Pokemon from "../components/Pokemon"
import defaultPokemon from "../assets/defaultPokemon"
import styles from "./PokemonList.module.css"

function PokemonList() {
  const [pokemon, setPokemon, cache] = useLocalStorageCacheState(
    `https://pokeapi.co/api/v2/pokemon/?&limit=151`,
    defaultPokemon
  )
  const [name, setName] = useState("")

  useEffect(() => {
    const save = [...cache]
    const result = save.filter((p) => p.name.includes(name.toLowerCase()))
    setPokemon(result)
  }, [name, cache, setPokemon])

  const handleChange = ({ target: { value } }) => setName(value)

  return (
    <div className={styles.PokemonList}>
      <input
        className={styles.SearchInput}
        value={name}
        placeholder="Search..."
        onChange={handleChange}
      />
      <div className={styles.PokemonGrid}>
        {pokemon.map((p) => (
          <Pokemon key={p.name} url={p.url} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
