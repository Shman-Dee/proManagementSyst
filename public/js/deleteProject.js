const deleteBtn = document.querySelector("#deleteBtn");

function confirmDelete() {
    confirm('Are you sure that you want to delete this project?')
}

async function deleteProject() {
    const projectId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    let confirmDelete = confirm('Are you sure that you want to delete this project?');
    if (confirmDelete) {
        await fetch(`/projects/${projectId}`, {
            method: "DELETE",
            body: JSON.stringify({
                id: projectId
            }),
            headers: { "Content-Type": "application/json" },
        });
    }
    location.href = `/projects`;
}

deleteBtn.addEventListener("click", deleteProject);