// --- 0. نظام تسجيل الدخول ---
const VALID_CLASS_CODES = ["ENG2026", "DVD3PASS", "HISHAM100"]; 
let currentStudentName = ""; 

function goToStage(stageId) {
    document.querySelectorAll('.stage').forEach(stage => stage.classList.remove('active'));
    document.getElementById(stageId).classList.add('active');
    stopAllAudioVideo();

    if (stageId === 'learn-lines-stage' && window.initLearnStage) window.initLearnStage();
    if (stageId === 'words-stage' && window.initWordsStage) window.initWordsStage();
}

function goToHome() { goToStage('home-stage'); }

function stopAllAudioVideo() {
    document.querySelectorAll('video, audio').forEach(media => {
        media.pause();
        media.currentTime = 0;
    });
    
    document.querySelectorAll('iframe').forEach(iframe => {
        let currentSrc = iframe.src;
        iframe.src = '';
        iframe.src = currentSrc;
    });
}

window.goToHome = goToHome;
window.goToStage = goToStage;

document.addEventListener('DOMContentLoaded', () => {
    
    const classCodeInput = document.getElementById('class-code');
    const studentNameInput = document.getElementById('student-name');
    const loginBtn = document.getElementById('login-btn');
    const loginError = document.getElementById('login-error');

    function checkInputs() {
        if (classCodeInput.value.trim().length > 2 && studentNameInput.value.trim().length > 1) {
            loginBtn.classList.add('active-btn');
            loginBtn.disabled = false;
        } else {
            loginBtn.classList.remove('active-btn');
            loginBtn.disabled = true;
        }
    }

    classCodeInput.addEventListener('input', checkInputs);
    studentNameInput.addEventListener('input', checkInputs);

    loginBtn.addEventListener('click', () => {
        const enteredCode = classCodeInput.value.trim().toUpperCase();
        const studentName = studentNameInput.value.trim();

        if (VALID_CLASS_CODES.includes(enteredCode)) {
            currentStudentName = studentName; 
            document.body.style.backgroundColor = "#8e44ad"; 
            goToStage('home-stage');
        } else {
            loginError.classList.remove('hidden');
        }
    });

    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            if(this.src.endsWith('.jpg')) this.src = this.src.replace('.jpg', '.png');
        };
    });

    // مسارات فولدرات الـ ui-audio الجديدة
    const soundCorrect = new Audio('ui-audio/correct.mp3');
    const soundWrong = new Audio('ui-audio/wrong.mp3');

    function getFeedbackMessage(percentage) {
        if (percentage < 50) return "Try again! 🔄";
        if (percentage <= 75) return "Almost there! 👍";
        return "Well done! 🌟";
    }

    // --- 1. البيانات (الدرس الأول ديفيدي 3: That's Life!) ---
    
    const storyQuizData = [
        { q: "Which sport does Peter like doing in the summer holidays?", opts: ["Swimming", "Windsurfing", "Karate"], ans: "Windsurfing" },
        { q: "Jack is good at tennis.", opts: ["True", "False"], ans: "False" },
        { q: "Which sport do both Jack and Peter do?", opts: ["Karate", "Chess", "Basketball"], ans: "Karate" },
        { q: "When does Peter usually go to the gym?", opts: ["Saturday", "Friday afternoon", "Every day"], ans: "Friday afternoon" }
    ];

    const wordsData = [
        { english: "Windsurfing", arabic: "ركوب الأمواج شراعياً", definition: "A sport of riding on water on a sailboard.", exampleEn: "Look at this picture of Beck Nicholson windsurfing.", image: "images/1.jpg", audio: "vocab-audio/1.mp3" },
        { english: "Pretty well", arabic: "بشكل جيد جداً / إلى حد كبير", definition: "Quite well; to a good standard.", exampleEn: "I can swim pretty well.", image: "images/2.jpg", audio: "vocab-audio/2.mp3" },
        { english: "Chess", arabic: "شطرنج", definition: "A board game for two players of strategy.", exampleEn: "I can play chess very well!", image: "images/3.jpg", audio: "vocab-audio/3.mp3" },
        { english: "Hobby", arabic: "هواية", definition: "An activity you do for pleasure in your free time.", exampleEn: "Chess, that's not a sport! That's a hobby!", image: "images/4.jpg", audio: "vocab-audio/4.mp3" },
        { english: "Table games", arabic: "ألعاب الطاولة", definition: "Games played on a flat table surface.", exampleEn: "I don't like playing cards, chess, or other table games.", image: "images/5.jpg", audio: "vocab-audio/5.mp3" },
        { english: "Gym", arabic: "صالة ألعاب رياضية (جيم)", definition: "A place with equipment for physical exercise.", exampleEn: "So what do you do during the winter? Oh, I go to the gym.", image: "images/6.jpg", audio: "vocab-audio/6.mp3" },
        { english: "As well", arabic: "أيضاً / كذلك", definition: "In addition; too.", exampleEn: "I can do a little karate as well!", image: "images/7.jpg", audio: "vocab-audio/7.mp3" },
        { english: "Looking for", arabic: "يبحث عن", definition: "Trying to find something or someone.", exampleEn: "Oh, interesting. I'm looking for a gym!", image: "images/8.jpg", audio: "vocab-audio/8.mp3" },
        { english: "Spend time", arabic: "يقضي وقتاً", definition: "To use time doing something or being with someone.", exampleEn: "It's the only day I have to spend time with Sharon.", image: "images/9.jpg", audio: "vocab-audio/9.mp3" },
        { english: "Nervous", arabic: "متوتر / قلق", definition: "Feeling worried or anxious about something.", exampleEn: "But now I'm so nervous about my audition.", image: "images/10.jpg", audio: "vocab-audio/10.mp3" },
        { english: "Audition", arabic: "تجربة أداء", definition: "A short performance to show your skill for a role.", exampleEn: "Maybe you can help me with my audition too!", image: "images/11.jpg", audio: "vocab-audio/11.mp3" },
        { english: "Take (someone) out", arabic: "يخرج (شخصاً ما) في نزهة", definition: "To go somewhere with someone for social entertainment.", exampleEn: "If you want I can take her out sometimes...", image: "images/12.jpg", audio: "vocab-audio/12.mp3" },
        { english: "Interests", arabic: "اهتمامات", definition: "Things you enjoy doing or learning about.", exampleEn: "What are your interests?", image: "images/13.jpg", audio: "vocab-audio/13.mp3" },
        { english: "Pretty angry", arabic: "غاضبة جداً", definition: "Feeling a strong feeling of annoyance or displeasure.", exampleEn: "She's getting pretty angry...", image: "images/14.jpg", audio: "vocab-audio/14.mp3" },
        { english: "Basketball", arabic: "كرة السلة", definition: "A game played between two teams of five players.", exampleEn: "I can play basketball pretty well.", image: "images/15.jpg", audio: "vocab-audio/15.mp3" },
        { english: "Cards", arabic: "أوراق اللعب / الكوتشينة", definition: "Rectangular pieces of stiff paper used for playing games.", exampleEn: "I don't like playing cards.", image: "images/16.jpg", audio: "vocab-audio/16.mp3" }
    ];

    const dialogueData = [
        { speaker: "Peter", text: "Hi Jack, good morning. Look at this picture of Beck Nicholson windsurfing...", audio: "sentences-audio/1-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "I know him... Can you windsurf?", audio: "sentences-audio/2-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "Yes, I'm not great, but I can windsurf a little. I like windsurfing on summer holidays. And what about you?", audio: "sentences-audio/3-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "No, I'm afraid I can't. But I can swim pretty well.", audio: "sentences-audio/4-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "It's a great sport! What sports do you like doing?", audio: "sentences-audio/5-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "Well, I can play tennis but I'm not very good at it... Oh, I can play chess very well!", audio: "sentences-audio/6-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "Chess, that's not a sport! That's a hobby!", audio: "sentences-audio/7-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "No, it's a sport! Can you play chess?", audio: "sentences-audio/8-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "No. I don't like playing cards, chess, or other table games.", audio: "sentences-audio/9-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "So what do you do during the winter?", audio: "sentences-audio/10-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "Oh, I go to the gym. I can play basketball pretty well. I can also do a little karate.", audio: "sentences-audio/11-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "That's interesting. I can do a little karate as well! Where do you go?", audio: "sentences-audio/12-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "I like going to the Karate Gym on 14th Street.", audio: "sentences-audio/13-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "Oh, interesting. I'm looking for a gym! Why don't we go there together? I'm usually free on Saturdays.", audio: "sentences-audio/14-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "Sure... But I never go on Saturday: it's the only day I have to spend time with Sharon. I usually go on Friday afternoons... But now I'm so nervous about my audition that I don't have time for the gym, and for Sharon too... She's getting pretty angry...", audio: "sentences-audio/15-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "Well... If you want I can take her out sometimes...", audio: "sentences-audio/16-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Peter", text: "Oh, Jack, you're such a good friend! Maybe you can help me with my audition too!", audio: "sentences-audio/17-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Jack", text: "All right.", audio: "sentences-audio/18-jack.mp3", img: "images/jack.jpg" }
    ];

    const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

    const grammarQuizData = [
        { q: "Based on the text, which game can't Peter play?", opts: ["Play basketball", "Do karate", "Play chess", "Windsurf"], ans: "Play chess" },
        { q: "What can Jack do that Peter can't do?", opts: ["Do karate", "Play chess", "Play basketball", "Windsurf"], ans: "Play chess" },
        { q: "According to the text, when do we use the verb 'can'?", opts: ["To talk about the future", "To talk about ability", "To ask for permission", "To describe past events"], ans: "To talk about ability" },
        { q: "What is the correct rule for the verb that comes after 'can'?", opts: ["Infinitive with 'to'", "Verb ending in '-ing'", "Infinitive without 'to'", "Past tense verb"], ans: "Infinitive without 'to'" },
        { q: "How do we form a question using 'can'?", opts: ["Put 'do' or 'does' before 'can'", "Put 'can' at the end of the sentence", "Put 'can' in front of the subject", "Add 'not' to 'can'"], ans: "Put 'can' in front of the subject" },
        { q: "Does the form of the verb 'can' change with different pronouns (he, she, it)?", opts: ["Yes, we add 's'", "No, the form never changes", "Yes, it changes to 'could'", "Yes, we add 'es'"], ans: "No, the form never changes" },
        { q: "What is the spoken abbreviation of 'cannot'?", opts: ["Can not", "Cans", "Can't", "Could't"], ans: "Can't" },
        { q: "Which of these things can't the speaker's boyfriend do?", opts: ["Cook a South American dish", "Make her laugh", "Bring flowers", "Sew"], ans: "Sew" },
        { q: "Based on the grammar rule, which sentence is correct?", opts: ["She can to drive.", "He cans cook.", "Can you speak Italian?", "They cannot playing tennis."], ans: "Can you speak Italian?" },
        { q: "What is another problem the speaker's boyfriend has that she doesn't consider a big deal?", opts: ["He can't clean the house", "He can't speak Spanish", "He can't speak Welsh", "He can't swim"], ans: "He can't speak Welsh" }
    ];

    // Story Quiz
    let sqIdx = 0, sqScore = 0;
    window.startStoryQuiz = function() {
        goToStage('story-quiz-stage');
        sqIdx = 0; sqScore = 0;
        document.getElementById('sq-final-score-container').classList.add('hidden');
        document.getElementById('sq-quiz-content').classList.remove('hidden');
        showSQ();
    };

    function showSQ() {
        document.getElementById('sq-next-question-btn').classList.add('hidden');
        document.getElementById('sq-quiz-counter').textContent = `Question: ${sqIdx + 1} / ${storyQuizData.length}`;
        const qData = storyQuizData[sqIdx];
        document.getElementById('sq-question-text').textContent = qData.q;
        document.getElementById('sq-feedback-text').textContent = '';
        const optsCont = document.getElementById('sq-options-container');
        optsCont.innerHTML = '';

        let opts = [...qData.opts].sort(()=>Math.random()-0.5);
        opts.forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.onclick = () => checkSQAns(opt === qData.ans, b, qData.ans);
            optsCont.appendChild(b);
        });
    }

    function checkSQAns(isC, btn, correctAns) {
        document.querySelectorAll('#sq-options-container button').forEach(b => b.disabled = true);
        if(isC) { 
            sqScore++; btn.className='success'; 
            document.getElementById('sq-feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; 
            document.getElementById('sq-feedback-text').innerHTML = 'Wrong! ❌'; 
            soundWrong.currentTime = 0; soundWrong.play().catch(e=>e); 
            document.querySelectorAll('#sq-options-container button').forEach(b => { if(b.textContent === correctAns) b.className='success'; });
        }
        document.getElementById('sq-next-question-btn').classList.remove('hidden');
    }

    document.getElementById('sq-next-question-btn')?.addEventListener('click', () => {
        sqIdx++;
        if(sqIdx < storyQuizData.length) showSQ();
        else {
            document.getElementById('sq-quiz-content').classList.add('hidden');
            document.getElementById('sq-final-score-container').classList.remove('hidden');
            let p = Math.round((sqScore/storyQuizData.length)*100);
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = storyQuizData.length - sqScore;
            document.getElementById('sq-score-text').innerHTML = `${currentStudentName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${sqScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // Words Flashcards
    let currentWordIndex = 0;
    function showWord(index) {
        document.getElementById('flashcard-inner').classList.remove('is-flipped');
        const word = wordsData[index];
        document.getElementById('card-image').src = word.image;
        document.getElementById('card-word').textContent = word.english;
        document.getElementById('card-translation').textContent = word.arabic;
        document.getElementById('card-definition').textContent = word.definition;
        document.getElementById('card-example-en').textContent = word.exampleEn;
        document.getElementById('word-counter-text').textContent = `${index + 1} / ${wordsData.length}`;
        document.getElementById('card-audio').src = word.audio;
    }
    
    window.initWordsStage = function() { currentWordIndex = 0; showWord(0); };

    document.getElementById('flashcard-container')?.addEventListener('click', () => document.getElementById('flashcard-inner').classList.toggle('is-flipped'));
    document.getElementById('next-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex + 1) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('prev-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex - 1 + wordsData.length) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('play-audio-btn')?.addEventListener('click', () => {
        let aud = document.getElementById('card-audio');
        aud.currentTime = 0;
        aud.play().catch(e=>e);
    });
    
    // Words Quiz
    let quizWIndex = 0, quizWScore = 0, qWords = [];
    window.startWordsQuiz = function() {
        goToStage('quiz-stage');
        quizWScore = 0; quizWIndex = 0; 
        qWords = [...wordsData].sort(()=>Math.random()-0.5);
        document.getElementById('final-score-container').classList.add('hidden');
        document.getElementById('quiz-content').classList.remove('hidden');
        showWQuizQ();
    };

    function showWQuizQ() {
        document.getElementById('next-question-btn').classList.add('hidden');
        document.getElementById('quiz-counter').textContent = `Question: ${quizWIndex + 1} / ${qWords.length}`;
        const correctW = qWords[quizWIndex];
        document.getElementById('feedback-text').textContent = '';
        
        const quizAudio = document.getElementById('quiz-word-audio');
        if(quizAudio) {
            quizAudio.src = correctW.audio;
            setTimeout(() => { quizAudio.play().catch(e=>console.log("Audio block")); }, 300);
        }

        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';

        let opts = [correctW];
        while(opts.length < 3) {
            let rnd = wordsData[Math.floor(Math.random() * wordsData.length)];
            if(!opts.some(o=>o.english === rnd.english)) opts.push(rnd);
        }
        
        opts.sort(()=>Math.random()-0.5).forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt.english; 
            b.onclick = () => checkWAns(opt.english === correctW.english, b, correctW);
            optsContainer.appendChild(b);
        });
    }

    document.getElementById('play-quiz-audio-btn')?.addEventListener('click', () => {
        let aud = document.getElementById('quiz-word-audio');
        aud.currentTime = 0;
        aud.play().catch(e=>e);
    });

    function checkWAns(isC, btn, correctW) {
        document.querySelectorAll('#options-container button').forEach(b => b.disabled = true);
        if(isC) { 
            quizWScore++; btn.className='success'; 
            document.getElementById('feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; 
            document.getElementById('feedback-text').innerHTML = 'Wrong! ❌'; 
            soundWrong.currentTime = 0; soundWrong.play().catch(e=>e); 
            document.querySelectorAll('#options-container button').forEach(b => { if(b.textContent === correctW.english) b.className='success'; });
        }
        document.getElementById('next-question-btn').classList.remove('hidden');
    }

    document.getElementById('next-question-btn')?.addEventListener('click', () => {
        quizWIndex++;
        if(quizWIndex < qWords.length) showWQuizQ();
        else {
            document.getElementById('quiz-content').classList.add('hidden');
            document.getElementById('final-score-container').classList.remove('hidden');
            let p = Math.round((quizWScore/qWords.length)*100);
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = qWords.length - quizWScore;
            document.getElementById('score-text').innerHTML = `${currentStudentName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${quizWScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // Learn Lines
    let cLine = 0;
    function showLine(i) {
        const d = dialogueData[i];
        document.getElementById('speaker-img').src = d.img;
        document.getElementById('speaker-name').textContent = d.speaker;
        document.getElementById('english-line').textContent = d.text;
        document.getElementById('line-counter-text').textContent = `${i + 1} / ${dialogueData.length}`;
        document.getElementById('line-audio').src = d.audio;
    }
    
    window.initLearnStage = function() { cLine = 0; showLine(0); };
    
    document.getElementById('next-line-btn')?.addEventListener('click', () => { if(cLine < dialogueData.length-1) { cLine++; showLine(cLine); } });
    document.getElementById('prev-line-btn')?.addEventListener('click', () => { if(cLine > 0) { cLine--; showLine(cLine); } });
    document.getElementById('play-line-btn')?.addEventListener('click', () => {
        let aud = document.getElementById('line-audio');
        aud.currentTime = 0;
        aud.play().catch(e=>e);
    });

    // Listen & Write
    let dictIdx = 0, dictScore = 0;
    window.startDictation = function() {
        goToStage('listen-write-stage');
        dictIdx = 0; dictScore = 0;
        document.getElementById('dict-final-score-container').classList.add('hidden');
        document.getElementById('dict-content').classList.remove('hidden');
        showDict();
    };

    function showDict() {
        document.getElementById('next-dict-btn').classList.add('hidden');
        document.getElementById('dict-counter').textContent = `Sentence: ${dictIdx + 1} / ${dictationData.length}`;
        document.getElementById('dict-input').value = '';
        document.getElementById('dict-input').disabled = false;
        document.getElementById('check-dict-btn').disabled = false;
        document.getElementById('dict-feedback').textContent = '';
        document.getElementById('dict-correct-ans').classList.add('hidden');
        
        const dictAudio = document.getElementById('dict-audio');
        dictAudio.src = dictationData[dictIdx].audio;
        setTimeout(() => { dictAudio.play().catch(e=>e); }, 300);
    }

    document.getElementById('play-dict-audio-btn')?.addEventListener('click', () => {
        let aud = document.getElementById('dict-audio');
        aud.currentTime = 0;
        aud.play().catch(e=>e);
    });

    document.getElementById('check-dict-btn')?.addEventListener('click', () => {
        let userInput = document.getElementById('dict-input').value;
        if(userInput.trim() === '') return;
        
        document.getElementById('dict-input').disabled = true;
        document.getElementById('check-dict-btn').disabled = true;

        let correctTxt = dictationData[dictIdx].text;
        let cleanUser = userInput.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();
        let cleanCorrect = correctTxt.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();

        if(cleanUser === cleanCorrect) {
            dictScore++;
            document.getElementById('dict-feedback').innerHTML = 'Excellent! ✅';
            document.getElementById('dict-feedback').style.color = '#27ae60';
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e);
        } else {
            document.getElementById('dict-feedback').innerHTML = 'Not quite! ❌';
            document.getElementById('dict-feedback').style.color = '#e74c3c';
            document.getElementById('dict-correct-ans').textContent = `Correct answer: ${correctTxt}`;
            document.getElementById('dict-correct-ans').classList.remove('hidden');
            soundWrong.currentTime = 0; soundWrong.play().catch(e=>e);
        }
        document.getElementById('next-dict-btn').classList.remove('hidden');
    });

    document.getElementById('next-dict-btn')?.addEventListener('click', () => {
        dictIdx++;
        if(dictIdx < dictationData.length) showDict();
        else {
            document.getElementById('dict-content').classList.add('hidden');
            document.getElementById('dict-final-score-container').classList.remove('hidden');
            let p = Math.round((dictScore/dictationData.length)*100);
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = dictationData.length - dictScore;
            document.getElementById('dict-score-text').innerHTML = `${currentStudentName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${dictScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // Roleplay
    let userRole = "", curR = 0;
    let mediaRecorder; let audioChunks = []; let isRecording = false;
    let userRecordings = {}; 
    let playbackIndex = 0; let isPlayingFull = false;

    window.startRoleplay = function(r) { 
        userRole = r; curR = 0; userRecordings = {}; 
        document.getElementById('rp-result-area').classList.add('hidden'); 
        document.getElementById('rp-content-area').style.display = 'block'; 
        goToStage('roleplay-stage'); 
        nextRp(); 
    }

    window.nextRp = function() {
        if(curR >= dialogueData.length) { 
            document.getElementById('rp-content-area').style.display = 'none'; 
            document.getElementById('rp-result-area').classList.remove('hidden'); 
            document.getElementById('rpResultCurrentText').innerText = "Listen to your performance!";
            return; 
        }
        let d = dialogueData[curR]; 
        document.getElementById('rpChar').innerText = d.speaker; 
        document.getElementById('rpText').innerText = d.text;
        let ind = document.getElementById('rpIndicator');
        
        let btnRec = document.getElementById('btnRecord');
        let playback = document.getElementById('userAudioPlayback');
        playback.style.display = 'none';
        btnRec.innerText = "🎙️ Record";
        btnRec.style.background = "#4caf50";
        isRecording = false;

        if(d.speaker === userRole) { 
            ind.innerText = "YOUR TURN 🎤"; ind.className = "turn-indicator your-turn"; 
            document.getElementById('micArea').style.display = 'block'; 
        } else { 
            ind.innerText = "LISTEN 🔊 (Click to replay)"; ind.className = "turn-indicator app-turn"; 
            document.getElementById('micArea').style.display = 'none'; 
            document.getElementById('rpAudio').src = d.audio; 
            document.getElementById('rpAudio').play().catch(e=>console.log("Audio Error:", e)); 
        }
        curR++;
    }

    window.replayAppAudio = function() {
        let audio = document.getElementById('rpAudio');
        audio.currentTime = 0; audio.play().catch(e=>e);
    }

    window.toggleRecording = async function() {
        let btn = document.getElementById('btnRecord');
        let playback = document.getElementById('userAudioPlayback');
        let lineIndex = curR - 1;

        if (!isRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = event => { audioChunks.push(event.data); };
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    playback.src = audioUrl;
                    playback.style.display = 'block';
                    userRecordings[lineIndex] = audioUrl; 
                };

                mediaRecorder.start();
                isRecording = true;
                btn.innerText = "🛑 Stop Recording";
                btn.style.background = "#e74c3c";
                playback.style.display = 'none';
            } catch (err) {
                alert("Please allow microphone access in your browser!");
                console.error("Mic error:", err);
            }
        } else {
            mediaRecorder.stop();
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
            isRecording = false;
            btn.innerText = "🎙️ Record Again";
            btn.style.background = "#4caf50";
        }
    }

    window.playFullRoleplay = function() {
        playbackIndex = 0; isPlayingFull = true;
        document.getElementById('btnPlayFull').innerText = "⏹ Stop Playback";
        document.getElementById('btnPlayFull').onclick = stopFullRoleplay;
        playNextFullRpLine();
    }
    
    function stopFullRoleplay() {
        isPlayingFull = false;
        let audio = document.getElementById('rpAudioPlaybackFull'); audio.pause();
        document.getElementById('btnPlayFull').innerText = "▶️ Listen to Full Conversation";
        document.getElementById('btnPlayFull').onclick = playFullRoleplay;
        document.getElementById('rpResultCurrentText').innerText = "Listen to your performance!";
    }

    function playNextFullRpLine() {
        if (!isPlayingFull) return;
        if (playbackIndex >= dialogueData.length) { stopFullRoleplay(); return; }
        
        let d = dialogueData[playbackIndex];
        document.getElementById('rpResultCurrentText').innerText = `${d.speaker}: ${d.text}`;

        let audioSrc = d.audio; 
        if (d.speaker === userRole && userRecordings[playbackIndex]) { audioSrc = userRecordings[playbackIndex]; }
        
        let audio = document.getElementById('rpAudioPlaybackFull');
        audio.src = audioSrc;
        audio.onended = () => { playbackIndex++; playNextFullRpLine(); };
        audio.play().catch(e => { console.log("Audio Error:", e); playbackIndex++; playNextFullRpLine(); });
    }

    // Grammar Quiz
    let gQuizIdx = 0, gScore = 0;
    window.startGrammarQuiz = function() {
        goToStage('grammar-quiz-stage');
        gQuizIdx = 0; gScore = 0;
        document.getElementById('g-final-score-container').classList.add('hidden');
        document.getElementById('g-quiz-content').classList.remove('hidden');
        showGQ();
    };

    function showGQ() {
        document.getElementById('g-next-question-btn').classList.add('hidden');
        document.getElementById('g-quiz-counter').textContent = `Question: ${gQuizIdx + 1} / ${grammarQuizData.length}`;
        const qData = grammarQuizData[gQuizIdx];
        document.getElementById('g-question-text').textContent = qData.q;
        document.getElementById('g-feedback-text').textContent = '';
        const optsCont = document.getElementById('g-options-container');
        optsCont.innerHTML = '';

        let opts = [...qData.opts].sort(()=>Math.random()-0.5);
        opts.forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.onclick = () => checkGQAns(opt === qData.ans, b, qData.ans);
            optsCont.appendChild(b);
        });
    }

    function checkGQAns(isC, btn, correctAns) {
        document.querySelectorAll('#g-options-container button').forEach(b => b.disabled = true);
        if(isC) { 
            gScore++; btn.className='success'; 
            document.getElementById('g-feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; 
            document.getElementById('g-feedback-text').innerHTML = 'Wrong! ❌'; 
            soundWrong.currentTime = 0; soundWrong.play().catch(e=>e); 
            document.querySelectorAll('#g-options-container button').forEach(b => { if(b.textContent === correctAns) b.className='success'; });
        }
        document.getElementById('g-next-question-btn').classList.remove('hidden');
    }

    document.getElementById('g-next-question-btn')?.addEventListener('click', () => {
        gQuizIdx++;
        if(gQuizIdx < grammarQuizData.length) showGQ();
        else {
            document.getElementById('g-quiz-content').classList.add('hidden');
            document.getElementById('g-final-score-container').classList.remove('hidden');
            let p = Math.round((gScore/grammarQuizData.length)*100);
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = grammarQuizData.length - gScore;
            document.getElementById('g-score-text').innerHTML = `${currentStudentName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${gScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

});