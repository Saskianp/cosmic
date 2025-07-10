import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ClientsPage from './pages/Clients';
import WorksPage from './pages/Works';
import DirectorPartnersPage from './pages/DirectorPartners';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/our-work" element={<WorksPage />} />
      <Route path="/director-partners" element={<DirectorPartnersPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/our-client" element={<ClientsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      
    </Routes>
  )
}

export default App
