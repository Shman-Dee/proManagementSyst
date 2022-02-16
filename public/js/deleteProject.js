const deleteBtn = document.querySelector("#deleteBtn");

function confirmDelete() {
    confirm('Are you sure that you want to delete this project?')
}

function deleteProject() {

    let confirmDelete = confirmDelete();
    if (confirmDelete) {
        const projectId = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
        fetch("/projects/:projectId", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: projectId
            })
        });
        location.href = "/projects";
    }

}

deleteBtn.addEventListener("click", deleteProject);