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

export {checkPage, initializeLocalStorage, inputEmpty, inValideEmail, inValideCPF, addMessageError, removeMessageError};