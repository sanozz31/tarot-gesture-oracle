const deck = [
  {
    id: 0,
    name: "愚者",
    symbol: "0",
    upright: "新的开始、自由、冒险、相信直觉",
    reversed: "鲁莽、逃避现实、准备不足",
    advice: "允许自己从零开始，但给这次出发留一个清醒的边界。"
  },
  {
    id: 1,
    name: "魔术师",
    symbol: "I",
    upright: "行动力、资源整合、表达、显化",
    reversed: "分心、操控、资源未被真正调用",
    advice: "你已经有工具了，重点是把它们聚焦到一个可执行动作上。"
  },
  {
    id: 2,
    name: "女祭司",
    symbol: "II",
    upright: "潜意识、洞察、静观、秘密",
    reversed: "忽视直觉、信息不透明、过度沉默",
    advice: "先别急着回应，答案可能藏在你没有说出口的感受里。"
  },
  {
    id: 3,
    name: "皇后",
    symbol: "III",
    upright: "滋养、丰盛、创造力、关系中的温度",
    reversed: "过度付出、依赖、创造力被耗损",
    advice: "把能量放回身体和生活本身，稳定的照料会带来结果。"
  },
  {
    id: 4,
    name: "皇帝",
    symbol: "IV",
    upright: "结构、秩序、责任、掌控",
    reversed: "僵化、控制欲、缺乏规则",
    advice: "给局面设定清楚规则，温柔并不等于没有边界。"
  },
  {
    id: 5,
    name: "教皇",
    symbol: "V",
    upright: "传统、学习、承诺、价值观",
    reversed: "叛逆、教条、需要重新定义信念",
    advice: "参考经验，但别把别人的答案误认成你的命运。"
  },
  {
    id: 6,
    name: "恋人",
    symbol: "VI",
    upright: "选择、连接、吸引、价值一致",
    reversed: "犹豫、失衡、关系中的不诚实",
    advice: "真正的问题不是选谁，而是你愿意成为怎样的人。"
  },
  {
    id: 7,
    name: "战车",
    symbol: "VII",
    upright: "推进、胜利、自律、方向感",
    reversed: "失控、内耗、目标冲突",
    advice: "把力量收束到同一个方向，接下来靠节奏赢。"
  },
  {
    id: 8,
    name: "力量",
    symbol: "VIII",
    upright: "勇气、耐心、温柔的力量、驯服冲动",
    reversed: "自我怀疑、压抑、情绪耗竭",
    advice: "不要硬碰硬，最强的方式可能是稳定地靠近。"
  },
  {
    id: 9,
    name: "隐士",
    symbol: "IX",
    upright: "独处、内省、寻找真相、智慧",
    reversed: "孤立、逃避交流、迷失方向",
    advice: "退一步不是失败，是为了听见更真实的问题。"
  },
  {
    id: 10,
    name: "命运之轮",
    symbol: "X",
    upright: "转机、周期、好运、变化",
    reversed: "抗拒变化、循环课题、时机未稳",
    advice: "变化已经开始，顺势调整比强行固定更有利。"
  },
  {
    id: 11,
    name: "正义",
    symbol: "XI",
    upright: "公平、决定、因果、清晰判断",
    reversed: "偏见、逃避责任、不公正",
    advice: "回到事实本身，承认每个选择都带着后果。"
  },
  {
    id: 12,
    name: "倒吊人",
    symbol: "XII",
    upright: "暂停、换位思考、臣服、等待",
    reversed: "停滞、无谓牺牲、拖延",
    advice: "暂时慢下来，换一个角度看会发现出口。"
  },
  {
    id: 13,
    name: "死神",
    symbol: "XIII",
    upright: "结束、蜕变、清理、重生",
    reversed: "抗拒告别、旧模式纠缠、迟来的改变",
    advice: "让该结束的结束，新的空间不会凭空出现。"
  },
  {
    id: 14,
    name: "节制",
    symbol: "XIV",
    upright: "平衡、疗愈、整合、耐心",
    reversed: "失衡、过量、节奏混乱",
    advice: "别追求立刻定论，调和比取胜更重要。"
  },
  {
    id: 15,
    name: "恶魔",
    symbol: "XV",
    upright: "欲望、束缚、诱惑、看见阴影",
    reversed: "解脱、识破依赖、摆脱旧锁链",
    advice: "诚实看见你被什么吸引，也看见它要你付出什么。"
  },
  {
    id: 16,
    name: "高塔",
    symbol: "XVI",
    upright: "突变、瓦解、真相显露、重建",
    reversed: "延迟崩塌、压抑危机、害怕失控",
    advice: "不稳的结构正在暴露问题，重建会比修补更诚实。"
  },
  {
    id: 17,
    name: "星星",
    symbol: "XVII",
    upright: "希望、疗愈、灵感、被看见",
    reversed: "失望、信心不足、灵感枯竭",
    advice: "把注意力放回长期愿景，微弱的光也能指路。"
  },
  {
    id: 18,
    name: "月亮",
    symbol: "XVIII",
    upright: "迷雾、梦境、直觉、情绪潮汐",
    reversed: "真相浮现、焦虑缓解、幻象退去",
    advice: "此刻不适合草率定案，先分清事实和想象。"
  },
  {
    id: 19,
    name: "太阳",
    symbol: "XIX",
    upright: "清晰、喜悦、成功、生命力",
    reversed: "短暂低迷、过度乐观、喜悦被遮住",
    advice: "让事情简单一点，坦率和可见度会带来帮助。"
  },
  {
    id: 20,
    name: "审判",
    symbol: "XX",
    upright: "觉醒、召唤、复盘、重要决定",
    reversed: "自我批判、迟迟不回应、害怕改变",
    advice: "你已经听见召唤，接下来需要回应，而不是继续证明。"
  },
  {
    id: 21,
    name: "世界",
    symbol: "XXI",
    upright: "完成、整合、抵达、圆满",
    reversed: "未完成、收尾困难、缺少闭环",
    advice: "把最后一步做完，真正的结束会释放下一段旅程。"
  }
];

const roles = {
  single: ["核心讯息"],
  three: ["过去", "现在", "建议"]
};

const state = {
  spread: "single",
  stream: null,
  cameraReady: false,
  lastFrame: null,
  lastDrawAt: 0,
  recentEnergy: 0,
  history: JSON.parse(localStorage.getItem("tarotHistory") || "[]")
};

const els = {
  question: document.querySelector("#questionInput"),
  draw: document.querySelector("#drawButton"),
  camera: document.querySelector("#cameraButton"),
  video: document.querySelector("#cameraVideo"),
  canvas: document.querySelector("#motionCanvas"),
  meter: document.querySelector("#motionMeter"),
  status: document.querySelector("#gestureStatus"),
  portal: document.querySelector(".portal-ring"),
  deck: document.querySelector("#deck"),
  cards: document.querySelector("#cardsResult"),
  interpretation: document.querySelector("#interpretation"),
  title: document.querySelector("#readingTitle"),
  copy: document.querySelector("#copyButton"),
  clearHistory: document.querySelector("#clearHistory"),
  history: document.querySelector("#historyList"),
  theme: document.querySelector("#themeToggle")
};

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => setSpread(button.dataset.spread));
});

els.draw.addEventListener("click", () => performReading("button"));
els.deck.addEventListener("click", () => performReading("deck"));
els.deck.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    performReading("deck");
  }
});
els.camera.addEventListener("click", toggleCamera);
els.copy.addEventListener("click", copyReading);
els.clearHistory.addEventListener("click", clearHistory);
els.theme.addEventListener("click", toggleTheme);

renderHistory();

function setSpread(spread) {
  state.spread = spread;
  document.querySelectorAll(".segment").forEach((button) => {
    const isActive = button.dataset.spread === spread;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function toggleCamera() {
  if (state.stream) {
    stopCamera();
    return;
  }

  try {
    state.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 960 }, height: { ideal: 720 } },
      audio: false
    });
    els.video.srcObject = state.stream;
    state.cameraReady = true;
    els.camera.textContent = "关闭手势";
    els.status.textContent = "手掌从圆环中扫过即可抽牌";
    requestAnimationFrame(scanMotion);
  } catch (error) {
    els.status.textContent = "摄像头不可用，请使用按钮或轻点牌堆抽牌";
    state.cameraReady = false;
  }
}

function stopCamera() {
  state.stream.getTracks().forEach((track) => track.stop());
  state.stream = null;
  state.cameraReady = false;
  state.lastFrame = null;
  els.camera.textContent = "开启手势";
  els.status.textContent = "点击开启摄像头，或直接按下抽牌";
  els.meter.style.width = "0%";
}

function scanMotion() {
  if (!state.cameraReady || !state.stream) return;

  const canvas = els.canvas;
  const video = els.video;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const width = 160;
  const height = 120;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  context.drawImage(video, 0, 0, width, height);
  const frame = context.getImageData(0, 0, width, height);
  let energy = 0;
  let samples = 0;

  if (state.lastFrame) {
    for (let y = 20; y < height - 20; y += 2) {
      for (let x = 28; x < width - 28; x += 2) {
        const index = (y * width + x) * 4;
        const current = frame.data[index] * 0.3 + frame.data[index + 1] * 0.59 + frame.data[index + 2] * 0.11;
        const previous =
          state.lastFrame.data[index] * 0.3 + state.lastFrame.data[index + 1] * 0.59 + state.lastFrame.data[index + 2] * 0.11;
        const diff = Math.abs(current - previous);
        if (diff > 18) energy += diff;
        samples++;
      }
    }
  }

  state.lastFrame = frame;
  state.recentEnergy = Math.min(100, Math.round((energy / Math.max(samples, 1)) * 5.6));
  els.meter.style.width = `${state.recentEnergy}%`;

  const now = Date.now();
  if (state.recentEnergy > 64 && now - state.lastDrawAt > 2600) {
    state.lastDrawAt = now;
    els.portal.classList.remove("active");
    void els.portal.offsetWidth;
    els.portal.classList.add("active");
    performReading("gesture");
  }

  requestAnimationFrame(scanMotion);
}

function performReading(source) {
  const count = state.spread === "three" ? 3 : 1;
  const selected = drawCards(count);
  const question = els.question.value.trim();
  const reading = buildReading(selected, question, source);

  renderCards(selected);
  renderInterpretation(reading);
  els.title.textContent = state.spread === "three" ? "三张牌阵已展开" : "此刻的牌已翻开";

  state.history.unshift({
    id: crypto.randomUUID(),
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    question,
    cards: selected,
    text: reading.map((item) => item.text).join("\n")
  });
  state.history = state.history.slice(0, 8);
  localStorage.setItem("tarotHistory", JSON.stringify(state.history));
  renderHistory();
}

function drawCards(count) {
  const pool = [...deck];
  return Array.from({ length: count }, (_, index) => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const card = pool.splice(randomIndex, 1)[0];
    return {
      ...card,
      role: roles[state.spread][index],
      reversed: Math.random() > 0.72
    };
  });
}

function buildReading(cards, question, source) {
  const questionLine = question
    ? `围绕「${question}」，这次抽牌更像是在指出问题的受力点。`
    : "没有输入具体问题时，牌面会更偏向当下整体状态。";

  const sourceLine = source === "gesture" ? "手势触发让这次抽牌带着更强的即时性。" : "这次抽牌由你主动确认，适合拿来做清醒的自我校准。";

  const details = cards.map((card) => {
    const meaning = card.reversed ? card.reversed : card.upright;
    const orientation = card.reversed ? "逆位" : "正位";
    return {
      title: `${card.role}：${card.name}${orientation}`,
      text: `${card.role}位置出现「${card.name}${orientation}」，关键词是：${meaning}。${card.advice}`
    };
  });

  const synthesis =
    cards.length === 1
      ? `综合来看，答案不是简单的吉凶，而是提醒你把注意力放在「${cards[0].advice.replace("。", "")}」这件事上。`
      : `综合来看，过去的「${cards[0].name}」、现在的「${cards[1].name}」和建议位的「${cards[2].name}」组成了一条路径：先承认旧动力，再看清当前局面，最后用更具体的行动收束。`;

  return [
    { title: "提问", text: questionLine },
    { title: "触发", text: sourceLine },
    ...details,
    { title: "整合", text: synthesis }
  ];
}

function renderCards(cards) {
  els.cards.innerHTML = cards
    .map(
      (card) => `
        <article class="tarot-card ${card.reversed ? "reversed" : ""}">
          <div>
            <div class="card-role">${card.role}</div>
            <div class="card-name">${card.name}</div>
          </div>
          <div class="card-symbol" aria-hidden="true">${card.symbol}</div>
          <div class="card-orientation">${card.reversed ? "逆位" : "正位"}</div>
        </article>
      `
    )
    .join("");
}

function renderInterpretation(reading) {
  els.interpretation.innerHTML = reading
    .map(
      (item) => `
        <p><strong>${item.title}</strong><br />${item.text}</p>
      `
    )
    .join("");
}

function renderHistory() {
  if (!state.history.length) {
    els.history.innerHTML = `<p class="card-orientation">暂无记录</p>`;
    return;
  }

  els.history.innerHTML = state.history
    .map((item) => {
      const names = item.cards.map((card) => `${card.name}${card.reversed ? "逆" : "正"}`).join(" / ");
      return `
        <article class="history-item">
          <button type="button" data-history-id="${item.id}">
            ${item.question || "未命名提问"}
            <small>${names} · ${item.time}</small>
          </button>
        </article>
      `;
    })
    .join("");

  els.history.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => restoreHistory(button.dataset.historyId));
  });
}

function restoreHistory(id) {
  const item = state.history.find((entry) => entry.id === id);
  if (!item) return;
  els.question.value = item.question;
  renderCards(item.cards);
  els.interpretation.innerHTML = item.text
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");
  els.title.textContent = "已载入历史解读";
}

async function copyReading() {
  const text = `${els.title.textContent}\n${els.interpretation.innerText}`.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  els.copy.textContent = "✓";
  window.setTimeout(() => {
    els.copy.innerHTML = `<span aria-hidden="true">⧉</span>`;
  }, 900);
}

function clearHistory() {
  state.history = [];
  localStorage.removeItem("tarotHistory");
  renderHistory();
}

function toggleTheme() {
  document.documentElement.classList.toggle("light");
}
