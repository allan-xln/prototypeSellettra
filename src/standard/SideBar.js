import React, { useState } from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div id="wrapper" className={isOpen ? 'toggled' : ''}>
                {/* Botão de menu hamburguer */}
                <button
                    type="button"
                    className={`hamburger animated fadeInLeft ${isOpen ? 'is-open' : 'is-closed'}`}
                    data-toggle="offcanvas"
                    onClick={toggleSidebar}
                >
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>
                {/* Sidebar */}
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <li>
                            {/* Ícone da conexão */}
                            <button id="icons-sidebar" className="custom-button">
                                <i className="bi bi-wifi"></i> Conexão
                            </button>
                        </li>

                        <li>
                            {/* Ícone das configurações */}
                            <button id="icons-sidebar" className="custom-button">
                                <i className="bi bi-gear"></i> Configurações
                            </button>
                        </li>

                        <li>
                            {/* Ícone de ajuda */}
                            <button id="icons-sidebar" className="custom-button">
                                <i className="bi bi-question-circle"></i> Ajuda
                            </button>
                        </li>
                    </ul>

                    <ul>
                        {/* Botão de sair */}
                        <div className="exit-button">
                            <button className="btn btn-outline-light btn-block">
                                <i className="bi bi-box-arrow-right"></i> Sair
                            </button>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default SideBar;
