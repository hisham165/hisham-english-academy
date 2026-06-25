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

    const soundCorrect = new Audio('audio/correct.mp3');
    const soundWrong = new Audio('audio/wrong.mp3');

    // دالة الرسايل التشجيعية
    function getFeedbackMessage(percentage) {
        if (percentage < 50) return "Try again! 🔄";
        if (percentage <= 75) return "Almost there! 👍";
        return "Well done! 🌟";
    }

    // --- 1. البيانات (الدرس الخامس: The Weekend) ---
    
    const storyQuizData = [
        { q: "Where does Anne go on Saturdays?", opts: ["To the cinema", "To the supermarket", "To the park"], ans: "To the supermarket" },
        { q: "What does Sharon usually do on Saturday mornings?", opts: ["She cleans the flat", "She goes jogging", "She sleeps late"], ans: "She sleeps late" },
        { q: "What does Anne do on Sundays?", opts: ["Housework and TV", "Goes swimming", "Goes to the cinema"], ans: "Housework and TV" },
        { q: "True or false? Peter doesn't like watching TV.", opts: ["True", "False"], ans: "False" }
    ];

    const wordsData = [
        { english: "Jogging", arabic: "رياضة الجري ببطء", definition: "Running slowly for exercise.", exampleEn: "I go jogging on the weekend.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "Exhibitions", arabic: "معارض", definition: "Public shows of art or interesting things.", exampleEn: "I like going to exhibitions.", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Concerts", arabic: "حفلات موسيقية", definition: "Musical performances by singers or bands.", exampleEn: "I love going to concerts.", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Enough", arabic: "كافٍ / ما يكفي", definition: "As much as you need.", exampleEn: "I don't have enough money.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Entire", arabic: "كامل / بأكمله", definition: "The whole thing; all of it.", exampleEn: "I clean up the entire flat.", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Flat", arabic: "شقة", definition: "An apartment or a place to live.", exampleEn: "She cleans the entire flat.", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Clean up", arabic: "ينظف / يرتب", definition: "To make a place neat and tidy.", exampleEn: "I clean up the flat on Sunday.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Boring", arabic: "ممل", definition: "Not interesting.", exampleEn: "I never watch TV, it's boring.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Housework", arabic: "الأعمال المنزلية", definition: "Work you do to keep your house clean.", exampleEn: "Housework on weekends is boring.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "Swimming", arabic: "السباحة", definition: "Moving through water using your arms and legs.", exampleEn: "I like going swimming.", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Supermarket", arabic: "سوبر ماركت", definition: "A large store that sells food and other goods.", exampleEn: "I drive to the supermarket.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Cinema", arabic: "سينما", definition: "A place where you go to watch movies.", exampleEn: "Peter and I like going to the cinema.", image: "images/12.jpg", audio: "audio/words/12.mp3" },
        { english: "Grandfather", arabic: "جَد", definition: "The father of your mother or father.", exampleEn: "You talk like my grandfather!", image: "images/13.jpg", audio: "audio/words/13.mp3" },
        { english: "Get ready", arabic: "استعد", definition: "To prepare yourself for something.", exampleEn: "Get ready, grandpa!", image: "images/14.jpg", audio: "audio/words/14.mp3" }
    ];

    const dialogueData = [
        { speaker: "Anne", text: "Yes, I always go shopping on Saturdays. The first thing I do on Saturday is drive to the supermarket.", audio: "audio/dialogue/1-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Sharon", text: "I sometimes go shopping on Saturdays, but usually I sleep late. I'm always so tired on Saturdays...", audio: "audio/dialogue/2-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Alice", text: "I'm never tired on weekend! The weekend is a time for fun! I paint, go jogging, go out with some friends. Unfortunately, I sometimes have to study...", audio: "audio/dialogue/3-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Anne", text: "Oh, I sometimes do a little work at the weekend... When I'm free I like going swimming, going to exhibitions or to concerts, if I have enough money. Oh, and every Sunday I clean up the entire flat, and in the evening I watch TV.", audio: "audio/dialogue/4-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Sharon", text: "Oh, I never watch TV. It's boring. Peter and I like going to the cinema at the weekend.", audio: "audio/dialogue/5-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Peter", text: "Yes, it's important not to watch too much TV. An hour a day or so, that's enough.", audio: "audio/dialogue/6-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Alice", text: "Come on guys! You talk like my grandfather! Work, TV, housework on weekends... Life is more!", audio: "audio/dialogue/7-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "I want you to take me to places where young people have fun!", audio: "audio/dialogue/8-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Great! Get ready, grandpa!", audio: "audio/dialogue/9-alice.mp3", img: "images/alice.jpg" }
    ];

    const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

    const grammarQuizData = [
        { q: "What does 'not enough' mean?", opts: ["In excess", "Not sufficient", "Too much"], ans: "Not sufficient" },
        { q: "Where do we put 'enough' when using an adjective?", opts: ["Before the adjective", "After the adjective", "At the beginning"], ans: "After the adjective" },
        { q: "What do we use to express that something is in excess for uncountable nouns?", opts: ["Too many", "Too much", "So"], ans: "Too much" },
        { q: "Which phrase is correct for countable things (like coins)?", opts: ["Too much coins", "Too many coins", "So coins"], ans: "Too many coins" },
        { q: "Where do we put 'too' when using an adjective?", opts: ["After the adjective", "At the end", "Before the adjective"], ans: "Before the adjective" },
        { q: "Why do we use the word 'so'?", opts: ["To talk about excess", "To emphasize something", "To talk about habits"], ans: "To emphasize something" },
        { q: "Which sentence is correct?", opts: ["You are intelligent so", "You are too much intelligent", "You are so intelligent"], ans: "You are so intelligent" },
        { q: "If a ticket costs 45 Euros and you have 40 Euros, what is the situation?", opts: ["You have too much money", "You don't have enough money", "You have too many money"], ans: "You don't have enough money" }
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