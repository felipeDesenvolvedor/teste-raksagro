import User from './classes/User';
import {checkPage, initializeLocalStorage} from './utils.js';

const initializeInsertedUser = () => {    
    return initializeLocalStorage();
}

const save = () => {
    let data = haldleForm();
    let id = initializeInsertedUser();

    if (!id) {
        return false;
    }

    data['id'] = id;

    const user = new User();
    user.criar(data);
}

const haldleForm = () => {
    const formUser = document.querySelector('.js-form');

    formUser.addEventListener('submit', event => event.preventDefault());

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

export {initializeInsertedUser, handleBtnCadastrar, save, haldleForm}


