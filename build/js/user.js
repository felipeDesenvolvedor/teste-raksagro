import User from './classes/User';
import {checkPage, initializeLocalStorage, inputEmpty, inValideEmail, inValideCPF, loader} from './utils';

const edit = () => {
    let data = haldleForm();
    const btnCadastrar = document.querySelector('.js-cadastrar');
    
    if (!data) {
        return false;
    }

    loader(btnCadastrar, 'form__button--loader');

    const formUser = document.querySelector('.js-form')
    const idUser = formUser.getAttribute("data-id")

    data['id'] = idUser

    let user = new User();
    user = user.editar(data);
    

    setTimeout(() => {
        loader(btnCadastrar, 'form__button--loader')
        localStorage.removeItem('updataThisUser')

        location.href = "/"
    }, 500)
    
    return user
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

    return {
        "nomeCompleto":formUser.nomeCompleto.value.replace(/\b\w/g, letra => letra.toUpperCase()),
        "email":formUser.email.value,
        "cpf":formUser.cpf.value,
        "telefone":formUser.telefone.value,
    }
}

const loadDataForm = () => {
    const updateThisUser = JSON.parse(localStorage.getItem('updataThisUser'))
    
    if(!updateThisUser) {
        return
    }
    
    const formUser = document.querySelector('.js-form') 
          
          formUser.setAttribute("data-id", updateThisUser.id)  
          formUser.nomeCompleto.value = updateThisUser.nomeCompleto
          formUser.telefone.value     = updateThisUser.telefone
          formUser.email.value        = updateThisUser.email
          formUser.cpf.value          = updateThisUser.cpf
}

const handleBtnCadastrar = () => {
    const btnCadastrar = document.querySelector('.js-cadastrar');

    btnCadastrar.addEventListener('click', () => {   
        
        if(localStorage.getItem('updataThisUser')) {
            edit()
            return
        }
        
        save()
    });
}

const handleBtnCancelar = () => {
    const btnCancelar = document.querySelector(".js-cancelar");
    
    btnCancelar.addEventListener('click', () => {
        const formUser     = document.querySelector('.js-form');
        formUser.addEventListener('submit', event => event.preventDefault());
        location.href = '/';
    })
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

    loadDataForm();
    handleBtnCancelar();
    handleBtnCadastrar();
    document.querySelectorAll('.form__group input').forEach(el => handleBlurInput(el))
});

export {handleBtnCadastrar, save, haldleForm}


