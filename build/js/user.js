import User from './classes/User';
import {checkPage, initializeLocalStorage, inputEmpty, valideEmail, valideCPF} from './utils.js';

const save = () => {
    let data = haldleForm();
    
    if (!data) {
        return false;
    }
    
    let id = initializeLocalStorage();
    data['id'] = id;

    const user = new User();
    user.criar(data);
}

const haldleForm = () => {
    const formUser = document.querySelector('.js-form');

    formUser.addEventListener('submit', event => event.preventDefault());

    if(inputEmpty(formUser.nomeCompleto)) {
        console.log('empty');
        return;
    }

    if(!valideEmail(formUser.email)) {
        console.log('invalid email');
        return;
    }


    if(!valideCPF(formUser.cpf)) {
        console.log('invalid CPF');
        return;
    }

    return {
        "nomeCompleto":formUser.nomeCompleto.value,
        "email":formUser.email.value,
        "cpf":formUser.cpf.value,
        "telefone":formUser.telefone.value,
    }
}

const handleBtnCadastrar = () => {
    const btnCadastrar = document.querySelector('.js-cadastrar');

    if(!checkPage('pageUser')) {
        return null;
    }
    
    btnCadastrar.addEventListener('click', () => {
        save();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleBtnCadastrar();
});

export {handleBtnCadastrar, save, haldleForm}


