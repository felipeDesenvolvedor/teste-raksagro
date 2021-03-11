import User from './classes/User';
import {checkPage, initializeLocalStorage, inputEmpty, inValideEmail, inValideCPF, addMessageError, removeMessageError} from './utils.js';


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
    const nomeCompleto = formUser.nomeCompleto
    const email = formUser.email
    const cpf = formUser.cpf
    const telefone = formUser.telefone

    formUser.addEventListener('submit', event => event.preventDefault());

    if(inputInvalide(nomeCompleto) || inputInvalide(email) || inputInvalide(cpf) || inputInvalide(telefone)) {
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

const handleBlurInput = input => {
    input.addEventListener('blur', () => inputInvalide(input))
}

// input Invalide
const inputInvalide = input => {

    const fields = {
        "email": () => inValideEmail(input),
        "cpf": () => inValideCPF(input)
    }

    if(inputEmpty(input)) {
        return true
    }

    if (fields[input.id]) {
       return fields[input.id]()
    }

    return false; 
}

document.addEventListener('DOMContentLoaded', () => {
    handleBtnCadastrar();

    document.querySelectorAll('.form__group input').forEach(el => handleBlurInput(el))
});

export {handleBtnCadastrar, save, haldleForm}


