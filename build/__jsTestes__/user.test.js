import {initializeInsertedUser, handleBtnCadastrar, salve, haldleForm} from "../js/user";


test('Expect initialize User', () => {
    document.body.id = "pageUser";
    expect(initializeInsertedUser()).toEqual(true);
})

test('Not Expect initialize User', () => {
    document.body.id = "pageIndex";
    expect(initializeInsertedUser()).toEqual(false);
})

test('check data return do form', () => {

    document.addEventListener('DOMContentLoaded', () => {
        expect(haldleForm()).toEqual({
            "nome":formUser.nome.value, 
            "email":formUser.email.value, 
            "cpf":formUser.cpf.value, 
            "telefone":formUser.telefone.value
        })
    });
})
