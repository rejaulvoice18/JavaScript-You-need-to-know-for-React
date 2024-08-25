const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    // jodi id and value er value thake means empty na thake taile add hobe
    // ai condition na dile empty value localstorage a add hoye jay
    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}