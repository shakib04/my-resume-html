const components = {
    'self-intro.html': 'self-intro',
    'summary.html': 'summary',
    'professional-experience.html': 'professional-experience',
    'technical-skills.html': 'technical-skills',
    'projects.html': 'projects',
    'education.html': 'education',
    'achievements.html': 'achievements',
    'courses-and-certificate.html': 'courses-and-certificate',
    // 'language.html': 'language',
    // 'references.html': 'references',
}

const rootElement = document.getElementById('root'); // Get the root element

async function loadComponents() { // Make the function async
    const promises = []; // Array to store fetch promises
    rootElement.innerHTML = ''; // Clear the root element before loading components

    for (const filename in components) {
        if (components.hasOwnProperty(filename)) {
            // create section elements for each component
            const tempId = 'root-' + components[filename]; // Get the corresponding root ID
            const sectionElem = document.createElement('div');
            sectionElem.setAttribute('id', tempId);
            rootElement.appendChild(sectionElem); // Append the section element to the root

            // Fetch each component and insert its HTML into the corresponding section
            promises.push( // Add each promise to the array
                fetch('components/' + filename)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById(tempId).innerHTML = html;
                    })
                    .catch(error => {
                        console.warn('Error loading:', filename, error);
                        // Important: Handle errors!  Provide default content or re-throw.
                        // Example:
                        // return Promise.resolve("<p>Error loading component.</p>");
                        //throw error; // Re-throw to reject the Promise.all()
                    })
            );
        }
    }

    try {
        await Promise.all(promises); // Wait for all fetches to complete
        return true; // Indicate success (optional)
    } catch (error) {
        console.error("One or more components failed to load:", error);
        return false; // Indicate failure (optional)
    }
}

export {loadComponents};

// fetch('components/projects.html') // Path to your HTML file
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById('projects-root').innerHTML = html;
//     })
//     .catch(error => {
//         console.error('Error loading projects.html:', error);
//     });