import React, { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Spinner from "./components/Spinner"
import "./App.css"

const PokemonList = lazy(() => import("./containers/PokemonList"))
const PokemonCard = lazy(() => import("./components/PokemonCard"))

function App() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={500} classNames="fade">
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <section className="fade">
                    <Suspense fallback={<Spinner />}>
                      <PokemonList {...routeProps} />
                    </Suspense>
                  </section>
                )}
              />
              <Route
                path="/pokemon/:id"
                render={(routeProps) => (
                  <section className="fade">
                    <Suspense fallback={<Spinner />}>
                      <PokemonCard {...routeProps} />
                    </Suspense>
                  </section>
                )}
              />
              <Route
                render={(routeProps) => (
                  <section className="fade">
                    <Suspense fallback={<Spinner />}>
                      <PokemonList {...routeProps} />
                    </Suspense>
                  </section>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

export default App

// import React from "react"
// import { Switch, Route } from "react-router-dom"
// import PokemonList from "./containers/PokemonList"
// import PokemonCard from "./components/PokemonCard"
// import "./App.css"

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={(routeProps) => <PokemonList {...routeProps} />}
//         />
//         <Route
//           path="/pokemon/:id"
//           render={(routeProps) => <PokemonCard {...routeProps} />}
//         />
//         <Route component={PokemonList} />
//       </Switch>
//     </div>
//   )
// }

// export default App
