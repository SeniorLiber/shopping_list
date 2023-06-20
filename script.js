const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newitem = itemInput.value;
  if (newitem === "") {
    alert("Please enter an Item !");
    return;
  }

  const li = document.createElement("li");
  console.log(li);
  li.appendChild(document.createTextNode(newitem));
  // console.log(li);
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function createButton(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
}

function createIcon(classes) {
  icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", addItem);
