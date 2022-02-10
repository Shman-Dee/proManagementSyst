const $projectName = document.querySelector('#projectName');
const $createProjectBtn = document.querySelector('#createProjectBtn');

async function createProject(e) {
    e.preventDefault();

    const response = await fetch("/projects", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            projectName: $projectName.value,
        })
    });
    window.location.href = `/projects`;
}

$createProjectBtn.addEventListener('click', createProject)