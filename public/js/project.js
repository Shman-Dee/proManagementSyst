const $projectName = document.querySelector("#projectName");
const $createProjectBtn = document.querySelector("#createProjectBtn");
const $projectDesc = document.querySelector(".projectDesc");

async function createProject(e) {
  e.preventDefault();
  console.log($projectDesc.children[0].innerHTML);
  const response = await fetch("/projects", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({
      projectName: $projectName.value,
      projectDesc: $projectDesc.children[0].innerHTML,
    }),
  });
  
  window.location.href = `/projects`;
}

$createProjectBtn.addEventListener("click", createProject);
