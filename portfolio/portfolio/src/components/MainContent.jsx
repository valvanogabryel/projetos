import React from 'react';
import AboutContainer from './AboutContainer';
import TechnologiesContent from './TecnologiesContainer';
import ProjectsContent from './ProjectsContainer';

//Estilização
import '../styles/components/maincontent.sass';

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContent />
            <ProjectsContent />
        </main>
    )
};

export default MainContent;