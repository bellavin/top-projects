const ulElem = document.querySelector(".item-list");
const addInputElem = document.querySelector(".add-input");
const addButtonElem = document.querySelector(".add-button");
const itemTemplateElem = document.querySelector("#item-template").content;
const editTemplateElem = document.querySelector("#edit-template").content;

const STORAGE_KEY = "todo-items";
let items = [];
let editingId = null;

const renderItems = () => {
  ulElem.innerHTML = "";
  for (const { id, value } of items) {
    if (editingId === id) {
      const editElem = editTemplateElem.cloneNode(true);
      ulElem.appendChild(editElem);
    } else {
      const liElem = itemTemplateElem.cloneNode(true);
      const spanElem = liElem.querySelector("span");
      const deleteButtonElem = liElem.querySelector(".delete-button");
      const starEitingButtonElem = liElem.querySelector(
        ".start-editing-button",
      );
      spanElem.textContent = value;
      deleteButtonElem.dataset.id = id;
      starEitingButtonElem.dataset.id = id;
      ulElem.appendChild(liElem);
    }
  }
};

const saveItems = () => {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(STORAGE_KEY, stringItems);
};

const loadItems = () => {
  fetch('https://crudcrud.com/api/b35c5463e8c348118404ba688f54eff8/todos')
    .then(res => res.json())
    .then(todos => {
      console.log(todos);
      if (!todos) {
        return;
      }

      items = todos.map(todo => ({
        id: todo.id,
        value: todo.todo
      }));
      renderItems();
    });
};

addButtonElem.addEventListener("click", () => {
  const value = addInputElem.value.trim();
  if (value === "") {
    alert("Инпут не должен быть пустым");
    return;
  }

  fetch('https://crudcrud.com/api/b35c5463e8c348118404ba688f54eff8/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: value,
    })
  })
  .then(res => res.json())
  .then(data => {
      items.push({
      id: data.id,
      value: value,
    });

    renderItems();
    addInputElem.value = "";
    addInputElem.focus();
  })
  .catch(err => {
    alert('Error adding todo:', err);
  });
});

ulElem.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    items = items.filter(({ id }) => {
      return id.toString() !== event.target.dataset.id;
    });

    saveItems();
    renderItems();
  }

  if (event.target.classList.contains("start-editing-button")) {
    editingId = Number(event.target.dataset.id);
    renderItems();
  }
});

loadItems();

// Домашнее задание
// 1) Сделать value в инпуте редактирования таким же как и
// localStorage value выбранного элемента
// 2) Сделать сохранение
// 3) Сделать обработку кнопки Cancel
