import { StrictMode, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
// const Details = lazy(() => import('./Details'))
// const SearchParams = lazy(() => import('./SearchParams'))
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}> 
        <div className="p-0 m-0" style={{ background:"url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)" }}>
      {/* <Suspense fallback={<h2>Loading route..</h2>}> */}
        {/* <Router> */}
          <header
          className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link to="/" className="text-6xl text-white hover:text-gray-200">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        {/* </Router> */}
      {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
    </StrictMode>
    
  );
};

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.querySelector("#root")
// );

export default App