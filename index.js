(function(){
    console.log("Kahoot Automation Bookmarklet Activated!");

    // This loop runs every 1.5 seconds to check if answer buttons are on your screen
    setInterval(() => {
        // Look for standard Kahoot answer choice buttons in the browser document
        const buttons = document.querySelectorAll('[data-functional-selector^="answer-"]');
        
        if (buttons.length > 0) {
            // Pick a completely random number based on how many buttons are visible
            const randomIndex = Math.floor(Math.random() * buttons.length);
            
            console.log(`Automatically clicking answer choice index: ${randomIndex}`);
            buttons[randomIndex].click();
        }
    }, 1500);
})();
