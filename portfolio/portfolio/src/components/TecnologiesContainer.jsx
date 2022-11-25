import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass,
    DiBootstrap,
    DiGit,
    DiGithubBadge
} from 'react-icons/di';

//Estilização
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'sass', name: 'SASS', icon: <DiSass /> },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap /> },
    { id: 'git', name: 'Git', icon: <DiGit /> },
    { id: 'github', name: 'GitHub', icon: <DiGithubBadge /> },
];

const TechnologiesContent = () => {
    return <section className='tech-container'>
        <h2>Tecnologias</h2>
        <div id='tech-grid'>
            {technologies.map(tech => (
                <div className="tech-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tech-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto recusandae consectetur laboriosam harum in impedit exercitationem sunt, similique, eligendi quos quis iusto temporibus beatae molestiae quam possimus quod tempore placeat!</p>
                    </div>
                </div>))}
        </div>
    </section>
};

export default TechnologiesContent;