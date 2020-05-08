import { useState, useEffect } from "react"

const useLocalStorageCachedState = (url, defaultPokemon) => {
  const [state, setState] = useState([])
  const [cache, setCache] = useState([])
  const [cancel, setCancel] = useState(false)

  useEffect(() => {
    let pokemon
    const getPkmn = async () => {
      try {
        pokemon = JSON.parse(window.localStorage.getItem("RNMCPkmn") || "[]")
        if (pokemon.length === 0) {
          const res = await fetch(url)
          const resJson = await res.json()
          window.localStorage.setItem(
            "RNMCPkmn",
            JSON.stringify(resJson.results)
          )
          pokemon = resJson.results
          console.log(pokemon)
        }
      } catch (err) {
        pokemon = defaultPokemon
        console.log(err)
      }
      if (!cancel) {
        setState(pokemon)
        setCache(pokemon)
      }
    }
    getPkmn()
    return () => setCancel(true)
  }, [url, defaultPokemon, cancel])

  return [state, setState, cache, setCache]
}

export default useLocalStorageCachedState
