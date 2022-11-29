window.addEventListener("load", () => {
  const form = document.querySelector("#new-expense-form");
  const nameInput = document.querySelector("#name-input-id");
  const date = document.querySelector("#date-input-id");
  const amount = document.querySelector("#amount-input-id");
  const table = document.querySelector(".content-table");
  const tableBody = document.querySelector(".tbody-class");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameTable = nameInput.value;
    const dateTable = date.value;
    const amountTable = amount.value;

    // the new table that will be inserted
    //creating the table row and the first table data
    const TR1 = document.createElement("tr");
    const TD1 = document.createElement("td");
    TR1.appendChild(TD1);

    //name column
    const firstName = document.createElement("output");
    firstName.classList.add("text");
    firstName.type = "text";
    firstName.value = nameTable;
    TD1.appendChild(firstName);

    //date column
    const TD2 = document.createElement("td");
    TR1.appendChild(TD2);
    const firstDate = document.createElement("output");
    firstDate.type = "date";
    firstDate.value = dateTable;
    TD2.appendChild(firstDate);

    // amount column
    const TD3 = document.createElement("td");
    TR1.appendChild(TD3);
    const firstAmount = document.createElement("output");
    firstAmount.classList.add("text");
    firstAmount.type = "number";
    firstAmount.value = amountTable;
    TD3.appendChild(firstAmount);

    //appending them together
    tableBody.appendChild(TR1);

    input.value = "";
  });
});
