import { Characters } from './pages/HomePage/ListOfChars'
import { CharacterDetails } from './hooks/Char'
import Loader from './components/Loading'
import { useChars } from './hooks/useChars'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Logo } from './components/logo'
import { Footer } from './components/footer'
import { Nav } from './components/nav'
import { Episodes } from './pages/EpisodesPage/EpisodesHome'
import { useEpisodes } from './hooks/useEpisodes'
import { EpisodeDetails } from './hooks/useEpisodeById'
function App () {
  const {
    characters,
    prevPage,
    nextPage,
    LOADING,
    CharKey,
    info,
    currentPage
  } = useChars()
  const { episodes } = useEpisodes()
  return (
    <main>
      {LOADING
        ? (
          <Loader />
          )
        : (
          <div className='subMain'>
            <Router>
              <Header className='header-component'>
                <Logo />
                <Nav />
              </Header>

              <Routes>
                <Route
                  element={
                    <Characters
                      characters={characters}
                      prevPage={prevPage}
                      currentPage={currentPage}
                      nextPage={nextPage}
                      CharKey={CharKey}
                      info={info}
                    />
                }
                  path='/'
                />
                <Route element={<CharacterDetails />} path='/character/:id' />
                <Route
                  element={<Episodes episodes={episodes} />}
                  path='/RickAndMorty/episodes'
                />
                <Route element={<EpisodeDetails />} path='/episode/:id' />
              </Routes>
            </Router>
            <Footer />
          </div>
          )}
    </main>
  )
}
export default App
