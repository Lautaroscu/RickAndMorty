
import { useEffect } from "react";
import { Characters } from "./components/ListOfChars";
import { CharacterDetails} from "./hooks/Char";
import Loader from "./components/Loading";
import { useChars } from "./hooks/useChars";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Logo } from "./components/logo";
import { useSearch } from "./hooks/useSearch";
import { useCharsfilters } from "./hooks/useCharFilters";
const App =  () => {

  const { characters, getChars  , LOADING   } =  useChars()
  useEffect(() => {
  getChars();
  
  } , [])
  
    return (  
       LOADING ? <Loader/> :
      <Router>
             <Header>
              <Logo />
          </Header>
         
        <Routes>
           <Route element={<Characters characters={characters}/>} path="/"  />
           <Route element={<CharacterDetails/>}  path="/character/:id"  />
        </Routes>
     
      </Router>
  
    )

        }
export default App;
 



