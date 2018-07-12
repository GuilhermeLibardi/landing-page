import React, {Component} from 'react';
import './App.scss';
import {Landingview} from "./components/Landingview.jsx";
import {Servicos} from "./components/Servicos.jsx";
import {Formulario} from "./components/Formulario.jsx";
import {Footer} from "./components/Footer.jsx";

class App extends Component {
    render() {
        return (
            <main className="App">
                <Landingview/>
                <Servicos/>
                <Formulario/>
                <Footer/>
            </main>
        );
    }
}

export default App;
