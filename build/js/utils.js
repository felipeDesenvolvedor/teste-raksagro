
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

const inputEmpty = input => input.value.length < 3 ? true : false;

const valideEmail = input => {
    const regex = /\w@\w*\.\w/;
    const value = input.value

    return regex.test(value);
}

const valideCPF = input => {
    const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
    const value = input.value;

    return regex.test(value);
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
          messageHTML.classList.add('message');
          messageHTML.innerHTML = message;

    let elementParent = element.parentNode;

    removeMessageError(element, className);

    elementParent.appendChild(messageHTML);
    elementParent.classList.add(className);
} 

export {checkPage, initializeLocalStorage, inputEmpty, valideEmail, valideCPF, addMessageError, removeMessageError};