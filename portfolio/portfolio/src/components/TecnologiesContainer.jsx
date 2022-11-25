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
import ScrollReveal from 'scrollreveal';

//Estilização
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, scroll: 1, text: 'HyperText Markup Languague (Linguagem de Marcação de HiperTexto) é a ferramenta Front-End que dá estrutura ao site.' },
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, scroll: 2, text: 'Cascading Style Sheets (Folha de Estilo em Cascata) é o mecanismo que dá estilo e beleza ao site.' },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, scroll: 3, text: 'Uma linguagem de programação que, juntamente com HTML e CSS, fornece ao usuário uma experiência mais agradável, com interações e animações dinâmicas.' },
    { id: 'react', name: 'React', icon: <DiReact />, scroll: 4, text: 'Uma biblioteca JavaScript de código aberto. Útil para criar interfaces de usuário (UI).' },
    { id: 'sass', name: 'SASS', icon: <DiSass />, scroll: 5, text: 'Uma linguagem de extensão das folhas de estilo. Serve para potencializar o CSS.' },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />, scroll: 6, text: 'Um framework web que facilita a criação de sites amigáveis e responsivos. Usa HTML, CSS e JavaScript. Útil para aumentar a velocidade de produção.' },
    { id: 'git', name: 'Git', icon: <DiGit />, scroll: 7, text: 'Git é o sistema de controle de versão open source mais usado no mundo atualmente. Utilizado para controlar o histórico de alterações de arquivos e projetos em desenvolvimento.' },
    { id: 'github', name: 'GitHub', icon: <DiGithubBadge />, scroll: 8, text: 'Uma plataforma de hospedagem de código-fonte e arquivos na nuvem.' },
];

window.sr = ScrollReveal({ reset: true })

for (let i = 0; i < technologies.length; i++) {
    technologies.forEach(() => {
        const scrollElement = technologies[i].scroll
        sr.reveal(scrollElement, {
            rotate: { x: 0, y: 80, z: 40 },
            duration: 1500
        })
    })
}

const TechnologiesContent = () => {
    return <section className='tech-container'>
        <h2>Tecnologias</h2>
        <div id='tech-grid'>
            {technologies.map(tech => (
                <div className="tech-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tech-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.text}</p>
                    </div>
                </div>))}
        </div>
    </section>
};

export default TechnologiesContent;