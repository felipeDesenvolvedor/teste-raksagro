import {checkPage} from "../js/utils";

test('checked if body id eguals parametrs page', () => {
    document.body.id = "pageUser";
    expect(checkPage('pageUser')).toEqual(true);
})

test('checked if body id different parametrs page', () => {
    document.body.id = "pageUser";
    expect(checkPage('pageIndex')).toEqual(false);
})
