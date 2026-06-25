// --- 0. نظام تسجيل الدخول ---
const VALID_CLASS_CODES = ["ENG2026", "DVD2PASS", "HISHAM100"]; 
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

    if(classCodeInput) classCodeInput.addEventListener('input', checkInputs);
    if(studentNameInput) studentNameInput.addEventListener('input', checkInputs);

    if(loginBtn) {
        loginBtn.addEventListener('click', () => {
            const enteredCode = classCodeInput.value.trim().toUpperCase();
            if (VALID_CLASS_CODES.includes(enteredCode)) {
                currentStudentName = studentNameInput.value.trim(); 
                let wm = document.getElementById('welcome-message');
                if(wm) wm.textContent = `Welcome, ${currentStudentName}! 🎉`;
                document.body.style.backgroundColor = "#8e44ad"; 
                goToStage('home-stage');
            } else {
                loginError.classList.remove('hidden');
            }
        });
    }

    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            if(this.src.endsWith('.jpg')) this.src = this.src.replace('.jpg', '.png');
        };
    });

    const soundCorrect = new Audio('audio/correct.mp3');
    const soundWrong = new Audio('audio/wrong.mp3');

    function getFeedbackMessage(percentage) {
        if (percentage < 50) return "Try again! 🔄";
        if (percentage <= 75) return "Almost there! 👍";
        return "Well done! 🌟";
    }

    // --- 1. البيانات (الدرس السادس: Let's talk about you) ---
    
    const storyQuizData = [
        { q: "True or False: Alice thinks boys are great for carrying packages.", opts: ["True", "False"], ans: "True" },
        { q: "What is Jack's job?", opts: ["Sales manager", "Factory worker", "English teacher"], ans: "Sales manager" },
        { q: "Where is Jack responsible for?", opts: ["Northern Europe", "Western Europe", "Southern Europe"], ans: "Southern Europe" },
        { q: "What do the clients often ask about?", opts: ["The factory", "New models and prices", "The employees"], ans: "New models and prices" }
    ];

    const wordsData = [
        { english: "Open book", arabic: "كتاب مفتوح / صريح", definition: "A person who shares their thoughts and hides nothing.", exampleEn: "I'm an open book.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "Relationship", arabic: "علاقة", definition: "The way two or more people are connected to each other.", exampleEn: "You have a strange relationship with boys.", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Packages", arabic: "طرود / حقائب", definition: "Things wrapped in paper or packed in a box.", exampleEn: "They're great at carrying packages!", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Exceptional", arabic: "استثنائي / مميز جداً", definition: "Unusually good or different from others.", exampleEn: "You are exceptional.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Curious", arabic: "فضولي / محب للاستطلاع", definition: "Wanting to know or learn about something.", exampleEn: "I'm curious: what do you do at work?", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Factory", arabic: "مَصنع", definition: "A large building where things are made by machines.", exampleEn: "You know 'Speedmaster', the sporting goods factory?", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Department", arabic: "قِسم (في شركة)", definition: "A specific part or section of a large company.", exampleEn: "What department do you work in?", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Sales manager", arabic: "مدير مبيعات", definition: "A person in charge of selling a company's products.", exampleEn: "I'm a sales manager.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Promotion", arabic: "ترقية", definition: "A move to a higher and more important job.", exampleEn: "Last month they gave me a promotion.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "Responsible (for)", arabic: "مسؤول (عن)", definition: "Having the job or duty of doing and taking care of something.", exampleEn: "I'm responsible for Southern Europe.", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Clients", arabic: "عملاء / زبائن", definition: "People who buy goods or services from a business.", exampleEn: "I look for new clients.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Discount", arabic: "خصم / تخفيض", definition: "A reduction in the usual price of something.", exampleEn: "What do you do if they want a discount?", image: "images/12.jpg", audio: "audio/words/12.mp3" },
        { english: "Agreement", arabic: "اتفاق", definition: "A shared decision or understanding between people.", exampleEn: "I try to make an agreement with them.", image: "images/13.jpg", audio: "audio/words/13.mp3" },
        { english: "Audition", arabic: "تجربة أداء", definition: "A short performance to test if an actor or singer is good for a role.", exampleEn: "Peter is preparing his audition.", image: "images/14.jpg", audio: "audio/words/14.mp3" }
    ];

    const dialogueData = [
        { speaker: "Jack", text: "May I ask you a question, Alice?", audio: "audio/dialogue/1-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Sure, ask any question you like. I'm an open book.", audio: "audio/dialogue/2-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "Do you have a boyfriend?", audio: "audio/dialogue/3-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Well, I go out with some boys, but that's nothing serious... According to my birth chart I need some Taureans, but that's not easy now that Saturn is in Leo...", audio: "audio/dialogue/4-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "I see... Anyway I think you have a strange relationship with boys...", audio: "audio/dialogue/5-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Oh no! I like boys very much! They're great at carrying packages!", audio: "audio/dialogue/6-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "You are exceptional...", audio: "audio/dialogue/7-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Thanks, Jack. But now, stop talking about me. Let's talk about you. What do you think of me?... No, really, I'm curious: what do you do at work?", audio: "audio/dialogue/8-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "Oh, nothing special. Uh... You know 'Speedmaster', the sporting goods factory?", audio: "audio/dialogue/9-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Yeah, sure! They produce wonderful running shoes! What department do you work in?", audio: "audio/dialogue/10-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "I'm a sales manager. Last month they gave me a promotion and now I'm responsible for Southern Europe. That's why I moved here.", audio: "audio/dialogue/11-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Wow! That's really interesting... You must be very good at work. And what exactly do you do?", audio: "audio/dialogue/12-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "Oh... Basically, I look for new clients and keep them informed about new product lines and take care of their requests.", audio: "audio/dialogue/13-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "What kind of requests do they have?", audio: "audio/dialogue/14-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "Oh, they often ask questions about new models and prices.", audio: "audio/dialogue/15-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "What do you do if they want a discount?", audio: "audio/dialogue/16-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "Well, basically I don't get mad! I listen to them, and then I tell them 'No'... Well, seriously speaking, it depends... Each client is different... if they are important I try to make an agreement with them.\n\nHi Anne, hi Sharon. Where's Peter?", audio: "audio/dialogue/17-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "Oh, Peter is preparing his audition.", audio: "audio/dialogue/18-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Well, tell Peter I wish him good luck!", audio: "audio/dialogue/19-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "Do you really care?", audio: "audio/dialogue/20-sharon.mp3", img: "images/sharon.jpg" }
    ];

    const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

    const grammarQuizData = [
        { q: "What is the correct auxiliary verb for the third person singular (he, she, it)?", opts: ["do", "does", "is"], ans: "does" },
        { q: "What is the correct order for a question in the simple present?", opts: ["Question word + auxiliary + subject + verb", "Question word + subject + auxiliary + verb", "Auxiliary + question word + subject + verb"], ans: "Question word + auxiliary + subject + verb" },
        { q: "Which sentence is correct?", opts: ["What do he do at work?", "What he does at work?", "What does he do at work?"], ans: "What does he do at work?" },
        { q: "Which question is correct?", opts: ["Why does she studies?", "Why does she study?", "Why do she study?"], ans: "Why does she study?" },
        { q: "Which sentence is correct?", opts: ["How much do it cost?", "How much does it cost?", "How much it costs?"], ans: "How much does it cost?" },
        { q: "Fill in the blank: 'Where _____ they live?'", opts: ["does", "do", "are"], ans: "do" },
        { q: "Fill in the blank: 'Who _____ he work with?'", opts: ["do", "does", "is"], ans: "does" },
        { q: "In the teacher's guessing game, what was her new job?", opts: ["An English teacher", "A prima ballerina", "A flight attendant"], ans: "A prima ballerina" },
        { q: "Fill in the blank: 'When _____ I arrive?'", opts: ["does", "do", "am"], ans: "do" },
        { q: "Which sentence is correct? (Focusing on the verb after 'does')", opts: ["How do they speaks English?", "How do they speak English?", "How does they speak English?"], ans: "How do they speak English?" }
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('sq-score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${sqScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${quizWScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('dict-score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${dictScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // Roleplay
    let userRole = "", curR = 0;
    let mediaRecorder; let audioChunks = []; let isRecording = false;
    let userRecordings = {}; 
    let playbackIndex = 0; let isPlayingFull = false;

    window.startRoleplay = function(r) { 
        userRole = r; 
        curR = 0; 
        userRecordings = {}; 
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
        }
        else { 
            ind.innerText = "LISTEN 🔊 (Click to replay)"; ind.className = "turn-indicator app-turn"; 
            document.getElementById('micArea').style.display = 'none'; 
            document.getElementById('rpAudio').src = d.audio; 
            document.getElementById('rpAudio').play().catch(e=>console.log("Audio Error:", e)); 
        }
        curR++;
    }

    window.replayAppAudio = function() {
        let audio = document.getElementById('rpAudio');
        audio.currentTime = 0;
        audio.play().catch(e=>e);
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

    // 🔥 التعديل المهم لإرسال النجاح للفايربيز 🔥
    document.getElementById('g-next-question-btn')?.addEventListener('click', () => {
        gQuizIdx++;
        if(gQuizIdx < grammarQuizData.length) showGQ();
        else {
            document.getElementById('g-quiz-content').classList.add('hidden');
            document.getElementById('g-final-score-container').classList.remove('hidden');
            let p = Math.round((gScore/grammarQuizData.length)*100);
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = grammarQuizData.length - gScore;
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('g-score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${gScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
            
            // 🚨 سطر إرسال النجاح للبوابة 🚨
            if(window.markLessonCompleted) window.markLessonCompleted();
        }
    });

});