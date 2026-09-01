# Rock-Paper-Scissors Game 🎮

A classic Rock-Paper-Scissors game built with vanilla JavaScript, HTML, and CSS. Play against the computer and track your score!

## 📋 Overview

This is an interactive web-based implementation of the traditional Rock-Paper-Scissors game. The player competes against the computer in multiple rounds, with scores tracked throughout the game session.

## 🎯 Features

- **Interactive Gameplay**: Click on Rock, Paper, or Scissors to make your move
- **Computer AI**: The computer randomly selects its move
- **Score Tracking**: Real-time scoreboard displays both player and computer scores
- **Game Messages**: Dynamic feedback messages inform you of game outcomes (win, loss, or draw)
- **Responsive Design**: Hover effects and visual feedback for better user experience
- **Persistent Scoring**: Scores accumulate across multiple rounds within the session

## 📁 Project Structure

### Files Description

- **rock.html**: 
  - HTML structure with game interface
  - Three choice buttons (Rock, Paper, Scissors) with images
  - Scoreboard displaying player and computer scores
  - Message container for game feedback
  - Links to CSS stylesheet and JavaScript file

- **scissor.js**:
  - Core game logic and event listeners
  - `generate()`: Randomly selects computer's move
  - `playgame(userchoice)`: Processes game round and determines winner
  - `showwinner(userwin)`: Updates scores and displays result message
  - Handles all user interactions

- **paper.css**:
  - Responsive design with flexbox layout
  - Styled choice buttons with hover effects
  - Scoreboard formatting
  - Message container styling
  - Color scheme: Dark blue header, teal background, black message box

## 🚀 How to Play

1. **Open the Game**: Open `rock.html` in your web browser
2. **Make Your Move**: Click on one of the three choices:
   - 🪨 Rock
   - 📄 Paper
   - ✂️ Scissors
3. **View Result**: The game will display:
   - The computer's choice
   - Who won the round
   - Updated scores
4. **Play Again**: Continue clicking to play multiple rounds

## 🎲 Game Rules

- **Rock beats Scissors**
- **Scissors beats Paper**
- **Paper beats Rock**
- If both choose the same option, it's a **Draw**

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox layout, responsive design, animations
- **JavaScript (ES6+)**: Arrow functions, DOM manipulation, event listeners

## 🎨 Design Highlights

- **Color Scheme**: 
  - Header: Dark Blue (#081b31)
  - Background: Teal (rgb(149, 167, 161))
  - Message Box: Black with light text
  
- **Interactive Elements**:
  - Circular choice buttons with 50% border-radius
  - Hover effect with reduced opacity (0.5) and darker background
  - Cursor changes to pointer on hover

## 📝 Game Logic

The game follows a simple tournament-style logic:
1. User clicks a choice (rock, paper, or scissors)
2. Computer randomly generates its choice
3. Game compares choices using conditional logic
4. Winner is determined and score is updated
5. Result message is displayed

## 🔧 Future Enhancements

Potential improvements for future versions:
- Add a reset score button
- Implement best-of-N match system
- Add sound effects for wins/losses
- Store high scores using localStorage
- Mobile-optimized touch interface
- Animations for smoother transitions
- Difficulty levels (easy, medium, hard)
- Multiplayer mode

## 📄 License

This project is open source and available for educational and personal use.

## 👤 Author

Created by [ishadogra7](https://github.com/ishadogra7)

---

**Enjoy playing! May the odds be ever in your favor!** 🍀
