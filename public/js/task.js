const $taskName = document.querySelector('#taskName');
const $taskDesc = document.querySelector('#taskDesc');
const $createTaskBtn = document.querySelector('#createTaskBtn');
const $error = document.querySelector("#error");

async function createTask(e) {
    e.preventDefault();
    const projectId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log($taskDesc.value);
    if ($taskDesc.value && $taskName.value) {
        console.log($taskDesc.value && $taskName.value);
        if ($taskDesc.value.length < 20) {
            return ($error.textContent = "Please provide at least 20 characters in the description");
        }
        if ($taskName.value.length < 4) {
            return ($error.textContent = "Please provide at least 4 characters for task name");
        }

        await fetch("/tasks", {
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
            })
            .then((response) => {
                window.location.href = `/projects/${projectId}`;
            })
            .catch((error) => {
                $error.textContent = error.responseJSON.error;
            });
    } else {
        $error.textContent = "Please provide a project name and description";
    }
}

if ($createTaskBtn) {
    $createTaskBtn.addEventListener('click', createTask);
}