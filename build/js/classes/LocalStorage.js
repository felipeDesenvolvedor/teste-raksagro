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
        localStorage.removeItem(id)
        return id
    }
}

export default LocalStorage