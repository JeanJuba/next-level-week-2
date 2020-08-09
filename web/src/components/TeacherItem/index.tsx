import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/29292247?s=460&u=5a7812c3308dd3fd997b4d124c62b9337feda1bf&v=4" alt="Jean Juba" />
                <div>
                    <strong>Jean Juba</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Teste Teste  Teste Teste Teste Teste Teste Teste Teste Teste
                Teste Teste Teste Teste Teste Teste v
            </p>

            <footer>
                <p>
                    Preço/hora
            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;