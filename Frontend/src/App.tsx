import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Register';
// import AddProductPage from './pages/AddProductPage';
// import GeneratePDFPage from './pages/GeneratePDFPage';
import Header from './components/Header';
import AddProduct from './pages/AddProduct';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="/add-product" element={<AddProductPage />} /> */}
          {/* <Route path="/generate-pdf" element={<GeneratePDFPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
