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
    const formUser = document.querySelector('.js-form');
    // js-cadastrar
}

document.addEventListener('DOMContentLoaded', () => {

});

export {initializeInsertedUser, salve}


