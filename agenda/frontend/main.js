import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();

import Contato from './modules/Contato';

const nome = new Contato('.form-nome');
const sobrenome = new Contato('.form-sobrenome');
const email = new Contato('.form-email');
const telefone = new Contato('.form-fone');
nome.init();
sobrenome.init();
email.init();
fone.init();

import './assets/css/style.css';