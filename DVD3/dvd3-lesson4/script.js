// ==========================================
// 1. البيانات (Data) - Lesson 4
// ==========================================

const wordsData = [
    { word: "Business meeting", translation: "اجتماع عمل", definition: "A formal meeting between people to discuss business matters.", example: "Anne is out for a business meeting.", image: "images/1.jpg", audio: "vocab-audio/1.mp3" },
    { word: "Alone", translation: "بمفرده / وحيد", definition: "Having no one else present; on one's own.", example: "Well, I'm alone.", image: "images/2.jpg", audio: "vocab-audio/2.mp3" },
    { word: "What's up?", translation: "ما الأخبار؟ / كيف الحال؟", definition: "A casual greeting asking how someone is or what is happening.", example: "Hi, Jack, what's up?", image: "images/3.jpg", audio: "vocab-audio/3.mp3" },
    { word: "Cook", translation: "طباخ", definition: "A person who prepares and cooks food.", example: "I'm the cook. What would you like?", image: "images/4.jpg", audio: "vocab-audio/4.mp3" },
    { word: "Sounds good", translation: "يبدو جيداً / فكرة رائعة", definition: "Used to express agreement or approval of a suggestion.", example: "Sounds good. What kind of pasta do you have?", image: "images/5.jpg", audio: "vocab-audio/5.mp3" },
    { word: "Pasta", translation: "معكرونة", definition: "An Italian dish consisting of dough made from durum wheat and water.", example: "Why don't you cook some pasta?", image: "images/6.jpg", audio: "vocab-audio/6.mp3" },
    { word: "Meat sauce", translation: "صلصة اللحم", definition: "A sauce containing minced meat, typically served with pasta.", example: "Spaghetti with meat sauce?", image: "images/7.jpg", audio: "vocab-audio/7.mp3" },
    { word: "Mineral water", translation: "مياه معدنية", definition: "Water from a spring that contains natural minerals.", example: "Let's just have some mineral water.", image: "images/8.jpg", audio: "vocab-audio/8.mp3" },
    { word: "Rolls", translation: "لفائف الخبز / خبز صغير", definition: "Small, often round loaves of bread served with a meal.", example: "And do we have any rolls?", image: "images/9.jpg", audio: "vocab-audio/9.mp3" },
    { word: "A loaf of bread", translation: "رغيف خبز (كامل)", definition: "Bread that is shaped and baked in a single piece.", example: "No, but there's a loaf of bread.", image: "images/10.jpg", audio: "vocab-audio/10.mp3" },
    { word: "We're set", translation: "نحن جاهزون / كل شيء مُجهز", definition: "We are ready; everything is prepared and in order.", example: "Great, we're set.", image: "images/11.jpg", audio: "vocab-audio/11.mp3" },
    { word: "That's life!", translation: "هذه هي الحياة!", definition: "An expression used to accept a difficult situation as unavoidable.", example: "That's life!", image: "images/12.jpg", audio: "vocab-audio/12.mp3" },
    { word: "Two's company, three's a crowd!", translation: "الاثنان صحبة، والثالث زحمة", definition: "An idiom meaning that two people want to be alone and a third person is not welcome.", example: "Two's company, three's a crowd!", image: "images/13.jpg", audio: "vocab-audio/13.mp3" },
    { word: "Your wish is my command!", translation: "طلباتك أوامر!", definition: "An idiom meaning I will do whatever you ask me to do.", example: "Your wish is my command!", image: "images/14.jpg", audio: "vocab-audio/14.mp3" }
];

const storyQuizData = [
    { q: "Where is Anne today?", options: ["At an audition", "Out for a business meeting", "In her room"], correct: 1 },
    { q: "What does Alice suggest they cook first?", options: ["Macaroni", "Lasagna", "Pasta"], correct: 2 },
    { q: "What do they finally decide to eat?", options: ["Lasagna", "Spaghetti with meat sauce", "Only a salad"], correct: 1 },
    { q: "What does Alice want to drink?", options: ["Mineral water", "Wine", "Orange juice"], correct: 1 },
    { q: "Do they have rolls for lunch?", options: ["Yes, they have many.", "No, they only have a loaf of bread.", "No, they have no bread at all."], correct: 1 }
];

const grammarQuizData = [
    { q: "____ you cook some pasta?", options: ["Why don't", "Let's", "How about"], correct: 0 },
    { q: "____ have lasagna!", options: ["Shall", "Let's", "Why don't"], correct: 1 },
    { q: "____ we have spaghetti?", options: ["Shall", "Let's", "How about"], correct: 0 },
    { q: "How about ____ some wine with lunch?", options: ["have", "to have", "having"], correct: 2 },
    { q: "____ just have some mineral water.", options: ["Let's", "Why", "Shall"], correct: 0 },
    { q: "What about ____ a salad, too?", options: ["have", "having", "to have"], correct: 1 },
    { q: "Why don't we ____ lunch together?", options: ["having", "have", "to have"], correct: 1 },
    { q: "Which sentence is a correct suggestion?", options: ["Let's to go.", "How about go?", "Shall we go?"], correct: 2 },
    { q: "After 'Let's', we use:", options: ["The base form of the verb", "Verb + ing", "To + verb"], correct: 0 },
    { q: "After 'How about', we use:", options: ["The base form of the verb", "Verb + ing", "To + verb"], correct: 1 }
];

const dialogueData = [
    { char: "Jack", text: "Hi, Sharon, how are you?... I'm fine too. Well, I'm alone, Anne is out for a business meeting. Oh, Peter is too? He is at the audition? Today? Well, why don't we have lunch together? Now! Yes! Yes! No, something simple... Okay! Great!", audio: "sentences-audio/1-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Hi, Jack, what's up?", audio: "sentences-audio/2-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "Oh, you're here... Hmm... I'm preparing lunch... Anne is out and Sharon is coming...", audio: "sentences-audio/3-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Great! I'm hungry!", audio: "sentences-audio/4-alice.mp3", img: "images/alice.jpg" },
    { char: "Sharon", text: "Hi, Jack.", audio: "sentences-audio/5-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Hi. Alice is here...", audio: "sentences-audio/6-jack.mp3", img: "images/jack.jpg" },
    { char: "Sharon", text: "Yeah... She's in her room.", audio: "sentences-audio/7-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Sorry about that. I would like to be alone with you but... You know...", audio: "sentences-audio/8-jack.mp3", img: "images/jack.jpg" },
    { char: "Sharon", text: "Yeah, I know...", audio: "sentences-audio/9-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Okay... Sharon... I'm the cook. What would you like?", audio: "sentences-audio/10-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Why don't you cook some pasta?", audio: "sentences-audio/11-alice.mp3", img: "images/alice.jpg" },
    { char: "Sharon", text: "Sounds good. What kind of pasta do you have?", audio: "sentences-audio/12-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Well, we have macaroni, spaghetti...", audio: "sentences-audio/13-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Let's have lasagna!", audio: "sentences-audio/14-alice.mp3", img: "images/alice.jpg" },
    { char: "Sharon", text: "Hmm... That's too much work. Shall we have spaghetti?", audio: "sentences-audio/15-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Great. Excellent. With... Spaghetti with meat sauce?", audio: "sentences-audio/16-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Great. And how about having some wine with lunch?", audio: "sentences-audio/17-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "It's the middle of the day. I have to work later. Let's just have some mineral water.", audio: "sentences-audio/18-jack.mp3", img: "images/jack.jpg" },
    { char: "Sharon", text: "Fine. Mineral water it is. And what about a salad, too? A nice green salad with tomatoes and onions?", audio: "sentences-audio/19-sharon.mp3", img: "images/sharon.jpg" },
    { char: "Jack", text: "Your wish is my command!", audio: "sentences-audio/20-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "And about my wish?! I want wine!", audio: "sentences-audio/21-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "Well, here's some red wine for you.", audio: "sentences-audio/22-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Thanks... And do we have any rolls?", audio: "sentences-audio/23-alice.mp3", img: "images/alice.jpg" },
    { char: "Jack", text: "No, but there's a loaf of bread.", audio: "sentences-audio/24-jack.mp3", img: "images/jack.jpg" },
    { char: "Alice", text: "Great, we're set.", audio: "sentences-audio/25-alice.mp3", img: "images/alice.jpg" }
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
        buildConversationHistory(); // بناء القائمة الجديدة
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

// دالة بتبني القائمة بتاعة الرول بلاي بالتصميم النظيف زي الصورة بتاعتك
function buildConversationHistory() {
    let historyContainer = document.getElementById('conversation-history');
    let html = '';
    
    dialogueData.forEach((data, index) => {
        let isUser = (data.char === rpRole);
        let audioSrc = (isUser && userRecordings[index]) ? userRecordings[index] : data.audio;
        let displayChar = isUser ? "Student" : data.char;
        
        // الكارت الأبيض اللي بحواف رصاصي والاسم أزرق
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
    document.getElementById('btnPlayAll').innerHTML = "⏳ Playing...";
    
    // شيل أي تظليل قديم
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
    
    // التظليل الشيك (حواف زرقا وخلفية أزرق فاتح جداً)
    newCard.style.borderColor = "#1976d2";
    newCard.style.backgroundColor = "#f1f8ff";
    newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        // رجع الكارت لشكله الطبيعي
        newCard.style.borderColor = "#b0bec5";
        newCard.style.backgroundColor = "white";
        playbackIndex++;
        setTimeout(playNextStep, 500);
    };
}

function playSingleLine(audioSrc, cardId) {
    isPlayingFull = false; 
    document.getElementById('btnPlayAll').disabled = false;
    document.getElementById('btnPlayAll').innerHTML = "▶️ Play Entire Dialogue";
    
    // رجع كل الكروت لشكلها الطبيعي
    document.querySelectorAll('div[id^="card-"]').forEach(c => {
        c.style.borderColor = "#b0bec5";
        c.style.backgroundColor = "white";
    });
    
    // ظلل الكارت الحالي بس
    let currentCard = document.getElementById(cardId);
    currentCard.style.borderColor = "#1976d2";
    currentCard.style.backgroundColor = "#f1f8ff";
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        // رجعه بعد ما يخلص
        currentCard.style.borderColor = "#b0bec5";
        currentCard.style.backgroundColor = "white";
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