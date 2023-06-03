import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound'
import {Routes, Route} from 'react-router-dom';
import './Scss/global.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="Main" element={<Main/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
