let inputText = document.querySelector('.input-text');
let tableBody = document.querySelector('.table-body');
let check = document.querySelector('.check');


function updateTaskNumber() {
    let rows = tableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.querySelector('td').textContent = index + 1;
    });
}

function createTaskRow(taskTextContent) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td></td>
        <td><input type="checkbox" class="check" onchange="updateTaskStatus(this)"></td>
        <td class="task-text">${taskTextContent}</td>
        <td class="status">Pending</td>
        <td>
            <div class="btns">
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
            </div>
        </td>
    `;
    return tr;
}

function addTask() {
    let inputValue = inputText.value.trim();
    if (inputValue !== '') {
        let newRow = createTaskRow(inputValue);
        tableBody.appendChild(newRow);
        inputText.value = '';
        updateTaskNumber();
    } else {
        alert('Enter Your Task...');
    }
}

function deleteTask(button) {
    let row = button.closest('tr');
    row.remove();
    updateTaskNumber();
}

function editTask(button) {
    let row = button.closest('tr');
    let taskText = row.querySelector('.task-text');
    let currentValue = prompt('Current Input Text', taskText.textContent);
    if (currentValue !== '') {
        taskText.textContent = currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
        updateTaskNumber();
    }
}

function updateTaskStatus(checkbox) {
    let row = checkbox.closest('tr');
    let statusCell = row.querySelector('.status');
    let taskText = row.querySelector('.task-text');

    if (checkbox.checked) {
        statusCell.textContent = 'Completed';
        taskText.classList.add('complete');
    } else {
        statusCell.textContent = 'Pending';
        taskText.classList.remove('complete');
    }    
}

function cancelTask() {
    inputText.value = '';
}

updateTaskNumber();