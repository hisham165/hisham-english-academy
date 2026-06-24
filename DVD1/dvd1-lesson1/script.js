// --- 0. نظام تسجيل الدخول (اتلغى لأن البوابة بقت هي اللي بتسجل الدخول) ---
let currentStudentName = ""; 

let globalWordAudio = null;
let globalDicAudio = null;
let globalRpAudio = null;
let globalRpTimeout = null;

function goToStage(stageId) {
    document.querySelectorAll('.stage').forEach(stage => stage.classList.remove('active'));
    document.getElementById(stageId).classList.add('active');
    stopAllAudioVideo();
    if (stageId === 'learn-stage' && window.initLearnStage) window.initLearnStage();
    if (stageId === 'words-stage' && window.initWordsStage) window.initWordsStage();
    if (stageId === 'story-quiz-stage' && window.initStoryQuiz) window.initStoryQuiz();
    if (stageId === 'dictation-stage' && window.initDictation) window.initDictation();
    if (stageId === 'quiz-stage' && window.initWordsQuiz) window.initWordsQuiz();
    if (stageId === 'grammar-quiz-stage' && window.initGrammarQuiz) window.initGrammarQuiz();
}

function goToHome() { goToStage('home-stage'); }

function stopAllAudioVideo() {
    document.querySelectorAll('video, audio').forEach(media => { media.pause(); media.currentTime = 0; });
    document.querySelectorAll('iframe').forEach(iframe => {
        let currentSrc = iframe.src;
        iframe.src = currentSrc; 
    });

    if (globalWordAudio) { globalWordAudio.pause(); globalWordAudio.currentTime = 0; }
    if (globalDicAudio) { globalDicAudio.pause(); globalDicAudio.currentTime = 0; }
    if (globalRpAudio) { globalRpAudio.pause(); globalRpAudio.currentTime = 0; }
    clearTimeout(globalRpTimeout); 
}

window.goToHome = goToHome;
window.goToStage = goToStage;

function playNextIntro() {
    const iframe = document.getElementById('intro-iframe');
    iframe.src = "https://rumble.com/embed/v76sahk/?pub=4patlm"; 
    document.getElementById('next-intro-btn').classList.add('hidden');
    document.getElementById('finish-intro-btn').classList.remove('hidden');
}

function playNextGrammar() {
    const iframe = document.getElementById('grammar-iframe');
    iframe.src = "https://rumble.com/embed/v76sbwc/?pub=4patlm"; 
    document.getElementById('next-grammar-btn').classList.add('hidden');
    document.getElementById('finish-grammar-btn').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const soundCorrect = new Audio('audio/correct.mp3');
    const soundWrong = new Audio('audio/wrong.mp3');

    function cleanTextForDictation(txt) {
        if (!txt) return "";
        return txt.toLowerCase()
                  .replace(/['"’]/g, "") 
                  .replace(/[.,!?;:()\-]/g, " ") 
                  .replace(/\s+/g, ' ')
                  .trim();
    }

    // --- Story Quiz ---
    let sqIdx = 0, sqScore = 0;
    window.initStoryQuiz = function() {
        sqIdx = 0; sqScore = 0;
        document.getElementById('sq-final-score-container').classList.add('hidden');
        document.getElementById('sq-quiz-content').classList.remove('hidden');
        showSQ();
    };
    function showSQ() {
        document.getElementById('sq-next-question-btn').classList.add('hidden');
        document.getElementById('sq-quiz-counter').textContent = `Question ${sqIdx + 1} of ${storyQuizData.length}`;
        const qData = storyQuizData[sqIdx];
        document.getElementById('sq-question-text').textContent = qData.q;
        document.getElementById('sq-feedback-text').textContent = '';
        const optsCont = document.getElementById('sq-options-container');
        optsCont.innerHTML = '';
        [...qData.opts].sort(()=>Math.random()-0.5).forEach(opt => {
            const b = document.createElement('button');
            b.textContent = opt;
            b.dataset.isCorrect = (opt === qData.ans); 

            b.onclick = () => {
                document.querySelectorAll('#sq-options-container button').forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.isCorrect === 'true') {
                        btn.className = 'success';
                    }
                });
                
                if(opt === qData.ans) { 
                    sqScore++; soundCorrect.currentTime=0; soundCorrect.play(); 
                } else { 
                    b.className='fail'; soundWrong.currentTime=0; soundWrong.play(); 
                }
                document.getElementById('sq-next-question-btn').classList.remove('hidden');
            };
            optsCont.appendChild(b);
        });
    }
    document.getElementById('sq-next-question-btn')?.addEventListener('click', () => {
        sqIdx++; if(sqIdx < storyQuizData.length) showSQ();
        else { document.getElementById('sq-quiz-content').classList.add('hidden'); document.getElementById('sq-final-score-container').classList.remove('hidden');
               let sName = window.currentStudentName || "Student";
               document.getElementById('sq-score-text').textContent = `${sName}, Score: ${Math.round((sqScore/storyQuizData.length)*100)}%`; }
    });

    // --- Words ---
    let currentWordIndex = 0;
    function showWord(index) {
        document.getElementById('flashcard-inner').classList.remove('is-flipped');
        const word = wordsData[index];
        document.getElementById('card-image').src = word.image;
        document.getElementById('card-word').textContent = word.english;
        document.getElementById('card-translation').textContent = word.arabic;
        document.getElementById('card-example-en').textContent = word.exampleEn;
        document.getElementById('word-counter-text').textContent = `${index + 1} / ${wordsData.length}`;
    }
    window.initWordsStage = function() { currentWordIndex = 0; showWord(0); };
    document.getElementById('flashcard-container')?.addEventListener('click', () => document.getElementById('flashcard-inner').classList.toggle('is-flipped'));
    document.getElementById('next-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex + 1) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('prev-word-btn')?.addEventListener('click', () => { currentWordIndex = (currentWordIndex - 1 + wordsData.length) % wordsData.length; showWord(currentWordIndex); });
    document.getElementById('play-audio-btn')?.addEventListener('click', () => {
        if(globalWordAudio) globalWordAudio.pause();
        globalWordAudio = new Audio(wordsData[currentWordIndex].audio); globalWordAudio.play();
    });

    // --- Words Quiz ---
    let quizWIndex = 0, quizWScore = 0, qWords = [];
    window.initWordsQuiz = function() {
        quizWScore = 0; quizWIndex = 0; qWords = [...wordsData].sort(()=>Math.random()-0.5);
        document.getElementById('final-score-container').classList.add('hidden');
        document.getElementById('quiz-content').classList.remove('hidden');
        showWQuizQ();
    };
    function showWQuizQ() {
        document.getElementById('next-question-btn').classList.add('hidden');
        document.getElementById('quiz-counter').textContent = `Question ${quizWIndex + 1} of ${qWords.length}`;
        
        const correctW = qWords[quizWIndex];
        document.getElementById('question-text').innerHTML = `🎧 Listen: <button id="replay-word-btn" style="padding:5px 15px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer;">🔊 Play</button>`;
        if (globalWordAudio) globalWordAudio.pause();
        globalWordAudio = new Audio(correctW.audio); globalWordAudio.play();
        document.getElementById('replay-word-btn').onclick = () => { globalWordAudio.currentTime = 0; globalWordAudio.play(); };
        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';
        let opts = [correctW];
        while(opts.length < 4) { let rnd = wordsData[Math.floor(Math.random() * wordsData.length)]; if(!opts.includes(rnd)) opts.push(rnd); }
        opts.sort(()=>Math.random()-0.5).forEach(opt => {
            const b = document.createElement('button'); b.textContent = opt.english;
            b.dataset.isCorrect = (opt.english === correctW.english); 

            b.onclick = () => {
                document.querySelectorAll('#options-container button').forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.isCorrect === 'true') {
                        btn.className = 'success';
                    }
                });

                if(opt.english === correctW.english) { 
                    quizWScore++; soundCorrect.currentTime=0; soundCorrect.play(); 
                } else { 
                    b.className='fail'; soundWrong.currentTime=0; soundWrong.play(); 
                }
                document.getElementById('next-question-btn').classList.remove('hidden');
            };
            optsContainer.appendChild(b);
        });
    }
    document.getElementById('next-question-btn')?.addEventListener('click', () => {
        quizWIndex++; if(quizWIndex < qWords.length) showWQuizQ();
        else { document.getElementById('quiz-content').classList.add('hidden'); document.getElementById('final-score-container').classList.remove('hidden');
               let sName = window.currentStudentName || "Student";
               document.getElementById('score-text').textContent = `${sName}, Score: ${Math.round((quizWScore/qWords.length)*100)}%`; }
    });

    // --- Dictation ---
    let dicIdx = 0, dicScore = 0;
    window.initDictation = function() { dicIdx = 0; dicScore = 0; document.getElementById('dictation-final').classList.add('hidden'); document.getElementById('dictation-content').classList.remove('hidden'); loadDictationSentence(); };
    function loadDictationSentence() {
        document.getElementById('next-dictation-btn').classList.add('hidden'); document.getElementById('show-answer-btn').classList.add('hidden'); document.getElementById('check-dictation-btn').classList.remove('hidden');
        document.getElementById('dictation-input').value = ''; document.getElementById('dictation-input').disabled = false; document.getElementById('dictation-feedback').textContent = '';
        document.getElementById('dictation-counter').textContent = `Sentence ${dicIdx + 1} of ${dictationData.length}`;
        if(globalDicAudio) globalDicAudio.pause(); globalDicAudio = new Audio(dictationData[dicIdx].audio);
    }
    document.getElementById('play-dictation-btn')?.addEventListener('click', () => { if(globalDicAudio) { globalDicAudio.currentTime = 0; globalDicAudio.play(); } });
    document.getElementById('check-dictation-btn')?.addEventListener('click', () => {
        let userInput = document.getElementById('dictation-input').value;
        if (cleanTextForDictation(userInput) === cleanTextForDictation(dictationData[dicIdx].text)) {
            dicScore++; document.getElementById('dictation-feedback').innerHTML = 'Excellent! ✅'; soundCorrect.currentTime=0; soundCorrect.play();
            document.getElementById('dictation-input').disabled = true; document.getElementById('check-dictation-btn').classList.add('hidden'); document.getElementById('next-dictation-btn').classList.remove('hidden');
        } else {
            document.getElementById('dictation-feedback').innerHTML = 'Try again! ❌'; soundWrong.currentTime=0; soundWrong.play(); document.getElementById('show-answer-btn').classList.remove('hidden');
        }
    });
    document.getElementById('show-answer-btn')?.addEventListener('click', () => {
        document.getElementById('dictation-input').value = dictationData[dicIdx].text; document.getElementById('dictation-input').disabled = true;
        document.getElementById('check-dictation-btn').classList.add('hidden'); document.getElementById('show-answer-btn').classList.add('hidden'); document.getElementById('next-dictation-btn').classList.remove('hidden');
    });
    document.getElementById('next-dictation-btn')?.addEventListener('click', () => {
        dicIdx++; if(dicIdx < dictationData.length) loadDictationSentence();
        else { document.getElementById('dictation-content').classList.add('hidden'); document.getElementById('dictation-final').classList.remove('hidden');
               let sName = window.currentStudentName || "Student";
               document.getElementById('dictation-score-text').textContent = `${sName}, Score: ${Math.round((dicScore/dictationData.length)*100)}%`; }
    });

    // --- Learn Lines ---
    let cLine = 0;
    window.initLearnStage = function() { cLine = 0; showLine(0); };
    function showLine(i) {
        const d = dialogueData[i]; if (!d) return; 
        document.getElementById('speaker-img').src = d.img;
        document.getElementById('speaker-name').textContent = d.speaker;
        document.getElementById('english-line').textContent = d.text;
        document.getElementById('line-counter-text').textContent = `${i + 1} / ${dialogueData.length}`;
        if (globalRpAudio) globalRpAudio.pause(); globalRpAudio = new Audio(d.audio);
    }
    document.getElementById('next-line-btn')?.addEventListener('click', () => { if (cLine < dialogueData.length - 1) { cLine++; showLine(cLine); } });
    document.getElementById('prev-line-btn')?.addEventListener('click', () => { if (cLine > 0) { cLine--; showLine(cLine); } });
    document.getElementById('play-line-btn')?.addEventListener('click', () => { if (globalRpAudio) { globalRpAudio.currentTime = 0; globalRpAudio.play().catch(e=>e); } });

    // --- Roleplay Logic ---
    let role="", step=0, rpScore=0, userTurns=0, tried=false;

    document.getElementById('choose-jack')?.addEventListener('click', () => startRp("Jack"));
    document.getElementById('choose-anne')?.addEventListener('click', () => startRp("Anne"));
    document.getElementById('choose-alice')?.addEventListener('click', () => startRp("Alice"));
    document.getElementById('restart-roleplay')?.addEventListener('click', () => goToStage('character-select-stage'));

    function startRp(r) {
        role=r; step=0; rpScore=0; tried=false; userTurns = dialogueData.filter(d=>d.speaker===role).length;
        document.getElementById('chat-box').innerHTML=''; document.getElementById('roleplay-score').textContent = `Your Score: 0 / ${userTurns}`;
        document.getElementById('restart-roleplay').classList.add('hidden'); document.getElementById('playback-roleplay').classList.add('hidden'); goToStage('roleplay-stage'); playStep();
    }

    let stepLocked = false; 

    function playStep() {
        tried=false; 
        stepLocked = false; 
        document.getElementById('mic-container').classList.add('hidden');
        if(step >= dialogueData.length) {
            document.getElementById('restart-roleplay').classList.remove('hidden'); document.getElementById('playback-roleplay').classList.remove('hidden'); return;
        }
        let d = dialogueData[step];
        if(d.speaker !== role) {
            const b = document.createElement('div'); b.className = 'chat-bubble bubble-app'; b.innerHTML = `<strong>${d.speaker}</strong> 🔊 ${d.text}`;
            document.getElementById('chat-box').appendChild(b); document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
            if(globalRpAudio) globalRpAudio.pause(); globalRpAudio = new Audio(d.audio);
            globalRpAudio.play().then(() => { globalRpAudio.onended = () => { step++; globalRpTimeout = setTimeout(playStep, 1500); }; });
        } else {
            document.getElementById('line-to-say').textContent = d.text; document.getElementById('speech-result').classList.add('hidden');
            document.getElementById('mic-status').textContent = "Tap mic to speak"; document.getElementById('mic-container').classList.remove('hidden');
        }
    }

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    let rec=null, isRec=false, sTimer;

    function checkPass(transcript, targetText) {
        let s = cleanTextForDictation(transcript); 
        let c = cleanTextForDictation(targetText);
        s = s.replace(/name is/g, "names").replace(/i am/g, "im").replace(/it is/g, "its").replace(/do not/g, "dont");
        c = c.replace(/name is/g, "names").replace(/i am/g, "im").replace(/it is/g, "its").replace(/do not/g, "dont");

        let cArr = c.split(" ").filter(w=>w.length>0); 
        let match = 0;
        for(let w of cArr) { if(s.includes(w)) match++; }
        let acc = Math.round((match/cArr.length)*100);
        
        if(acc >= 40 || s.includes(c) || c.includes(s) || (cArr.length<=2 && match>=1) || (cArr.length>=4 && match>=3)) {
            return true;
        }
        return false;
    }

    function executePass() {
        let resDiv = document.getElementById('speech-result'); 
        resDiv.classList.remove('hidden');
        if(!tried) { rpScore++; document.getElementById('roleplay-score').textContent = `Your Score: ${rpScore} / ${userTurns}`; }
        resDiv.innerHTML = `✅ Excellent!`; resDiv.className = 'speech-result success';
        
        const b = document.createElement('div'); b.className = 'chat-bubble bubble-user'; b.innerHTML = `<strong>${role}</strong> ${dialogueData[step].text}`;
        document.getElementById('chat-box').appendChild(b); document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
        document.getElementById('mic-container').classList.add('hidden'); 
        
        globalRpTimeout = setTimeout(()=>{ step++; playStep(); }, 1000); 
    }

    function executeFail() {
        tried = true; 
        let resDiv = document.getElementById('speech-result'); 
        resDiv.classList.remove('hidden');
        resDiv.innerHTML = `❌ Try again!`; resDiv.className = 'speech-result fail';
        soundWrong.currentTime=0; soundWrong.play().catch(e=>e);
        document.getElementById('mic-status').textContent = "Tap mic to try again";
    }

    function forceEvaluate(expectedStep) {
        if (stepLocked || step !== expectedStep) return;
        
        let expectedTxt = cleanTextForDictation(dialogueData[step].text);
        if (expectedTxt === "where") {
            stepLocked = true;
            document.getElementById('mic-status').textContent = "You: Where"; 
            executePass();
            return; 
        }

        let finalSaid = document.getElementById('mic-status').textContent.replace("You: ", "").trim();
        
        if (finalSaid.length > 0 && finalSaid !== "Listening...") {
            if (checkPass(finalSaid, dialogueData[step].text)) {
                stepLocked = true;
                executePass();
            } else {
                executeFail();
            }
        } else {
            document.getElementById('mic-status').textContent = "Tap mic to speak";
        }
    }

    function startMic() {
        if(rec) { rec.onend = null; try{rec.abort();}catch(e){} }
        if(SpeechRec) {
            rec = new SpeechRec(); rec.lang='en-US'; rec.continuous=true; rec.interimResults=true;
            let expectedStep = step; 
            
            rec.onstart = () => { 
                isRec=true; 
                document.getElementById('mic-btn').classList.add('listening'); 
                document.getElementById('mic-status').textContent="Listening..."; 
                document.getElementById('speech-result').classList.add('hidden');
                
                let expectedTxt = cleanTextForDictation(dialogueData[expectedStep].text);
                if (expectedTxt === "where") {
                    clearTimeout(sTimer);
                    sTimer = setTimeout(()=>{ 
                        if(isRec && step === expectedStep && !stepLocked){
                            isRec = false;
                            rec.onend = null; 
                            try{ rec.stop(); }catch(err){}
                            document.getElementById('mic-btn').classList.remove('listening');
                            forceEvaluate(expectedStep);
                        } 
                    }, 1500); 
                }
            };
            
            rec.onresult = (e) => {
                if (step !== expectedStep) return; 
                
                let fullTranscript = '';
                for(let i = 0; i < e.results.length; i++) {
                    fullTranscript += e.results[i][0].transcript;
                }
                
                document.getElementById('mic-status').textContent = "You: " + fullTranscript;
                
                let expectedTxt = cleanTextForDictation(dialogueData[expectedStep].text);
                if (expectedTxt !== "where") {
                    clearTimeout(sTimer); 
                    sTimer = setTimeout(()=>{ 
                        if(isRec && step === expectedStep && !stepLocked){
                            isRec = false;
                            rec.onend = null; 
                            try{ rec.stop(); }catch(err){}
                            document.getElementById('mic-btn').classList.remove('listening');
                            forceEvaluate(expectedStep);
                        } 
                    }, 2000); 
                }
            };
            
            rec.onerror = (e) => { 
                console.log("Mic error: ", e.error);
                if (e.error === 'not-allowed') {
                    isRec=false; document.getElementById('mic-btn').classList.remove('listening');
                    document.getElementById('mic-status').textContent = "Please allow mic access!";
                }
            };
            
            rec.onend = () => { 
                isRec=false; document.getElementById('mic-btn').classList.remove('listening'); 
                if (!stepLocked && step === expectedStep) {
                    forceEvaluate(expectedStep);
                }
            };
            
            try{ rec.start(); }catch(e){}
        }
    }
    
    document.getElementById('mic-btn')?.addEventListener('click', (e) => { 
        e.target.disabled = true; 
        setTimeout(() => { e.target.disabled = false; }, 1000);

        if(isRec){
            isRec = false;
            clearTimeout(sTimer);
            if(rec) { rec.onend = null; try{ rec.stop(); }catch(err){} }
            document.getElementById('mic-btn').classList.remove('listening');
            forceEvaluate(step);
        } else {
            startMic();
        } 
    });

    document.getElementById('playback-roleplay')?.addEventListener('click', () => {
        document.getElementById('chat-box').innerHTML = ''; playFullConversation(0);
    });
    function playFullConversation(i) {
        if (i >= dialogueData.length) return;
        let d = dialogueData[i]; 
        let audioUrl = d.audio; 
        const b = document.createElement('div'); b.className = (d.speaker === role) ? 'chat-bubble bubble-user' : 'chat-bubble bubble-app'; b.innerHTML = `<strong>${d.speaker}</strong> ▶️ ${d.text}`;
        document.getElementById('chat-box').appendChild(b);
        if(globalRpAudio) globalRpAudio.pause(); globalRpAudio = new Audio(audioUrl);
        globalRpAudio.play().then(() => { globalRpAudio.onended = () => globalRpTimeout = setTimeout(() => playFullConversation(i + 1), 400); });
    }

    // --- Grammar Quiz ---
    let gQuizIdx = 0, gScore = 0;
    window.initGrammarQuiz = function() { gQuizIdx = 0; gScore = 0; document.getElementById('g-final-score-container').classList.add('hidden'); document.getElementById('g-quiz-content').classList.remove('hidden'); showGQ(); };
    function showGQ() {
        document.getElementById('g-next-question-btn').classList.add('hidden');
        document.getElementById('g-quiz-counter').textContent = `Question ${gQuizIdx + 1} of ${grammarQuizData.length}`;
        const qData = grammarQuizData[gQuizIdx];
        document.getElementById('g-question-text').textContent = qData.q;
        document.getElementById('g-feedback-text').textContent = '';
        const optsCont = document.getElementById('g-options-container'); optsCont.innerHTML = '';
        [...qData.opts].sort(()=>Math.random()-0.5).forEach(opt => {
            const b = document.createElement('button'); b.textContent = opt;
            b.dataset.isCorrect = (opt === qData.ans); 

            b.onclick = () => {
                document.querySelectorAll('#g-options-container button').forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.isCorrect === 'true') {
                        btn.className = 'success';
                    }
                });

                if(opt === qData.ans) { 
                    gScore++; soundCorrect.currentTime=0; soundCorrect.play(); 
                } else { 
                    b.className='fail'; soundWrong.currentTime=0; soundWrong.play(); 
                }
                document.getElementById('g-next-question-btn').classList.remove('hidden');
            };
            optsCont.appendChild(b);
        });
    }

    // 🔥 هنا التعديل المهم اللي بيبعت إشارة النجاح للبوابة لما الطالب يخلص الجرامر كويز 🔥
    document.getElementById('g-next-question-btn')?.addEventListener('click', () => {
        gQuizIdx++; 
        if(gQuizIdx < grammarQuizData.length) {
            showGQ();
        } else { 
            document.getElementById('g-quiz-content').classList.add('hidden'); 
            document.getElementById('g-final-score-container').classList.remove('hidden');
            let sName = window.currentStudentName || "Student";
            document.getElementById('g-score-text').textContent = `${sName}, Score: ${Math.round((gScore/grammarQuizData.length)*100)}%`; 
            
            // سطر إرسال الإنجاز للبوابة!
            if(window.markLessonCompleted) {
                window.markLessonCompleted();
            }
        }
    });
});