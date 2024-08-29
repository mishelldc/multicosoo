let stn1 = document.querySelector(".seccion1");

stn1.innerHTML = `
<div class="header">
    <div class="title">
        <h2>Multicoso</h2>
    </div>
    <div class="search">
        <input type="text" id="searchInput" placeholder="Buscar">
    </div>
    <div class="buttons">
        <button class="add_tarea">+</button>
    </div>
</div>

<div class="task-header">
    <span>Nombre de la Tarea</span>
    <img class="IMGBMO" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKfMGRQLxoFS8WtCgHQWSawhlayMMW2Czow&s" alt="50px" srcset="">
    <span>Asignado</span>
    <span>Fecha de entrega</span>
    <span>Estado</span>
</div>

<!-- Modal para crear una nueva tarea -->
<div class="modal" id="modalForm">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <h2>Nueva Tarea</h2>
        <form id="taskForm">
            <label for="taskName">Nombre de la tarea:</label>
            
            <input type="text" id="taskName" name="taskName" required>
            
            <label for="assignedTo">Persona a cargo:</label>
            <input type="text" id="assignedTo" name="assignedTo" required>

            <label for="dueDate">Fecha de culminación:</label>
            <input type="date" id="dueDate" name="dueDate" required>

            <label for="taskStatus">Estado de la tarea:</label>
            <select id="taskStatus" name="taskStatus">
                <option value="Sin asignar">Sin asignar</option>
                <option value="Asignado">Asignado</option>
                <option value="Completado">Completado</option>
                <option value="Completado con retraso">Completado con retraso</option>
                <option value="No presentado">No presentado</option>
            </select>

            <button type="submit">Crear tarea</button>
        </form>
    </div>
</div>
`;

let addTareaButton = document.querySelector(".add_tarea");
let modal = document.getElementById("modalForm");
let closeModalButton = document.getElementById("closeModal");

// Abrir modal
addTareaButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar modal
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let taskName = document.getElementById("taskName").value;
    let assignedTo = document.getElementById("assignedTo").value;
    let dueDate = document.getElementById("dueDate").value;
    let taskStatus = document.getElementById("taskStatus").value;

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <span class="task-name">${taskName}</span>
        <span class="task-assigned">${assignedTo}</span>
        <span class="task-date">${dueDate}</span>
        <span class="task-status">${taskStatus}</span>
        <span class="task-icon"><i class="fas fa-check-circle"></i></span> <!-- Ícono -->
    `;

    let seccion2 = document.querySelector(".seccion2");
    if (seccion2) {
        seccion2.appendChild(taskItem);
    }

    modal.style.display = "none";
    document.getElementById("taskForm").reset();
});

// Funcionalidad de búsqueda
document.getElementById("searchInput").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let tasks = document.querySelectorAll(".task-item");

    tasks.forEach(function (task) {
        let taskName = task.querySelector(".task-name").textContent.toLowerCase();
        let taskAssigned = task.querySelector(".task-assigned").textContent.toLowerCase();
        let taskStatus = task.querySelector(".task-status").textContent.toLowerCase();

        if (taskName.includes(searchValue) || taskAssigned.includes(searchValue) || taskStatus.includes(searchValue)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    });
});
