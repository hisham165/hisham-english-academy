// ==========================================
// SOUND EFFECTS
// ==========================================
function playCorrect() { 
    let sound = document.getElementById('correctAudio');
    if(sound) { sound.currentTime = 0; sound.play().catch(e => console.log(e)); }
}
function playWrong() { 
    let sound = document.getElementById('wrongAudio');
    if(sound) { sound.currentTime = 0; sound.play().catch(e => console.log(e)); }
}

let fcAud = null;
let vqAud = null;
let dAud = null;
let rpAud = null;
let llAud = null; 

// ==========================================
// DATA BASES (Lesson 4)
// ==========================================
const vocabularyData = [
    { word: "Announcement", translation: "A public statement", img: "lesson_4/images/img_01_announcement.webp", audio: "lesson_4/vocab/audio_01_announcement.mp3", example: "Big announcement: finally I have all the points!" },
    { word: "Marvellous", translation: "Extremely good", img: "lesson_4/images/img_02_marvellous.webp", audio: "lesson_4/vocab/audio_02_marvellous.mp3", example: "I can get that marvellous set of Chinese plates!" },
    { word: "Cookies", translation: "Sweet biscuits", img: "lesson_4/images/img_03_cookies.webp", audio: "lesson_4/vocab/audio_03_cookies.mp3", example: "Yes, with the cookies." },
    { word: "Fill in the form", translation: "A document to fill", img: "lesson_4/images/img_04_fill_in_the_form.webp", audio: "lesson_4/vocab/audio_04_fill_in_the_form.mp3", example: "Help me to fill in the form, please." },
    { word: "Surname", translation: "Family name", img: "lesson_4/images/img_05_surname.webp", audio: "lesson_4/vocab/audio_05_surname.mp3", example: "What's your family name?" },
    { word: "Single", translation: "Not married", img: "lesson_4/images/img_06_single.webp", audio: "lesson_4/vocab/audio_06_single.mp3", example: "No, I'm single." },
    { word: "Pretty girl", translation: "Beautiful female", img: "lesson_4/images/img_07_pretty_girl.webp", audio: "lesson_4/vocab/audio_07_pretty_girl.mp3", example: "A pretty girl like you." },
    { word: "Postcode", translation: "Postal code", img: "lesson_4/images/img_08_postcode.webp", audio: "lesson_4/vocab/audio_08_postcode.mp3", example: "What's the Postcode?" },
    { word: "Employee", translation: "A worker", img: "lesson_4/images/img_09_employee.webp", audio: "lesson_4/vocab/audio_09_employee.mp3", example: "I'm an employee in a publishing company." },
    { word: "Publishing company", translation: "Producing books/media", img: "lesson_4/images/img_10_publishing_company.webp", audio: "lesson_4/vocab/audio_10_publishing_company.mp3", example: "I work in a publishing company." },
    { word: "A set", translation: "Group of things", img: "lesson_4/images/img_11_set.webp", audio: "lesson_4/vocab/audio_11_set.mp3", example: "A set of Chinese plates." }
];

const conversationLines = [
    { name: "Jack", text: "Anne, you are a great cook!", audio: "lesson_4/audios/01-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Thank you, Jack... Big announcement: finally I have all the points and I can get that marvellous set of Chinese plates!", audio: "lesson_4/audios/02-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "What?", audio: "lesson_4/audios/03-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Yes, with the cookies. Help me to fill in the form, Jack, please.", audio: "lesson_4/audios/04-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "All right. Let me see the questions... What's your name?", audio: "lesson_4/audios/05-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Are you joking?", audio: "lesson_4/audios/06-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Okay okay, A-N-N-E. And what's your family name?", audio: "lesson_4/audios/07-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "My surname?", audio: "lesson_4/audios/08-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Yes.", audio: "lesson_4/audios/09-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Right. Baxter.", audio: "lesson_4/audios/10-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "B-A-X-T-E-R. And what's your phone number?", audio: "lesson_4/audios/11-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "It's 0454 786 2097.", audio: "lesson_4/audios/12-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "0454 788 2097.", audio: "lesson_4/audios/13-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "No, it's 0454 786 2097.", audio: "lesson_4/audios/14-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Right.", audio: "lesson_4/audios/15-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "You have to remember, this is your telephone number too!", audio: "lesson_4/audios/16-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "You're right... Are you married?", audio: "lesson_4/audios/17-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "No, I'm single.", audio: "lesson_4/audios/18-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "A pretty girl like you is still single???", audio: "lesson_4/audios/19-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Stop it Jack, please! Yes, for the moment I'm single.", audio: "lesson_4/audios/20-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "... Next question, please. Where are you from?", audio: "lesson_4/audios/21-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "There are a lot of questions!", audio: "lesson_4/audios/22-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "It's for your Chinese plates!", audio: "lesson_4/audios/23-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "Okay, for the last time! I'm from England... from Oxford.", audio: "lesson_4/audios/24-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "A-X-F-O-R-D.", audio: "lesson_4/audios/25-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "No! O-X-F-O-R-D.", audio: "lesson_4/audios/26-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Just joking.", audio: "lesson_4/audios/27-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "It's okay. What's next?", audio: "lesson_4/audios/28-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Just two more questions... The address is...", audio: "lesson_4/audios/29-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "45 Trinity Lane, Flat C.", audio: "lesson_4/audios/30-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "What's the Postcode?", audio: "lesson_4/audios/31-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "EC1 4RN.", audio: "lesson_4/audios/32-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "EC1 4RN... and what's your job?", audio: "lesson_4/audios/33-jack.mp3", img: "lesson_4/images/jack.jpg" },
    { name: "Anne", text: "I'm an employee in a publishing company.", audio: "lesson_4/audios/34-anne.mp3", img: "lesson_4/images/anne.jpg" },
    { name: "Jack", text: "Oh, you are just the right person for me... I have a great love story to write...!", audio: "lesson_4/audios/35-jack.mp3", img: "lesson_4/images/jack.jpg" }
];

const storyQuizData = [
    { q: "What does Anne want to get?", opts: ["Chinese plates", "A new car", "Cookies", "A house"], ans: "Chinese plates" },
    { q: "Where is Anne from?", opts: ["London", "Oxford", "New York", "Paris"], ans: "Oxford" },
    { q: "Is Anne married?", opts: ["Yes", "No, she is single", "She is divorced", "Not mentioned"], ans: "No, she is single" },
    { q: "What is Anne's job?", opts: ["Teacher", "Employee in a publishing company", "Doctor", "Cook"], ans: "Employee in a publishing company" }
];

const grammarQuizData = [
    { q: "What age range is called a 'teenager'?", opts: ["From 13 to 19", "From 10 to 20", "From 15 to 18", "From 11 to 19"], ans: "From 13 to 19" },
    { q: "What do Americans usually say for the number '0' on the telephone?", opts: ["Oh", "Zero", "Nought", "Nil"], ans: "Zero" },
    { q: "Which letter has the sound /ah/ in English?", opts: ["A", "H", "R", "E"], ans: "R" },
    { q: "Which of these letters belongs to the /a/ sound group?", opts: ["B", "C", "H", "F"], ans: "H" },
    { q: "In the video, what was the first word she asked you to spell?", opts: ["Kitchen", "Weather", "Whether", "Teacher"], ans: "Weather" }
];

// ==============================================
// NAVIGATION
// ==============================================
function showScreen(id) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    document.querySelectorAll('audio, video').forEach(m => { m.pause(); m.currentTime = 0; });
    document.querySelectorAll('iframe').forEach(iframe => { let currentSrc = iframe.src; iframe.src = currentSrc; });
    
    if(fcAud) { fcAud.pause(); fcAud = null; }
    if(vqAud) { vqAud.pause(); vqAud = null; }
    if(llAud) { llAud.pause(); llAud = null; }
    if(dAud)  { dAud.pause(); dAud = null; }
}

// ================= STORY QUIZ =================
let sqIdx = 0, sqScore = 0;
function startStoryQuiz() { 
    sqIdx = 0; sqScore = 0; 
    document.getElementById('story-quiz-area').style.display = 'block'; 
    document.getElementById('sq-result-area').style.display = 'none'; 
    showScreen('screen-story-quiz'); 
    loadSq(); 
}
function loadSq() {
    let area = document.getElementById('sq-options'); area.innerHTML = '';
    document.getElementById('sqNextBtn').style.display = 'none';
    
    let qData = storyQuizData[sqIdx];
    document.getElementById('sqQuestionText').innerText = qData.q;
    
    let options = [...qData.opts].sort(() => 0.5 - Math.random());
    options.forEach(opt => {
        let btn = document.createElement('button'); btn.className = 'quiz-btn'; btn.innerText = opt;
        btn.onclick = () => {
            document.querySelectorAll('#sq-options .quiz-btn').forEach(b => b.disabled = true);
            if(opt === qData.ans) {
                sqScore++; btn.style.background = '#4caf50'; btn.style.color = 'white'; btn.style.borderColor = '#4caf50'; playCorrect();
            } else {
                btn.style.background = '#f44336'; btn.style.color = 'white'; btn.style.borderColor = '#f44336'; playWrong();
                document.querySelectorAll('#sq-options .quiz-btn').forEach(b => { if(b.innerText === qData.ans) { b.style.background = '#4caf50'; b.style.color = 'white'; b.style.borderColor = '#4caf50'; } });
            }
            document.getElementById('sqNextBtn').style.display = 'block';
        };
        area.appendChild(btn);
    });
    document.getElementById('sqProgress').innerText = `Question: ${sqIdx + 1} / ${storyQuizData.length}`;
}
function nextSqQuestion() {
    sqIdx++; 
    if(sqIdx < storyQuizData.length) {
        loadSq(); 
    } else { 
        document.getElementById('story-quiz-area').style.display = 'none'; 
        document.getElementById('sq-result-area').style.display = 'block'; 
        document.getElementById('sqScoreFraction').innerText = `Correct: ${sqScore} / ${storyQuizData.length}`;
        document.getElementById('sqFinalScore').innerText = Math.round((sqScore/storyQuizData.length)*100) + '%'; 
    }
}

// ================= FLASHCARDS =================
let curW = 0;
function startVocabSection() { showScreen('screen-flashcards'); updateCard(); }
function updateCard() {
    const w = vocabularyData[curW];
    document.getElementById('fcWordMain').innerText = w.word;
    document.getElementById('fcWordSub').innerText = w.translation;
    document.getElementById('fcWordEx').innerText = w.example;
    
    let imgEl = document.getElementById('fcImg');
    if(imgEl) {
        imgEl.src = w.img;
        imgEl.onerror = function() { this.src = 'assets/images/logo.png'; this.onerror = null; };
    }
    
    document.getElementById('wordAudio').src = w.audio;
    document.getElementById('fcCounter').innerText = `${curW + 1} / ${vocabularyData.length}`;
    document.getElementById('fcBox').classList.remove('flipped');
}
function nextCard() { if(curW < vocabularyData.length - 1) { curW++; updateCard(); } }
function prevCard() { if(curW > 0) { curW--; updateCard(); } }
function playWordAudio() { document.getElementById('wordAudio').play().catch(e=>{}); }

// ================= WORDS QUIZ =================
let wqIdx = 0, wqScore = 0, vqQuestions = [];
function startVocabQuiz() { 
    wqIdx = 0; wqScore = 0; 
    vqQuestions = vocabularyData.map((item, index) => {
        let others = vocabularyData.filter((_, i) => i !== index).map(o => o.word);
        others.sort(() => 0.5 - Math.random());
        let opts = [item.word, others[0], others[1], others[2]].sort(() => 0.5 - Math.random());
        return { audio: item.audio, options: opts, correct: item.word };
    });
    vqQuestions.sort(() => 0.5 - Math.random());

    document.getElementById('wq-question-area').style.display = 'block'; 
    document.getElementById('wq-result-area').style.display = 'none'; 
    showScreen('screen-words-quiz'); 
    loadWq(); 
}
function playWqAudio() { document.getElementById('wqAudio').play().catch(e=>{}); }
function loadWq() {
    let area = document.getElementById('wq-options'); area.innerHTML = '';
    document.getElementById('wqNextBtn').style.display = 'none'; 
    
    let correctWord = vqQuestions[wqIdx];
    document.getElementById('wqAudio').src = correctWord.audio;
    
    correctWord.options.forEach(opt => {
        let btn = document.createElement('button'); btn.className = 'quiz-btn'; btn.innerText = opt;
        btn.onclick = () => {
            document.querySelectorAll('#wq-options .quiz-btn').forEach(b => b.disabled = true);
            if(opt === correctWord.correct) {
                wqScore++; btn.style.background = '#4caf50'; btn.style.color = 'white'; btn.style.borderColor = '#4caf50'; playCorrect();
            } else {
                btn.style.background = '#f44336'; btn.style.color = 'white'; btn.style.borderColor = '#f44336'; playWrong();
                document.querySelectorAll('#wq-options .quiz-btn').forEach(b => { if(b.innerText === correctWord.correct) { b.style.background = '#4caf50'; b.style.color = 'white'; b.style.borderColor = '#4caf50'; } });
            }
            document.getElementById('wqNextBtn').style.display = 'block'; 
        };
        area.appendChild(btn);
    });
    document.getElementById('wqProgress').innerText = `Question: ${wqIdx + 1} / ${vqQuestions.length}`;
}
function nextWqQuestion() {
    wqIdx++; 
    if(wqIdx < vqQuestions.length) {
        loadWq(); 
    } else { 
        document.getElementById('wq-question-area').style.display = 'none'; 
        document.getElementById('wq-result-area').style.display = 'block'; 
        document.getElementById('wqScoreFraction').innerText = `Correct: ${wqScore} / ${vqQuestions.length}`;
        document.getElementById('wqFinalScore').innerText = Math.round((wqScore/vqQuestions.length)*100) + '%'; 
    }
}

// ================= LEARN LINES =================
let curL = 0;
function startLearnLines() { curL = 0; showScreen('screen-learn-lines'); updateLearn(); }
function updateLearn() {
    let d = conversationLines[curL];
    document.getElementById('learnChar').innerText = d.name;
    document.getElementById('learnText').innerText = d.text;
    document.getElementById('learnCounter').innerText = `${curL + 1} / ${conversationLines.length}`;
    document.getElementById('learnAudio').src = d.audio;
    
    let imgEl = document.getElementById('speaker-img');
    if(imgEl) {
        imgEl.src = d.img;
        imgEl.onerror = function() { 
            let pngSrc = d.img.replace('.jpg', '.png');
            this.src = pngSrc; 
            this.onerror = function(){ this.src='assets/images/logo.png'; }; 
        };
    }
}
function nextLearn() { if(curL < conversationLines.length - 1) { curL++; updateLearn(); } }
function prevLearn() { if(curL > 0) { curL--; updateLearn(); } }
function playLearnAudio() { document.getElementById('learnAudio').play().catch(e=>{}); }

// ================= ROLEPLAY =================
let userRole = "", curR = 0, isRec = false, mediaRecorder, audioChunks = [], recLines = [];

function startRoleplaySelect() { 
    let container = document.getElementById('roleplay-buttons-area'); 
    container.innerHTML = '';
    
    let chars = ["Jack", "Anne"];
    chars.forEach(char => {
        let btn = document.createElement('div'); 
        btn.className = 'role-btn'; 
        btn.onclick = () => startRoleplay(char);
        let imgBase = char === 'Jack' ? 'lesson_4/images/jack' : 'lesson_4/images/anne';
        btn.innerHTML = `<img src="${imgBase}.jpg" class="role-avatar" alt="${char}" onerror="this.src='${imgBase}.png'; this.onerror=function(){this.src='assets/images/logo.png';};"><div class="role-name">${char}</div>`;
        container.appendChild(btn);
    });
    showScreen('screen-roleplay-select'); 
}

function startRoleplay(r) { 
    userRole = r; 
    curR = 0; 
    recLines = []; 
    document.getElementById('chosen-role-name').innerText = r; 
    document.getElementById('rp-live-chat').innerHTML = '';
    
    document.getElementById('rp-content-area').style.display = 'block'; 
    document.getElementById('rp-result-area').style.display = 'none'; 
    
    showScreen('screen-roleplay-active'); 
    loadRpLine(); 
}

function loadRpLine() {
    document.getElementById('rp-next-btn').classList.add('hidden');
    let line = conversationLines[curR];
    let userBox = document.getElementById('user-turn-box');
    let isMe = (line.name === userRole);

    if (isMe) {
        userBox.style.display = 'block';
        document.getElementById('user-turn-text').innerText = line.text;
        let ind = document.getElementById('rpIndicator');
        ind.innerText = "YOUR TURN 🎤"; ind.className = "turn-indicator your-turn";
        document.getElementById('rp-next-btn').classList.remove('hidden'); 
    } else {
        userBox.style.display = 'none';
        appendLiveChat(line.name, line.text, false, line.audio);
        let ind = document.getElementById('rpIndicator');
        ind.innerText = "LISTEN 🔊"; ind.className = "turn-indicator app-turn";
        if(rpAud) rpAud.pause(); 
        rpAud = new Audio(line.audio); 
        rpAud.play().catch(e=>{}); 
        document.getElementById('rp-next-btn').classList.remove('hidden');
    }
}

function appendLiveChat(speaker, text, isMe, audioSrc) {
    let chatCont = document.getElementById('rp-live-chat');
    let div = document.createElement('div');
    div.className = `chat-bubble ${isMe ? 'chat-me' : 'chat-other'}`;
    let audioHtml = audioSrc ? `<span style="cursor:pointer; font-size:16px; margin-left:10px;" onclick="new Audio('${audioSrc}').play()">🔊</span>` : '';
    div.innerHTML = `<div class="chat-speaker">${speaker} ${audioHtml}</div><div>${text}</div>`;
    chatCont.appendChild(div);
    setTimeout(() => { chatCont.scrollTop = chatCont.scrollHeight; }, 100);
}

document.getElementById('rp-next-btn').onclick = function() {
    if(rpAud) rpAud.pause();
    let line = conversationLines[curR];
    
    if (line.name === userRole) {
        appendLiveChat(line.name, line.text, true, null);
    }
    
    curR++; 
    
    if(curR < conversationLines.length) { 
        loadRpLine(); 
    } else { 
        document.getElementById('rp-content-area').style.display = 'none';
        document.getElementById('rp-result-area').style.display = 'block';
        buildRoleplayChatFinal();
    }
};

function buildRoleplayChatFinal() {
    let chatCont = document.getElementById('rp-chat-container');
    if(!chatCont) return;
    chatCont.innerHTML = '';
    conversationLines.forEach((line) => {
        let isMe = (line.name === userRole);
        let div = document.createElement('div');
        div.className = `chat-bubble ${isMe ? 'chat-me' : 'chat-other'}`;
        div.innerHTML = `<div class="chat-speaker">${line.name} <span style="cursor:pointer; font-size:16px; margin-left:10px;" onclick="new Audio('${line.audio}').play()">🔊</span></div><div>${line.text}</div>`;
        chatCont.appendChild(div);
    });
}

// ==== دوال تسجيل الصوت بلاي باك ====
async function toggleRecording() {
    let btn = document.getElementById('rp-record-btn'); 
    let hint = document.getElementById('rp-recording-hint');
    if(!isRec) {
        try {
            let stream = await navigator.mediaDevices.getUserMedia({audio:true});
            mediaRecorder = new MediaRecorder(stream); audioChunks = []; mediaRecorder.start();
            mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
            mediaRecorder.onstop = () => {
                let blob = new Blob(audioChunks, {type:'audio/mp3'});
                recLines[curR] = blob; 
            };
            isRec = true; btn.style.background = '#f44336'; btn.innerHTML = "⏹️ Stop";
            if(hint) hint.style.display = 'block';
        } catch(e) { alert("Microphone access blocked."); }
    } else { 
        mediaRecorder.stop(); isRec = false; btn.style.background = '#4caf50'; btn.innerHTML = "🎙️ Record Again"; 
        if(hint) hint.style.display = 'none';
    }
}

let recordBtnEl = document.getElementById('rp-record-btn');
if(recordBtnEl) recordBtnEl.onclick = toggleRecording;

let pbPlayer = document.getElementById('seqAudioPlayer'), curPb = 0, isSeqPlay = false;

function startRoleplayPlayback() { 
    showScreen('screen-roleplay-playback'); 
    isSeqPlay = false; 
    curPb = 0; 
    document.getElementById('btnPlayAllDialogue').innerHTML = '▶️ Play Entire Dialogue'; 
    buildPbList(); 
}

function buildPbList() {
    let list = document.getElementById('playbackList'); list.innerHTML = '';
    conversationLines.forEach((d, i) => {
        let item = document.createElement('div'); item.className = 'playback-item'; item.id = `pbLine${i}`;
        let char = document.createElement('p'); char.style.fontWeight = "bold"; char.style.color = "var(--light-blue)"; char.innerText = (d.name === userRole) ? "Student" : d.name;
        let txt = document.createElement('p'); txt.style.fontWeight = "bold"; txt.innerText = d.text;
        let btn = document.createElement('button'); btn.className = 'btn-action'; btn.style.marginTop = '10px'; btn.style.padding = '8px'; btn.innerHTML = '🔊 Listen'; btn.onclick = () => playSinglePb(i);
        item.appendChild(char); item.appendChild(txt); item.appendChild(btn); list.appendChild(item);
    });
}

function playSinglePb(i) { 
    isSeqPlay = false; curPb = i; pbPlayer.pause(); 
    document.getElementById('btnPlayAllDialogue').innerHTML = '▶️ Play Entire Dialogue'; 
    hlPb(i); playAudioPb(i); 
}

function playAudioPb(i) {
    let d = conversationLines[i];
    if(d.name === userRole && recLines[i]) { 
        pbPlayer.src = URL.createObjectURL(recLines[i]); 
        pbPlayer.play().catch(e=>{if(isSeqPlay) nextPb();}); 
    }
    else if(d.name !== userRole) { 
        pbPlayer.src = d.audio; 
        pbPlayer.play().catch(e=>{if(isSeqPlay) nextPb();}); 
    }
    else { if(isSeqPlay) nextPb(); }
}

let playAllBtn = document.getElementById('btnPlayAllDialogue');
if(playAllBtn) {
    playAllBtn.onclick = function() {
        if(!isSeqPlay) { isSeqPlay = true; curPb = 0; this.innerHTML = '⏸️ Pause'; nextPb(); }
        else { isSeqPlay = false; pbPlayer.pause(); this.innerHTML = '▶️ Play Entire Dialogue'; }
    };
}

function nextPb() {
    if(!isSeqPlay) return;
    if(curPb < conversationLines.length) { hlPb(curPb); playAudioPb(curPb); curPb++; }
    else { isSeqPlay = false; document.getElementById('btnPlayAllDialogue').innerHTML = '▶️ Play Entire Dialogue'; curPb = 0; }
}

if(pbPlayer) pbPlayer.addEventListener('ended', () => { if(isSeqPlay) nextPb(); });

function hlPb(i) { 
    document.getElementById('playbackList').childNodes.forEach(el => el.style.borderColor = "var(--border-color)"); 
    let cur = document.getElementById(`pbLine${i}`); 
    if(cur) {
        cur.style.borderColor = "var(--light-blue)"; 
        cur.scrollIntoView({behavior:'smooth', block:'center'});
    } 
}

// ================= 7. LISTEN & WRITE (WORDS) =================
let lwIdx = 0, lwScore = 0;
function startListenWrite() { 
    lwIdx = 0; lwScore = 0; 
    document.getElementById('lw-content-area').style.display = 'block'; 
    document.getElementById('lw-result-area').style.display = 'none'; 
    showScreen('screen-listen-write'); 
    loadLw(); 
}
function loadLw() {
    document.getElementById('lwAudio').src = vocabularyData[lwIdx].audio;
    document.getElementById('lwInput').value = ''; document.getElementById('lwInput').disabled = false;
    document.getElementById('lwFeedback').style.display = 'none'; document.getElementById('lwNextBtn').style.display = 'none'; document.getElementById('lwCheckBtn').style.display = 'block';
    document.getElementById('lwProgress').innerText = `Word ${lwIdx + 1} / ${vocabularyData.length}`;
    setTimeout(() => document.getElementById('lwInput').focus(), 100);
}
function playLwAudio() { document.getElementById('lwAudio').play().catch(e=>{}); }
function checkLwAnswer() {
    let input = document.getElementById('lwInput').value.trim().toLowerCase();
    if(!input) return;
    let correct = vocabularyData[lwIdx].word.toLowerCase();
    let fb = document.getElementById('lwFeedback'); fb.style.display = 'block';
    document.getElementById('lwInput').disabled = true; document.getElementById('lwCheckBtn').style.display = 'none'; document.getElementById('lwNextBtn').style.display = 'block';
    if(input === correct) { lwScore++; fb.innerHTML = "Excellent! 👏"; fb.style.color = "#4caf50"; playCorrect(); }
    else { fb.innerHTML = `Wrong ❌<br><span style="font-size:16px;color:#555;">Correct word: ${vocabularyData[lwIdx].word}</span>`; fb.style.color = "#f44336"; playWrong(); }
}
function nextLwWord() {
    lwIdx++;
    if(lwIdx < vocabularyData.length) loadLw();
    else { 
        document.getElementById('lw-content-area').style.display = 'none'; 
        document.getElementById('lw-result-area').style.display = 'block'; 
        document.getElementById('lwScoreFraction').innerText = `Correct: ${lwScore} / ${vocabularyData.length}`;
        document.getElementById('lwFinalScore').innerText = Math.round((lwScore/vocabularyData.length)*100) + '%'; 
    }
}
document.getElementById('lwInput').addEventListener('keypress', e => { if(e.key === 'Enter') checkLwAnswer(); });

// ================= 8. LISTEN & WRITE (STORY) =================
let lwcIdx = 0, lwcScore = 0;
function startListenWriteConv() { 
    lwcIdx = 0; lwcScore = 0; 
    document.getElementById('lwc-content-area').style.display = 'block'; 
    document.getElementById('lwc-result-area').style.display = 'none'; 
    showScreen('screen-listen-write-conv'); 
    loadLwc(); 
}
function loadLwc() {
    document.getElementById('lwcAudio').src = conversationLines[lwcIdx].audio;
    document.getElementById('lwcInput').value = ''; document.getElementById('lwcInput').disabled = false;
    document.getElementById('lwcFeedback').style.display = 'none'; document.getElementById('lwcNextBtn').style.display = 'none'; document.getElementById('lwcCheckBtn').style.display = 'block';
    document.getElementById('lwcProgress').innerText = `Sentence ${lwcIdx + 1} / ${conversationLines.length}`;
    setTimeout(() => document.getElementById('lwcInput').focus(), 100);
}
function playLwcAudio() { document.getElementById('lwcAudio').play().catch(e=>{}); }
function checkLwcAnswer() {
    let input = document.getElementById('lwcInput').value;
    if(!input.trim()) return;
    
    let cleanCorrect = conversationLines[lwcIdx].text.replace(/[^\w\s']/g, '').trim().toLowerCase();
    let cleanInput = input.replace(/[^\w\s']/g, '').trim().toLowerCase();
    
    let fb = document.getElementById('lwcFeedback'); fb.style.display = 'block';
    document.getElementById('lwcInput').disabled = true; 
    document.getElementById('lwcCheckBtn').style.display = 'none'; 
    document.getElementById('lwcNextBtn').style.display = 'block';
    
    if(cleanInput === cleanCorrect) { 
        lwcScore++; fb.innerHTML = "Excellent! 👏"; fb.style.color = "#4caf50"; playCorrect(); 
    } else { 
        fb.innerHTML = `Wrong ❌<br><span style="font-size:16px;color:#555;">Correct: ${conversationLines[lwcIdx].text}</span>`; fb.style.color = "#f44336"; playWrong(); 
    }
}
function nextLwcLine() {
    lwcIdx++;
    if(lwcIdx < conversationLines.length) {
        loadLwc();
    } else { 
        document.getElementById('lwc-content-area').style.display = 'none'; 
        document.getElementById('lwc-result-area').style.display = 'block'; 
        document.getElementById('lwcScoreFraction').innerText = `Correct: ${lwcScore} / ${conversationLines.length}`;
        document.getElementById('lwcFinalScore').innerText = Math.round((lwcScore/conversationLines.length)*100) + '%'; 
    }
}
document.getElementById('lwcInput').addEventListener('keypress', e => { if(e.key === 'Enter') checkLwcAnswer(); });

// ================= 9. GRAMMAR QUIZ =================
let gqIdx = 0, gqScore = 0;
function startGrammarQuiz() { 
    gqIdx = 0; gqScore = 0; 
    document.getElementById('gq-question-area').style.display = 'block'; 
    document.getElementById('gq-result-area').style.display = 'none'; 
    showScreen('screen-grammar-quiz'); 
    loadGq(); 
}
function loadGq() {
    let area = document.getElementById('gq-options'); area.innerHTML = '';
    document.getElementById('gqNextBtn').style.display = 'none'; 
    
    let qData = grammarQuizData[gqIdx];
    document.getElementById('gqQuestionText').innerText = qData.q;
    
    let options = [...qData.opts].sort(() => 0.5 - Math.random());
    options.forEach(opt => {
        let btn = document.createElement('button'); btn.className = 'quiz-btn'; btn.innerText = opt;
        btn.onclick = () => {
            document.querySelectorAll('#gq-options .quiz-btn').forEach(b => b.disabled = true);
            if(opt === qData.ans) {
                gqScore++; btn.style.background = '#4caf50'; btn.style.color = 'white'; btn.style.borderColor = '#4caf50'; playCorrect();
            } else {
                btn.style.background = '#f44336'; btn.style.color = 'white'; btn.style.borderColor = '#f44336'; playWrong();
                document.querySelectorAll('#gq-options .quiz-btn').forEach(b => { if(b.innerText === qData.ans) { b.style.background = '#4caf50'; b.style.color = 'white'; b.style.borderColor = '#4caf50'; } });
            }
            document.getElementById('gqNextBtn').style.display = 'block';
        };
        area.appendChild(btn);
    });
    document.getElementById('gqProgress').innerText = `Question: ${gqIdx + 1} / ${grammarQuizData.length}`;
}

// 🔥 التعديل هنا: نبعت إشارة النجاح للبوابة لما يخلص الجرامر كويز 🔥
function nextGqQuestion() {
    gqIdx++; 
    if(gqIdx < grammarQuizData.length) {
        loadGq(); 
    } else { 
        document.getElementById('gq-question-area').style.display = 'none'; 
        document.getElementById('gq-result-area').style.display = 'block'; 
        document.getElementById('gqScoreFraction').innerText = `Correct: ${gqScore} / ${grammarQuizData.length}`;
        document.getElementById('gqFinalScore').innerText = Math.round((gqScore/grammarQuizData.length)*100) + '%'; 
        
        // سطر الإرسال للفايربيز
        if(window.markLessonCompleted) window.markLessonCompleted();
    }
}

// Initial load
updateCard();
updateLearn();