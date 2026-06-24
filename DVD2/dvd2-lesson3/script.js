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
    document.querySelectorAll('video, audio').forEach(media => { media.pause(); media.currentTime = 0; });
    document.querySelectorAll('iframe').forEach(iframe => { let currentSrc = iframe.src; iframe.src = ''; iframe.src = currentSrc; });
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
            loginBtn.classList.add('active-btn'); loginBtn.disabled = false;
        } else {
            loginBtn.classList.remove('active-btn'); loginBtn.disabled = true;
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
                document.body.style.backgroundColor = "#eef2f5"; 
                goToStage('home-stage');
            } else {
                loginError.classList.remove('hidden');
            }
        });
    }

    const soundCorrect = new Audio('audio/correct.mp3');
    const soundWrong = new Audio('audio/wrong.mp3');

    // --- 1. البيانات (الدرس الثالث) ---
    const storyQuizData = [
        { q: "Jack wakes up at...", opts: ["6:30", "6:00", "7:00"], ans: "6:30" },
        { q: "Anne's friend lives in the country.", opts: ["True", "False"], ans: "True" },
        { q: "Sharon gets up at...", opts: ["9:00", "6:30", "7:00"], ans: "9:00" },
        { q: "Sharon usually has ... groups of tourists a day.", opts: ["5 or 6", "2 or 3", "10"], ans: "5 or 6" }
    ];

    const wordsData = [
        { english: "Wake up", arabic: "يستيقظ", exampleEn: "What time do you wake up?", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "Hard", arabic: "شاق / صعب", exampleEn: "Work is so hard guys...", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Early", arabic: "مبكرًا", exampleEn: "That's too early!", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Drive", arabic: "يقود / رحلة بالسيارة", exampleEn: "Wow, that's a long drive.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Countryside", arabic: "الريف", exampleEn: "He lives in the countryside.", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Lucky", arabic: "محظوظ", exampleEn: "I think he's lucky.", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Woods", arabic: "الغابة / الأشجار", exampleEn: "He can go for walks in the woods.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Traffic jams", arabic: "زحام مروري", exampleEn: "Not in traffic jams...", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Combination", arabic: "مزيج / تركيبة", exampleEn: "A pretty nice combination.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "Late", arabic: "متأخرًا", exampleEn: "You get home very late.", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Tourists", arabic: "سياح", exampleEn: "Groups of tourists a day.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Groups", arabic: "مجموعات", exampleEn: "Five or six groups of tourists.", image: "images/12.jpg", audio: "audio/words/12.mp3" },
        { english: "Sing", arabic: "يغني", exampleEn: "And you sing too much, Peter...", image: "images/13.jpg", audio: "audio/words/13.mp3" }
    ];

    const dialogueData = [
        { char: "Jack", text: "Work is so hard guys... I wake up at six thirty every day, have breakfast and take the train to work - every day!", audio: "audio/lines/1-jack.mp3", img: "images/jack.jpg" },
        { char: "Anne", text: "I know. I get up at seven but I have a friend at work who usually gets up at six!", audio: "audio/lines/2-anne.mp3", img: "images/anne.jpg" },
        { char: "Jack", text: "Why? That's too early!", audio: "audio/lines/3-jack.mp3", img: "images/jack.jpg" },
        { char: "Anne", text: "It takes him an hour to drive to work.", audio: "audio/lines/4-anne.mp3", img: "images/anne.jpg" },
        { char: "Jack", text: "Wow, that's a long drive.", audio: "audio/lines/5-jack.mp3", img: "images/jack.jpg" },
        { char: "Anne", text: "Yes, but he lives in the country. I think he's lucky: every weekend he can go for walks in the woods... Not in traffic jams...", audio: "audio/lines/6-anne.mp3", img: "images/anne.jpg" },
        { char: "Jack", text: "I guess that's pretty nice: he lives in the countryside but works in the city. A pretty nice combination.", audio: "audio/lines/7-jack.mp3", img: "images/jack.jpg" },
        { char: "Anne", text: "What about you, Sharon? What time do you wake up?", audio: "audio/lines/8-anne.mp3", img: "images/anne.jpg" },
        { char: "Sharon", text: "I usually get up at about nine o'clock, but I live in the city. It's easy to get to work.", audio: "audio/lines/9-sharon.mp3", img: "images/sharon.jpg" },
        { char: "Peter", text: "Yes, but you get home very late: often at six thirty or seven.", audio: "audio/lines/10-peter.mp3", img: "images/peter.jpg" },
        { char: "Sharon", text: "You know, I sometimes have five or six groups of tourists a day...", audio: "audio/lines/11-sharon.mp3", img: "images/sharon.jpg" },
        { char: "Peter", text: "You work too much, my dear...", audio: "audio/lines/12-peter.mp3", img: "images/peter.jpg" },
        { char: "Sharon", text: "And you sing too much, Peter...", audio: "audio/lines/13-sharon.mp3", img: "images/sharon.jpg" }
    ];

    const grammarQuizData = [
        { q: "I ... breakfast at 7 o'clock.", opts: ["have", "cook", "leaves"], ans: "have" },
        { q: "My mother ... dinner for the family.", opts: ["have", "cook", "cooks"], ans: "cooks" },
        { q: "The train ... at 8 o'clock.", opts: ["have", "leave", "leaves"], ans: "leaves" },
        { q: "He ... dinner at home.", opts: ["has", "have", "cooks"], ans: "has" },
        { q: "Jack ... up at 6:30.", opts: ["wake", "wakes", "waking"], ans: "wakes" },
        { q: "Anne and Jack ... to work.", opts: ["go", "goes", "going"], ans: "go" },
        { q: "It ... an hour to drive.", opts: ["take", "takes", "taking"], ans: "takes" },
        { q: "He ... in the country.", opts: ["live", "lives", "living"], ans: "lives" },
        { q: "Do you ... work?", opts: ["like", "likes", "liking"], ans: "like" },
        { q: "Sharon ... get up early.", opts: ["don't", "doesn't", "not"], ans: "doesn't" }
    ];

    // --- 2. Story Quiz ---
    let sqIdx = 0, sqScore = 0;
    window.startStoryQuiz = function() {
        goToStage('story-quiz-stage'); sqIdx = 0; sqScore = 0;
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
            sqScore++; btn.className='success'; document.getElementById('sq-feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; document.getElementById('sq-feedback-text').innerHTML = 'Wrong! ❌'; 
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
        document.getElementById('card-audio').src = word.audio;
    }
    window.initWordsStage = function() { currentWordIndex = 0; showWord(0); };
    document.getElementById('flashcard-container')?.addEventListener('click', () => document.getElementById('flashcard-inner').classList.toggle('is-flipped'));
    document.getElementById('next-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex + 1) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('prev-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex - 1 + wordsData.length) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('play-audio-btn')?.addEventListener('click', () => document.getElementById('card-audio').play().catch(e=>e));

    // --- 4. Words Quiz ---
    let quizWIndex = 0, quizWScore = 0, qWords = [];
    window.startWordsQuiz = function() {
        goToStage('quiz-stage'); quizWScore = 0; quizWIndex = 0; 
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
        quizAudio.src = correctW.audio;
        setTimeout(() => { quizAudio.play().catch(e=>e); }, 300);

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

    document.getElementById('play-quiz-audio-btn')?.addEventListener('click', () => { document.getElementById('quiz-word-audio')?.play().catch(e=>e); });

    function checkWAns(isC, btn, correctW) {
        document.querySelectorAll('#options-container button').forEach(b => b.disabled = true);
        if(isC) { 
            quizWScore++; btn.className='success'; document.getElementById('feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; document.getElementById('feedback-text').innerHTML = 'Wrong! ❌'; 
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
    document.getElementById('play-line-btn')?.addEventListener('click', () => document.getElementById('line-audio').play().catch(e=>e));

    // --- 6. Listen & Write ---
    let dictIdx = 0, dictScore = 0;
    window.startDictation = function() {
        goToStage('listen-write-stage'); dictIdx = 0; dictScore = 0;
        document.getElementById('dict-final-score-container').classList.add('hidden');
        document.getElementById('dict-content').classList.remove('hidden');
        showDict();
    };

    function showDict() {
        document.getElementById('next-dict-btn').classList.add('hidden');
        document.getElementById('dict-counter').textContent = `Sentence: ${dictIdx + 1} / ${dialogueData.length}`;
        document.getElementById('dict-input').value = '';
        document.getElementById('dict-input').disabled = false;
        document.getElementById('check-dict-btn').disabled = false;
        document.getElementById('dict-feedback').textContent = '';
        document.getElementById('dict-correct-ans').classList.add('hidden');
        
        const dictAudio = document.getElementById('dict-audio');
        dictAudio.src = dialogueData[dictIdx].audio;
        setTimeout(() => { dictAudio.play().catch(e=>e); }, 300);
    }

    document.getElementById('play-dict-audio-btn')?.addEventListener('click', () => { document.getElementById('dict-audio').play().catch(e=>e); });

    document.getElementById('check-dict-btn')?.addEventListener('click', () => {
        let userInput = document.getElementById('dict-input').value;
        if(userInput.trim() === '') return;
        
        document.getElementById('dict-input').disabled = true;
        document.getElementById('check-dict-btn').disabled = true;

        let correctTxt = dialogueData[dictIdx].text;
        
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
        if(dictIdx < dialogueData.length) showDict();
        else {
            document.getElementById('dict-content').classList.add('hidden');
            document.getElementById('dict-final-score-container').classList.remove('hidden');
            let p = Math.round((dictScore/dialogueData.length)*100);
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('dict-score-text').textContent = `${sName}, Your Score: ${p}% (${dictScore}/${dialogueData.length})`;
        }
    });

    // --- 7. Roleplay ---
    let userRole = "", curR = 0;
    let mediaRecorder; let audioChunks = []; let isRecording = false; let userRecordings = {}; let playbackIndex = 0; let isPlayingFull = false;

    window.startRoleplay = function(r) { 
        userRole = r; curR = 0; userRecordings = {}; 
        document.getElementById('rp-result-area').classList.add('hidden'); 
        document.getElementById('rp-content-area').style.display = 'block'; 
        goToStage('roleplay-stage'); nextRp(); 
    }

    window.nextRp = function() {
        if(curR >= dialogueData.length) { 
            document.getElementById('rp-content-area').style.display = 'none'; 
            document.getElementById('rp-result-area').classList.remove('hidden'); 
            document.getElementById('rpResultCurrentText').innerText = "Listen to your performance!"; return; 
        }
        let d = dialogueData[curR]; 
        document.getElementById('rpChar').innerText = d.char; document.getElementById('rpText').innerText = d.text;
        
        let ind = document.getElementById('rpIndicator');
        let btnRec = document.getElementById('btnRecord'); 
        let playback = document.getElementById('userAudioPlayback');

        playback.style.display = 'none'; btnRec.innerText = "🎙️ Record"; btnRec.style.background = "#4caf50"; isRecording = false;

        if(d.char === userRole) { 
            ind.innerText = "YOUR TURN 🎤"; ind.className = "turn-indicator your-turn"; 
            document.getElementById('micArea').style.display = 'block'; 
        } else { 
            ind.innerText = "LISTEN 🔊 (Click to replay)"; ind.className = "turn-indicator app-turn"; 
            document.getElementById('micArea').style.display = 'none'; 
            document.getElementById('rpAudio').src = d.audio; 
            document.getElementById('rpAudio').play().catch(e=>e); 
        }
        curR++;
    }

    window.replayAppAudio = function() {
        let audio = document.getElementById('rpAudio');
        audio.currentTime = 0;
        audio.play().catch(e=>e);
    }

    window.toggleRecording = async function() {
        let btn = document.getElementById('btnRecord'); let playback = document.getElementById('userAudioPlayback'); let lineIndex = curR - 1;
        if (!isRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: 44100, channelCount: 1 } });
                mediaRecorder = new MediaRecorder(stream); audioChunks = [];
                mediaRecorder.ondataavailable = event => { audioChunks.push(event.data); };
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    playback.src = audioUrl; playback.style.display = 'block'; userRecordings[lineIndex] = audioUrl; 
                };
                mediaRecorder.start(); isRecording = true; btn.innerText = "🛑 Stop"; btn.style.background = "#e74c3c"; playback.style.display = 'none';
            } catch (err) { alert("Please allow mic access!"); }
        } else {
            mediaRecorder.stop(); mediaRecorder.stream.getTracks().forEach(track => track.stop());
            isRecording = false; btn.innerText = "🎙️ Record Again"; btn.style.background = "#4caf50";
        }
    }

    window.playFullRoleplay = function() { playbackIndex = 0; isPlayingFull = true; document.getElementById('btnPlayFull').innerText = "⏹ Stop Playback"; document.getElementById('btnPlayFull').onclick = stopFullRoleplay; playNextFullRpLine(); }
    
    function stopFullRoleplay() { isPlayingFull = false; document.getElementById('rpAudioPlaybackFull').pause(); document.getElementById('btnPlayFull').innerText = "▶️ Listen to Full Conversation"; document.getElementById('btnPlayFull').onclick = playFullRoleplay; document.getElementById('rpResultCurrentText').innerText = "Listen to your performance!"; }

    function playNextFullRpLine() {
        if (!isPlayingFull) return;
        if (playbackIndex >= dialogueData.length) { stopFullRoleplay(); return; }
        let d = dialogueData[playbackIndex]; document.getElementById('rpResultCurrentText').innerText = `${d.char}: ${d.text}`;
        let audioSrc = (d.char === userRole && userRecordings[playbackIndex]) ? userRecordings[playbackIndex] : d.audio;
        let audio = document.getElementById('rpAudioPlaybackFull'); audio.src = audioSrc;
        audio.onended = () => { playbackIndex++; playNextFullRpLine(); }; audio.play().catch(e => { playbackIndex++; playNextFullRpLine(); });
    }

    // --- 8 & 9. Grammar Quiz ---
    let gQuizIdx = 0, gScore = 0;
    window.startGrammarQuiz = function() {
        goToStage('grammar-quiz-stage'); gQuizIdx = 0; gScore = 0;
        document.getElementById('g-final-score-container').classList.add('hidden'); document.getElementById('g-quiz-content').classList.remove('hidden'); showGQ();
    };

    function showGQ() {
        document.getElementById('g-next-question-btn').classList.add('hidden');
        document.getElementById('g-quiz-counter').textContent = `Question: ${gQuizIdx + 1} / ${grammarQuizData.length}`;
        const qData = grammarQuizData[gQuizIdx];
        document.getElementById('g-question-text').textContent = qData.q; document.getElementById('g-feedback-text').textContent = '';
        const optsCont = document.getElementById('g-options-container'); optsCont.innerHTML = '';

        let opts = [...qData.opts].sort(()=>Math.random()-0.5);
        opts.forEach(opt => {
            const b = document.createElement('button'); b.textContent = opt;
            b.onclick = () => checkGQAns(opt === qData.ans, b, qData.ans); optsCont.appendChild(b);
        });
    }

    function checkGQAns(isC, btn, correctAns) {
        document.querySelectorAll('#g-options-container button').forEach(b => b.disabled = true);
        if(isC) { 
            gScore++; btn.className='success'; document.getElementById('g-feedback-text').innerHTML = 'Correct! ✅'; 
            soundCorrect.currentTime = 0; soundCorrect.play().catch(e=>e); 
        } else { 
            btn.className='fail'; document.getElementById('g-feedback-text').innerHTML = 'Wrong! ❌'; 
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
            let sName = window.currentStudentName || currentStudentName || "Student";
            document.getElementById('g-score-text').textContent = `${sName}, Your Score: ${p}% (${gScore}/${grammarQuizData.length})`;
            
            // 🚨 سطر إرسال النجاح للبوابة 🚨
            if(window.markLessonCompleted) window.markLessonCompleted();
        }
    });

});