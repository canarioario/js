const game = () => {
        let playerScore = 0;
        let computerScore = 0;
        let moves = 0;

        const playGame = () => {
            const rockBtn = document.querySelector('.piedra');
            const paperBtn = document.querySelector('.papel');
            const scissorBtn = document.querySelector('.tijera');
            const playerOptions = [rockBtn, paperBtn, scissorBtn];
            const computerOptions = ['piedra', 'papel', 'tijera']

            // Función para empezar a jugar
            playerOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    const choiceNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[choiceNumber];

                    // Función para comprobar quién gana
                    winner(this.innerText, computerChoice)

                    // calcular ganador por 5 victoria
                    if (playerScore == 5 || computerScore == 5) {
                        gameOver(playerOptions, movesLeft);
                    }
                })
            })

        }

        // Función para decidir ganador
        const winner = (player, computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            player = player.toLowerCase();
            computer = computer.toLowerCase();
            if (player === computer) {
                result.textContent = 'Empate'
            } else if (player == 'piedra') {
                if (computer == 'papel') {
                    result.textContent = 'Ordenador gana.';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;

                } else {
                    result.textContent = 'Jugador gana.'
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            } else if (player == 'tijera') {
                if (computer == 'piedra') {
                    result.textContent = 'Ordenador gana.';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                } else {
                    result.textContent = 'Jugador gana.';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            } else if (player == 'papel') {
                if (computer == 'tijera') {
                    result.textContent = 'Ordenador gana.';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                } else {
                    result.textContent = 'Jugador gana.';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }
        }

        // Función para ejecutar cuando el juego ha terminado
        const gameOver = (playerOptions, movesLeft) => {

            const chooseMove = document.querySelector('.elige');
            const result = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');

            playerOptions.forEach(option => {
                option.style.display = 'none';
            })


            chooseMove.innerText = 'Fin del juego!!'
            movesLeft.style.display = 'none';
            movesLeft.style.color = 'red';


            if (playerScore > computerScore) {
                result.innerText = 'Ganaste el juego'
                result.style.color = 'green';
            } else if (playerScore < computerScore) {

                result.innerText = 'Perdiste el juego';
                result.style.color = 'red';
            } else {

                result.innerText = 'Empate';
                result.style.color = 'grey'
            }
            reloadBtn.innerText = 'Inicializar';
            reloadBtn.style.background = "red"
            reloadBtn.style.color = "white"
            reloadBtn.style.display = 'flex'
            reloadBtn.addEventListener('click', () => {
                window.location.reload();
            })
        }

        // Llamar a la función playGame dentro del juego
        playGame();

    }
    // Llamar a la función del juego
game();