// ==========================================
// 1. البيانات (Data)
// ==========================================

const wordsData = [
    { word: "Have a seat", translation: "تفضل بالجلوس", definition: "A polite way to ask someone to sit down.", example: "Hi, Sharon. Have a seat.", image: "images/1.jpg", audio: "vocab-audio/1.mp3" },
    { word: "Brunch", translation: "فطور متأخر", definition: "A meal combining breakfast and lunch.", example: "What's for brunch?", image: "images/2.jpg", audio: "vocab-audio/2.mp3" },
    { word: "Lose weight", translation: "يفقد الوزن", definition: "To become thinner or lighter.", example: "I'm trying to lose weight!", image: "images/3.jpg", audio: "vocab-audio/3.mp3" },
    { word: "Relax", translation: "استرخِ", definition: "To rest and become calm.", example: "Relax dear... It's Sunday!", image: "images/4.jpg", audio: "vocab-audio/4.mp3" },
    { word: "I guess", translation: "أعتقد", definition: "To suppose that something is true.", example: "I guess I can eat it this time.", image: "images/5.jpg", audio: "vocab-audio/5.mp3" },
    { word: "Takes time", translation: "يستغرق وقتاً", definition: "To require a certain amount of time.", example: "Oh, I love cooking, but it takes time.", image: "images/6.jpg", audio: "vocab-audio/6.mp3" },
    { word: "Favourite hobby", translation: "الهواية المفضلة", definition: "The activity you enjoy most.", example: "Cooking is not my favourite hobby.", image: "images/7.jpg", audio: "vocab-audio/7.mp3" },
    { word: "Flat", translation: "شقة", definition: "A set of rooms for living in.", example: "I'm the only one in this flat.", image: "images/8.jpg", audio: "vocab-audio/8.mp3" },
    { word: "I can imagine", translation: "أستطيع التخيل", definition: "To understand how someone feels.", example: "I can imagine... I really love baking cakes.", image: "images/9.jpg", audio: "vocab-audio/9.mp3" },
    { word: "Baking cakes", translation: "خبز الكيك", definition: "Cooking cakes in an oven.", example: "I really love baking cakes.", image: "images/10.jpg", audio: "vocab-audio/10.mp3" },
    { word: "Busy", translation: "مشغول", definition: "Having a lot of things to do.", example: "I love being busy.", image: "images/11.jpg", audio: "vocab-audio/11.mp3" },
    { word: "Missing", translation: "مفقود", definition: "Something that is not present.", example: "About what's missing in my life...", image: "images/12.jpg", audio: "vocab-audio/12.mp3" },
    { word: "Something else", translation: "شيء آخر", definition: "A different thing or topic.", example: "But let's talk about something else...", image: "images/13.jpg", audio: "vocab-audio/13.mp3" },
    { word: "How about", translation: "ماذا عن", definition: "Used to make a suggestion.", example: "How about going together?", image: "images/14.jpg", audio: "vocab-audio/14.mp3" },
    { word: "Salt", translation: "ملح", definition: "A white substance used to season food.", example: "The salt is ok.", image: "images/15.jpg", audio: "vocab-audio/15.mp3" }
];

const storyQuizData = [
    { q: "What's for brunch?", options: ["Sandwiches", "A cake", "Pasta"], correct: 2 },
    { q: "Does Sharon cook every day?", options: ["True", "False"], correct: 1 },
    { q: "Why is Anne cooking?", options: ["She likes it", "She is the only one who knows how in the flat", "It's her hobby"], correct: 1 },
    { q: "What are Sharon's other hobbies?", options: ["Cinema and reading", "Swimming", "Tennis"], correct: 0 }
];

const grammarQuizData = [
    { q: "What did Anne suggest to Sharon?", options: ["Going to gym", "Going to the cinema", "Cooking pasta"], correct: 1 },
    { q: "How many ways of making suggestions were discussed?", options: ["Two", "Three", "Four"], correct: 1 },
    { q: "After 'Why don't we...', we use:", options: ["Verb + ing", "Infinitive with to", "Base verb"], correct: 2 },
    { q: "After 'How about...', we use:", options: ["Base verb", "Verb + ing", "Past tense"], correct: 1 },
    { q: "Suggestion for someone who is tired:", options: ["Why don't you rest?", "How about rest?", "What about rest?"], correct: 0 },
    { q: "Complete: 'How about ________ Jack?'", options: ["invite", "inviting", "to invite"], correct: 1 },
    { q: "Complete: 'What about ________ to the seaside?'", options: ["going", "go", "to go"], correct: 0 },
    { q: "What does 'nap' mean?", options: ["Type of food", "Short rest", "Good movie"], correct: 1 },
    { q: "Which is correct?", options: ["Why don't we going?", "How about eat?", "What about seeing a film?"], correct: 2 },
    { q: "Suggestions are useful when:", options: ["Socializing with friends", "Sleeping", "Studying alone"], correct: 0 }
];

const dialogueData = [
    { char: "Anne", text: "Hi, Sharon. Have a seat.", audio: "sentences-audio/1-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "Thanks Anne.", audio: "sentences-audio/2-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "It's almost ready.", audio: "sentences-audio/3-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "What's for brunch? Oh no, pasta! You can't cook pasta! I'm trying to lose weight!", audio: "sentences-audio/4-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "Relax dear... It's Sunday! Here, try some. What about salt?", audio: "sentences-audio/5-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "Good... I guess I can eat it this time. The salt is ok.", audio: "sentences-audio/6-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "Do you like cooking? Why don't you cook lunch for us sometime?", audio: "sentences-audio/7-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "Oh, I love cooking, but it takes time and I can't cook every day.", audio: "sentences-audio/8-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "Well, cooking is not my favourite hobby, but I'm the only one who knows how to cook in this flat...", audio: "sentences-audio/9-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "I can imagine... I really love baking cakes.", audio: "sentences-audio/10-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "Oh that's true! I remember now, and I love your cakes!", audio: "sentences-audio/11-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "Thanks, Anne. But cooking isn't my only hobby. I love going to the cinema and reading as well. I love being busy... So I don't have time to think too much...", audio: "sentences-audio/12-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "Think about what?", audio: "sentences-audio/13-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "About what's missing in my life... But let's talk about something else...", audio: "sentences-audio/14-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Anne", text: "So, if you like movies, there's a good film on at the cinema tonight. How about going together?", audio: "sentences-audio/15-anne.mp3", img: "images/anne.jpg" },
    { char: "Sharon", text: "It's a good idea, let's ask Jack too.", audio: "sentences-audio/16-sharon.mp3", img: "images/sharon.jpg" }
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
    document.getElementById('sq-score-text').innerText = `Your Score: ${percent}%`;
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
        document.getElementById('score-text').innerText = `Score: ${percent}%`;
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
    let userAnswer = document.getElementById('dict-input').value.trim().toLowerCase().replace(/[.,!?]/g, '');
    let correctAnswer = dialogueData[currentDictIndex].text.trim().toLowerCase().replace(/[.,!?]/g, '');
    
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
        document.getElementById('dict-score-text').innerText = `Your Score: ${percent}%`;
    }
}

// ==========================================
// 8. تبادل الأدوار (Roleplay) - معدلة بالكامل لتسجيل وحفظ المحادثة
// ==========================================
let rpRole = "";
let rpIndex = 0;
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let userRecordings = {}; // مصفوفة جديدة لحفظ كل تسجيلات الطالب

function startRoleplay(role) {
    rpRole = role;
    rpIndex = 0;
    userRecordings = {}; // تصفير التسجيلات مع كل محادثة جديدة
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

    // إخفاء وتصفير مشغل الصوت بتاع الطالب في كل جملة جديدة
    userAudio.style.display = "none";
    userAudio.src = "";
    
    // إرجاع زرار التسجيل لشكله الأصلي
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
                    
                    // حفظ التسجيل ده في رقم الجملة بتاعته عشان نجمعه في الآخر
                    userRecordings[rpIndex] = audioUrl; 
                    
                    // وضع الصوت في المشغل للطالب عشان يشغله بنفسه
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

// === دالة جديدة لتشغيل المحادثة كاملة في النهاية ===
let playbackIndex = 0;
function playFullConversation() {
    playbackIndex = 0;
    playNextLine();
}

function playNextLine() {
    if(playbackIndex >= dialogueData.length) {
        return; // المحادثة خلصت
    }
    let data = dialogueData[playbackIndex];
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    
    // لو الجملة دي بتاعة الطالب وهو سجلها، هنشغل صوته، غير كده هنشغل صوت التطبيق
    if(data.char === rpRole && userRecordings[playbackIndex]) {
        audioPlayer.src = userRecordings[playbackIndex];
    } else {
        audioPlayer.src = data.audio;
    }
    
    audioPlayer.play();
    
    // لما الجملة تخلص، خش على اللي بعدها أوتوماتيك
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
        document.getElementById('g-score-text').innerText = `Final Score: ${percent}%`;
    }
}