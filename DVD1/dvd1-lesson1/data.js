// --- بيانات درس Lesson 1: Nice to meet you ---

// 1. أسئلة القصة (تم التصليح)
const storyQuizData = [
    { q: "Which town does Jack's family come from originally?", opts: ["Bolonia", "Milan", "Naples"], ans: "Bolonia" },
    { q: "What does Anne's sister study in Rome?", opts: ["Italian fashion", "Italian painters", "History"], ans: "Italian painters" },
    { q: "What is Jack's sign of the zodiac?", opts: ["Aquarius", "Capricorn", "Leo"], ans: "Capricorn" },
    { q: "Where did they meet?", opts: ["In the house", "At the cafe", "In the street"], ans: "In the house" }
];

// 2. الكلمات (17 كلمة)
const wordsData = [
    { english: "Pleasure", arabic: "سرور / من دواعي سروري", exampleEn: "It's a pleasure.", image: "images/1.jpg", audio: "audio/words/1.mp3" },
    { english: "Beautiful", arabic: "جميل", exampleEn: "It's really beautiful!", image: "images/2.jpg", audio: "audio/words/2.mp3" },
    { english: "Difficult", arabic: "صعب", exampleEn: "It's very difficult to keep clean.", image: "images/3.jpg", audio: "audio/words/3.mp3" },
    { english: "Accent", arabic: "لهجة", exampleEn: "Your accent is very clear.", image: "images/4.jpg", audio: "audio/words/4.mp3" },
    { english: "Wonderful", arabic: "رائع", exampleEn: "Oh! Italy is wonderful!", image: "images/5.jpg", audio: "audio/words/5.mp3" },
    { english: "Moment", arabic: "لحظة / حالياً", exampleEn: "My sister is in Italy at the moment.", image: "images/6.jpg", audio: "audio/words/6.mp3" }, 
    { english: "Friendly", arabic: "ودود", exampleEn: "Italians are so friendly.", image: "images/7.jpg", audio: "audio/words/7.mp3" },
    { english: "Flatmate", arabic: "شريك السكن", exampleEn: "So this is Jack, the new flatmate.", image: "images/8.jpg", audio: "audio/words/8.mp3" },
    { english: "Amazing", arabic: "مذهل", exampleEn: "Yes! Amazing!", image: "images/9.jpg", audio: "audio/words/9.mp3" },
    { english: "Glad", arabic: "مسرور / سعيد", exampleEn: "I'm glad you like it.", image: "images/10.jpg", audio: "audio/words/10.mp3" }, 
    { english: "Painters", arabic: "رسامين", exampleEn: "She's studying Italian painters.", image: "images/11.jpg", audio: "audio/words/11.mp3" },
    { english: "A Capricorn", arabic: "برج الجدي", exampleEn: "You are a Capricorn!", image: "images/12.jpg", audio: "audio/words/12.mp3" },
    { english: "The Big Apple", arabic: "التفاحة الكبيرة (نيويورك)", exampleEn: "Wow, the big apple!", image: "images/13.jpg", audio: "audio/words/13.mp3" },
    { english: "An African mask", arabic: "قناع أفريقي", exampleEn: "It's an African mask.", image: "images/14.jpg", audio: "audio/words/14.mp3" },
    { english: "Magic", arabic: "سحر", exampleEn: "Is it magic?", image: "images/15.jpg", audio: "audio/words/15.mp3" },
    { english: "Bottle", arabic: "زجاجة", exampleEn: "A bottle of Italian wine.", image: "images/16.jpg", audio: "audio/words/16.mp3" },
    { english: "Wine", arabic: "نبيذ", exampleEn: "Do you like wine?", image: "images/17.jpg", audio: "audio/words/17.mp3" }
];

// 3. المحادثة (الرول بلاي - 28 جملة كاملة)
const dialogueData = [
    { speaker: "Jack", text: "Hello. I'm Jack.", audio: "Jack/1.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "Hello! My name's Anne. Nice to meet you.", audio: "Anne/1.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "It's a pleasure. So, this is the house... It's really beautiful!", audio: "Jack/2.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "Oh yes, it is... but... but it's very difficult to keep clean...", audio: "Anne/2.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "Sorry... not a good start...", audio: "Jack/3.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "Don't worry...", audio: "Anne/3.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "Your accent is very clear... Where are you from?", audio: "Jack/4.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "I'm from Oxford.", audio: "Anne/4.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "Wow! Oxford! 100% English!", audio: "Jack/5.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "Yes... and you are American, is that right?", audio: "Anne/5.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "Yes, but my family is from Italy, Bolonia.", audio: "Jack/6.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "Oh! Italy is wonderful! My sister is in Italy at the moment...", audio: "Anne/6.mp3", img: "images/anne.jpg" },
    { speaker: "Jack", text: "Where?", audio: "Jack/7.mp3", img: "images/jack.jpg" },
    { speaker: "Anne", text: "She's in Rome, studying Italian painters. She's really happy: Italians are so friendly. Oh... That's Alice... She is also part of the \"family\".", audio: "Anne/7.mp3", img: "images/anne.jpg" }, 
    { speaker: "Jack", text: "Oh, it's nice to meet you Alice!", audio: "Jack/8.mp3", img: "images/jack.jpg" },
    { speaker: "Alice", text: "So this is Jack, the new flatmate.", audio: "Alice/1.mp3", img: "images/alice.jpg" },
    { speaker: "Anne", text: "Yes, and he is", audio: "Anne/8.mp3", img: "images/anne.jpg" }, 
    { speaker: "Alice", text: "Nice to meet you, Jack... I'm from Sidney, in Australia, and you... are... a Capricorn!", audio: "Alice/2.mp3", img: "images/alice.jpg" },
    { speaker: "Jack", text: "Yes! Amazing! I come from America. I'm from New York!", audio: "Jack/9.mp3", img: "images/jack.jpg" },
    { speaker: "Alice", text: "Wow, the big apple!", audio: "Alice/3.mp3", img: "images/alice.jpg" },
    { speaker: "Jack", text: "Yes... Okay... Ehm... can I put my things in the bedroom?", audio: "Jack/10.mp3", img: "images/jack.jpg" },
    { speaker: "Alice", text: "Let me help you!", audio: "Alice/4.mp3", img: "images/alice.jpg" }, 
    { speaker: "Alice", text: "Hey, this is nice!", audio: "Alice/5.mp3", img: "images/alice.jpg" }, 
    { speaker: "Jack", text: "I'm glad you like it. It's a Mexican hat. You look great!", audio: "Jack/11.mp3", img: "images/jack.jpg" },
    { speaker: "Alice", text: "And what is this?", audio: "Alice/6.mp3", img: "images/alice.jpg" },
    { speaker: "Jack", text: "It's an African mask.", audio: "Jack/12.mp3", img: "images/jack.jpg" },
    { speaker: "Alice", text: "Is it magic?", audio: "Alice/7.mp3", img: "images/alice.jpg" },
    { speaker: "Jack", text: "Of course! But look at this... a bottle of Italian wine. Do you like wine?", audio: "Jack/13.mp3", img: "images/jack.jpg" }
];

// 4. الإملاء (Listen & Write - 28 جملة)
// السطر ده بياخد الـ 28 جملة اللي فوق أوتوماتيك ويحطهم في الإملاء
const dictationData = dialogueData.map(item => ({ text: item.text, audio: item.audio }));

// 5. أسئلة الجرامر
const grammarQuizData = [
    { q: "I _____ Jack.", opts: ["am", "is", "are"], ans: "am" },
    { q: "Where _____ you from?", opts: ["is", "are", "am"], ans: "are" },
    { q: "She _____ in Rome studying painters.", opts: ["are", "am", "is"], ans: "is" },
    { q: "Italians _____ so friendly.", opts: ["is", "are", "am"], ans: "are" },
    { q: "_____ it magic?", opts: ["Are", "Is", "Am"], ans: "Is" }
];