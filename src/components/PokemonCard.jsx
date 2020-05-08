import React, { useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import { PkmnContext } from "../contexts/singlePkmn"
import styles from "./PokemonCard.module.css"

export default (props) => {
  const state = useContext(PkmnContext)[0]
  const { id } = props.match.params

  if (Object.keys(state).length === 0) {
    return <Redirect to="/" />
  }

  return (
    <div className={styles.PokemonCard}>
      <h1> {state.name} </h1>
      <div className={styles.Type}>
        {state.types.map(({ type }) => (
          <li key={type.name}> {type.name} </li>
        ))}
      </div>
      <div className={styles.idBase}>
        id: {state.id} - Base exp: {state.base_experience}
      </div>
      <div className={styles.Sprites}>
        <img
          alt={`${state.name} back default`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
        />
        <img
          alt={`${state.name} back shiny`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`}
        />
        <img
          alt={`${state.name} front default`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <img
          alt={`${state.name} front shiny`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
        />
      </div>
      <div className={styles.Skills}>
        {state.abilities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </div>
      <Link to="/" className={styles.Back}>
        Back
      </Link>
    </div>
  )
}
