import User from './classes/User';
import {checkPage, initializeLocalStorage} from './utils.js';

const initializeInsertedUser = () => {

    if(!checkPage('pageUser')) {
        return false;
    }

    initializeLocalStorage();
    return true;
}

const salve = () => {
    let data = haldleForm();

    if (!initializeInsertedUser()) {
        return false;
    }

    // const user = User();
    // user.criar();
}

const haldleForm = () => {
    const formUser = document.querySelector('.js-form');

    formUser.addEventListener('submit', event => event.preventDefault());

    return {
        "nome":formUser.nome.value,
        "email":formUser.email.value,
        "cpf":formUser.cpf.value,
        "telefone":formUser.telefone.value,
    }
}

const handleBtnCadastrar = () => {
    const btnCadastrar = document.querySelector('.js-cadastrar');
    
    btnCadastrar.addEventListener('click', () => {
        salve();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // handleBtnCadastrar();

    console.log(haldleForm());
});

export {initializeInsertedUser, handleBtnCadastrar, salve, haldleForm}


