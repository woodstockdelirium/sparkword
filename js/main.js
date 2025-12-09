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

function initializeThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    const DARK_THEME_CLASS = 'dark-mode';
    const STORAGE_KEY = 'themePreference';
    const SUN_EMOJI = '☀️'; 
    const MOON_EMOJI = '🌙'; 

    if (!toggleButton) {
        console.error('Element with ID "theme-toggle" not found! Cannot setup theme toggle.');
        return;
    }

    function updateToggleButton(isDarkMode) {
        if (isDarkMode) {
            toggleButton.textContent = SUN_EMOJI;
            toggleButton.setAttribute('aria-label', 'Switch to light theme');
        } else {
            toggleButton.textContent = MOON_EMOJI;
            toggleButton.setAttribute('aria-label', 'Switch to dark theme');
        }
    }

    function toggleTheme() {
        bodyElement.classList.toggle(DARK_THEME_CLASS);
        const isDarkMode = bodyElement.classList.contains(DARK_THEME_CLASS);
        
        localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light');
        console.log(`Theme toggled to: ${isDarkMode ? 'dark' : 'light'}`);

        updateToggleButton(isDarkMode); 
    }

    function initializeTheme() {
        const storedPreference = localStorage.getItem(STORAGE_KEY);
        let shouldBeDark = false;

        if (storedPreference === 'dark') {
            shouldBeDark = true;
        } else if (storedPreference === 'light') {
            shouldBeDark = false;
        } else {
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (shouldBeDark) {
            bodyElement.classList.add(DARK_THEME_CLASS);
        }

        const isDarkModeApplied = bodyElement.classList.contains(DARK_THEME_CLASS);
        updateToggleButton(isDarkModeApplied); 
    }

    initializeTheme(); 
    
    toggleButton.addEventListener('click', toggleTheme);
}

function setupNavigationHover() {
    const navLinks = document.querySelectorAll('nav a');
    const HOVER_CLASS = 'nav-link-hover';

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add(HOVER_CLASS);
        });

        link.addEventListener('mouseleave', () => {
            link.classList.remove(HOVER_CLASS);
        });
    });
    console.log(`Navigation hover implemented for ${navLinks.length} links using JS classes.`);
}


function setupKeyNavigation() {
    const bodyElement = document.body;
    let currentFontSize = 16; 
    const step = 2; 

    function updateFontSize() {
        bodyElement.style.fontSize = `${currentFontSize}px`;
        console.log(`Font size changed to: ${currentFontSize}px`);
    }

    function handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                if (currentFontSize < 32) {
                    currentFontSize += step;
                    updateFontSize();
                    event.preventDefault(); 
                }
                break;
            case 'ArrowDown':
                if (currentFontSize > 10) {
                    currentFontSize -= step;
                    updateFontSize();
                    event.preventDefault();
                }
                break;
        }
    }
    updateFontSize(); 
    document.addEventListener('keydown', handleKeyDown);
    console.log('Key navigation (font size control) initialized.');
}

function setupContactFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('Form with ID "contactForm" not found! Validation setup skipped.');
        return;
    }
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject'); 
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError'); 
    const messageError = document.getElementById('messageError');
    
    const successMessageBlock = document.getElementById('successMessage');
    function showValidationError(inputElement, errorElement, message) {
        inputElement.classList.add('input-error');
        errorElement.textContent = message;
    }

    function clearValidationError(inputElement, errorElement) {
        inputElement.classList.remove('input-error');
        errorElement.textContent = '';
    }

    function validateName() {
        const value = nameInput.value.trim();
        if (value.length < 3) {
            showValidationError(nameInput, nameError, 'Name must contain at least 3 characters.');
            return false;
        }
        clearValidationError(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        if (!emailPattern.test(value)) {
            showValidationError(emailInput, emailError, 'Please enter a valid email address (must contain @ and domain).');
            return false;
        }
        clearValidationError(emailInput, emailError);
        return true;
    }
    
    function validateSubject() {
        const value = subjectInput.value.trim();
        if (value.length < 5) {
            showValidationError(subjectInput, subjectError, 'Subject must be longer than 5 characters.');
            return false;
        }
        clearValidationError(subjectInput, subjectError);
        return true;
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length < 10) {
            showValidationError(messageInput, messageError, 'Message must contain at least 10 characters.');
            return false;
        }
        clearValidationError(messageInput, messageError);
        return true;
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        successMessageBlock.textContent = ''; 
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject(); 
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim()
            };

            console.log('--- Form Data Submitted ---');
            console.log(formData);
            
            form.reset();
            successMessageBlock.textContent = 'Форма успішно надіслана!';
            
            nameInput.classList.remove('input-error');
            emailInput.classList.remove('input-error');
            subjectInput.classList.remove('input-error');
            messageInput.classList.remove('input-error');

        } else {
            console.warn('--- Form Data Submitted Successfully ---');
        }
    });
    
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    console.log('Contact form validation successfully initialized.');
}


document.addEventListener('DOMContentLoaded', () => {
    styleAllElements('hero-cta'); 
    addNewParagraphUsingAppend();
    displayCurrentDate();
    setupAccordions();
    initializeThemeToggle(); 
    setupNavigationHover();
    setupKeyNavigation();
    setupContactFormValidation(); 
});