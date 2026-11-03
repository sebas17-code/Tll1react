import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './features/landing/components/Header';
import { Main } from './features/landing/components/Main';
import { Footer } from './features/landing/components/Footer';
import { Rickandmorty } from './features/landing/components/Rickandmorty';

// Si tu componente Props está en features/landing/components/Props.jsx:
import { Props } from './features/landing/components/Props'; 

// Componentes de Autenticación
import { Login } from './features/auth/components/Login';
import { Register } from './features/auth/components/Register';
import { ForgotPassword } from './features/auth/components/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/api" element={<Rickandmorty />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;