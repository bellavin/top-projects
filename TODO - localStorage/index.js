let items = [];

const ulElem = document.querySelector(".item-list");
const addInputElem = document.querySelector(".input-wrapper > input");
const addButtonElem = document.querySelector(".input-wrapper > button");
const itemTemplate = document.querySelector("#item-template").content;
const editTemplate = document.querySelector("#edit-template").content;
const STORAGE_KEY = "items";
let editingId = null;

const renderItems = () => {
  ulElem.innerHTML = null;

  for (const item of Object.values(items)) {
    if (editingId === item.id) {
      const liElem = document.createElement("li");
      const contentElem = editTemplate.cloneNode(true);
      const saveButtonElem = contentElem.querySelector(".save-button");
      saveButtonElem.dataset.id = item.id;

      liElem.appendChild(contentElem);
      ulElem.appendChild(liElem);
      continue;
    }

    const liElem = document.createElement("li");
    const contentElem = itemTemplate.cloneNode(true);
    const spanElem = contentElem.querySelector("span");
    const deleteButtonElem = contentElem.querySelector(".delete-button");
    const editButtonElem = contentElem.querySelector(".edit-button");
    deleteButtonElem.dataset.id = item.id;
    editButtonElem.dataset.id = item.id;
    spanElem.textContent = item.value;

    liElem.appendChild(contentElem);
    ulElem.appendChild(liElem);
  }
};

const loadItems = () => {
  const oldItems = localStorage.getItem(STORAGE_KEY);
  if (oldItems === null) {
    return;
  }

  if (oldItems) {
    items = JSON.parse(oldItems);
  }
  renderItems();
};

const saveItems = () => {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(STORAGE_KEY, stringItems);
};

addButtonElem.addEventListener("click", () => {
  const value = addInputElem.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  items.push({
    id: new Date().getTime().toString(),
    value,
  });
  renderItems();
  addInputElem.value = "";
  saveItems();
});

ulElem.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const id = event.target.dataset.id;
    items = items.filter((item) => item.id !== id);
    renderItems();
    saveItems();
  }

  if (event.target.classList.contains("edit-button")) {
    editingId = event.target.dataset.id;
    renderItems();
  }

  if (event.target.classList.contains("reset-editing-button")) {
    editingId = null;
    renderItems();
  }

  if (event.target.classList.contains("save-button")) {
    const id = event.target.dataset.id;
    const inputElement = event.target.parentElement.querySelector("input");
    const value = inputElement.value;
    items.forEach((item) => {
      if (item.id === id) {
        item.value = value;
      }
    });

    editingId = null;
    saveItems();
    renderItems();
  }
});

document.addEventListener("DOMContentLoaded", loadItems);
