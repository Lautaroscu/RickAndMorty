import { Characters } from "./components/ListOfChars"
import { CharacterDetails } from "./hooks/Char"
import Loader from "./components/Loading"
import { useChars } from "./hooks/useChars"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header"
import { Logo } from "./components/logo"
import { Footer } from "./components/footer";
function App() {
  const { characters, prevPage, nextPage, LOADING, CharKey, info, currentPage } = useChars() 
  
  return (
    <main >
      {LOADING ? <Loader /> :
        <Router>
          <Header>
            <Logo />
          </Header>

          <Routes>
            <Route element={<Characters characters={characters} prevPage={prevPage} currentPage={currentPage} nextPage={nextPage} CharKey={CharKey} info={info}  />} path="/" />
            <Route element={<CharacterDetails />} path="/character/:id" />
          </Routes>
        </Router>}
        <Footer />

    </main>


  )

}
export default App;




