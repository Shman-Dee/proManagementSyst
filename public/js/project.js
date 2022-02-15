const $projectName = document.querySelector("#projectName");
const $createProjectBtn = document.querySelector("#createProjectBtn");
const $projectDesc = document.querySelector(".projectDesc");
const $error = document.querySelector("#error");

async function createProject(e) {
  e.preventDefault();
  // console.log($projectDesc.children[0].innerHTML);
  const desc = $projectDesc.children[0].innerHTML;
  console.log(desc);
  if (($projectDesc && $projectName) || !desc === "<p><br></p>") {
    if (desc.length < 20) {
      return ($error.textContent = "Please provide at least 20 characters in the description");
    }
    await fetch("/projects", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        projectName: $projectName.value,
        projectDesc: desc,
      }),
    })
      .then((response) => {
        window.location.href = `/projects`;
      })
      .catch((error) => {
        $error.textContent = error.responseJSON.error;
      });
  } else {
    $error.textContent = "Please provide a project name and description";
  }
}

$createProjectBtn.addEventListener("click", createProject);
