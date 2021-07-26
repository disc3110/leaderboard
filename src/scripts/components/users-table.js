class UsersTable {
    usersTable = []

    addToTable = (user) => {
        this.usersTable = this.usersTable.concat(user);
    }

    get getTable() {
        return this.usersTable;
    }
}

export { UsersTable };