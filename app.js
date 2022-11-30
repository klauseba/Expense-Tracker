window.addEventListener("load", () => {
  const form = document.querySelector("#new-expense-form");
  const nameInput = document.querySelector("#name-input-id");
  const date = document.querySelector("#date-input-id");
  const amount = document.querySelector("#amount-input-id");
  const table = document.querySelector(".content-table");
  const tableBody = document.querySelector(".tbody-class");
  const tdataClass = document.querySelector(".tdata-class");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameTable = nameInput.value;
    const dateTable = date.value;
    const amountTable = amount.value;

    // the new table that will be inserted when clicking the Add Expense button
    //creating the table row ("tr") that will hold every table data ("td")
    const TR1 = document.createElement("tr");
    TR1.classList.add("tableRow1");

    //name column's td element
    const TD1 = document.createElement("td");
    TD1.classList.add("tableData1");
    TR1.appendChild(TD1);
    //name column
    const firstName = document.createElement("output");
    firstName.classList.add("nameData1");
    firstName.type = "text";
    firstName.value = nameTable;
    TD1.appendChild(firstName);

    //date column's td element
    const TD2 = document.createElement("td");
    TD2.classList.add("td-div");
    TR1.appendChild(TD2);
    //date column
    const firstDate = document.createElement("output");
    firstDate.type = "date";
    firstDate.value = dateTable;
    TD2.classList.add("tableData2");
    TD2.appendChild(firstDate);

    //amount column's td element
    const TD3 = document.createElement("td");
    TD3.classList.add("td-div2");
    TR1.appendChild(TD3);
    //amount column
    const firstAmount = document.createElement("output");
    firstAmount.classList.add("amountClass");
    firstAmount.type = "number";
    firstAmount.value = amountTable;
    TD3.appendChild(firstAmount);

    //del button's td element
    const TD4 = document.createElement("td");
    TD4.classList.add("deleteButtonTd");
    TR1.appendChild(TD4);
    //del button
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("deleteButtonClass");
    task_delete_el.innerText = "X";
    TD4.appendChild(task_delete_el);

    tableBody.appendChild(TR1);

    // when clicking on delete it will delete the whole row:
    task_delete_el.addEventListener("click", (e) => {
      tableBody.removeChild(TR1);
    });
  });
});
