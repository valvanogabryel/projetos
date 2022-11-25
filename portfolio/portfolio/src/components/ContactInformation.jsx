import React from 'react';
import { AiFillPhone, AiFillMail, AiFillEnvironment } from 'react-icons/ai';
// Ou AiOutlineMail
//Estilização
import '../styles/components/contactinformation.sass';

const InformationContainer = () => {
    return <section id='information'>
        <div className='card-info'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(21)98601-0370</p>
            </div>
        </div>

        <div className='card-info'>
            <AiFillMail id='email-icon' />
            <div>
                <h3>Email</h3>
                <p>valvanogabryel@gmail.com</p>
            </div>
        </div>

        <div className='card-info'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Rio de Janeiro - RJ</p>
            </div>
        </div>

    </section>
};

export default InformationContainer;
