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
    
    if(!users) {
        return;
    }

    users.forEach(element => {
        tbody.appendChild(element);
    })
}

const listAllUsers = () => {
    const user = new User();
    const tbody  = document.querySelector('.table__body');
    let users = user.listAll();
    
    users = userItens(users);

    if(!users) {
        return;
    }

    users.forEach(element => {
        tbody.appendChild(element);
    })
}

const deleteUser = () => {
    const buttonsExcluir = document.querySelectorAll(".js-excluir");
    const tableActions = document.querySelector(".table__body");

    tableActions.addEventListener('click', event => {
        
        if(event.target.className == 'js-excluir') {
            let trPai = event.target.parentNode.parentNode
            let idUser = trPai.getAttribute('data-id')

            const user = new User();
            user.excluir(idUser);
            trPai.remove();
        }
    })
}

const handleInputSearch = () => {
    const search = document.querySelector('.user__search');
    const btnPesquisar = document.querySelector('.js-pesquisar');

    btnPesquisar.addEventListener('click', () => {
        let value = search.value.replace(/\b\w/g, letra => letra.toUpperCase())
        searchUser(value)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    
    if(!checkPage('pageIndex')) {
        return;
    }

    handleInputSearch();
    deleteUser();
    listAllUsers();
});