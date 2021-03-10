import {handleBtnCadastrar, save, haldleForm} from "../js/user";

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

test('checked if salve how sucess', () => {

    document.body.id = "pageIndex";
    
    document.addEventListener('DOMContentLoaded', () => {
        
        expect(save()).toEqual(true);
    })
});
