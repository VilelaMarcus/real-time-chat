import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { useStore } from './redux/store';
import './App.css';

const AppWrapper = () => {
  const store = useStore();

  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!currentUser.id) {
      return <Navigate to="/login" />;
    }

    console.log({currentUser})

    return children
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default AppWrapper;