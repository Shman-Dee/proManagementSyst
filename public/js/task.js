const $taskName = document.querySelector('#taskName');
const $taskDesc = document.querySelector('#taskDesc');
const $completed = document.querySelector('#completed');
const $createTaskBtn = document.querySelector('#createTaskBtn');

async function createTask(e) {
    e.preventDefault();
    const projectId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch("/tasks", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            taskName: $taskName.value,
            taskDesc: $taskDesc.value,
            projectId
        })
    });
    window.location.href = `/projects/${projectId}`;
}

async function updateTask() {
    alert('hit');
    const taskId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    await fetch(`/tasks/${taskId}`, {
        method: "put",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            completed: $completed.checked,
        })
    });
    location.href = `/tasks/${taskId}`
}

$completed.addEventListener('change', updateTask);

$createTaskBtn.addEventListener('click', createTask);