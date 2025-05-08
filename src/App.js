import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <ScrollToTop/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
