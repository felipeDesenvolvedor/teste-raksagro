import User from './classes/User';
import {checkPage, userItens} from './utils';

const actionEdit  = () => {
    const tableActions = document.querySelector(".table__body");
    let idUser = 0;
    let userData = "";

    tableActions.addEventListener('click', event => {
        localStorage.removeItem('updataThisUser')

        if(event.target.className == 'js-editar') {
            idUser = event.target.parentNode.parentNode.getAttribute('data-id')
            userData = JSON.parse(localStorage.getItem(idUser))
            
            userData['id'] = idUser;

           localStorage.setItem('updataThisUser', JSON.stringify(userData));
           
           location.href = "/cadastrar/user.html";
        }
    })
}

const searchUser = name => {
    let nomeCompletoTable = document.querySelectorAll('td[data-label="Nome Completo"]')      
    const tbody  = document.querySelector('.table__body');    

    let filterName = "";
    let notFilterName = "";
    
    let arrayNames = [...nomeCompletoTable]
    
    filterName = arrayNames.filter(element => { 
        let passedFilter = element.textContent.toLowerCase().indexOf(name) >= 0
        return passedFilter ? element : null 
    })


    notFilterName = arrayNames.filter(element => { 
        let passedFilter = element.textContent.toLowerCase().indexOf(name) < 0
        return passedFilter ? element : null 
    })

    filterName.forEach(element => {
         element.parentNode.style.display = "table-row"
    })

    notFilterName.forEach(element => {
        element.parentNode.style.display = "none"
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
    const userSearchInput = document.querySelector('.user__search')
    
    userSearchInput.addEventListener('input', event => {
        searchUser(event.target.value.toLowerCase())
    })
}

document.addEventListener('DOMContentLoaded', () => {
    
    if(!checkPage('pageIndex')) {
        return;
    }

    actionEdit()
    deleteUser();
    listAllUsers();
    handleInputSearch();
});