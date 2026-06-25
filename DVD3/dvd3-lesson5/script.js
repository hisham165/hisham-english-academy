// ==========================================
// 1. البيانات (Data) - Lesson 5
// ==========================================

const wordsData = [
    { word: "What's on?", translation: "ماذا يُعرض؟ (على التلفزيون)", definition: "Asking about what programs are being broadcast on TV.", example: "What's on tonight?", image: "images/1.jpg", audio: "vocab-audio/1.mp3" },
    { word: "Hand me", translation: "ناوِلني / أعطني", definition: "To pass something to someone.", example: "Can you hand me the TV guide?", image: "images/2.jpg", audio: "vocab-audio/2.mp3" },
    { word: "TV guide", translation: "دليل البرامج التلفزيونية", definition: "A magazine or schedule showing times of TV programs.", example: "Can you hand me the TV guide?", image: "images/3.jpg", audio: "vocab-audio/3.mp3" },
    { word: "Documentary", translation: "فيلم وثائقي", definition: "A television or radio program that provides a factual record or report.", example: "Let's watch a documentary.", image: "images/4.jpg", audio: "vocab-audio/4.mp3" },
    { word: "A good compromise", translation: "حل وسط جيد / تسوية مُرضية", definition: "A fair agreement where both sides get something they want.", example: "Right. That's a good compromise.", image: "images/5.jpg", audio: "vocab-audio/5.mp3" },
    { word: "Soap operas", translation: "مسلسلات درامية (تُعرض يومياً)", definition: "A television or radio drama serial dealing typically with daily events in the lives of the same group of characters.", example: "Please... More soap operas...", image: "images/6.jpg", audio: "vocab-audio/6.mp3" },
    { word: "I can't stand", translation: "لا أطيق / لا أتحمل", definition: "To strongly dislike someone or something.", example: "I can't stand soap operas.", image: "images/7.jpg", audio: "vocab-audio/7.mp3" },
    { word: "It's my turn", translation: "حان دوري", definition: "It is the time for me to do something.", example: "All right. It's my turn now.", image: "images/8.jpg", audio: "vocab-audio/8.mp3" },
    { word: "Lager", translation: "نوع من الجعة (بيرة خفيفة)", definition: "A kind of beer, effervescent and light in color and body.", example: "We've got some good lager in the fridge.", image: "images/9.jpg", audio: "vocab-audio/9.mp3" },
    { word: "Paradise", translation: "الجنة / النعيم", definition: "An ideal or idyllic place or state.", example: "TV, sandwiches and a beer... Paradise!", image: "images/10.jpg", audio: "vocab-audio/10.mp3" },
    { word: "Second call (Callback)", translation: "استدعاء ثانٍ (لتجربة أداء)", definition: "A second invitation to audition for a role.", example: "They want to see me for a second call!", image: "images/11.jpg", audio: "vocab-audio/11.mp3" },
    { word: "Celebrate", translation: "يحتفل", definition: "To acknowledge a significant or happy day or event with a social gathering.", example: "Oh great! Let's celebrate it!", image: "images/12.jpg", audio: "vocab-audio/12.mp3" },
    { word: "Napkins", translation: "مناديل المائدة", definition: "A square piece of cloth or paper used at a meal to wipe the fingers or lips.", example: "Wait! Wait! Don't move! Napkins!!", image: "images/13.jpg", audio: "vocab-audio/13.mp3" },
    { word: "LA Kids", translation: "مسلسل \"إل إيه كيدز\" (اسم مسلسل خيالي)", definition: "A fictional television soap opera mentioned in the conversation.", example: "Why don't we watch \"LA Kids\"?", image: "images/14.jpg", audio: "vocab-audio/14.mp3" },
    { word: "The news", translation: "نشرة الأخبار", definition: "A television or radio broadcast of important current events.", example: "Let's watch the news and then maybe a film.", image: "images/15.jpg", audio: "vocab-audio/15.mp3" },
    { word: "Tuna-fish", translation: "سمك التونة", definition: "A large marine fish commonly used for food, often canned.", example: "How about some sandwiches? Tuna-fish sandwiches?", image: "images/16.jpg", audio: "vocab-audio/16.mp3" },
    { word: "What a piece of news", translation: "يا لها من أخبار! (تُقال للتعجب أو السخرية)", definition: "An expression used to show surprise (often ironically) about recently received information.", example: "Oh... What a piece of news...", image: "images/17.jpg", audio: "vocab-audio/17.mp3" }
];

const storyQuizData = [
    { q: "What does Jack want to watch on TV?", options: ["A documentary", "The news", "Soap operas"], correct: 1 },
    { q: "Jack asks Alice to prepare tuna-fish sandwiches.", options: ["True", "False"], correct: 0 },
    { q: "Peter is happy because...", options: ["The audition went well", "There's beer in the fridge", "There's a good film on TV"], correct: 0 },
    { q: "How do the friends decide to celebrate?", options: ["They have a glass of wine", "They make a cake", "They go for a pizza"], correct: 2 }
];

const grammarQuizData = [
    { q: "Usually, we use 'some' in ________ sentences, and 'any' in ________.", options: ["negative / positive", "positive / negative and questions", "questions / positive"], correct: 1 },
    { q: "We have an exception! When we make an offer like 'Would you like...?', we must use:", options: ["any", "some", "a"], correct: 1 },
    { q: "Which sentence is a correct request?", options: ["Can I have any cheese?", "Can I have some cheese?", "I haven't got some cheese."], correct: 1 },
    { q: "Imagine you are on a plane. The air hostess says: 'Would you like _______ coffee?'", options: ["some", "any", "the"], correct: 0 },
    { q: "Why is it WRONG to say 'Any coffee? Any biscuits?' when you are offering food?", options: ["Because it is a negative sentence.", "Because we use 'some' for offers and requests.", "Because 'any' is only for plural words."], correct: 1 },
    { q: "Hello Peter. Would you like ... beer?", options: ["of the", "any", "some"], correct: 2 },
    { q: "Only Anne doesn't want ... beer.", options: ["of the", "any", "some"], correct: 1 },
    { q: "They decide to have some pizza but Anne is not part ... group.", options: ["of the", "any", "some"], correct: 0 },
    { q: "She decides to stay at home and listen to ... music.", options: ["the", "any", "some"], correct: 2 }
];

const dialogueData = [
    { char: "Alice", text: "What's on tonight?", audio: "sentences-audio/1-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "Hmmm... Just a moment. Can you hand me the TV guide?", audio: "sentences-audio/2-anne.mp3", img: "images/anne.jpg" },
    { char: "Jack", text: "Oh... Here you are. What would you like to watch?", audio: "sentences-audio/3-jacck.mp3", img: "images/jack.jpg" },
    { char: "Anne", text: "Let's watch a documentary.", audio: "sentences-audio/4-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "Oh, documentaries are boring. Why don't we watch \"LA Kids\"?", audio: "sentences-audio/5-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "Please... More soap operas... I can't stand soap operas.", audio: "sentences-audio/6-jack.mp3", img: "images/jack.jpg" },
    { char: "Anne", text: "How about watching the news?", audio: "sentences-audio/7-anne.mp3", img: "images/anne.jpg" },
    { char: "Jack", text: "Fine... Let's watch the news and then maybe a film.", audio: "sentences-audio/8-jack.mp3", img: "images/jack.jpg" },
    { char: "Anne", text: "Right. That's a good compromise.", audio: "sentences-audio/9-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "Shall we make something to eat?", audio: "sentences-audio/10-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "What would you like?", audio: "sentences-audio/11-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "How about some sandwiches? Tuna-fish sandwiches?", audio: "sentences-audio/12-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "Okay, tuna-fish sandwiches.", audio: "sentences-audio/13-anne.mp3", img: "images/anne.jpg" },
    { char: "Jack", text: "Why don't you go and prepare them for all of us?", audio: "sentences-audio/14-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "All right. It's my turn now.", audio: "sentences-audio/15-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "Why? What do you mean?!", audio: "sentences-audio/16-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "We had lunch with Sharon today and Jack was the cook.", audio: "sentences-audio/17-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "Oh... What a piece of news... ", audio: "sentences-audio/18-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "And what would you like to drink?", audio: "sentences-audio/19-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "Let's have a beer.", audio: "sentences-audio/20-jack.mp3", img: "images/jack.jpg" },
    { char: "Anne", text: "Great. We've got some good lager in the fridge.", audio: "sentences-audio/21-anne.mp3", img: "images/anne.jpg" },
    { char: "Jack", text: "TV, sandwiches and a beer... Paradise!", audio: "sentences-audio/22-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Hello everybody!", audio: "sentences-audio/23-peter.mp3", img: "images/peter.jpg" },
    { char: "Jack", text: "Hi Peter! Enjoy Paradise!", audio: "sentences-audio/24-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Guys... Great news today!", audio: "sentences-audio/25-peter.mp3", img: "images/peter.jpg" },
    { char: "Anne", text: "Oh, right! The audition! So... Have you got the part?", audio: "sentences-audio/26-anne.mp3", img: "images/anne.jpg" },
    { char: "Peter", text: "Well... Yes and no...! I mean, they want to see me for a second call!", audio: "sentences-audio/27-peter.mp3", img: "images/peter.jpg" },
    { char: "Alice", text: "Oh great! Let's celebrate it!", audio: "sentences-audio/28-alice.mp3", img: "images/alice.jpg" },
    { char: "Anne", text: "Wait! Wait! Don't move! Napkins!!", audio: "sentences-audio/29-anne.mp3", img: "images/anne.jpg" },
    { char: "Peter", text: "Oh, guys, what about my celebration?", audio: "sentences-audio/30-peter.mp3", img: "images/peter.jpg" },
    { char: "Anne", text: "Oh, shut up, Peter!", audio: "sentences-audio/31-anne.mp3", img: "images/anne.jpg" },
    { char: "Jack", text: "Okay. Okay... Fast... We're losing it!", audio: "sentences-audio/32-jack.mp3", img: "images/jack.jpg" },
    { char: "Anne", text: "Oh please, don't be stupid, this is a serious problem!", audio: "sentences-audio/33-anne.mp3", img: "images/anne.jpg" },
    { char: "Alice", text: "How about having some pizza?", audio: "sentences-audio/34-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "Great idea!", audio: "sentences-audio/35-jack.mp3", img: "images/jack.jpg" },
    { char: "Peter", text: "Let's go!", audio: "sentences-audio/36-peter.mp3", img: "images/peter.jpg" },
    { char: "Anne", text: "Food, food, food. All they think about is food!", audio: "sentences-audio/37-anne.mp3", img: "images/anne.jpg" }
];// ==========================================
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
    isPlayingFull = false;

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
let isPlayingFull = false;
let playbackIndex = 0;

function startRoleplay(role) {
    rpRole = role;
    rpIndex = 0;
    userRecordings = {}; 
    document.getElementById('conversation-history').innerHTML = ""; 
    document.getElementById('rp-content-area').classList.remove('hidden');
    document.getElementById('rp-result-area').classList.add('hidden');
    goToStage('roleplay-stage');
    loadRpTurn();
}

function loadRpTurn() {
    if(rpIndex >= dialogueData.length) {
        document.getElementById('rp-content-area').classList.add('hidden');
        document.getElementById('rp-result-area').classList.remove('hidden');
        buildConversationHistory(); 
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
        indicator.innerText = "🎤 IT'S YOUR TURN!";
        indicator.className = "turn-indicator your-turn";
        btnRecord.style.display = "inline-block";
    } else {
        indicator.innerText = "🔊 Listen to App...";
        indicator.className = "turn-indicator app-turn";
        btnRecord.style.display = "none";
        document.getElementById('rpAudio').play();
    }
}

function nextRp() {
    document.getElementById('rpAudio').pause();
    let userAudio = document.getElementById('userAudio');
    if(userAudio) { userAudio.pause(); }
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
                alert("Please allow microphone access!");
            });
    } else {
        mediaRecorder.stop();
        isRecording = false;
    }
}

// بناء كروت شاشة النتيجة بالتصميم الأزرق النظيف المقتبس من ملف العميل
function buildConversationHistory() {
    let historyContainer = document.getElementById('conversation-history');
    let html = '';
    
    dialogueData.forEach((data, index) => {
        let isUser = (data.char === rpRole);
        let audioSrc = (isUser && userRecordings[index]) ? userRecordings[index] : data.audio;
        let displayChar = isUser ? "Student" : data.char;
        
        html += `
        <div id="card-${index}" style="background: white; border: 1px solid #b0bec5; border-radius: 12px; padding: 15px; text-align: left; transition: all 0.3s ease;">
            <p style="font-weight: bold; color: #1976d2; margin-top: 0; margin-bottom: 5px; font-size: 1.1rem; text-transform: capitalize;">${displayChar}</p>
            <p style="color: #333; font-size: 1.2rem; font-weight: bold; margin-bottom: 10px; line-height: 1.4;">${data.text}</p>
            <button style="background-color: #1976d2; color: white; border: none; padding: 8px 15px; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: bold; font-family: 'Poppins', sans-serif;" onmouseover="this.style.backgroundColor='#0d47a1'" onmouseout="this.style.backgroundColor='#1976d2'" onclick="playSingleLine('${audioSrc}', 'card-${index}')">🔊 Listen</button>
        </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

function playFullConversation() {
    playbackIndex = 0;
    isPlayingFull = true;
    document.getElementById('btnPlayAll').disabled = true;
    document.getElementById('btnPlayAll').innerHTML = "⏳ Playing Dialogue...";
    
    document.querySelectorAll('div[id^="card-"]').forEach(c => {
        c.style.borderColor = "#b0bec5";
        c.style.backgroundColor = "white";
    });
    
    playNextStep();
}

function playNextStep() {
    if(playbackIndex >= dialogueData.length || !isPlayingFull) {
        isPlayingFull = false;
        document.getElementById('btnPlayAll').disabled = false;
        document.getElementById('btnPlayAll').innerHTML = "▶️ Play Entire Dialogue";
        return; 
    }
    
    let data = dialogueData[playbackIndex];
    let cardId = `card-${playbackIndex}`;
    let isUser = (data.char === rpRole);
    let audioSrc = (isUser && userRecordings[playbackIndex]) ? userRecordings[playbackIndex] : data.audio;
    
    let newCard = document.getElementById(cardId);
    
    // التظليل الأزرق الشيك المتناسق مع تصميم العميل
    if(newCard) {
        newCard.style.borderColor = "#1976d2";
        newCard.style.backgroundColor = "#f1f8ff";
        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        if(newCard) {
            newCard.style.borderColor = "#b0bec5";
            newCard.style.backgroundColor = "white";
        }
        playbackIndex++;
        setTimeout(playNextStep, 500);
    };
}

function playSingleLine(audioSrc, cardId) {
    isPlayingFull = false; 
    document.getElementById('btnPlayAll').disabled = false;
    document.getElementById('btnPlayAll').innerHTML = "▶️ Play Entire Dialogue";
    
    document.querySelectorAll('div[id^="card-"]').forEach(c => {
        c.style.borderColor = "#b0bec5";
        c.style.backgroundColor = "white";
    });
    
    let currentCard = document.getElementById(cardId);
    if(currentCard) {
        currentCard.style.borderColor = "#1976d2";
        currentCard.style.backgroundColor = "#f1f8ff";
    }
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        if(currentCard) {
            currentCard.style.borderColor = "#b0bec5";
            currentCard.style.backgroundColor = "white";
        }
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