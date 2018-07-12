import React, {Component} from 'react';
import '../App.scss';

export class Landingview extends Component {
    render() {
        return (
            <div className="landingview">
                <header className="header-container">
                    <h1 className="header-title inFromLeft">Silva Logistica</h1>
                </header>
                <div className="bemvindo-container">
                    <h2 className="bemvindo-subtitulo inFromRight">
                        Nós fazemos sua mudança para você aproveitar o que realmente
                        importa
                    </h2>
                </div>
            </div>
        )
    }
}