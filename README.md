# Kahoot Browser Automation Bookmarklet

An automated testing script that clicks a random answer when choice buttons appear on screen. This runs completely inside your web browser.

## How to Install
1. Highlight and copy the exact code block below:

```javascript
javascript:(function(){console.log("Kahoot Automation Bookmarklet Activated!");alert("Automation Activated! This tab will now automatically click a random answer when options appear.");setInterval(()=>{const buttons=document.querySelectorAll('[data-functional-selector^="answer-"]');if(buttons.length>0){const randomIndex=Math.floor(Math.random()*buttons.length);console.log(`Automatically clicking answer choice index: ${randomIndex}`);buttons[randomIndex].click();}},1500);})();
```

2. Bookmark any webpage in your browser.
3. Right-click that bookmark, select **Edit**, and change the name to `Kahoot Auto-Clicker`.
4. Delete the URL and paste the copied code block into the URL/Address field. Click **Save**.

## How to Run
1. Open your browser and join a live Kahoot session as a player.
2. While waiting in the game lobby or during a question countdown, click your saved `Kahoot Auto-Clicker` bookmark.
3. An alert box will appear confirming activation. The script will now automatically click a choice for you whenever answers are displayed.
