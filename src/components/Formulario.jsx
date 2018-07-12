import React, {Component} from 'react';
import '../App.scss';

export class Formulario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            numero: '',
            assunto: '',
            mensagem: '',
            formEValido: false,
            msgPosSubmit: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validarEmail = this.validarEmail.bind(this);
    }

    handleUserInput(event) {
        if (event.target.name === 'numero') {
            let texto = event.target.value;
            texto = texto.replace(/[^\d]/g, '');
            if (texto.length > 0) {
                texto = "(" + texto;
                if (texto.length > 3) texto = [texto.slice(0, 3), ") ", texto.slice(3)].join('');
                if (texto.length > 12) {
                    if (texto.length > 13)
                        texto = [texto.slice(0, 10), "-", texto.slice(10)].join('');
                    else
                        texto = [texto.slice(0, 9), "-", texto.slice(9)].join('');
                }
                if (texto.length > 15) texto = texto.substr(0, 15);
            }

            this.setState({
                [event.target.name]: texto
            });
        } else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    validarEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    validarNumero(numero) {
        let re1 = '(\\()';	// Any Single Character 1
        let re2 = '(\\d)';	// Any Single Digit 1
        let re3 = '(\\d)';	// Any Single Digit 2
        let re4 = '(\\))';	// Any Single Character 2
        let re5 = '( )';	// White Space 1
        let re6 = '(\\d)';	// Any Single Digit 3
        let re7 = '(\\d)';	// Any Single Digit 4
        let re8 = '(\\d)';	// Any Single Digit 5
        let re9 = '(\\d)';	// Any Single Digit 6
        let re10 = '(\\d)';	// Any Single Digit 7
        let re11 = '(.)';	// Any Single Character 3
        let re12 = '(\\d)';	// Any Single Digit 8
        let re13 = '(\\d)';	// Any Single Digit 9
        let re14 = '(\\d)';	// Any Single Digit 10
        let re15 = '(\\d)';	// Any Single Digit 11

        let p = new RegExp(re1 + re2 + re3 + re4 + re5 + re6 + re7 + re8 + re9 + re10 + re11 + re12 + re13 + re14 + re15, ["i"]);

        return p.test(numero);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validarEmail(this.state.email)) {
            if (this.validarNumero(this.state.numero)) {
                this.setState({
                    formEValido: true,
                    msgPosSubmit: "Recebemos sua mensagem, respondere-mos em breve. Obrigado pela preferência."
                });
                setTimeout(() => {
                    let div = document.getElementById('notificacao');
                    div.classList.remove('mostrar-mensagem');
                }, 3000);
            }
            else {
                console.log("Erro no número");
            }
        } else {
            console.log("Erro no email");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="formulario-wrapper" id="formulario-contato">
                <div id="notificacao" className={this.state.formEValido ? "mensagem mostrar-mensagem" : "mensagem"}>
                    <span className="notificacao-texto">{this.state.msgPosSubmit}</span>
                </div>
                <h4 className="formulario-fale">Fale com a gente!</h4>

                <label htmlFor="nome-input">Nome: </label>
                <input minLength="4" maxLength="40" type="text" name="nome" placeholder="Diga-nos seu nome"
                       id="nome-input"
                       value={this.state.nome}
                       onChange={(event) => this.handleUserInput(event)} required/>

                <label htmlFor="email-input">E-mail: </label>
                <input minLength="6" maxLength="40" type="email" name="email"
                       placeholder="Seu e-mail para te responder-mos"
                       id="email-input"
                       value={this.state.email} onChange={(event) => this.handleUserInput(event)} required/>

                <label htmlFor="numero-input">Celular: </label>
                <input maxLength="15" type="text" name="numero" placeholder="(xx)x-xxxx-xxxx"
                       id="numero-input"
                       value={this.state.numero} onChange={(event) => this.handleUserInput(event)}/>

                <label htmlFor="assunto-input">Assunto: </label>
                <input minLength="10" maxLength="100" type="text" name="assunto"
                       placeholder="Qual o assunto da nossa conversa?"
                       id="assunto-input"
                       value={this.state.assunto} onChange={(event) => this.handleUserInput(event)} required/>

                <label htmlFor="conteudo-input">Mensagem: </label>
                <textarea minLength="20" maxLength="400" name="mensagem" rows="4" cols="50" form="formulario-contato"
                          placeholder="Nos conte mais..."
                          id="conteudo-input" value={this.state.mensagem}
                          onChange={(event) => this.handleUserInput(event)} required/>

                <input type="submit" name="submit" value="Enviar" className="fa fa-paper-plane"
                       disabled={this.state.formEValido}/>
            </form>
        )
    }
}