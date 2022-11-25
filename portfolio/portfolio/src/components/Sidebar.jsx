import React from 'react';
import Avatar from '../img/foto-perfil.webp';
import SocialNetworks from './SocialNetworks';

// Estilização
import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt='Foto de perfil' />
            <p className='title'>Desenvolvedor Front-End</p>
            <SocialNetworks />
            <p>informações de contato</p>
            <a href="#" className="btn" download>
                Baixar currículo
            </a>
        </aside>
    )
};

export default Sidebar;