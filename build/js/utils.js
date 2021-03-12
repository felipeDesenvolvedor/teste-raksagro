import {inputEmptyMessage, inputInvalidEmail, inputInvalidCPF} from './messages';

const checkPage = page => document.body.id === page ? true : false; 

const initializeLocalStorage = () => {
    let lastInsertedUser = localStorage.getItem('lastInsertedUser');

    if (!lastInsertedUser) {
        localStorage.setItem('lastInsertedUser', '1');
        return localStorage.getItem('lastInsertedUser');
    }

    lastInsertedUser++;

    localStorage.setItem('lastInsertedUser', lastInsertedUser);
    return localStorage.getItem('lastInsertedUser');
}

const inputEmpty = input => {

    if (input.value.length < 3) {
        addMessageError(input, "input__name--empty", inputEmptyMessage);
        return true
    }

    removeMessageError(input, "input__name--empty");
    return false
};

const inValideEmail = input => {
    const regex = /\w@\w*\.\w/;
    const value = input.value

    if (regex.test(value)) {
        removeMessageError(input, "input__email--invalide", inputInvalidEmail);
        return false;
    }
    
    addMessageError(input, "input__email--invalide", inputInvalidEmail);
    return true;
}

const inValideCPF = input => {
    const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
    const value = input.value;

    if (regex.test(value)) {
        removeMessageError(input, "input__cpf--invalide", inputInvalidCPF);
        return false;
    }
    
    addMessageError(input, "input__cpf--invalide", inputInvalidCPF);
    return true;
}

const removeMessageError = (element, className) => {
    let elementParent = element.parentNode;

    if (elementParent.querySelector('span')) {
        elementParent.querySelector('span').remove();
    }

    elementParent.classList.remove(className);
}

const addMessageError = (element, className, message) => {
    let messageHTML = document.createElement('span')
          messageHTML.classList.add('form__message');
          messageHTML.innerHTML = message;

    let elementParent = element.parentNode;

    removeMessageError(element, className);

    elementParent.appendChild(messageHTML);
    elementParent.classList.add(className);
}

const loader = (element, className) => {
    element.classList.toggle(className);
}

const userItens = list => {
   let users = "";
    users = list.map(element => {
        let tr            = document.createElement('tr')
            tr.classList.add('data')
        // colounas
        let tdNome        = document.createElement('td')
        let tdEmail       = document.createElement('td')
        let tdCPF         = document.createElement('td')
        let tdTelefone    = document.createElement('td')
        
        tdNome.setAttribute('data-label', 'Nome Completo')     
        tdEmail.setAttribute('data-label', 'Email')
        tdCPF.setAttribute('data-label', 'CPF')
        tdTelefone.setAttribute('data-label', 'Telefone')
        
        //textos
        tdNome.textContent = element.nomeCompleto     
        tdEmail.textContent = element.email
        tdCPF.textContent = element.cpf
        tdTelefone.textContent = element.telefone

        //buttons
        let tdEditar  = document.createElement('td')
        let tdExcluir = document.createElement('td')
            tdEditar.classList.add('data__actions')
            tdExcluir.classList.add('data__actions')

        let buttonEditar  = document.createElement('button')
        let buttonExcluir = document.createElement('button')
            buttonEditar.textContent = "Editar";
            buttonExcluir.textContent = "Excluir";


        tdEditar.appendChild(buttonEditar);
        tdExcluir.appendChild(buttonExcluir);


        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdCPF);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdEditar);
        tr.appendChild(tdExcluir);

        return tr;
    });

    return users;
}

const userItem = nome => {
    
}

export {
    checkPage, 
    initializeLocalStorage, 
    inputEmpty, 
    inValideEmail, 
    inValideCPF, 
    addMessageError, 
    removeMessageError,
    loader,
    userItens
};