import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./content/LoginPage";
import SignupPage from "./content/SignupPage";

// import './App.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'/log-in'} />} />
            <Route path={'/log-in'} element={<LoginPage />} />
            <Route path={'/sign-up'} element={<SignupPage />} />
        </Routes>
        // <SignUpForm />
    );
}

export default App;
