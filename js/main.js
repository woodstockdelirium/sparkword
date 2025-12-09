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

document.addEventListener('DOMContentLoaded', () => {
    styleAllElements('hero-cta'); 
    addNewParagraphUsingAppend();
});

