import {checkPage, initializeLocalStorage} from "../js/utils";

test('checked if body id eguals parametrs page', () => {
    document.body.id = "pageUser";
    expect(checkPage('pageUser')).toEqual(true);
})

test('checked if body id different parametrs page', () => {
    document.body.id = "pageUser";
    expect(checkPage('pageIndex')).toEqual(false);
})

test('checked if localstorage is initial', () => {
    expect(initializeLocalStorage()).toEqual('1');
})

test('checked if localstorage is increment', () => {
    
    expect(initializeLocalStorage()).toEqual('2');
})
