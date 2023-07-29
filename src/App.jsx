import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState, createContext } from "react";
import DashboardPage from "./pages/DashboardPage";
export const CurrentUserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);
    const ProtectedRoute = ( {children}) => {
        if (!user) {
            console.log(`redirecting to login`)
            return <Navigate to={'/log-in'} replace />;
        }
        return children;
    };

    return (
        <CurrentUserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'log-in'} />} />

                <Route path={'/dashboard'} element={
                    <ProtectedRoute >
                        <DashboardPage />
                    </ProtectedRoute>
                } />

                {/*<Route path={'/dashboard'} element={<DashboardPage />} />*/}
                <Route path={'/log-in'} element={<LoginPage />} />
                <Route path={'/sign-up'} element={<SignupPage />} />
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
