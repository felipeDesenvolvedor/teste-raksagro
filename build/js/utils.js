
const checkPage = page => document.body.id === page ? true : false; 

const initializeLocalStorage = () => {
    let lastInsertedUser = localStorage.getItem('lastInsertedUser');

    if (!lastInsertedUser) {
        localStorage.setItem('lastInsertedUser', '1');
        return;
    }

    lastInsertedUser++;

    localStorage.setItem('lastInsertedUser', lastInsertedUser);
}

export {checkPage, initializeLocalStorage};