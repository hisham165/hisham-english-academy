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
                document.body.style.backgroundColor = "#27ae60"; 
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

    // 🚨 دالة الرسايل التشجيعية 🚨
    function getFeedbackMessage(percentage) {
        if (percentage < 50) return "Try again! 🔄";
        if (percentage <= 75) return "Almost there! 👍";
        return "Well done! 🌟";
    }

    // --- 1. البيانات (الدرس الرابع: A typical day) ---
    const storyQuizData = [
        { q: "When does Alice usually have classes?", opts: ["In the morning", "In the afternoon", "At night"], ans: "In the afternoon" },
        { q: "Where does Alice study?", opts: ["In the library and sometimes at home", "In the cafeteria only", "At home only"], ans: "In the library and sometimes at home" },
        { q: "What does David do in the park?", opts: ["He sleeps", "He studies", "He plays tennis"], ans: "He studies" },
        { q: "Where does Alice have lunch?", opts: ["In the cafeteria", "In the library", "At home"], ans: "In the cafeteria" }
    ];

    const wordsData = [
        { english: "Typical", arabic: "معتاد / نمطي", exampleEn: "Tell us something about your typical day.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
        { english: "I bet", arabic: "أراهن / أنا متأكد", exampleEn: "I bet you don't wake up at six.", image: "images/2.jpg", audio: "audio/words/2.mp3" },
        { english: "Attend", arabic: "يحضر", exampleEn: "I always attend lectures in the morning.", image: "images/3.jpg", audio: "audio/words/3.mp3" },
        { english: "Lectures", arabic: "محاضرات", exampleEn: "I always attend lectures.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
        { english: "Occasionally", arabic: "من حين لآخر / أحياناً", exampleEn: "I occasionally see him in the library.", image: "images/5.jpg", audio: "audio/words/5.mp3" },
        { english: "Bench", arabic: "مقعد الحديقة", exampleEn: "He finds a nice park bench.", image: "images/6.jpg", audio: "audio/words/6.mp3" },
        { english: "Nature", arabic: "الطبيعة", exampleEn: "You can study and enjoy nature.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
        { english: "Unfortunately", arabic: "لسوء الحظ / للأسف", exampleEn: "Unfortunately, I often need books.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
        { english: "Cafeteria", arabic: "كافيتيريا / مطعم", exampleEn: "I usually have lunch in the cafeteria.", image: "images/9.jpg", audio: "audio/words/9.mp3" },
        { english: "The opposite", arabic: "العكس", exampleEn: "Oh, I do just the opposite.", image: "images/10.jpg", audio: "audio/words/10.mp3" },
        { english: "Seldom", arabic: "نادراً", exampleEn: "I seldom have a quick lunch at coffee shops.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
        { english: "Besides", arabic: "بالإضافة إلى / بخلاف", exampleEn: "Do any of you do anything besides working?", image: "images/12.jpg", audio: "audio/words/12.mp3" },
        { english: "University", arabic: "جامعة", exampleEn: "David also studies at your university.", image: "images/13.jpg", audio: "audio/words/13.mp3" },
        { english: "Library", arabic: "مكتبة", exampleEn: "I usually study in the library.", image: "images/14.jpg", audio: "audio/words/14.mp3" }
    ];

    const dialogueData = [
        { speaker: "Jack", text: "Alice, I bet you don't wake up at six o'clock every day... Tell us something about your typical day at university.", audio: "audio/dialogue/1-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Well, I sometimes have classes in the morning, but I usually have classes in the afternoon. On Mondays I always attend lectures in the morning.", audio: "audio/dialogue/2-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "And where do you study?", audio: "audio/dialogue/3-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "I usually study in the library, but I sometimes study at home, too, when I don't have classes in the morning.", audio: "audio/dialogue/4-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Peter", text: "My friend David also studies at your university. Do you remember him?", audio: "audio/dialogue/5-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Alice", text: "David Leary? Yes, I occasionally see him in the library and sometimes in the park.", audio: "audio/dialogue/6-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Peter", text: "In the park? Doing what?", audio: "audio/dialogue/7-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Alice", text: "He likes studying there. He takes his books, finds a nice park bench and reads there.", audio: "audio/dialogue/8-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Peter", text: "Not a bad idea. You can study and enjoy nature at the same time.", audio: "audio/dialogue/9-peter.mp3", img: "images/peter.jpg" },
        { speaker: "Alice", text: "Yes, I like the park, too. Unfortunately, I often need books that are in the library.", audio: "audio/dialogue/10-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Jack", text: "And what about lunch? Do you usually make sandwiches and take them with you?", audio: "audio/dialogue/11-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Oh no, I hate cooking. I usually have lunch in the cafeteria with friends.", audio: "audio/dialogue/12-alice.mp3", img: "images/alice.jpg" },
        { speaker: "Sharon", text: "Oh, I do just the opposite. I usually cook lunch at home, I seldom have a quick lunch at coffee shops.", audio: "audio/dialogue/13-sharon.mp3", img: "images/sharon.jpg" },
        { speaker: "Jack", text: "Okay guys, stop with this boring talk! What about fun? Do any of you do anything besides working and studying? It's Friday, remember!", audio: "audio/dialogue/14-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Anne", text: "You're right, Jack, I'm so happy it's Friday.", audio: "audio/dialogue/15-anne.mp3", img: "images/anne.jpg" },
        { speaker: "Jack", text: "Me too! It's weekend time!", audio: "audio/dialogue/16-jack.mp3", img: "images/jack.jpg" },
        { speaker: "Alice", text: "Time for shopping!", audio: "audio/dialogue/17-alice.mp3", img: "images/alice.jpg" }
    ];

    const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

    const grammarQuizData = [
        { q: "What do frequency adverbs describe?", opts: ["Past actions", "How many times you do actions", "Actions happening now"], ans: "How many times you do actions" },
        { q: "Which word has the same meaning as 'sometimes'?", opts: ["Occasionally", "Seldom", "Always"], ans: "Occasionally" },
        { q: "Which word has the same meaning as 'rarely'?", opts: ["Usually", "Seldom", "Often"], ans: "Seldom" },
        { q: "Where do we usually put frequency adverbs in a sentence?", opts: ["After the main verb", "Before the main verb", "At the end of the sentence"], ans: "Before the main verb" },
        { q: "Which sentence is correct?", opts: ["I never go out", "I go never out", "Never I go out"], ans: "I never go out" },
        { q: "Which verb is an exception to the rule?", opts: ["The verb 'to play'", "The verb 'to be'", "The verb 'to do'"], ans: "The verb 'to be'" },
        { q: "Where do we put the frequency adverb with the verb 'to be'?", opts: ["Before the verb to be", "After the verb to be"], ans: "After the verb to be" },
        { q: "Which sentence is correct?", opts: ["I always am tired", "I am tired always", "I am always tired"], ans: "I am always tired" }
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