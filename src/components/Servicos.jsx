import React, {Component} from 'react';
import ScrollReveal from 'scrollreveal';
import '../App.scss';
import '../images/img-2.jpg';
import '../images/img-3.jpg';

export class Servicos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servicos: [
                {
                    nome: "Mudanças",
                    img: "images/img-2.jpg",
                    alt: "Imagem de funcionários transportando caixas de papelão com um carrinho.",
                    paragraph: "Mudanças são trabalhosas e cansativas, pensando nisso nossa equipe proporciona suporte para a sua mudança desde o desmonte dos móveis até a instalação deles no seu novo lar."
                },
                {
                    nome: "Frete",
                    img: "images/img-3.jpg",
                    alt: "Imagem de um caminhão de frete com um funcionário da empresa segurando caixas de papelão.",
                    paragraph: "Já precisou que uma encomenda chegasse com segurança e rapidez ao seu destino? Nossa equipe oferece um serviço de frete de alta qualidade com um preço que cabe no seu bolso."
                }
            ]
        };

    }

    componentDidMount() {
        window.sr = ScrollReveal();
        sr.reveal('.nome1', {origin: 'right', duration: 1000});
        sr.reveal('.p1', {origin: 'right', duration: 1000});
        sr.reveal('.nome2', {origin: 'left', duration: 1000});
        sr.reveal('.p2', {origin: 'left', duration: 1000});
    }

    render() {
        return (
            <div className="servicos-wrapper">
                <h3 className="nossos-servicos">Nossos serviços</h3>
                <article className="servico-wrapper servico1">
                    <h4 className="servico-nome nome1">{this.state.servicos[0].nome}</h4>
                    <img className="servico-img img1" src={this.state.servicos[0].img}
                         alt={this.state.servicos[0].alt}/>
                    <p className="servico-paragraph p1">{this.state.servicos[0].paragraph}</p>
                </article>
                <article className="servico-wrapper servico2">
                    <h4 className="servico-nome nome2">{this.state.servicos[1].nome}</h4>
                    <img className="servico-img img2" src={this.state.servicos[1].img}
                         alt={this.state.servicos[1].alt}/>
                    <p className="servico-paragraph p2">{this.state.servicos[1].paragraph}</p>
                </article>
            </div>
        )
    }
}