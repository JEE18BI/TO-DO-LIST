let counter=0;
const divs = document.querySelectorAll(".divs"); // Select all elements with class "divs"
const back = document.getElementById("back");
for (const div of divs) {  // Loop through each element
  div.addEventListener("click", function() {
    window.location.href = "Personal.html"; // Redirect on click
  });
}


function addTask() {
    // Get the value entered in the input field
    const newTaskValue = document.getElementById("newTask").value;
    
    // Use template literal
    
    // Check if the entered value is empty
    if (!newTaskValue) {
      alert("Please enter a task!");
      return;
    }
  
    // Create a new list item (li) element
    const newListItem = document.createElement("li");
    
    // Create a checkbox element for the task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    // Create a label element for the task text (optional)
    const label = document.createElement("label");
    label.textContent = newTaskValue;
  
    // Append the checkbox (or label with checkbox) to the list item
    newListItem.appendChild(checkbox);
    newListItem.appendChild(label); // Append label after checkbox
  
    // Create a delete button for the task (in HTML structure)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");  // Add class for CSS styling (optional)
  
    // Attach onclick event listener to the delete button
    deleteButton.onclick = function() {
      this.parentNode.remove();  // Remove the entire list item (task)
    };
  
    // Append the delete button to the list item
    newListItem.appendChild(deleteButton);
  
    // Get the task list element
    const taskList = document.getElementById("taskList");
  
    // Append the new list item (with checkbox, label, and delete button) to the task list
    taskList.appendChild(newListItem);
  
    // Clear the input field for the next task
    document.getElementById("newTask").value = "";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
          this.parentNode.classList.add("strikethrough");
        } else {
          this.parentNode.classList.remove("strikethrough");
        }
      });
    
      counter++;
      document.getElementById("counter").textContent = counter;
  }
  
  
  back.addEventListener("click", function(){
    window.location.href= "index.html";
  });