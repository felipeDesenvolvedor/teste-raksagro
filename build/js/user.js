import User from './classes/User';
import {checkPage, initializeLocalStorage, inputEmpty, inValideEmail, inValideCPF, loader} from './utils';

const edit = () => {

}

const save = () => {
    let data = haldleForm();
    const btnCadastrar = document.querySelector('.js-cadastrar');
    
    if (!data) {
        return false;
    }
    
    loader(btnCadastrar, 'form__button--loader');

    let id = initializeLocalStorage();
    data['id'] = id;

    let user = new User();
    user = user.criar(data);
    
    setTimeout(() => {
        loader(btnCadastrar, 'form__button--loader');
        location.href = "/"
    }, 500);
    
    return user;
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

    console.log(formUser);

    return {
        "nomeCompleto":formUser.nomeCompleto.value,
        "email":formUser.email.value,
        "cpf":formUser.cpf.value,
        "telefone":formUser.telefone.value,
    }
}

const handleBtnCadastrar = () => {
    const btnCadastrar = document.querySelector('.js-cadastrar');

    btnCadastrar.addEventListener('click', () => {    
        save()
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
    
    if(!checkPage('pageUser')) {
        return;
    }
    
    handleBtnCadastrar();
    document.querySelectorAll('.form__group input').forEach(el => handleBlurInput(el))
});

export {handleBtnCadastrar, save, haldleForm}


