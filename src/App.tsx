import React from 'react';
import './assets/css/tailwind.css';
import './assets/css/index.css';
import Navigation from './Header/Navigation';
import Hero from './Header/Hero';
import { Body } from './Body/Body';

function App() {
    return (
        <div className="min-h-screen">
            <div className="relative overflow-hidden">
                <Navigation />
                <main>
                    <Hero />

                    <Body />
                </main>
            </div>
        </div>
    );
}

export default App;
