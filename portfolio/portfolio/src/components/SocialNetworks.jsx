import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

//Estilização
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: 'github', icon: <FaGithub /> },
    { name: 'linkedin', icon: <FaLinkedinIn /> },
    { name: 'twitter', icon: <FaTwitter /> }
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map(network => (
            <a href="#" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
};

export default SocialNetworks;