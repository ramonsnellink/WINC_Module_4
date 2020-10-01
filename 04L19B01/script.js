const buttons = document.querySelectorAll(".big-five-button");
const spottedAnimalList = document.querySelector("#spotted-animals-list");
const removeFirstItemButton = document.querySelector("#remove-first-item-button");
const removeAllItemsButton = document.querySelector("#remove-all-button");

//Add Item to the list of spotted animals

buttons.forEach((button) => {
  const animalName = button.innerHTML;

  button.addEventListener("click", () => {
    const spottedListItem = document.createElement("li");

    spottedAnimalList.appendChild(spottedListItem);
    spottedListItem.classList.add("spotted-animals-list-item");
    spottedListItem.innerHTML = animalName;
  });
});

//remove the first item of the spotted item list

removeFirstItemButton.addEventListener("click", () => {
  const firstChild = spottedAnimalList.getElementsByClassName("spotted-animals-list-item")[0];

  spottedAnimalList.removeChild(firstChild);
});

// Remove all items from the list

removeAllItemsButton.addEventListener("click", () => {
  //spottedAnimalList
  const animal = spottedAnimalList.getElementsByClassName("spotted-animals-list-item");

  console.log(children);
  console.log(spottedAnimalList);

  // FIXEN VANAF HIER.

  //   window.emptyList = function () {
  //     var ul = document.querySelector('.list');
  //     var listLength = ul.children.length;

  //     for (i = 0; i < listLength; i++) {
  //       ul.removeChild(ul.children[0]);
  //     }
  //   }
});
