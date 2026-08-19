const Kahoot = require('kahoot.js-updated');
const client = new Kahoot();

// Replace with the active Kahoot Game PIN you want to connect to
const GAME_PIN = 123456; 
const BOT_NAME = 'TestBot_Node';

console.log(`Attempting to join session ${GAME_PIN}...`);

// Join the game session
client.join(GAME_PIN, BOT_NAME).catch(err => {
    console.error('Failed to join the session:', err.message);
});

// Event: Successfully joined the game
client.on('joined', () => {
    console.log(`Successfully joined as: ${BOT_NAME}`);
});

// Event: A new question has started on the host screen
client.on('quizUpdate', (question) => {
    console.log('\n--- New Question Received ---');
    console.log(`Question Index: ${question.questionIndex}`);
    console.log(`Time Allowed: ${question.timeLeft} seconds`);
    console.log(`Number of Choices: ${question.numberOfChoices}`);
    
    // Example: Automatically select the first answer choice (Index 0) after a 2-second delay
    setTimeout(() => {
        console.log('Sending answer choice: 0');
        question.answer(0).catch(err => {
            console.error('Error sending answer:', err.message);
        });
    }, 2000);
});

// Event: The quiz session has ended
client.on('quizEnd', () => {
    console.log('The game has finished.');
    process.exit(0);
});

// Event: Disconnected or kicked from the session
client.on('disconnect', (reason) => {
    console.log(`Disconnected from session. Reason: ${reason}`);
});
