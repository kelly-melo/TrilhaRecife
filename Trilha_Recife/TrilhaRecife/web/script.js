
const GameState = {
    acertos: 0,
    tentativas: 0,
    dicas: 0,
    pontos: 0
};

let currentEventIndex = 0;
let tentativasEventoAtual = 0;
let timerInterval;
let timeLeft = 60;


const screenStart = document.getElementById('screen-start');
const screenGame = document.getElementById('screen-game');
const screenEnd = document.getElementById('screen-end');

const btnStart = document.getElementById('btn-start');
const btnGuess = document.getElementById('btn-guess');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const inputAno = document.getElementById('ano-input');
const eventoNome = document.getElementById('evento-nome');
const statusPontos = document.getElementById('status-pontos');
const timerDisplay = document.getElementById('timer-display');
const statusEventoCount = document.getElementById('status-evento-count');
const feedbackArea = document.getElementById('feedback-area');
const boardContainer = document.getElementById('board-container');


const btnHelpStart = document.getElementById('btn-help-start');
const btnHelpGame = document.getElementById('btn-help-game');
const btnBack = document.getElementById('btn-back');
const modalHelp = document.getElementById('modal-help');
const modalConfirm = document.getElementById('modal-confirm');
const btnCloseHelp = document.getElementById('btn-close-help');
const btnCancelExit = document.getElementById('btn-cancel-exit');
const btnConfirmExit = document.getElementById('btn-confirm-exit');
const quizScreen = document.getElementById('quiz-screen');
const boardScreen = document.getElementById('board-screen');
const quizCardContainer = document.getElementById('quiz-card-container');


const resultTitle = document.getElementById('result-title');
const resultPoints = document.getElementById('result-points');
const resultAnswer = document.getElementById('result-answer');
const resultFact = document.getElementById('result-fact');
const btnNextPhase = document.getElementById('btn-next-phase');


function fireConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    for(let i=0; i<100; i++) {
        pieces.push({
            x: canvas.width / 2, y: canvas.height / 2 + 100,
            vx: (Math.random() - 0.5) * 20, vy: (Math.random() - 1) * 20,
            color: ['#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#fef08a'][Math.floor(Math.random()*5)],
            size: Math.random() * 10 + 5
        });
    }
    let animationId;
    function render() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        let active = false;
        pieces.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.vy += 0.5; 
            if (p.y < canvas.height) active = true;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        if (active) animationId = requestAnimationFrame(render);
        else { canvas.remove(); cancelAnimationFrame(animationId); }
    }
    render();
}


if(btnHelpStart) btnHelpStart.addEventListener('click', () => modalHelp.classList.remove('hidden'));
if(btnHelpGame) btnHelpGame.addEventListener('click', () => modalHelp.classList.remove('hidden'));
if(btnCloseHelp) btnCloseHelp.addEventListener('click', () => modalHelp.classList.add('hidden'));

if(btnBack) btnBack.addEventListener('click', () => modalConfirm.classList.remove('hidden'));
if(btnCancelExit) btnCancelExit.addEventListener('click', () => modalConfirm.classList.add('hidden'));
if(btnConfirmExit) btnConfirmExit.addEventListener('click', () => {
    modalConfirm.classList.add('hidden');
    clearInterval(timerInterval);
    showScreen(screenStart);
});


inputAno.addEventListener('input', () => {
    btnGuess.disabled = inputAno.value.trim() === '';
});


function showScreen(screenElement) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screenElement.classList.add('active');
}


function renderBoard() {
    boardContainer.innerHTML = '';
    for (let i = 0; i < eventos.length; i++) {
        const slot = document.createElement('div');
        slot.classList.add('board-slot');
        slot.id = `slot-${i}`;
        slot.textContent = '?';
        boardContainer.appendChild(slot);
    }
}


btnStart.addEventListener('click', () => {
    
    GameState.acertos = 0;
    GameState.tentativas = 0;
    GameState.dicas = 0;
    GameState.pontos = 0;
    currentEventIndex = 0;
    
    renderBoard();
    loadEvent();
    showScreen(screenGame);
});


function loadEvent() {
    inputAno.value = '';
    inputAno.disabled = false;
    btnGuess.disabled = true;
    
    
    boardScreen.classList.add('hidden');
    boardScreen.classList.remove('zoom-in');
    quizScreen.classList.remove('hidden');
    
    
    // Reseta animações do card
    quizCardContainer.classList.remove('flip-out', 'shake-animation');
    
    
    document.querySelectorAll('.board-slot').forEach(s => {
        s.classList.remove('active');
        const avatar = s.querySelector('.slot-avatar');
        if(avatar) avatar.remove();
    });
    
    const currentSlot = document.getElementById(`slot-${currentEventIndex}`);
    if (currentSlot) {
        currentSlot.classList.add('active');
        const avatar = document.createElement('i');
        avatar.className = 'fas fa-street-view slot-avatar';
        currentSlot.appendChild(avatar);
    }

    const evento = eventos[currentEventIndex];
    eventoNome.textContent = evento.descricao;
    statusPontos.innerHTML = `<i class="fas fa-trophy"></i> Pontos: ${GameState.pontos}`;
    statusEventoCount.innerHTML = `<i class="fas fa-map"></i> Evento ${currentEventIndex + 1}/${eventos.length}`;
    inputAno.focus();
    
    
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.innerHTML = `<i class="fas fa-clock"></i> ${timeLeft}s`;
    if (timeLeft <= 10) {
        timerDisplay.classList.add('timer-warning');
    } else {
        timerDisplay.classList.remove('timer-warning');
    }
}

function handleTimeout() {
    inputAno.disabled = true;
    btnGuess.disabled = true;
    GameState.tentativas++;
    
    const eventoAtual = eventos[currentEventIndex];
    const currentSlot = document.getElementById(`slot-${currentEventIndex}`);
    
    quizCardContainer.classList.remove('shake-animation');
    void quizCardContainer.offsetWidth;
    quizCardContainer.classList.add('shake-animation');
    
    setTimeout(() => {
        quizCardContainer.classList.add('flip-out');
        
        setTimeout(() => {
            quizScreen.classList.add('hidden');
            boardScreen.classList.remove('hidden');
            boardScreen.classList.add('zoom-in');
            
            if (currentSlot) {
                currentSlot.classList.remove('active');
                currentSlot.classList.add('error');
                currentSlot.innerHTML = `<i class="fas fa-times"></i>`;
            }
            
            resultTitle.textContent = "Tempo Esgotado! ⏰";
            resultTitle.className = "result-title-error";
            resultPoints.textContent = "+0 Pontos";
            resultAnswer.innerHTML = `O ano correto era: <strong>${eventoAtual.ano}</strong>`;
            resultFact.innerHTML = `<strong>Fato Histórico:</strong> ${eventoAtual.contexto}`;
            
            showResultPanel();
        }, 600);
    }, 800);
}


btnGuess.addEventListener('click', processGuess);
inputAno.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !btnGuess.disabled) processGuess();
});

function processGuess() {
    const palpiteStr = inputAno.value.trim();
    if (!palpiteStr) return;
    
    clearInterval(timerInterval);
    
    const palpite = parseInt(palpiteStr, 10);
    const eventoAtual = eventos[currentEventIndex];
    
    inputAno.disabled = true;
    btnGuess.disabled = true;
    GameState.tentativas++;
    
    const currentSlot = document.getElementById(`slot-${currentEventIndex}`);
    
    if (palpite === eventoAtual.ano) {
        
        GameState.acertos++;
        GameState.pontos += 10;
        
        quizCardContainer.classList.add('flip-out');
        
        setTimeout(() => {
            quizScreen.classList.add('hidden');
            boardScreen.classList.remove('hidden');
            boardScreen.classList.add('zoom-in');
            
            if (currentSlot) {
                currentSlot.classList.remove('active');
                currentSlot.classList.add('completed');
                currentSlot.textContent = `+10`;
            }
            
            resultTitle.textContent = "Resposta Correta! 🎉";
            resultTitle.className = "result-title-success";
            resultPoints.textContent = "+10 Pontos";
            resultAnswer.innerHTML = `Você acertou: <strong>${eventoAtual.ano}</strong>`;
            resultFact.innerHTML = `<strong>Curiosidade:</strong> ${eventoAtual.contexto}`;
            
            fireConfetti();
            showResultPanel();
        }, 600); 
        
    } else {
       
        quizCardContainer.classList.remove('shake-animation');
        void quizCardContainer.offsetWidth; 
        quizCardContainer.classList.add('shake-animation');
        
        setTimeout(() => {
            quizCardContainer.classList.add('flip-out');
            
            setTimeout(() => {
                quizScreen.classList.add('hidden');
                boardScreen.classList.remove('hidden');
                boardScreen.classList.add('zoom-in');
                
                if (currentSlot) {
                    currentSlot.classList.remove('active');
                    currentSlot.classList.add('error');
                    currentSlot.innerHTML = `<i class="fas fa-times"></i>`;
                }
                
                resultTitle.textContent = "Que pena! Você errou. ❌";
                resultTitle.className = "result-title-error";
                resultPoints.textContent = "+0 Pontos";
                resultAnswer.innerHTML = `O ano correto era: <strong>${eventoAtual.ano}</strong>`;
                resultFact.innerHTML = `<strong>Fato Histórico:</strong> ${eventoAtual.contexto}`;
                
                showResultPanel();
            }, 600);
        }, 800); 
    }
}

function showResultPanel() {
    statusPontos.innerHTML = `<i class="fas fa-trophy"></i> Pontos: ${GameState.pontos}`;
    btnNextPhase.classList.remove('hidden');
}

btnNextPhase.addEventListener('click', () => {
    btnNextPhase.classList.add('hidden');
    currentEventIndex++;
    if (currentEventIndex < eventos.length) {
        loadEvent();
    } else {
        endGame();
    }
});


function endGame() {
    document.getElementById('final-acertos').textContent = GameState.acertos;
    document.getElementById('final-tentativas').textContent = GameState.tentativas;
    document.getElementById('final-dicas').textContent = GameState.dicas;
    document.getElementById('final-pontos').textContent = GameState.pontos;
    
    showScreen(screenEnd);
}


btnRestart.addEventListener('click', () => {
    showScreen(screenStart);
});
