import Feed from './components/Feed';
import './reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/Messages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
