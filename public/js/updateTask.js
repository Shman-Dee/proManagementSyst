const $completed = document.querySelector('#completed');
const $projectId = document.querySelector('#projectId');
const $completedBtn = document.querySelector('#completedBtn')

async function updateTask(e) {
    e.preventDefault();
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
            completed: $completed.value,
        })
    });
   location.href = `/projects/${projectId.value}`
}

// $completedBtn.addEventListener('click', updateTask);
$completed.addEventListener('change', updateTask);