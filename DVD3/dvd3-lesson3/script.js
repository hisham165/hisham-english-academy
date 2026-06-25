// ==========================================
// 1. البيانات (Data) - Lesson 3
// ==========================================

const wordsData = [
    { word: "Musical", translation: "مسرحية غنائية", definition: "A play or film in which singing and dancing play an essential part.", example: "Can I hear a song from the musical?", image: "images/1.jpg", audio: "vocab-audio/1.mp3" },
    { word: "Ready", translation: "مستعد", definition: "Prepared for an action or situation.", example: "Okay, are you ready?", image: "images/2.jpg", audio: "vocab-audio/2.mp3" },
    { word: "The part / Role", translation: "دور", definition: "An actor's line or character in a play or film.", example: "I'm here for the part of Danny Zuco.", image: "images/3.jpg", audio: "vocab-audio/3.mp3" },
    { word: "Certainly", translation: "بالتأكيد", definition: "Used to express complete agreement.", example: "Certainly. Go ahead.", image: "images/4.jpg", audio: "vocab-audio/4.mp3" },
    { word: "Go ahead", translation: "تفضل بالبدء / استمر", definition: "Proceed or continue.", example: "Certainly. Go ahead.", image: "images/5.jpg", audio: "vocab-audio/5.mp3" },
    { word: "Read", translation: "يقرأ", definition: "Look at and comprehend the meaning of written matter.", example: "Can you read fluently?", image: "images/6.jpg", audio: "vocab-audio/6.mp3" },
    { word: "Write", translation: "يكتب", definition: "Mark letters or words on a surface.", example: "Can you read and write fluently?", image: "images/7.jpg", audio: "vocab-audio/7.mp3" },
    { word: "Fluently", translation: "بطلاقة", definition: "With an ability to express oneself easily and articulately.", example: "Can you read and write fluently in Italian?", image: "images/8.jpg", audio: "vocab-audio/8.mp3" },
    { word: "Excellent", translation: "ممتاز", definition: "Extremely good; outstanding.", example: "Excellent. And... Is this the first time?", image: "images/9.jpg", audio: "vocab-audio/9.mp3" },
    { word: "First time", translation: "المرة الأولى", definition: "The initial occurrence of something.", example: "Is this the first time you've ever sung in this role?", image: "images/10.jpg", audio: "vocab-audio/10.mp3" },
    { word: "Honest", translation: "صادق / صريح", definition: "Free of deceit and untruthfulness; sincere.", example: "To be honest, yes.", image: "images/11.jpg", audio: "vocab-audio/11.mp3" },
    { word: "Perfect", translation: "مثالي", definition: "Having all the required or desirable elements.", example: "I'm sure I'm perfect for it.", image: "images/12.jpg", audio: "vocab-audio/12.mp3" },
    { word: "Song", translation: "أغنية", definition: "A short poem or other set of words set to music.", example: "Can I hear a song from the musical?", image: "images/13.jpg", audio: "vocab-audio/13.mp3" },
    { word: "Hesitate", translation: "يتردد", definition: "Pause before saying or doing something.", example: "Please sir, don't hesitate...", image: "images/14.jpg", audio: "vocab-audio/14.mp3" }
];

const storyQuizData = [
    { q: "Why is Peter here today?", options: ["For an interview as a chef", "For an audition", "To learn Italian"], correct: 1 },
    { q: "What part does Peter want to play?", options: ["Danny Zuco", "Jack", "Summer Boy"], correct: 0 },
    { q: "Can Peter read and write fluently in Italian?", options: ["No, he can't.", "Yes, he can.", "He is learning."], correct: 1 },
    { q: "Is this Peter's first time singing in this role?", options: ["Yes, it is.", "No, he sang it many times.", "The text doesn't say."], correct: 0 }
];

const grammarQuizData = [
    { q: "What does 'Can you read and write fluently?' express?", options: ["Permission", "Ability", "Suggestion"], correct: 1 },
    { q: "What does 'Can I ask you a few questions?' express?", options: ["Ability", "Permission", "Order"], correct: 1 },
    { q: "Which is the correct negative form of 'can'?", options: ["Cannot / Can't", "Don't can", "Not can"], correct: 0 },
    { q: "After 'can', we must use:", options: ["Verb + ing", "To + Verb", "The base form of the verb"], correct: 2 },
    { q: "Complete: 'She ____ speak three languages.'", options: ["can", "cans", "canning"], correct: 0 },
    { q: "Complete: '____ I use your phone, please?'", options: ["Do", "Am", "Can"], correct: 2 },
    { q: "Complete: 'I'm sorry, I ____ come to the party tonight.'", options: ["can't", "don't can", "am not"], correct: 0 },
    { q: "Complete: 'Yes, I ____.'", options: ["do", "can", "am"], correct: 1 },
    { q: "We use 'can' mainly to talk about:", options: ["Past habits", "Future plans", "Abilities and permissions"], correct: 2 },
    { q: "Which sentence is grammatically correct?", options: ["Can you to help me?", "Can you helping me?", "Can you help me?"], correct: 2 }
];

const dialogueData = [
    { char: "Jack", text: "Okay, are you ready?", audio: "sentences-audio/1-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Yes, I am!", audio: "sentences-audio/2-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Thank you for coming today...", audio: "sentences-audio/3-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Thank you, I'm here for the part of Danny Zuco, Grease.", audio: "sentences-audio/4-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Right, good. Can I ask you a few questions?", audio: "sentences-audio/5-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Certainly. Go ahead.", audio: "sentences-audio/6-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Can you read and write fluently in Italian?", audio: "sentences-audio/7-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Yes, I can.", audio: "sentences-audio/8-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Excellent. And... Is this the first time you've ever sung in this role?", audio: "sentences-audio/9-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "To be honest, yes. But I'm sure I'm perfect for it.", audio: "sentences-audio/10-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Okay. And can I hear a song from the musical?", audio: "sentences-audio/11-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Ehm... Well, I...", audio: "sentences-audio/12-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Please sir, don't hesitate... you're here for the audition!", audio: "sentences-audio/13-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Okay... okay... 'Summer loving happened so fast...'", audio: "sentences-audio/14-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Excellent, perfect, ... Come on, let's go to the kitchen!", audio: "sentences-audio/15-jack.mp3", img: "images/jack.jpg" }
];

// ==========================================
// 2. دوال التنقل الأساسية والصوت
// ==========================================

function goToStage(stageId) {
    document.querySelectorAll('.stage').forEach(el => el.classList.remove('active'));
    document.getElementById(stageId).classList.add('active');
    stopAllAudio();
    
    if(stageId === 'words-stage') { currentWordIndex = 0; updateFlashcard(); }
    if(stageId === 'learn-lines-stage') { currentLineIndex = 0; updateLine(); }
}

function goToHome() { 
    goToStage('home-stage'); 
}

function stopAllAudio() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    document.querySelectorAll('iframe.rumble').forEach(iframe => {
        let currentSrc = iframe.src;
        iframe.src = currentSrc; 
    });
}

function playAudioEffect(type) {
    let audio = new Audio(type === 'correct' ? 'ui-audio/correct.mp3' : 'ui-audio/wrong.mp3');
    audio.play().catch(e => console.log("Audio play failed"));
}

// ==========================================
// 3. كويز القصة (Story Quiz)
// ==========================================
let currentStoryQuestion = 0;
let storyScore = 0;

function startStoryQuiz() {
    currentStoryQuestion = 0;
    storyScore = 0;
    document.getElementById('sq-quiz-content').classList.remove('hidden');
    document.getElementById('sq-final-score-container').classList.add('hidden');
    goToStage('story-quiz-stage');
    loadStoryQuestion();
}

function loadStoryQuestion() {
    let qData = storyQuizData[currentStoryQuestion];
    document.getElementById('sq-question-text').innerText = qData.q;
    let optionsHtml = '';
    qData.options.forEach((opt, idx) => {
        optionsHtml += `<button onclick="checkStoryAnswer(${idx}, this)">${opt}</button>`;
    });
    document.getElementById('sq-options-container').innerHTML = optionsHtml;
    document.getElementById('sq-feedback-text').innerText = '';
    document.getElementById('sq-next-question-btn').classList.add('hidden');
    document.getElementById('sq-quiz-counter').innerText = `Question: ${currentStoryQuestion + 1} / ${storyQuizData.length}`;
}

function checkStoryAnswer(idx, btn) {
    let qData = storyQuizData[currentStoryQuestion];
    let buttons = document.getElementById('sq-options-container').querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);

    if(idx === qData.correct) {
        btn.classList.add('success');
        playAudioEffect('correct');
        document.getElementById('sq-feedback-text').innerText = "✅ Excellent!";
        document.getElementById('sq-feedback-text').style.color = "#27ae60";
        storyScore++;
    } else {
        btn.classList.add('fail');
        buttons[qData.correct].classList.add('success');
        playAudioEffect('wrong');
        document.getElementById('sq-feedback-text').innerText = "❌ Incorrect!";
        document.getElementById('sq-feedback-text').style.color = "#e74c3c";
    }
    
    document.getElementById('sq-next-question-btn').classList.remove('hidden');
    document.getElementById('sq-next-question-btn').onclick = () => {
        currentStoryQuestion++;
        if(currentStoryQuestion < storyQuizData.length) {
            loadStoryQuestion();
        } else {
            showStoryResult();
        }
    };
}

function showStoryResult() {
    document.getElementById('sq-quiz-content').classList.add('hidden');
    document.getElementById('sq-final-score-container').classList.remove('hidden');
    let percent = Math.round((storyScore / storyQuizData.length) * 100);
    let wrong = storyQuizData.length - storyScore;
    document.getElementById('sq-score-text').innerHTML = `✅ Correct: ${storyScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
}

// ==========================================
// 4. الكلمات الصعبة (Vocabulary)
// ==========================================
let currentWordIndex = 0;

function updateFlashcard() {
    let data = wordsData[currentWordIndex];
    document.getElementById('card-image').src = data.image;
    document.getElementById('card-word').innerText = data.word;
    document.getElementById('card-translation').innerText = data.translation;
    document.getElementById('card-definition').innerText = data.definition;
    document.getElementById('card-example-en').innerText = data.example;
    document.getElementById('card-audio').src = data.audio;
    document.getElementById('word-counter-text').innerText = `${currentWordIndex + 1} / ${wordsData.length}`;
    document.getElementById('flashcard-inner').classList.remove('is-flipped');
}

function flipCard() {
    document.getElementById('flashcard-inner').classList.toggle('is-flipped');
}

function changeWord(step) {
    currentWordIndex += step;
    if (currentWordIndex < 0) currentWordIndex = wordsData.length - 1;
    if (currentWordIndex >= wordsData.length) currentWordIndex = 0;
    updateFlashcard();
}

function playVocabAudio() {
    let audio = document.getElementById('card-audio');
    audio.play();
}

// ==========================================
// 5. كويز الكلمات (Words Quiz)
// ==========================================
let currentQuizQuestion = 0;
let quizScore = 0;
let quizQuestions = [];

function startWordsQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizQuestions = [...wordsData].sort(() => 0.5 - Math.random());
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('final-score-container').classList.add('hidden');
    goToStage('quiz-stage');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    let qData = quizQuestions[currentQuizQuestion];
    document.getElementById('quiz-word-audio').src = qData.audio;
    
    let options = [qData.word];
    while(options.length < 4) {
        let randWord = wordsData[Math.floor(Math.random() * wordsData.length)].word;
        if(!options.includes(randWord)) options.push(randWord);
    }
    options.sort(() => 0.5 - Math.random());
    
    let optionsHtml = '';
    options.forEach(opt => {
        let isCorrect = (opt === qData.word);
        optionsHtml += `<button onclick="checkQuizAnswer(this, ${isCorrect}, '${qData.word.replace(/'/g, "\\'")}')">${opt}</button>`;
    });
    
    document.getElementById('options-container').innerHTML = optionsHtml;
    document.getElementById('feedback-text').innerText = '';
    document.getElementById('next-question-btn').classList.add('hidden');
    document.getElementById('quiz-counter').innerText = `Question: ${currentQuizQuestion + 1} / ${quizQuestions.length}`;
    playQuizWordAudio();
}

function playQuizWordAudio() {
    document.getElementById('quiz-word-audio').play();
}

function checkQuizAnswer(btn, isCorrect, correctWord) {
    let buttons = document.getElementById('options-container').querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);
    
    if(isCorrect) {
        btn.classList.add('success');
        playAudioEffect('correct');
        document.getElementById('feedback-text').innerText = "✅ Correct!";
        document.getElementById('feedback-text').style.color = "#27ae60";
        quizScore++;
    } else {
        btn.classList.add('fail');
        playAudioEffect('wrong');
        document.getElementById('feedback-text').innerText = "❌ Incorrect!";
        document.getElementById('feedback-text').style.color = "#e74c3c";
        buttons.forEach(b => {
            if(b.innerText === correctWord) b.classList.add('success');
        });
    }
    document.getElementById('next-question-btn').classList.remove('hidden');
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    if(currentQuizQuestion < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        document.getElementById('quiz-content').classList.add('hidden');
        document.getElementById('final-score-container').classList.remove('hidden');
        let percent = Math.round((quizScore / quizQuestions.length) * 100);
        let wrong = quizQuestions.length - quizScore;
        document.getElementById('score-text').innerHTML = `✅ Correct: ${quizScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
    }
}

// ==========================================
// 6. تعلم الجمل (Learn Lines)
// ==========================================
let currentLineIndex = 0;

function updateLine() {
    let data = dialogueData[currentLineIndex];
    document.getElementById('speaker-img').src = data.img;
    document.getElementById('speaker-name').innerText = data.char;
    document.getElementById('english-line').innerText = data.text;
    document.getElementById('line-audio').src = data.audio;
    document.getElementById('line-counter-text').innerText = `${currentLineIndex + 1} / ${dialogueData.length}`;
}

function changeLine(step) {
    currentLineIndex += step;
    if (currentLineIndex < 0) currentLineIndex = dialogueData.length - 1;
    if (currentLineIndex >= dialogueData.length) currentLineIndex = 0;
    updateLine();
}

function playLineAudio() {
    document.getElementById('line-audio').play();
}

// ==========================================
// 7. اسمع واكتب (Listen & Write)
// ==========================================
let currentDictIndex = 0;
let dictScore = 0;

function startDictation() {
    currentDictIndex = 0;
    dictScore = 0;
    document.getElementById('dict-content').classList.remove('hidden');
    document.getElementById('dict-final-score-container').classList.add('hidden');
    goToStage('listen-write-stage');
    loadDictation();
}

function loadDictation() {
    let data = dialogueData[currentDictIndex];
    document.getElementById('dict-audio').src = data.audio;
    document.getElementById('dict-input').value = '';
    document.getElementById('dict-input').disabled = false;
    document.getElementById('dict-feedback').innerText = '';
    document.getElementById('dict-correct-ans').classList.add('hidden');
    document.getElementById('next-dict-btn').classList.add('hidden');
    document.getElementById('dict-counter').innerText = `Sentence: ${currentDictIndex + 1} / ${dialogueData.length}`;
}

function playDictAudio() {
    document.getElementById('dict-audio').play();
}

function checkDictation() {
    // بيمسح أي حاجة غير الحروف والأرقام عشان الفواصل متأثرش على النتيجة
    let rawUser = document.getElementById('dict-input').value.trim().toLowerCase();
    let rawCorrect = dialogueData[currentDictIndex].text.trim().toLowerCase();
    
    let userAnswer = rawUser.replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
    let correctAnswer = rawCorrect.replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
    
    document.getElementById('dict-input').disabled = true;

    if(userAnswer === correctAnswer && userAnswer !== '') {
        document.getElementById('dict-feedback').innerText = "✅ Excellent!";
        document.getElementById('dict-feedback').style.color = "#27ae60";
        playAudioEffect('correct');
        dictScore++;
    } else {
        document.getElementById('dict-feedback').innerText = "❌ Keep trying!";
        document.getElementById('dict-feedback').style.color = "#e74c3c";
        document.getElementById('dict-correct-ans').innerText = dialogueData[currentDictIndex].text;
        document.getElementById('dict-correct-ans').classList.remove('hidden');
        playAudioEffect('wrong');
    }
    document.getElementById('next-dict-btn').classList.remove('hidden');
}

function nextDictation() {
    currentDictIndex++;
    if(currentDictIndex < dialogueData.length) {
        loadDictation();
    } else {
        document.getElementById('dict-content').classList.add('hidden');
        document.getElementById('dict-final-score-container').classList.remove('hidden');
        let percent = Math.round((dictScore / dialogueData.length) * 100);
        let wrong = dialogueData.length - dictScore;
        document.getElementById('dict-score-text').innerHTML = `✅ Correct: ${dictScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
    }
}

// ==========================================
// 8. تبادل الأدوار (Roleplay) 
// ==========================================
let rpRole = "";
let rpIndex = 0;
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let userRecordings = {}; 

function startRoleplay(role) {
    rpRole = role;
    rpIndex = 0;
    userRecordings = {}; 
    document.getElementById('rp-content-area').classList.remove('hidden');
    document.getElementById('rp-result-area').classList.add('hidden');
    goToStage('roleplay-stage');
    loadRpTurn();
}

function loadRpTurn() {
    if(rpIndex >= dialogueData.length) {
        document.getElementById('rp-content-area').classList.add('hidden');
        document.getElementById('rp-result-area').classList.remove('hidden');
        return;
    }
    let data = dialogueData[rpIndex];
    document.getElementById('rpChar').innerText = data.char;
    document.getElementById('rpText').innerText = data.text;
    document.getElementById('rpAudio').src = data.audio;

    let indicator = document.getElementById('rpIndicator');
    let btnRecord = document.getElementById('btnRecord');
    let userAudio = document.getElementById('userAudio');

    userAudio.style.display = "none";
    userAudio.src = "";
    
    btnRecord.innerText = "YOUR TURN 🎤";
    btnRecord.style.background = "#8e44ad"; 

    if(data.char === rpRole) {
        indicator.innerText = "";
        indicator.className = ""; 
        btnRecord.style.display = "inline-block";
    } else {
        indicator.innerText = "🔊 Listen...";
        indicator.className = "turn-indicator app-turn";
        btnRecord.style.display = "none";
        document.getElementById('rpAudio').play();
    }
}

function nextRp() {
    document.getElementById('rpAudio').pause();
    let userAudio = document.getElementById('userAudio');
    if(userAudio) {
        userAudio.pause(); 
    }
    rpIndex++;
    loadRpTurn();
}

function toggleRecording() {
    if (!isRecording) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                isRecording = true;
                
                document.getElementById('btnRecord').innerText = "⏹️ Stop Recording";
                document.getElementById('btnRecord').style.background = "#e74c3c"; 
                document.getElementById('userAudio').style.display = "none"; 
                audioChunks = [];

                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    
                    userRecordings[rpIndex] = audioUrl; 
                    
                    let userAudio = document.getElementById('userAudio');
                    userAudio.src = audioUrl;
                    userAudio.style.display = "block"; 
                    
                    document.getElementById('btnRecord').innerText = "🎙️ Record Again";
                    document.getElementById('btnRecord').style.background = "#4caf50"; 
                });
            }).catch(error => {
                alert("Please allow microphone access! (لازم توافق على رسالة المتصفح لاستخدام المايك)");
            });
    } else {
        mediaRecorder.stop();
        isRecording = false;
    }
}

let playbackIndex = 0;
function playFullConversation() {
    playbackIndex = 0;
    playNextLine();
}

function playNextLine() {
    if(playbackIndex >= dialogueData.length) {
        return; 
    }
    let data = dialogueData[playbackIndex];
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    
    if(data.char === rpRole && userRecordings[playbackIndex]) {
        audioPlayer.src = userRecordings[playbackIndex];
    } else {
        audioPlayer.src = data.audio;
    }
    
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        playbackIndex++;
        playNextLine();
    };
}

// ==========================================
// 9. كويز الجرامر (Grammar Quiz)
// ==========================================
let currentGrammarQuestion = 0;
let grammarScore = 0;

function startGrammarQuiz() {
    currentGrammarQuestion = 0;
    grammarScore = 0;
    document.getElementById('g-quiz-content').classList.remove('hidden');
    document.getElementById('g-final-score-container').classList.add('hidden');
    goToStage('grammar-quiz-stage');
    loadGrammarQuestion();
}

function loadGrammarQuestion() {
    let qData = grammarQuizData[currentGrammarQuestion];
    document.getElementById('g-question-text').innerText = qData.q;
    let optionsHtml = '';
    qData.options.forEach((opt, idx) => {
        optionsHtml += `<button onclick="checkGrammarAnswer(${idx}, this)">${opt}</button>`;
    });
    document.getElementById('g-options-container').innerHTML = optionsHtml;
    document.getElementById('g-feedback-text').innerText = '';
    document.getElementById('g-next-question-btn').classList.add('hidden');
    document.getElementById('g-quiz-counter').innerText = `Question: ${currentGrammarQuestion + 1} / ${grammarQuizData.length}`;
}

function checkGrammarAnswer(idx, btn) {
    let qData = grammarQuizData[currentGrammarQuestion];
    let buttons = document.getElementById('g-options-container').querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);

    if(idx === qData.correct) {
        btn.classList.add('success');
        playAudioEffect('correct');
        document.getElementById('g-feedback-text').innerText = "✅ Excellent!";
        document.getElementById('g-feedback-text').style.color = "#27ae60";
        grammarScore++;
    } else {
        btn.classList.add('fail');
        buttons[qData.correct].classList.add('success');
        playAudioEffect('wrong');
        document.getElementById('g-feedback-text').innerText = "❌ Incorrect!";
        document.getElementById('g-feedback-text').style.color = "#e74c3c";
    }
    document.getElementById('g-next-question-btn').classList.remove('hidden');
}

function nextGrammarQuestion() {
    currentGrammarQuestion++;
    if(currentGrammarQuestion < grammarQuizData.length) {
        loadGrammarQuestion();
    } else {
        document.getElementById('g-quiz-content').classList.add('hidden');
        document.getElementById('g-final-score-container').classList.remove('hidden');
        let percent = Math.round((grammarScore / grammarQuizData.length) * 100);
        let wrong = grammarQuizData.length - grammarScore;
        document.getElementById('g-score-text').innerHTML = `✅ Correct: ${grammarScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
    }
}