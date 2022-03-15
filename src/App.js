import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import AddCharacter from './components/characters/AddCharacter';
import CharacterDetail from './components/characters/CharacterDetail';
import Characters from './components/characters/Characters';
import EditCharacter from './components/characters/EditCharacter';
import NavBar from './components/navBar/NavBar';
import { CharacterProvider } from './context/CharacterContext';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <CharacterProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} >
            <Route path="/" element={< Characters />} />
            <Route path="detail/:id" element={<CharacterDetail />} />
            <Route path="add-character" element={<AddCharacter/> } />
            <Route path="edit-character/:id" element={<EditCharacter />}/>
          </Route>
          </Routes>
      </CharacterProvider>

    </BrowserRouter>
      {/* <header className="App-header">
        <img src="/images/canvia-c.svg" className="App-logo" alt="logo" />
        <p>
          Canvia Prueba Técnica
        </p>
      </header> */}
    </div>
  );
}

export default App;
