import  LocalStorage from "./LocalStorage";

class User {
    constructor() {
        this.id = "";
        this.nomeCompleto = "";
        this.cpf = "";
        this.telefone = "";
        this.email = "";
        this.localstorage = new LocalStorage();
    }
   
    list(parameter) {
        console.log(parameter)

        let totalUser = localStorage.getItem('lastInsertedUser');
        let listUser = [];

        for(let user = 1; user <= totalUser; user++) {
            listUser[user] = JSON.parse(localStorage.getItem(user));
        }
        
        console.log(listUser)

        listUser = listUser.filter(user => {
            user.nomeCompleto == parameter.replace(/\b\w/g, letra => letra.toUpperCase())
        });
        
        console.log(listUser)

        return listUser;
    }

    listAll() {
        let totalUser = localStorage.getItem('lastInsertedUser');
        let listUser = [];

        for(let user = 1; user <= totalUser; user++) {
            listUser[user] = JSON.parse(localStorage.getItem(user));
        }
        
        return listUser;
    }

    criar({id, nomeCompleto, email, cpf, telefone}) {
        const data = { 
            "nomeCompleto":this.setNomeCompleto(nomeCompleto), 
            "email":this.setEmail(email),
            "cpf":this.setCpf(cpf), 
            "telefone":this.setTelefone(telefone)
        }
        
        return this.localstorage.addRegister(this.setId(id), data);
    }

    editar({id, nomeCompleto, email, cpf, telefone}) {
        
        const data = { 
            "nomeCompleto":this.setNomeCompleto(nomeCompleto), 
            "email":this.setEmail(email),
            "cpf":this.setCpf(cpf), 
            "telefone":this.setTelefone(telefone)
        }
        
        return this.localstorage.updateRegister(this.setId(id), data);
        
    }

    excluir(id) {
        return this.localstorage.deleteRegister(id);
    }

    setId(id) {
        return this.id = id;
    }

    setNomeCompleto(nomeCompleto) {
        return this.nomeCompleto = nomeCompleto;
    } 

    setCpf(cpf) {
        return this.cpf = cpf;
    } 

    setTelefone(telefone) {
       return this.telefone = telefone;
    }

    setEmail(email) {
        return this.email = email;
    } 
}

export default User;