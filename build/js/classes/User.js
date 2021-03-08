class User {
    constructor() {
        this.id = "";
        this.nomeCompleto = "";
        this.cpf = "";
        this.telefone = "";
        this.email = ""; 
    }
   
    list({idUser}) {

    }

    listAll() {

    }

    criar({nomeCompleto, cpf, telefone, email}) {
        let id = parseInt(this.id) + 1;
        this.id = id.toString();
        console.log(this.id);
    }

    editar() {
        
    }

    excluir() {
        
    }
}

export default User;