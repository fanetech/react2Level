import Home from '@/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from '@/pages/services';
import Contact from '@/pages/contact';
import Error from '@/utils/Error';

function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact/>} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
