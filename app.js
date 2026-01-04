const testQuestions = [
  {
    question: "空港で道案内をお願いする英語を選んでください。",
    options: [
      { text: "Where is the restroom?", score: 1 },
      { text: "Could you tell me how to get to the gate?", score: 2 },
      { text: "I want a gate.", score: 0 },
    ],
  },
  {
    question: "会議の開始を遅らせたい時の表現はどれ？",
    options: [
      { text: "Can we push the meeting back?", score: 2 },
      { text: "Meeting is stop.", score: 0 },
      { text: "We start now.", score: 1 },
    ],
  },
  {
    question: "カフェでおすすめを聞くフレーズは？",
    options: [
      { text: "What do you recommend?", score: 2 },
      { text: "Give me coffee.", score: 1 },
      { text: "Coffee?", score: 0 },
    ],
  },
  {
    question: "自分の趣味を説明する時の選択肢は？",
    options: [
      { text: "I enjoy hiking on weekends.", score: 2 },
      { text: "I hiking.", score: 0 },
      { text: "Hiking is fun.", score: 1 },
    ],
  },
  {
    question: "同僚へ協力をお願いする表現は？",
    options: [
      { text: "Could you help me with this report?", score: 2 },
      { text: "Help me now.", score: 1 },
      { text: "You help?", score: 0 },
    ],
  },
];

const scenarioLibrary = [
  {
    title: "ホテルのチェックイン",
    description: "夜遅くに到着し、予約を確認しながら部屋の希望を伝えます。",
    partner: "フロントスタッフ",
    illustration: `
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="30" width="200" height="150" rx="16" fill="#ffffff" stroke="#c7d0ff"/>
        <rect x="30" y="110" width="60" height="40" rx="8" fill="#d6e0ff"/>
        <rect x="120" y="90" width="70" height="60" rx="10" fill="#f8d4b2"/>
        <circle cx="145" cy="70" r="20" fill="#ffd9c2"/>
        <rect x="50" y="50" width="40" height="20" rx="6" fill="#c7d0ff"/>
        <path d="M30 160 H190" stroke="#c7d0ff" stroke-width="4"/>
      </svg>
    `,
    beginner: [
      "Hello. I have a reservation.",
      "My name is ___ .",
      "Could I have a non-smoking room?",
    ],
    intermediate: [
      "Hi, I booked a room for two nights under ___ .",
      "Is breakfast included in my reservation?",
      "If possible, could I get a quiet room?",
    ],
    advanced: [
      "Good evening, I checked in online and would like to confirm my booking.",
      "Could you also explain the Wi-Fi and late check-out options?",
      "I would appreciate a room away from the elevator if available.",
    ],
  },
  {
    title: "オンライン会議の雑談",
    description: "海外の同僚と会議前の雑談をし、最近の仕事について共有します。",
    partner: "プロジェクトメンバー",
    illustration: `
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="180" height="120" rx="18" fill="#ffffff" stroke="#c7d0ff"/>
        <rect x="30" y="110" width="50" height="30" rx="6" fill="#d6e0ff"/>
        <rect x="90" y="90" width="50" height="50" rx="8" fill="#f6c4b0"/>
        <rect x="150" y="80" width="40" height="60" rx="8" fill="#ffe5d0"/>
        <circle cx="115" cy="70" r="14" fill="#ffd9c2"/>
        <circle cx="170" cy="65" r="12" fill="#ffd9c2"/>
        <path d="M30 150 H190" stroke="#c7d0ff" stroke-width="4"/>
      </svg>
    `,
    beginner: [
      "Hi, how are you today?",
      "I'm working on the new report.",
      "The weather is sunny here.",
    ],
    intermediate: [
      "How has your week been so far?",
      "I'm finalizing the presentation slides for Friday.",
      "Have you tried the new scheduling tool?",
    ],
    advanced: [
      "Before we start, I'd love to hear how things are going on your side.",
      "I'm juggling a couple of deadlines, but the new workflow is helping.",
      "Let me know if you need any support before the meeting.",
    ],
  },
  {
    title: "街のカフェで注文",
    description: "混んでいるカフェで飲み物と軽食を注文し、持ち帰りか店内かを伝えます。",
    partner: "バリスタ",
    illustration: `
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="40" width="170" height="120" rx="16" fill="#ffffff" stroke="#c7d0ff"/>
        <rect x="60" y="110" width="50" height="40" rx="10" fill="#d6e0ff"/>
        <rect x="120" y="100" width="40" height="50" rx="8" fill="#f8d4b2"/>
        <circle cx="80" cy="90" r="18" fill="#ffd9c2"/>
        <path d="M50 150 H170" stroke="#c7d0ff" stroke-width="4"/>
      </svg>
    `,
    beginner: [
      "Hi, can I get a latte?",
      "To go, please.",
      "Can I also have a cookie?",
    ],
    intermediate: [
      "Could I have a medium latte and a muffin?",
      "I'll take it to go, please.",
      "Do you have any non-dairy milk?",
    ],
    advanced: [
      "I'd like a medium latte with oat milk and a blueberry muffin.",
      "Could you make it to go? I'm in a bit of a hurry.",
      "Also, what's your most popular pastry today?",
    ],
  },
];

const focusByLevel = {
  beginner: ["挨拶と基本表現", "Yes/Noで答えられる質問"],
  intermediate: ["丁寧な依頼表現", "状況説明と確認"],
  advanced: ["自然なつなぎ表現", "細かな希望や条件の伝達"],
};

const improvementsKey = "english-training-improvements";

const testContainer = document.getElementById("test-questions");
const startTrainingButton = document.getElementById("start-training");
const testFeedback = document.getElementById("test-feedback");
const sceneIllustration = document.getElementById("scene-illustration");
const sceneTitle = document.getElementById("scene-title");
const sceneDescription = document.getElementById("scene-description");
const focusList = document.getElementById("focus-list");
const dialogue = document.getElementById("dialogue");
const finishTraining = document.getElementById("finish-training");
const evaluationSummary = document.getElementById("evaluation-summary");
const strengthsList = document.getElementById("strengths");
const improvementsList = document.getElementById("improvements");
const savePlanButton = document.getElementById("save-plan");
const saveFeedback = document.getElementById("save-feedback");

let level = "beginner";
let currentScenario = scenarioLibrary[0];
let pendingImprovements = [];

const renderQuestions = () => {
  testContainer.innerHTML = "";
  testQuestions.forEach((item, index) => {
    const question = document.createElement("div");
    question.className = "question";
    question.innerHTML = `
      <h4>Q${index + 1}. ${item.question}</h4>
      <div class="answers">
        ${item.options
          .map(
            (option, optionIndex) => `
              <label>
                <input type="radio" name="question-${index}" value="${option.score}" data-text="${option.text}" />
                ${option.text}
              </label>
            `
          )
          .join("")}
      </div>
    `;
    testContainer.appendChild(question);
  });
};

const calculateLevel = (score) => {
  if (score <= 4) return "beginner";
  if (score <= 7) return "intermediate";
  return "advanced";
};

const updateFocus = () => {
  const stored = JSON.parse(localStorage.getItem(improvementsKey) || "[]");
  const focusItems = [...focusByLevel[level]];
  if (stored.length) {
    focusItems.push(`前回の改善点: ${stored.join(" / ")}`);
  }
  focusList.innerHTML = focusItems.map((item) => `<li>${item}</li>`).join("");
};

const renderDialogue = () => {
  const lines = currentScenario[level];
  dialogue.innerHTML = lines
    .map(
      (line, index) => `
        <div class="turn">
          <strong>${currentScenario.partner}:</strong>
          <p>${line}</p>
          <p class="muted">あなたの返答を考えてください。</p>
        </div>
      `
    )
    .join("");
};

const renderScenario = () => {
  currentScenario = scenarioLibrary[Math.floor(Math.random() * scenarioLibrary.length)];
  sceneIllustration.innerHTML = currentScenario.illustration;
  sceneTitle.textContent = `${currentScenario.title} (${currentScenario.partner})`;
  sceneDescription.textContent = currentScenario.description;
  updateFocus();
  renderDialogue();
};

const summarizeResults = () => {
  const confidence = document.querySelector("input[name='confidence']:checked")?.value;
  const challenges = Array.from(document.querySelectorAll(".checks input:checked")).map(
    (item) => item.value
  );
  strengthsList.innerHTML = "";
  improvementsList.innerHTML = "";

  const strengths = [
    "状況に合ったフレーズを使えている",
    "会話の流れを意識できている",
    "丁寧な言い回しに挑戦できている",
  ];

  const improvements = challenges.length
    ? challenges.map((challenge) => `${challenge}を強化する練習を追加`)
    : ["さらに自然なつなぎ表現を増やす", "自分の意見を一文追加する"];

  strengths.slice(0, 2).forEach((item) => {
    strengthsList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });

  improvements.forEach((item) => {
    improvementsList.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });

  pendingImprovements = improvements.map((item) => item.replace("を強化する練習を追加", ""));

  const confidenceText = confidence ? `自信度: ${confidence}/5` : "自信度: 未選択";
  evaluationSummary.textContent = `トレーニング完了！ ${confidenceText}。良かった点と改善点をチェックしてください。`;
};

renderQuestions();

startTrainingButton.addEventListener("click", () => {
  const answers = Array.from(document.querySelectorAll("#test-questions input:checked"));
  const score = answers.reduce((total, answer) => total + Number(answer.value), 0);
  level = calculateLevel(score);
  testFeedback.textContent = `スコア: ${score}/10 → レベル: ${level === "beginner" ? "入門" : level === "intermediate" ? "中級" : "上級"}`;
  renderScenario();
});

testContainer.addEventListener("change", () => {
  const totalAnswered = new Set(
    Array.from(document.querySelectorAll("#test-questions input:checked")).map(
      (input) => input.name
    )
  ).size;
  startTrainingButton.disabled = totalAnswered !== testQuestions.length;
});

finishTraining.addEventListener("click", () => {
  summarizeResults();
  evaluationSummary.scrollIntoView({ behavior: "smooth" });
});

savePlanButton.addEventListener("click", () => {
  if (!pendingImprovements.length) {
    saveFeedback.textContent = "改善点を選んでから保存してください。";
    return;
  }
  localStorage.setItem(improvementsKey, JSON.stringify(pendingImprovements));
  saveFeedback.textContent = "次回のトレーニングに改善点を反映しました。";
  updateFocus();
});
