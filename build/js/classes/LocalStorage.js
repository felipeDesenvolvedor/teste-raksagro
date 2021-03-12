class LocalStorage {
    addRegister(id, data) {
        localStorage.setItem(id, JSON.stringify(data))
        return id
    }

    updateRegister(id, data) {
        localStorage.removeItem(id)
        this.addRegister(id, data)

        return id
    }

    deleteRegister(id) {
        let lastInsertedUser = 0;

        lastInsertedUser = localStorage.getItem('lastInsertedUser') - 1;
        localStorage.removeItem('lastInsertedUser');
        localStorage.setItem('lastInsertedUser', lastInsertedUser);
        
        localStorage.removeItem(id)
        return id
    }
}

export default LocalStorage