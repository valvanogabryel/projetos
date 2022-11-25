import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

//Estilização
import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h1>Gabryel Valvano</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
};

export default App;
