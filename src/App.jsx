import { Characters } from "./components/ListOfChars";
import { CharacterDetails } from "./hooks/Char";
import Loader from "./components/Loading";
import { useChars } from "./hooks/useChars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Logo } from "./components/logo";

function App ()  {
  const { characters, handlePage, LOADING , CharKey , info } = useChars()

  return (
    <main >
       {LOADING ? <Loader /> :
      <Router>
        <Header>
          <Logo />
        </Header>

        <Routes>
          <Route element={<Characters characters={characters} handlePage={handlePage} CharKey={CharKey} info={info}/> } path="/" />
          <Route element={<CharacterDetails />} path="/character/:id" />
        </Routes>

      </Router> }
    </main>
   

  )

}
export default App;




