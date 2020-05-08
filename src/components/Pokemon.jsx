import React, { useState, useEffect, useContext, memo } from "react"
import { Link } from "react-router-dom"
import { PkmnContext } from "../contexts/singlePkmn"
import styles from "./Pokemon.module.css"

const Pokemon = (props) => {
  const { url } = props
  const [pkmn, setPkmn] = useState({})
  const [cancel, setCancel] = useState(false)
  const setState = useContext(PkmnContext)[1]

  useEffect(() => {
    const getPkmn = async () => {
      const res = await fetch(url)
      const jsonRes = await res.json()
      if (!cancel) setPkmn(jsonRes)
    }
    getPkmn()

    return () => setCancel(true)
  }, [url, cancel])

  const setPkmnContext = () => setState(pkmn)

  return (
    <div className={styles.Pokemon}>
      {pkmn.sprites && (
        <Link to={`/pokemon/${pkmn.id}`} className={styles.PokemonLink}>
          <img
            src={pkmn.sprites.front_default}
            alt={pkmn.name}
            onClick={setPkmnContext}
          />
        </Link>
      )}
    </div>
  )
}

export default memo(Pokemon)
