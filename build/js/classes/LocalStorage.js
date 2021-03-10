class LocalStorage {
    addRegister(id, data) {
        localStorage.setItem(id, JSON.stringify(data));
        return id
    }
}

export default LocalStorage;