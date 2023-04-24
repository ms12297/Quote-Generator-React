import RandBox from './RandBox';
import AllQuotes from './AllQuotes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RandBox />} />
        <Route path='/all-quotes' element={<AllQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
