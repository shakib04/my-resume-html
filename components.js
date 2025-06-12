const components = {
    'self-intro.html': 'self-intro',
    'summary.html': 'summary',
    'professional-experience.html': 'professional-experience',
    'education.html': 'education',
    'technical-skills.html': 'technical-skills',
    'projects.html': 'projects',
    'achievements.html': 'achievements',
    'courses-and-certificate.html': 'courses-and-certificate',
    // 'language.html': 'language',
    // 'references.html': 'references',
}

async function loadComponents() { // Make the function async
    const promises = []; // Array to store fetch promises

    for (const filename in components) {
        if (components.hasOwnProperty(filename)) {
            const rootId = 'root-' + components[filename]; // Get the corresponding root ID
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