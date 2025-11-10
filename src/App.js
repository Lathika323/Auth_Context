import './App.css';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="app-container">
    <ThemeProvider>          {/* Parent component */ }
      <AuthProvider>
        <CartProvider>
          <Login/>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
