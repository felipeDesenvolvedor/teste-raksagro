import User from './classes/User';
import {checkPage, initializeLocalStorage, inputEmpty, valideEmail, valideCPF, addMessageError, removeMessageError} from './utils.js';
import {inputEmptyMessage, inputInvalidEmail, inputInvalidCPF} from './messages';


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

// handle events
const haldleForm = () => {
    const formUser     = document.querySelector('.js-form'); 

    formUser.addEventListener('submit', event => event.preventDefault());

    if(nameEmpty() || emailEmpty() || cpfEmpty() || telefoneEmpty()) {
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

// validate inputs
const nameEmpty = () => {
    const formUser     = document.querySelector('.js-form');
    const nomeCompleto = formUser.nomeCompleto

    if (inputEmpty(nomeCompleto)) {
        addMessageError(nomeCompleto, "input--empty", inputEmptyMessage);
        return true;
    }

    removeMessageError(nomeCompleto, "input--empty");
    return false
}

const emailEmpty = () => {
    const formUser     = document.querySelector('.js-form');
    const email = formUser.email;

    if(inputEmpty(email)) {
        addMessageError(email, "input--empty", inputEmptyMessage)
        return true;
    }

    removeMessageError(email, "input--empty");
    return false;
}

const cpfEmpty = () => {
    const formUser     = document.querySelector('.js-form');
    const cpf = formUser.cpf;

    if(inputEmpty(cpf)) {
        addMessageError(cpf, "input--empty", inputEmptyMessage)
        return true;
    }

    removeMessageError(cpf, "input--empty");
    return false;
}

const telefoneEmpty = () => {
    const formUser     = document.querySelector('.js-form');
    const telefone = formUser.telefone;

    if(inputEmpty(telefone)) {
        addMessageError(telefone, "input--empty", inputEmptyMessage)
        return true;
    }

    removeMessageError(telefone, "input--empty");
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    handleBtnCadastrar();
});

export {handleBtnCadastrar, save, haldleForm}


