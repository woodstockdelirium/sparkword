function styleAllElements(className) {
    const elementsToStyle = document.querySelectorAll(`.${className}`); 
    elementsToStyle.forEach(element => {
        element.style.backgroundColor = '#E91E63'; 
        element.style.color = 'white'; 
        element.style.fontWeight = '900'; 
        element.style.border = '3px solid #C2185B'; 
    });
    console.log(`Styled ${elementsToStyle.length} elements with class .${className}.`);
}

function addNewParagraphUsingAppend() {

    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.endsWith('index.html')) {
        console.log('The "Home" button was not added because this is the main page.');
        return; 
    }
    const mainContainer = document.querySelector('main');
    
    if (mainContainer) {
        const homeLinkButton = document.createElement('a');
        homeLinkButton.textContent = 'Home'; 
        homeLinkButton.href = 'index.html'; 
        homeLinkButton.style.display = 'inline-block';
        homeLinkButton.style.padding = '10px 20px';
        homeLinkButton.style.backgroundColor = '#7B7FC9'; 
        homeLinkButton.style.color = 'white';
        homeLinkButton.style.textDecoration = 'none'; 
        homeLinkButton.style.borderRadius = '5px';
        homeLinkButton.style.marginTop = '20px'; 
        
        mainContainer.append(homeLinkButton);
        
        console.log('"Home" button successfully added.');
    } else {
        console.error('The <main> container was not found!');
    }
}

function displayCurrentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    const dateElement = document.getElementById('current-date');
    
if (dateElement) {
        dateElement.textContent = formattedDate;
        console.log(`Current date "${formattedDate}" successfully displayed in the footer.`);
    } else {
        console.error('Element with ID "current-date" not found!');
    }
}

function setupAccordions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.classList.toggle('show');

                const isShown = targetContent.classList.contains('show');
                const defaultText = isShown ? 'Hide' : 'Show more';
                let newText;

                if (targetId === 'edge-content') {
                    newText = isShown ? 'Hide benefits' : 'Show benefits';
                } else if (targetId === 'team-content') {
                    newText = isShown ? 'Hide team' : 'Show team';
                } else {
                    newText = defaultText;
                }
                
                button.textContent = newText;
            }
        });
    });
}







document.addEventListener('DOMContentLoaded', () => {
    styleAllElements('hero-cta'); 
    addNewParagraphUsingAppend();
    displayCurrentDate();
    setupAccordions();
});

