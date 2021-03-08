import {initializeInsertedUser} from "../js/user";


test('Expect initialize User', () => {
    document.body.id = "pageUser";
    expect(initializeInsertedUser()).toEqual(true);
})

test('Not Expect initialize User', () => {
    document.body.id = "pageIndex";
    expect(initializeInsertedUser()).toEqual(false);
})
