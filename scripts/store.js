const store = (function () {
    const store = {
        items: [
          { id: cuid(), name: 'apples', checked: false },
          { id: cuid(), name: 'oranges', checked: false },
          { id: cuid(), name: 'milk', checked: true },
          { id: cuid(), name: 'bread', checked: false }
        ],
        hideCheckedItems: false,
        searchTerm: '',
        findById(id) {
            return store.items.find(item => item.id === id);
        },
        addItem(name) {
            try {
                Item.validateName(name);
                this.items.push(Item.create(name));
            } catch (e) {

            }
        },
        findAndToggleChecked(id) {
            this.findById(id).checked = !this.findById(id).checked;
        },
        findAndUpdateName(id, newName) {
            try {
                Item.validateName(newName);
                this.findById(id).name = newName;
            } catch (e) {
                console.log(`Cannot update name: ${e.message}`)
            }
        },
        findAndDelete(id) {
            this.items = this.items.filter(item => item.id !== id);
        },
        toggleCheckedFilter() {
            this.hideCheckedItems = !this.hideCheckedItems;
        },
        setSearchTerm(word) {
            this.searchTerm = word;
        }
    };
    return store;
}());
