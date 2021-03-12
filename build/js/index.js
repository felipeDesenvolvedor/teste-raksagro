import User from './classes/User';
import {checkPage, userItens} from './utils';

const actionEdit  = () => {
    
}

const searchUser = name => {
    
    if(!name) {
        return;
    }

    const user = new User();
    const tbody  = document.querySelector('.table__body');
    
    let users = user.list(name);
    
    users = userItens(users);
    
    users.forEach(element => {
        tbody.appendChild(element);
    })
}

const listAllUsers = () => {
    const user = new User();
    const tbody  = document.querySelector('.table__body');
    let users = user.listAll();
    
    users = userItens(users);
    
    users.forEach(element => {
        tbody.appendChild(element);
    })
}

const handleInputSearch = () => {
    const search = document.querySelector('.user__search');
    const btnPesquisar = document.querySelector('.js-pesquisar');

    btnPesquisar.addEventListener('click', () => {
        searchUser(search.value)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    
    if(!checkPage('pageIndex')) {
        return;
    }

    handleInputSearch();
    listAllUsers();
});