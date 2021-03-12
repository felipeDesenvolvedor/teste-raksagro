import User from './classes/User';
import {checkPage} from './utils';

const actionEdit  = () => {
    
}

const listUser = () => {
    const user = new User();
    const tbody  = document.querySelector('.table__body');
    let users;

    
    users = user.listAll();
    users = users.map(element => {
        let tr            = document.createElement('tr')
            tr.classList.add('data')
        // colounas
        let tdNome        = document.createElement('td')
        let tdEmail       = document.createElement('td')
        let tdCPF         = document.createElement('td')
        let tdTelefone    = document.createElement('td')
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

    users.forEach(element => {
        tbody.appendChild(element);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    
    if(!checkPage('pageIndex')) {
        return;
    }

    listUser();
});