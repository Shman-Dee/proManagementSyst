const $projectName = document.querySelector("#projectName");
const $createProjectBtn = document.querySelector("#createProjectBtn");
const $projectDesc = document.querySelector("#projectDesc");

async function createProject(e) {
  e.preventDefault();

  const response = await fetch("/projects", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({
      projectName: $projectName.value,
      projectDesc: $projectDesc.value,
    }),
  });
  console.log($projectDesc.value);
  window.location.href = `/projects`;
}

$createProjectBtn.addEventListener("click", createProject);
