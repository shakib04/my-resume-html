import setExperienceYears from './assets/js/custom/experiance.js';
import {addCheckIconInProjectList} from "./assets/js/custom/check-icon.js";
import customizePicture from "./assets/js/custom/customize-profile-pic.js";
import {loadComponents} from "./components.js";
import {expYears} from "./constants.js";

const componentsLoaded = await loadComponents();

if (componentsLoaded) { // Check if components loaded successfully
    setExperienceYears(expYears);
    addCheckIconInProjectList();
    customizePicture(document.getElementById("profile-pic"), 200);
    // ... any other code that depends on the components being loaded ...
} else {
    // Handle the error, e.g., display a message to the user
    console.error("Application initialization failed.");
}