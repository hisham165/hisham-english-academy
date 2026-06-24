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
            const studentName = studentNameInput.value.trim();

            if (VALID_CLASS_CODES.includes(enteredCode)) {
                currentStudentName = studentName; 
                let wm = document.getElementById('welcome-message');
                if(wm) wm.textContent = `Welcome, ${currentStudentName}! 🎉`;
                document.body.style.backgroundColor = "#eef2f5"; 
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

    // --- 1. البيانات ---
    const wordsData = [
        { english: "Office", arabic: "مكتب", exampleEn: "This is my office.", exampleAr: "هذا هو مكتبي.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "Near", arabic: "بجانب / بالقرب من", exampleEn: "It is near the bed.", exampleAr: "إنه بالقرب من السرير.", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Office supplies", arabic: "اللوازم المكتبية", exampleEn: "Where are the office supplies?", exampleAr: "أين اللوازم المكتبية؟", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Cupboard", arabic: "خزانة", exampleEn: "They are in the cupboard.", exampleAr: "إنهم في الخزانة.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Folders", arabic: "ملفات", exampleEn: "I have many folders.", exampleAr: "لدي العديد من الملفات.", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Pencils", arabic: "أقلام رصاص", exampleEn: "These are pencils.", exampleAr: "هذه أقلام رصاص.", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Pens", arabic: "أقلام جاف", exampleEn: "I need two pens.", exampleAr: "أحتاج إلى قلمين جافين.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Fax machine", arabic: "آلة فاكس", exampleEn: "There isn't a fax machine.", exampleAr: "لا توجد آلة فاكس.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Programs", arabic: "برامج", exampleEn: "I need computer programs.", exampleAr: "أحتاج إلى برامج كمبيوتر.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "Answering machine", arabic: "جهاز الرد الآلي", exampleEn: "Do you have an answering machine?", exampleAr: "هل لديك جهاز رد آلي؟", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Useful", arabic: "مفيد", exampleEn: "A computer is very useful.", exampleAr: "الكمبيوتر مفيد جداً.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Coffee machine", arabic: "آلة القهوة", exampleEn: "Where is the coffee machine?", exampleAr: "أين آلة القهوة؟", image: "images/12.jpg", audio: "audio/words/12.mp3" }
    ];

    const dialogueData = [
        { char: "Peter", text: "Hello, Anne!", audio: "audio/peter/1.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "Oh it's you, Peter! Look, this is it!", audio: "audio/anne/1.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Look at what?", audio: "audio/peter/2.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "My office! Here, near my bed...", audio: "audio/anne/2.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Oh, I see... By the way, where are the office supplies?", audio: "audio/peter/3.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "The computer supplies are in that cupboard over there. The folders, pencils, pens, etc. are here in this cupboard. And I also have two chairs!", audio: "audio/anne/3.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Oh good! Are these for everyone?", audio: "audio/peter/4.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "No, they are not! Don't touch anything, please!", audio: "audio/anne/4.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Okay. So, you say you have all of the office supplies?", audio: "audio/peter/5.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "No, not really... There isn't a fax machine... There aren't all the programs I need on my computer...", audio: "audio/anne/5.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "And I guess you have an answering machine. Is it useful?", audio: "audio/peter/6.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "I don't need an answering machine. I answer the telephone myself...", audio: "audio/anne/6.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Okay, you're right. This office is nice, and if you need a fax machine I have one in my apartment.", audio: "audio/peter/7.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "Oh, thank you!", audio: "audio/anne/7.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Wait a minute, something is missing... Where is the coffee machine? All offices have a coffee machine.", audio: "audio/peter/8.mp3", img: "images/peter.jpg" },
        { char: "Anne", text: "I'm afraid there isn't one here. There's a staff kitchen on the other side of the house, in the kitchen! We can have some coffee there.", audio: "audio/anne/8.mp3", img: "images/anne.jpg" },
        { char: "Peter", text: "Good idea!", audio: "audio/peter/9.mp3", img: "images/peter.jpg" }
    ];

    const grammarQuizData = [
        { q: "_______ a computer on the desk.", opts: ["There is", "There are", "Is there"], ans: "There is" },
        { q: "_______ some pens on the table.", opts: ["There is", "There are", "There isn't"], ans: "There are" },
        { q: "We use 'There is a' with _______ objects.", opts: ["plural", "singular", "many"], ans: "singular" },
        { q: "_______ a fax machine in Anne's office. (Negative)", opts: ["There aren't", "There is", "There isn't"], ans: "There isn't" },
        { q: "We use 'There are some' with _______ objects.", opts: ["singular", "one", "plural"], ans: "plural" },
        { q: "_______ two chairs in the room.", opts: ["There is", "There are", "There isn't"], ans: "There are" },
        { q: "_______ a coffee machine in the office?", opts: ["Is there", "There isn't", "There are"], ans: "Is there" },
        { q: "_______ some books on the shelf.", opts: ["There is", "There are", "Are there"], ans: "There are" },
        { q: "If you have four pictures, you say: _______ four pictures.", opts: ["There is", "There are", "There isn't"], ans: "There are" },
        { q: "_______ a glass on the table.", opts: ["There are", "There is", "There aren't"], ans: "There is" }
    ];

    const storyQuizData = [
        { q: "Where is Anne's office?", opts: ["Near the bed", "In the kitchen", "In the cupboard"], ans: "Near the bed" },
        { q: "Where are the computer supplies?", opts: ["In the cupboard", "On the desk", "Near the bed"], ans: "In the cupboard" },
        { q: "Anne has an answer phone.", opts: ["True", "False"], ans: "False" },
        { q: "Where do Anne and Peter go for a coffee?", opts: ["To the kitchen", "To the office", "Near the bed"], ans: "To the kitchen" }
    ];

    const dictationData = [
        { audio: "audio/peter/1.mp3", text: "Hello, Anne!" },
        { audio: "audio/anne/1.mp3", text: "Oh it's you, Peter! Look, this is it!" },
        { audio: "audio/peter/2.mp3", text: "Look at what?" },
        { audio: "audio/anne/2.mp3", text: "My office! Here, near my bed..." },
        { audio: "audio/peter/3.mp3", text: "Oh, I see... By the way, where are the office supplies?" },
        { audio: "audio/anne/3.mp3", text: "The computer supplies are in that cupboard over there. The folders, pencils, pens, etc. are here in this cupboard. And I also have two chairs!" },
        { audio: "audio/peter/4.mp3", text: "Oh good! Are these for everyone?" },
        { audio: "audio/anne/4.mp3", text: "No, they are not! Don't touch anything, please!" },
        { audio: "audio/peter/5.mp3", text: "Okay. So, you say you have all of the office supplies?" },
        { audio: "audio/anne/5.mp3", text: "No, not really... There isn't a fax machine... There aren't all the programs I need on my computer..." },
        { audio: "audio/peter/6.mp3", text: "And I guess you have an answering machine. Is it useful?" },
        { audio: "audio/anne/6.mp3", text: "I don't need an answering machine. I answer the telephone myself..." },
        { audio: "audio/peter/7.mp3", text: "Okay, you're right. This office is nice, and if you need a fax machine I have one in my apartment." },
        { audio: "audio/anne/7.mp3", text: "Oh, thank you!" },
        { audio: "audio/peter/8.mp3", text: "Wait a minute, something is missing... Where is the coffee machine? All offices have a coffee machine." },
        { audio: "audio/anne/8.mp3", text: "I'm afraid there isn't one here. There's a staff kitchen on the other side of the house, in the kitchen! We can have some coffee there." },
        { audio: "audio/peter/9.mp3", text: "Good idea!" }
    ];

    // --- 2. Story Quiz ---
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('sq-score-text').textContent = `${sName}, Your Score: ${p}% (${sqScore}/${storyQuizData.length})`;
        }
    });

    // --- 3. Words Flashcards ---
    let currentWordIndex = 0;
    function showWord(index) {
        document.getElementById('flashcard-inner').classList.remove('is-flipped');
        const word = wordsData[index];
        document.getElementById('card-image').src = word.image;
        document.getElementById('card-word').textContent = word.english;
        document.getElementById('card-translation').textContent = word.arabic;
        document.getElementById('card-example-en').textContent = word.exampleEn;
        
        document.getElementById('word-counter-text').textContent = `${index + 1} / ${wordsData.length}`;
        
        let aud = document.getElementById('card-audio');
        aud.src = word.audio;
        aud.load();
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
    
    // --- 4. Words Quiz ---
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('score-text').textContent = `${sName}, Your Score: ${p}% (${quizWScore}/${qWords.length})`;
        }
    });

    // --- 5. Learn Lines ---
    let cLine = 0;
    function showLine(i) {
        const d = dialogueData[i];
        document.getElementById('speaker-img').src = d.img;
        document.getElementById('speaker-name').textContent = d.char;
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

    // --- 6. Listen & Write ---
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('dict-score-text').textContent = `${sName}, Your Score: ${p}% (${dictScore}/${dictationData.length})`;
        }
    });

    // --- 7. Roleplay ---
    let userRole = "", curR = 0;
    let mediaRecorder; let audioChunks = []; let isRecording = false;
    let userRecordings = {}; 
    let playbackIndex = 0; let isPlayingFull = false;

    document.getElementById('choose-peter')?.addEventListener('click', () => startRoleplay("Peter"));
    document.getElementById('choose-anne')?.addEventListener('click', () => startRoleplay("Anne"));

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
        document.getElementById('rpChar').innerText = d.char; 
        document.getElementById('rpText').innerText = d.text;
        let ind = document.getElementById('rpIndicator');
        
        let btnRec = document.getElementById('btnRecord');
        let playback = document.getElementById('userAudioPlayback');
        playback.style.display = 'none';
        btnRec.innerText = "🎙️ Record";
        btnRec.style.background = "#4caf50";
        isRecording = false;

        if(d.char === userRole) { 
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
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    audio: { 
                        echoCancellation: true, 
                        noiseSuppression: true, 
                        autoGainControl: true,
                        sampleRate: 44100, 
                        channelCount: 1 
                    } 
                });
                
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
        document.getElementById('rpResultCurrentText').innerText = `${d.char}: ${d.text}`;

        let audioSrc = d.audio; 
        if (d.char === userRole && userRecordings[playbackIndex]) { audioSrc = userRecordings[playbackIndex]; }
        
        let audio = document.getElementById('rpAudioPlaybackFull');
        audio.src = audioSrc;
        audio.onended = () => { playbackIndex++; playNextFullRpLine(); };
        audio.play().catch(e => { console.log("Audio Error:", e); playbackIndex++; playNextFullRpLine(); });
    }

    // --- 8 & 9. Grammar Quiz ---
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

    // 🔥 التعديل المهم لإنهاء الدرس وحفظ النتيجة 🔥
    document.getElementById('g-next-question-btn')?.addEventListener('click', () => {
        gQuizIdx++;
        if(gQuizIdx < grammarQuizData.length) showGQ();
        else {
            document.getElementById('g-quiz-content').classList.add('hidden');
            document.getElementById('g-final-score-container').classList.remove('hidden');
            let p = Math.round((gScore/grammarQuizData.length)*100);
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('g-score-text').textContent = `${sName}, Your Score: ${p}% (${gScore}/${grammarQuizData.length})`;
            
            // سطر إرسال النجاح للبوابة الكبيرة
            if(window.markLessonCompleted) window.markLessonCompleted();
        }
    });

});