// ==========================================
// 1. Data Base - Combined Lesson (Dubai & Songs)
// ==========================================

const appData = {
    dubai: {
        title: "TV Program 1: Dubai Travel",
        folderName: "dubai",
        convVideo: "https://rumble.com/embed/v782k64/?pub=4patlm&rel=0",
        gramVideo: "https://rumble.com/embed/v782jvw/?pub=4patlm&rel=0",
        characters: ["Lucy", "Christine"], 
        words: [
            { word: "Destination", translation: "وجهة / مقصد", definition: "The place to which someone or something is going or being sent.", example: "I want to talk about a new tourist destination.", image: "1.jpg", audio: "1.mp3" },
            { word: "Foreign countries", translation: "دول أجنبية", definition: "Countries other than one's own country.", example: "We talk about foreign countries.", image: "2.jpg", audio: "2.mp3" },
            { word: "Tourist attractions", translation: "معالم سياحية", definition: "Places of interest where tourists visit.", example: "We talk about holiday destinations and tourist attractions.", image: "3.jpg", audio: "3.mp3" },
            { word: "Globetrotter", translation: "رحّالة", definition: "A person who travels widely and often.", example: "Christine is a real globetrotter.", image: "4.jpg", audio: "4.mp3" },
            { word: "Fascinating", translation: "ساحر / خلاب", definition: "Extremely interesting or charming.", example: "Dubai's a fascinating city.", image: "5.jpg", audio: "5.mp3" },
            { word: "Skyscrapers", translation: "ناطحات سحاب", definition: "Very tall buildings with many stories.", example: "In Dubai there are new skyscrapers.", image: "6.jpg", audio: "6.mp3" },
            { word: "Souks", translation: "أسواق عربية", definition: "Traditional Arab markets or marketplaces.", example: "There are new skyscrapers next to traditional Arab souks.", image: "7.jpg", audio: "7.mp3" },
            { word: "Curious", translation: "فضولي", definition: "Eager to know or learn something.", example: "Please, tell us... we're curious.", image: "8.jpg", audio: "8.mp3" },
            { word: "Duty free", translation: "معفى من الرسوم الجمركية", definition: "Exempt from payment of duty or taxes.", example: "Dubai has duty free shopping.", image: "9.jpg", audio: "9.mp3" },
            { word: "Designer clothes", translation: "ملابس ذات ماركات عالمية", definition: "Clothing made by a well-known fashion designer.", example: "You can find everything there... designer clothes.", image: "10.jpg", audio: "10.mp3" },
            { word: "High tech goods", translation: "سلع عالية التقنية", definition: "Products that involve advanced technology.", example: "You can find cameras, high tech goods... all at very low prices!", image: "11.jpg", audio: "11.mp3" },
            { word: "Camel rides", translation: "ركوب الجمال", definition: "The activity of riding on a camel for recreation.", example: "You can go on desert safaris, camel rides...", image: "12.jpg", audio: "12.mp3" },
            { word: "Snorkelling", translation: "الغوص بأنبوب التنفس", definition: "The practice of swimming on the surface of water while equipped with a mask.", example: "There are many centres for snorkelling and diving.", image: "13.jpg", audio: "13.mp3" },
            { word: "Diving", translation: "الغطس", definition: "The sport or activity of swimming underwater using scuba gear.", example: "There are many centres for snorkelling and diving.", image: "14.jpg", audio: "14.mp3" },
            { word: "Sunbathe", translation: "يتشمس", definition: "To sit or lie in the sun to get a tan.", example: "If you prefer to relax you can just sunbathe!", image: "15.jpg", audio: "15.mp3" },
            { word: "Accommodation", translation: "مكان إقامة", definition: "A room, group of rooms, or building in which someone may live or stay.", example: "Is it easy to find accommodation in Dubai?", image: "16.jpg", audio: "16.mp3" }
        ],
        storyQuiz: [
            { q: "Dubai is famous in all the world because of the...", options: ["skyscrapers", "souks", "shopping"], correct: 2 },
            { q: "There aren't any beaches in Dubai.", options: ["True", "False"], correct: 1 },
            { q: "The best time to visit Dubai is in the summer.", options: ["True", "False"], correct: 1 },
            { q: "It's easy to find accommodation in Dubai.", options: ["True", "False"], correct: 0 },
            { q: "You can eat Italian food in Dubai.", options: ["True", "False"], correct: 0 }
        ],
        grammarQuiz: [
            { q: "A person who is on holiday in a foreign country is a ________.", options: ["traveler", "tourist", "globe trotter"], correct: 1 },
            { q: "Which sentence is grammatically correct?", options: ["I live in the Dubai.", "I live in Dubai."], correct: 1 },
            { q: "We use the article 'The' before country names that include words like ________.", options: ["Spain, Brazil, and France", "United, Union, and Republic", "Cities like London"], correct: 1 }
        ],
        dialogue: [
            { char: "Lucy", text: "Hello, hello to everyone! Welcome to \"The Travel Programme\", the TV Show for all travellers. We talk about foreign countries, holiday destinations and tourist attractions with Christine Oteng, our travel expert. Hi Christine.", audio: "1-lucy.mp3" },
            { char: "Christine", text: "Hi Lucy and good morning to all travellers.", audio: "2-christine.mp3" },
            { char: "Lucy", text: "You know, Christine is a real globetrotter. She visits 14-15 countries a year. Is that right Christine?", audio: "3-lucy.mp3" },
            { char: "Christine", text: "That's right Lucy! I travel a lot!", audio: "4-christine.mp3" },
            { char: "Lucy", text: "So, what are you talking about today?", audio: "5-lucy.mp3" },
            { char: "Christine", text: "Well, I want to talk about a new tourist destination: Dubai, in the United Arab Emirates.", audio: "6-christine.mp3" },
            { char: "Lucy", text: "Mmm... interesting. Dubai's a fascinating city. Modern and traditional at the same time.", audio: "7-lucy.mp3" },
            { char: "Christine", text: "That's true! In Dubai there are new skyscrapers next to traditional Arab \"souks\". But there's something else! Do you know why Dubai is famous throughout the world?", audio: "8-christine.mp3" },
            { char: "Lucy", text: "No, I don't! Please, tell us... we're curious.", audio: "9-lucy.mp3" },
            { char: "Christine", text: "Because of the shopping. Dubai has duty free shopping. You can find everything there... designer clothes, cameras, high tech goods... all at very low prices!", audio: "10-christine.mp3" },
            { char: "Lucy", text: "So, it's a real shopping paradise!", audio: "11-lucy.mp3" },
            { char: "Christine", text: "Yes Lucy, it is! But Dubai is also famous for its beaches, blue sea and white sand.", audio: "12-christine.mp3" },
            { char: "Lucy", text: "It sounds wonderful. When's the best time to visit Dubai?", audio: "13-lucy.mp3" },
            { char: "Christine", text: "The best time to visit is from October to April. During this period the weather's good and there's almost no rain.", audio: "14-christine.mp3" },
            { char: "Lucy", text: "So, it's a winter destination!", audio: "15-lucy.mp3" },
            { char: "Christine", text: "Exactly! In summer it's very, very hot there. It's about 40°C!", audio: "16-christine.mp3" },
            { char: "Lucy", text: "Oh wow! Really hot! And what is there to do in Dubai? I mean, besides shopping, of course!", audio: "17-lucy.mp3" },
            { char: "Christine", text: "Well, there are many things to do there! You can go on desert safaris, camel rides, you can swim and if you like sports there are many centres for snorkelling and diving.", audio: "18-christine.mp3" },
            { char: "Lucy", text: "Ok... So, you need a lot of time to do all these things!", audio: "19-lucy.mp3" },
            { char: "Christine", text: "Well, if you prefer to relax you can just sunbathe!", audio: "20-christine.mp3" },
            { char: "Lucy", text: "That's true! What about hotels? Is it easy to find accommodation in Dubai?", audio: "21-lucy.mp3" },
            { char: "Christine", text: "Of course! There are many hotels at all prices! Most of them are new, with large rooms and good service.", audio: "22-christine.mp3" },
            { char: "Lucy", text: "And food? What about the food?", audio: "23-lucy.mp3" },
            { char: "Christine", text: "You can find all kinds of food in Dubai. Middle eastern and international food: Lebanese, French, Italian, Indian and so on.", audio: "24-christine.mp3" },
            { char: "Lucy", text: "Well, Dubai is the home of sun, sand and shopping. Do you like all these things? Then Dubai is the place for you! Goodbye Christine.", audio: "25-lucy.mp3" },
            { char: "Christine", text: "Goodbye Lucy and goodbye to all travellers.", audio: "26-christine.mp3" },
            { char: "Lucy", text: "See you again soon to learn more about the world of travel with \"The Travel Programme\"! Bye, bye!", audio: "27-lucy.mp3" }
        ]
    },
    songs: {
        title: "TV Program 2: Music World",
        folderName: "songs", 
        convVideo: "https://rumble.com/embed/v7842ea/?pub=4patlm&rel=0",
        gramVideo: "https://rumble.com/embed/v7841iq/?pub=4patlm&rel=0",
        characters: ["Lucy", "Tony"],
        words: [
            { word: "Expert", translation: "خبير", definition: "A person who has a lot of knowledge or skill in a particular area.", example: "We talk about music with our expert Tony Moore.", image: "1.jpg", audio: "1.mp3" },
            { word: "Downloading", translation: "تحميل / تنزيل", definition: "Copying data from one computer system to another, typically over the Internet.", example: "I mean downloading songs from the Internet.", image: "2.jpg", audio: "2.mp3" },
            { word: "Popular", translation: "ذو شعبية", definition: "Liked, admired, or enjoyed by many people.", example: "This new way of listening to music is very popular today.", image: "3.jpg", audio: "3.mp3" },
            { word: "Unusual", translation: "غير مألوف", definition: "Not habitually or commonly occurring or done.", example: "You can find unusual types of music.", image: "4.jpg", audio: "4.mp3" },
            { word: "Unknown artists", translation: "فنانون غير معروفين", definition: "Singers or musicians who are not famous.", example: "Pieces of music by unknown artists or bands.", image: "5.jpg", audio: "5.mp3" },
            { word: "The latest records", translation: "أحدث التسجيلات", definition: "The most recent music albums or songs released.", example: "Many people like to listen to the latest records before they buy them.", image: "6.jpg", audio: "6.mp3" },
            { word: "Illegal", translation: "غير قانوني", definition: "Contrary to or forbidden by law.", example: "It's illegal to download music files without paying!", image: "7.jpg", audio: "7.mp3" },
            { word: "Audio file", translation: "ملف صوتي", definition: "A digital file format used to store audio data on a computer.", example: "MP3 is an audio file.", image: "8.jpg", audio: "8.mp3" },
            { word: "Stereo", translation: "جهاز ستيريو", definition: "Sound reproducing equipment that has two or more separate channels.", example: "I usually listen to music on my stereo.", image: "9.jpg", audio: "9.mp3" },
            { word: "Library", translation: "مكتبة إلكترونية", definition: "A collection of files, books, or music kept for use or borrowing.", example: "A music website is like a library of music.", image: "10.jpg", audio: "10.mp3" },
            { word: "Genre", translation: "نوع أو فئة", definition: "A category of artistic composition, as in music or literature.", example: "Here you can search by artist, type of music or genre.", image: "11.jpg", audio: "11.mp3" },
            { word: "Container", translation: "وعاء / حافظة", definition: "An object that can be used to hold or transport something.", example: "An MP3 player is a music container.", image: "12.jpg", audio: "12.mp3" },
            { word: "Store", translation: "يُخزّن", definition: "To keep or accumulate something for future use.", example: "It can store 7.500 songs.", image: "13.jpg", audio: "13.mp3" },
            { word: "Viewers", translation: "مشاهدين", definition: "People who watch a television program.", example: "It's time to say goodbye to our viewers!", image: "14.jpg", audio: "14.mp3" }
        ],
        storyQuiz: [
            { q: "Tony likes rock music.", options: ["True", "False"], correct: 0 },
            { q: "Downloading music from the Internet is...", options: ["expensive", "easy", "difficult"], correct: 1 },
            { q: "You can listen to MP3 files on a CD player.", options: ["True", "False"], correct: 1 }
        ],
        grammarQuiz: [
            { q: "You must always say 'listen ________ music'.", options: ["on", "at", "to"], correct: 2 },
            { q: "I want to download some new songs ________ the internet ________ my computer.", options: ["to / from", "from / to", "on / in"], correct: 1 },
            { q: "You can listen to an MP3 file ________ an MP3 player.", options: ["in", "on", "at"], correct: 1 }
        ],
        dialogue: [
            { char: "Lucy", text: "Good evening, good evening! It's time for music now with \"Music World\"! In this programme we talk about music with our expert Tony Moore and of course we listen to good songs! Now, what kind of music do you like Tony?", audio: "1-lucy.mp3" },
            { char: "Tony", text: "Oh well, I like pop music and rock music too!", audio: "2-tony.mp3" },
            { char: "Lucy", text: "Mmm... pop and rock are great types of music! Well... what are you talking about this evening Tony?", audio: "3-lucy.mp3" },
            { char: "Tony", text: "I'd like to talk about new ways of listening to music.", audio: "4-tony.mp3" },
            { char: "Lucy", text: "Sounds interesting! What do you mean exactly?", audio: "5-lucy.mp3" },
            { char: "Tony", text: "Well, I mean downloading songs from the Internet. You know Lucy, this new way of listening to music is very very popular today, especially amongst young people!", audio: "6-tony.mp3" },
            { char: "Lucy", text: "Really? Maybe because it's a cheap way of listening to music...", audio: "7-lucy.mp3" },
            { char: "Tony", text: "That's true, it is cheap. But this isn't the only reason! There are many music websites on the Internet. You can find all kinds of music. Old songs, unusual types of music, pieces of music by unknown artists or bands.", audio: "8-tony.mp3" },
            { char: "Lucy", text: "So there's a good choice.", audio: "9-lucy.mp3" },
            { char: "Tony", text: "Exactly, there's a very good choice! It's a good way of listening to new styles of music. And you know many people like to listen to the latest records before they buy them.", audio: "10-tony.mp3" },
            { char: "Lucy", text: "I see, I see! So, listening to music from the Internet is very popular. But how does it work? Is it difficult to download songs?", audio: "11-lucy.mp3" },
            { char: "Tony", text: "No, no, it's very easy! You go to the music website, choose the song you want to listen to, pay with your credit card and then download the MP3 file to a computer. Remember, you have to have your credit card ready, it's illegal to download music files without paying!", audio: "12-tony.mp3" },
            { char: "Lucy", text: "Right, I'll remember that. But Tony! What's an MP3 file?", audio: "13-lucy.mp3" },
            { char: "Tony", text: "Well, MP3 is an audio file. It's the type file we use for pieces of music. But remember, Lucy... you can only listen to MP3 files on your computer or on an MP3 player!", audio: "14-tony.mp3" },
            { char: "Lucy", text: "Ok, this is very interesting, but it's quite difficult for me. I'm not good with technology. I usually listen to music on my stereo.", audio: "15-lucy.mp3" },
            { char: "Tony", text: "Oh, don't worry Lucy! It's always difficult at the beginning. Now I'll give you an example of how it works. Are you ready?", audio: "16-tony.mp3" },
            { char: "Lucy", text: "Yes I am.", audio: "17-lucy.mp3" },
            { char: "Tony", text: "Ok, you want to download a piece of music, this is what you have to do: you go on the Internet, you go to the music website. A music website is like a library of music. Here you can search by artist, type of music or genre, CD title or song. Do you follow?", audio: "18-tony.mp3" },
            { char: "Lucy", text: "Yes yes, I follow you.", audio: "19-lucy.mp3" },
            { char: "Tony", text: "Good, so you choose the song, download it to your computer, then from the computer download it to your MP3 player. An MP3 player is a music container. It can store 7.500 songs.", audio: "20-tony.mp3" },
            { char: "Lucy", text: "7.500 songs, wow, so many! Well, you're right! It isn't very difficult! Ok, well, it's time to say goodbye to our viewers! So thanks Tony...", audio: "21-lucy.mp3" },
            { char: "Tony", text: "Thanks, bye, bye", audio: "22-tony.mp3" },
            { char: "Lucy", text: "Bye. See you again soon here on \"Music World\". And... What would you like to listen to next time?", audio: "23-lucy.mp3" }
        ]
    }
};

let currentProgram = null; 
let currentProgramData = null;

// ==========================================
// 2. دوال التنقل الأساسية والصوت
// ==========================================

function selectProgram(progId) {
    currentProgram = progId;
    currentProgramData = appData[progId];
    
    document.getElementById('menu-prog-title').innerText = currentProgramData.title;
    document.getElementById('conv-video-container').innerHTML = `<iframe class="rumble" width="100%" height="100%" src="${currentProgramData.convVideo}" frameborder="0" allowfullscreen style="position:absolute; top:0; left:0; border:0;"></iframe>`;
    document.getElementById('gram-video-container').innerHTML = `<iframe class="rumble" width="100%" height="100%" src="${currentProgramData.gramVideo}" frameborder="0" allowfullscreen style="position:absolute; top:0; left:0; border:0;"></iframe>`;
    
    let rpContainer = document.getElementById('rp-chars-container');
    rpContainer.innerHTML = '';
    currentProgramData.characters.forEach(char => {
        let charImgName = char.toLowerCase() + ".jpg";
        let imgSrc = getFilePath('image', charImgName);
        rpContainer.innerHTML += `
        <button class="action-btn" onclick="startRoleplay('${char}')" style="width: 45%; background: #fff; color: #5b2c6f; border: 2px solid #5b2c6f; font-size: 1.2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
            <img src="${imgSrc}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border: 2px solid #ecf0f1;" onerror="this.style.display='none'">
            ${char}
        </button>`;
    });

    goToHome();
}

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

function getFilePath(type, fileName) {
    const folder = currentProgramData.folderName;
    if(type === 'image') return `${folder}/images/${fileName}`;
    if(type === 'wordAudio') return `${folder}/audio words/${fileName}`;
    if(type === 'sentenceAudio') return `${folder}/audio sentences/${fileName}`;
    return fileName;
}

// ==========================================
// 3. كويز المحادثة
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
    let qData = currentProgramData.storyQuiz[currentStoryQuestion];
    document.getElementById('sq-question-text').innerText = qData.q;
    let optionsHtml = '';
    qData.options.forEach((opt, idx) => {
        optionsHtml += `<button onclick="checkStoryAnswer(${idx}, this)">${opt}</button>`;
    });
    document.getElementById('sq-options-container').innerHTML = optionsHtml;
    document.getElementById('sq-feedback-text').innerText = '';
    document.getElementById('sq-next-question-btn').classList.add('hidden');
    document.getElementById('sq-quiz-counter').innerText = `Question: ${currentStoryQuestion + 1} / ${currentProgramData.storyQuiz.length}`;
}

function checkStoryAnswer(idx, btn) {
    let qData = currentProgramData.storyQuiz[currentStoryQuestion];
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
        if(currentStoryQuestion < currentProgramData.storyQuiz.length) {
            loadStoryQuestion();
        } else {
            showStoryResult();
        }
    };
}

function showStoryResult() {
    document.getElementById('sq-quiz-content').classList.add('hidden');
    document.getElementById('sq-final-score-container').classList.remove('hidden');
    let percent = Math.round((storyScore / currentProgramData.storyQuiz.length) * 100);
    let wrong = currentProgramData.storyQuiz.length - storyScore;
    document.getElementById('sq-score-text').innerHTML = `✅ Correct: ${storyScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
}

// ==========================================
// 4. الكلمات الصعبة (Vocabulary)
// ==========================================
let currentWordIndex = 0;

function updateFlashcard() {
    let data = currentProgramData.words[currentWordIndex];
    document.getElementById('card-image').src = getFilePath('image', data.image);
    document.getElementById('card-word').innerText = data.word;
    document.getElementById('card-translation').innerText = data.translation;
    document.getElementById('card-definition').innerText = data.definition;
    document.getElementById('card-example-en').innerText = data.example;
    document.getElementById('card-audio').src = getFilePath('wordAudio', data.audio);
    document.getElementById('word-counter-text').innerText = `${currentWordIndex + 1} / ${currentProgramData.words.length}`;
    document.getElementById('flashcard-inner').classList.remove('is-flipped');
}

function flipCard() {
    document.getElementById('flashcard-inner').classList.toggle('is-flipped');
}

function changeWord(step) {
    currentWordIndex += step;
    if (currentWordIndex < 0) currentWordIndex = currentProgramData.words.length - 1;
    if (currentWordIndex >= currentProgramData.words.length) currentWordIndex = 0;
    updateFlashcard();
}

function playVocabAudio() {
    document.getElementById('card-audio').play();
}

// ==========================================
// 5. كويز الكلمات
// ==========================================
let currentQuizQuestion = 0;
let quizScore = 0;
let quizQuestions = [];

function startWordsQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizQuestions = [...currentProgramData.words].sort(() => 0.5 - Math.random());
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('final-score-container').classList.add('hidden');
    goToStage('quiz-stage');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    let qData = quizQuestions[currentQuizQuestion];
    document.getElementById('quiz-word-audio').src = getFilePath('wordAudio', qData.audio);
    
    let options = [qData.word];
    let allWords = currentProgramData.words;
    while(options.length < 4 && options.length < allWords.length) {
        let randWord = allWords[Math.floor(Math.random() * allWords.length)].word;
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
    let data = currentProgramData.dialogue[currentLineIndex];
    let charImgName = data.char.toLowerCase() + ".jpg";
    let imgElement = document.getElementById('speaker-img');
    if(imgElement) {
        imgElement.src = getFilePath('image', charImgName);
    }
    
    document.getElementById('speaker-name').innerText = data.char;
    document.getElementById('english-line').innerText = data.text;
    document.getElementById('line-audio').src = getFilePath('sentenceAudio', data.audio);
    document.getElementById('line-counter-text').innerText = `${currentLineIndex + 1} / ${currentProgramData.dialogue.length}`;
}

function changeLine(step) {
    currentLineIndex += step;
    if (currentLineIndex < 0) currentLineIndex = currentProgramData.dialogue.length - 1;
    if (currentLineIndex >= currentProgramData.dialogue.length) currentLineIndex = 0;
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
    let data = currentProgramData.dialogue[currentDictIndex];
    document.getElementById('dict-audio').src = getFilePath('sentenceAudio', data.audio);
    document.getElementById('dict-input').value = '';
    document.getElementById('dict-input').disabled = false;
    document.getElementById('dict-feedback').innerText = '';
    document.getElementById('dict-correct-ans').classList.add('hidden');
    document.getElementById('next-dict-btn').classList.add('hidden');
    document.getElementById('dict-counter').innerText = `Sentence: ${currentDictIndex + 1} / ${currentProgramData.dialogue.length}`;
}

function playDictAudio() {
    document.getElementById('dict-audio').play();
}

function checkDictation() {
    let rawUser = document.getElementById('dict-input').value.trim().toLowerCase();
    let rawCorrect = currentProgramData.dialogue[currentDictIndex].text.trim().toLowerCase();
    
    // إزالة جميع علامات الترقيم من الإجابة لتجنب الأخطاء غير الضرورية
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
        document.getElementById('dict-correct-ans').innerText = currentProgramData.dialogue[currentDictIndex].text;
        document.getElementById('dict-correct-ans').classList.remove('hidden');
        playAudioEffect('wrong');
    }
    document.getElementById('next-dict-btn').classList.remove('hidden');
}

function nextDictation() {
    currentDictIndex++;
    if(currentDictIndex < currentProgramData.dialogue.length) {
        loadDictation();
    } else {
        document.getElementById('dict-content').classList.add('hidden');
        document.getElementById('dict-final-score-container').classList.remove('hidden');
        let percent = Math.round((dictScore / currentProgramData.dialogue.length) * 100);
        let wrong = currentProgramData.dialogue.length - dictScore;
        document.getElementById('dict-score-text').innerHTML = `✅ Correct: ${dictScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
    }
}

// ==========================================
// 8. الرول بلاي
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
    if(rpIndex >= currentProgramData.dialogue.length) {
        document.getElementById('rp-content-area').classList.add('hidden');
        document.getElementById('rp-result-area').classList.remove('hidden');
        buildConversationHistory(); 
        return;
    }
    let data = currentProgramData.dialogue[rpIndex];
    
    // سحب وعرض صورة الشخصية اللي بتتكلم دلوقتي (تم حل مشكلة الاختفاء)
    let charImgName = data.char.toLowerCase() + ".jpg";
    let imgElement = document.getElementById('rp-char-img');
    if(imgElement) {
        imgElement.src = getFilePath('image', charImgName);
        imgElement.style.display = 'block'; // دي السطر السحري اللي بيرجع الصورة لو كانت اختفت
    }

    document.getElementById('rpChar').innerText = data.char;
    document.getElementById('rpText').innerText = data.text;
    document.getElementById('rpAudio').src = getFilePath('sentenceAudio', data.audio);

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
    if(userAudio) { userAudio.pause(); }
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
                alert("Please allow microphone access!");
            });
    } else {
        mediaRecorder.stop();
        isRecording = false;
    }
}

function buildConversationHistory() {
    let historyContainer = document.getElementById('conversation-history');
    let html = '';
    
    currentProgramData.dialogue.forEach((data, index) => {
        let isUser = (data.char === rpRole);
        let audioSrc = (isUser && userRecordings[index]) ? userRecordings[index] : getFilePath('sentenceAudio', data.audio);
        let displayChar = isUser ? "Student" : data.char;
        
        // جلب صورة الشخصية الحقيقية أو صورة الطالب (نفس صورة الشخصية اللي بيمثلها)
        let charImgName = isUser ? rpRole.toLowerCase() + ".jpg" : data.char.toLowerCase() + ".jpg";
        let imgSrc = getFilePath('image', charImgName);
        
        html += `
        <div id="card-${index}" style="background: white; border: 1px solid #b0bec5; border-radius: 12px; padding: 15px; text-align: left; transition: all 0.3s ease; display: flex; gap: 15px; align-items: center;">
            <img src="${imgSrc}" style="width: 55px; height: 55px; border-radius: 50%; object-fit: cover; border: 2px solid #ecf0f1;" onerror="this.style.display='none'">
            <div style="flex: 1;">
                <p style="font-weight: bold; color: #1976d2; margin-top: 0; margin-bottom: 5px; font-size: 1.1rem; text-transform: capitalize;">${displayChar}</p>
                <p style="color: #333; font-size: 1.2rem; font-weight: bold; margin-bottom: 10px; line-height: 1.4;">${data.text}</p>
                <button style="background-color: #1976d2; color: white; border: none; padding: 8px 15px; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: bold;" onclick="playSingleLine('${audioSrc}', 'card-${index}')">🔊 Listen</button>
            </div>
        </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

function playFullConversation() {
    playbackIndex = 0;
    isPlayingFull = true;
    document.getElementById('btnPlayAll').disabled = true;
    document.getElementById('btnPlayAll').innerHTML = "⏳ Playing Dialogue...";
    
    document.querySelectorAll('div[id^="card-"]').forEach(c => {
        c.style.borderColor = "#b0bec5";
        c.style.backgroundColor = "white";
    });
    
    playNextStep();
}

function playNextStep() {
    if(playbackIndex >= currentProgramData.dialogue.length || !isPlayingFull) {
        isPlayingFull = false;
        document.getElementById('btnPlayAll').disabled = false;
        document.getElementById('btnPlayAll').innerHTML = "▶️ Play Entire Dialogue";
        return; 
    }
    
    let data = currentProgramData.dialogue[playbackIndex];
    let cardId = `card-${playbackIndex}`;
    let isUser = (data.char === rpRole);
    let audioSrc = (isUser && userRecordings[playbackIndex]) ? userRecordings[playbackIndex] : getFilePath('sentenceAudio', data.audio);
    
    let newCard = document.getElementById(cardId);
    
    if(newCard) {
        newCard.style.borderColor = "#1976d2";
        newCard.style.backgroundColor = "#f1f8ff";
        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        if(newCard) {
            newCard.style.borderColor = "#b0bec5";
            newCard.style.backgroundColor = "white";
        }
        playbackIndex++;
        setTimeout(playNextStep, 500);
    };
}

function playSingleLine(audioSrc, cardId) {
    isPlayingFull = false; 
    document.getElementById('btnPlayAll').disabled = false;
    document.getElementById('btnPlayAll').innerHTML = "▶️ Play Entire Dialogue";
    
    document.querySelectorAll('div[id^="card-"]').forEach(c => {
        c.style.borderColor = "#b0bec5";
        c.style.backgroundColor = "white";
    });
    
    let currentCard = document.getElementById(cardId);
    if(currentCard) {
        currentCard.style.borderColor = "#1976d2";
        currentCard.style.backgroundColor = "#f1f8ff";
    }
    
    let audioPlayer = document.getElementById('fullPlaybackAudio');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    
    audioPlayer.onended = () => {
        if(currentCard) {
            currentCard.style.borderColor = "#b0bec5";
            currentCard.style.backgroundColor = "white";
        }
    };
}

// ==========================================
// 9. كويز الجرامر
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
    let qData = currentProgramData.grammarQuiz[currentGrammarQuestion];
    document.getElementById('g-question-text').innerText = qData.q;
    let optionsHtml = '';
    qData.options.forEach((opt, idx) => {
        optionsHtml += `<button onclick="checkGrammarAnswer(${idx}, this)">${opt}</button>`;
    });
    document.getElementById('g-options-container').innerHTML = optionsHtml;
    document.getElementById('g-feedback-text').innerText = '';
    document.getElementById('g-next-question-btn').classList.add('hidden');
    document.getElementById('g-quiz-counter').innerText = `Question: ${currentGrammarQuestion + 1} / ${currentProgramData.grammarQuiz.length}`;
}

function checkGrammarAnswer(idx, btn) {
    let qData = currentProgramData.grammarQuiz[currentGrammarQuestion];
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
    if(currentGrammarQuestion < currentProgramData.grammarQuiz.length) {
        loadGrammarQuestion();
    } else {
        document.getElementById('g-quiz-content').classList.add('hidden');
        document.getElementById('g-final-score-container').classList.remove('hidden');
        let percent = Math.round((grammarScore / currentProgramData.grammarQuiz.length) * 100);
        let wrong = currentProgramData.grammarQuiz.length - grammarScore;
        document.getElementById('g-score-text').innerHTML = `✅ Correct: ${grammarScore} <br> ❌ Wrong: ${wrong} <br><br> 🏆 Final Score: ${percent}%`;
    }
}