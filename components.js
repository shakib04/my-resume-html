const components = {
    'self-intro.html': 'self-intro-root',
    'summary.html': 'summary-root',
    'professional-experience.html': 'professional-experience-root',
    'education.html': 'education-root',
    'technical-skills.html': 'technical-skills-root',
    'projects.html': 'projects-root',
    'achievements.html': 'achievements-root',
    'courses-and-certificate.html': 'courses-and-certificate-root',
    'language.html': 'language-root',
    'references.html': 'references-root',
}

async function loadComponents() { // Make the function async
    const promises = []; // Array to store fetch promises

    for (const filename in components) {
        if (components.hasOwnProperty(filename)) {
            const rootId = components[filename];
            promises.push( // Add each promise to the array
                fetch('components/' + filename)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById(rootId).innerHTML = html;
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