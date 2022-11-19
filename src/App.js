import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import './App.scss';

import { publicRoutes } from '~/routes';
function App() {
    return (
        <Router>
            <>
                <Routes>
                    {publicRoutes.map((route, i) => {
                        const Comp = route.component;

                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Comp />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </>
        </Router>
    );
}

export default App;
