export default function setExperienceYears(experienceYears) {
    const experience = document.getElementsByClassName("experienceYears");
    for (let i = 0; i < experience.length; i++) {
        experience[i].innerHTML = experienceYears;
    }
}