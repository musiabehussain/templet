let input = document.querySelector("#input-field");
let ul = document.querySelector("#ul");
let pin = true;
let submit = document
  .querySelector("#submit")
  .addEventListener("click", (e) => {
    e.preventDefault();


    
    if (input.value !== "") {
      const listItmes = document.createElement("li");



      
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.className = "CheckBox";
      listItmes.append(checkBox);
      checkBox.addEventListener("click", () => {
        if (pin === true) {
          listItmes.style.textDecoration = "line-through";
          pin = false;
        } else {
          listItmes.style.textDecoration = "none";
          pin = true;
        }
      });
      listItmes.append(input.value);
      ul.append(listItmes);
      const icon = document.createElement("i");
      listItmes.append(icon);
      icon.className = "fas fa-times";
      document.querySelector("form").reset();
      icon.addEventListener("click", () => {
        ul.removeChild(listItmes);
      });
    } else {
      alert("please search some word in boX ");
    }
  });


