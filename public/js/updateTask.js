const $completed = document.querySelector('#completed');
const $projectId = document.querySelector('#projectId');
const $completedBtn = document.querySelector('#completedBtn')
const $noteText = document.querySelector(".noteText");
const $createNoteBtn = document.querySelector('#createNoteBtn');

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

async function createNote(e) {
    e.preventDefault();
    const taskId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const note = $noteText.children[0].innerHTML;
    if (note) {
        if (note < 20) {
            return ($error.textContent = "Please provide at least 20 characters in the note");
        }

        await fetch("/notes", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                note_text: note,
                taskId
            })
        })
        .then((response) => {
            window.location.href = `/tasks/${taskId}`;
        })
        .catch((error) => {
            $error.textContent = error.responseJSON.error;
        });
    } else {
        $error.textContent = "Please provide note text";
    }
}

if ($createNoteBtn) {
    $createNoteBtn.addEventListener('click', createNote);
}
$completed.addEventListener('change', updateTask);