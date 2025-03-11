import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

import './style.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Profile />
                <WorkExperience />
                <Skills />
                <Education />
                <Hobbies />
            </main>
        </div>
    );
}

export default App;
