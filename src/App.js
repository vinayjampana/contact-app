import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import ContactListing from './pages/ContactListing';
import ContactView from './pages/ContactView';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
      <Route path="/" element={<ContactListing />} />
      <Route path="/contacts" element={<ContactListing />} />
      <Route path="/contacts/:id/view" element={<ContactView />} />
      



      

      </Routes>
     
    </div>
    </BrowserRouter>
  
  );
}

export default App;
