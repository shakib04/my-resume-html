
// adding check icon for project list
const addCheckIconInProjectList = () => {
    const projects = document.getElementsByClassName('project-check');
    const projectsCopy = Array.from(projects);

    projectsCopy.forEach(function (item) {
        const projectCheck = createProjectCheckIcon();
        item.replaceWith(projectCheck);
    });
}

function createProjectCheckIcon() {
    const projectCheck = document.createElement('img');
    projectCheck.src = "./assets/svg/check-solid.svg";
    projectCheck.width = "20";
    projectCheck.height = "20";
    projectCheck.title = "Checkmark";
    projectCheck.alt = "Checkmark";

    return projectCheck;
}

function setExperienceYears(experienceYears) {
    const experience = document.getElementsByClassName('experienceYears');
    for (let i = 0; i < experience.length; i++) {
        experience[i].innerHTML = experienceYears;
    }
}