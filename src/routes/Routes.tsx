import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';

const style404 = {
    height: '100vh',
    with: '100vw',
    background: 'black',
    color: 'white',
    fontSize: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route
                    path="/*"
                    element={
                        <div style={style404}>
                            <p>404</p>
                            <p>Not Found</p>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
