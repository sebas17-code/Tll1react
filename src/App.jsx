import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './features/landing/components/Header';
import { Main } from './features/landing/components/Main';
import { Footer } from './features/landing/components/Footer';
import { Rickandmorty } from './features/landing/components/Rickandmorty';
import { Props } from './features/landing/components/Props'; 

// Componentes de Autenticación
import { Login } from './features/auth/components/Login';
import { Register } from './features/auth/components/Register';
import { ForgotPassword } from './features/auth/components/ForgotPassword';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/api" element={<Rickandmorty />} />
        <Route path="/props" element={<Props />} />
        {/* Ruta comodín: redirige cualquier ruta desconocida al Main para evitar pantallas vacías */}
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;