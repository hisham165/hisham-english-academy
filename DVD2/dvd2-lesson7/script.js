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

    // --- 1. البيانات (الدرس السابع) ---
    const storyQuizData = [
        { q: "Sharon works part-time.", opts: ["True", "False"], ans: "False" },
        { q: "What does Sharon do?", opts: ["She works with computers", "She is a tourist guide", "She works in a museum"], ans: "She is a tourist guide" },
        { q: "What does Anne do when she is at work?", opts: ["She works in advertising", "She writes novels", "She corrects the proofs"], ans: "She corrects the proofs" },
        { q: "What do Anne and Paul do at the weekend?", opts: ["They go to the cinema together", "They go shopping together", "They play tennis together"], ans: "They play tennis together" },
        { q: "What degree does Sharon have?", opts: ["A degree in history", "A degree in archaeology", "A degree in languages"], ans: "A degree in archaeology" },
        { q: "Who does Sharon usually work with?", opts: ["Single tourists", "Famous writers", "Japanese groups"], ans: "Japanese groups" }
    ];

    const wordsData = [
        { english: "Degree", arabic: "شهادة جامعية", definition: "An academic qualification from a university.", exampleEn: "Sharon has a degree in archaeology.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "Archaeology", arabic: "عِلم الآثار", definition: "The study of ancient objects found in the ground.", exampleEn: "She studied archaeology at university.", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Part-time job", arabic: "وظيفة بدوام جزئي", definition: "A job for only a few hours a week.", exampleEn: "Do you have a part-time job?", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Full-time job", arabic: "وظيفة بدوام كامل", definition: "A job for the normal number of working hours.", exampleEn: "Unfortunately, it's a full-time job.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Travel agency", arabic: "وكالة سفر", definition: "A business that helps people plan holidays.", exampleEn: "Sharon works for a travel agency.", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Tours", arabic: "جولات سياحية", definition: "Short trips to see interesting places.", exampleEn: "I give tours around the city.", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Tourists", arabic: "سُياح", definition: "People who visit places for holidays.", exampleEn: "I bring tourists to museums.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Monuments", arabic: "مَعالم تاريخية", definition: "Old buildings or statues from history.", exampleEn: "We visit monuments and museums.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Museums", arabic: "متاحف", definition: "Buildings where you see art or history.", exampleEn: "The city has many beautiful museums.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "Tour guide", arabic: "مرشد سياحي", definition: "A person who shows tourists around.", exampleEn: "Could I have you as a tour guide?", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Publishing company", arabic: "دار نشر", definition: "A business that produces and sells books.", exampleEn: "Anne works in a publishing company.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Proofs", arabic: "مُسودات الطباعة", definition: "First copies of a text to check for mistakes.", exampleEn: "I read the proofs and correct them.", image: "images/12.jpg", audio: "audio/words/12.mp3" },
        { english: "Advertising department", arabic: "قِسم الإعلانات", definition: "The part of a company that creates ads.", exampleEn: "Paul works in the advertising department.", image: "images/13.jpg", audio: "audio/words/13.mp3" },
        { english: "Jealous", arabic: "غيور", definition: "Feeling unhappy because someone has something you want.", exampleEn: "You play tennis? I'm jealous!", image: "images/14.jpg", audio: "audio/words/14.mp3" },
        { english: "A black belt", arabic: "حزام أسود", definition: "A high rank or level in martial arts.", exampleEn: "Jack is a black belt in karate.", image: "images/15.jpg", audio: "audio/words/15.mp3" },
        { english: "Karate", arabic: "كاراتيه", definition: "A Japanese sport using hands and feet to fight.", exampleEn: "Jack only plays karate.", image: "images/16.jpg", audio: "audio/words/16.mp3" },
        { english: "Writers", arabic: "كُتّاب", definition: "People who write books or stories.", exampleEn: "Anne works with many famous writers.", image: "images/17.jpg", audio: "audio/words/17.mp3" },
        { english: "Printing", arabic: "طباعة", definition: "The process of producing books or papers.", exampleEn: "I correct the proofs before printing.", image: "images/18.jpg", audio: "audio/words/18.mp3" }
    ];

    const dialogueData = [
        { speaker: "Jack", text: "Oh girls, we're talking about jobs. Tell me about your job, Sharon. What do you do at the moment?", audio: "audio/dialogue/1-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "Ah, that's an interesting question!", audio: "audio/dialogue/2-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Really? Why do you say that?", audio: "audio/dialogue/3-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "Well, you know, I have a degree in archaeology, but now I'm doing something quite different.", audio: "audio/dialogue/4-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Do you have a part-time job?", audio: "audio/dialogue/5-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "No, unfortunately it's a full-time job. I work for a travel agency.", audio: "audio/dialogue/6-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Oh... What do you do?", audio: "audio/dialogue/7-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "I give tours around the city. I bring tourists to monuments and museums and other interesting places.", audio: "audio/dialogue/8-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Oh, that's nice! Could I have you as a tour guide for one day?", audio: "audio/dialogue/9-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "I'm sorry, I only work with groups. Usually with Japanese people.", audio: "audio/dialogue/10-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Oh, well, I'm a black belt in karate...", audio: "audio/dialogue/11-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Sharon", text: "Very funny... but it's not enough...", audio: "audio/dialogue/12-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "It's too bad... Anne, stop cleaning for a moment. Sit down and tell me about your job!", audio: "audio/dialogue/13-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Anne", text: "Okay, okay, okay, okay. I work in a publishing company.", audio: "audio/dialogue/14-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Jack", text: "Oh, you work with famous writers!", audio: "audio/dialogue/15-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Anne", text: "Not exactly, I don't work with the writers, I just read their proofs and correct them before printing.", audio: "audio/dialogue/16-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Sharon", text: "Ah, by the way, do you know Paul Taylor? He works with you, right?", audio: "audio/dialogue/17-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Anne", text: "Yes, yes, but we don't work in the same department. He works in the advertising department. But we are good friends. Every weekend we play tennis together.", audio: "audio/dialogue/18-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Jack", text: "Play tennis? I'm jealous!", audio: "audio/dialogue/19-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Anne", text: "Do you play tennis, too? Do you want to play with us?", audio: "audio/dialogue/20-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Jack", text: "Well, just joking. I don't play tennis that well. Only karate.", audio: "audio/dialogue/21-jack.mp3", img: "images/jack.jpg" }
    ];

    const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

    const grammarQuizData = [
        { q: "Which sentence asks about someone's job correctly?", opts: ["What you do?", "What do you do?", "What doing you?"], ans: "What do you do?" },
        { q: "Which tense do we use to talk about routines and facts (like your job)?", opts: ["Present Continuous", "Present Simple", "Past Simple"], ans: "Present Simple" },
        { q: "Which tense do we use for things happening right now?", opts: ["Present Continuous", "Present Simple", "Future Simple"], ans: "Present Continuous" },
        { q: "Fill in the blank: 'I _____ (work) for a travel agency.'", opts: ["working", "work", "am working"], ans: "work" },
        { q: "Fill in the blank: 'What _____ you doing at the moment?'", opts: ["do", "are", "is"], ans: "are" },
        { q: "Fill in the blank: 'Paul _____ (work) in the advertising department.'", opts: ["work", "working", "works"], ans: "works" },
        { q: "Which sentence is correct?", opts: ["Every weekend we play tennis.", "Every weekend we are playing tennis.", "Every weekend we plays tennis."], ans: "Every weekend we play tennis." },
        { q: "Fill in the blank: 'I _____ (not/work) with the writers.'", opts: ["am not work", "don't work", "doesn't work"], ans: "don't work" },
        { q: "Look! He _____ (clean) the room right now.", opts: ["cleans", "is cleaning", "clean"], ans: "is cleaning" },
        { q: "Choose the correct negative form: 'He _____ (not/play) tennis well.'", opts: ["don't play", "doesn't play", "isn't play"], ans: "doesn't play" }
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
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = storyQuizData.length - sqScore;
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('sq-score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${sqScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
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
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = qWords.length - quizWScore;
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${quizWScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // --- 5. Learn Lines ---
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
            let feedbackMsg = getFeedbackMessage(p);
            let wrongCount = dictationData.length - dictScore;
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('dict-score-text').innerHTML = `${sName}, Your Score: ${p}% - ${feedbackMsg}<br><span style="font-size: 1.2rem; color: #34495e; display: block; margin-top: 10px;">Correct: ${dictScore} ✅ | Wrong: ${wrongCount} ❌</span>`;
        }
    });

    // --- 7. Roleplay ---
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
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: 44100, channelCount: 1 } 
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
        document.getElementById('rpResultCurrentText').innerText = `${d.speaker}: ${d.text}`;

        let audioSrc = d.audio; 
        if (d.speaker === userRole && userRecordings[playbackIndex]) { audioSrc = userRecordings[playbackIndex]; }
        
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