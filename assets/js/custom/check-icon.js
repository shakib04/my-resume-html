function createProjectCheckIcon() {
    const projectCheck = document.createElement('img');
    projectCheck.src = "./assets/svg/check-solid.svg";
    projectCheck.width = "20";
    projectCheck.height = "20";
    projectCheck.title = "Checkmark";
    projectCheck.alt = "Checkmark";

    return projectCheck;
}

export { createProjectCheckIcon };