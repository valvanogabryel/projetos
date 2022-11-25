import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

//Estilização
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: 'github', icon: <FaGithub />, address: 'https://github.com/valvanogabryel' },
    { name: 'linkedin', icon: <FaLinkedinIn />, address: 'https://www.linkedin.com/in/gabryel-valvano-94338a204/' },
    { name: 'twitter', icon: <FaTwitter />, address: '#' }
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map(network => (
            <a href={network.address} className='social-btn' id={network.name} key={network.name} target="_blank">
                {network.icon}
            </a>
        ))}
    </section>
};

export default SocialNetworks;