const deck = [
  {
    id: 0,
    name: "愚者",
    symbol: "0",
    image: "assets/cards/The Fool.png",
    upright: "崭新的旅程正在展开，你站在悬崖边，怀揣着一颗赤子之心。前方的道路尚未定型，意味着无限的可能性与自由。此刻不妨大胆一些，像从未受过伤那样去信任直觉。",
    reversed: "过于草率的出发，忽略脚下真实的危险。你可能在逃避某些必须面对的准备功课，仅凭一时冲动行事。停下来检视自己的行李——你真的带上了足够的东西吗？",
    advice: "允许自己从零开始，但给这次出发留一个清醒的边界。跳之前，至少知道悬崖的边际在哪里。"
  },
  {
    id: 1,
    name: "魔术师",
    symbol: "I",
    image: "assets/cards/The Magician.png",
    upright: "宇宙的四大元素齐聚于你的桌面，此刻你拥有将意念化为现实的力量。集中注意力，调动一切可用资源，你比想象中更有能力去显化目标。行动的时机就是现在。",
    reversed: "桌上摆满了工具却无从下手，注意力被拉扯成碎片。你可能在刻意操控局面，却忽略了真实的能力尚未到位。小心那些华丽的承诺——无论来自他人还是自己。",
    advice: "你已经有工具了，重点是把它们聚焦到一个可执行的动作上，而不是同时点亮所有蜡烛。"
  },
  {
    id: 2,
    name: "女祭司",
    symbol: "II",
    image: "assets/cards/The High Priestess.png",
    upright: "帷幕之后有更深层的智慧正在流动。你不需要向外寻求答案，潜意识已经收到了信号，只是尚待翻译成语言。静坐、观察、等待是此刻最有力的行动。",
    reversed: "直觉被喧哗淹没，你听不见内心的声音。信息被人为隐藏，或者你故意对自己隐瞒了什么。沉默本身变成了负担，而不是力量的来源。",
    advice: "先别急着回应外界，答案可能藏在你没有说出口的感受里。揭开面纱的方式，是允许自己先看见。"
  },
  {
    id: 3,
    name: "皇后",
    symbol: "III",
    image: "assets/cards/The Empress.png",
    upright: "丰饶的沃土正在孕育生命，创造力如泉涌般自然流露。你与自己的身体、感官、情绪建立了和谐的联系，滋养自己就是滋养整个世界。美和温暖是你此刻最重要的资源。",
    reversed: "过度付出让你枯竭，创造力的井正在干涸。你可能太依赖他人的认可来确认自己的价值，忽略了对自己的照料。匮乏感正在悄悄侵蚀原本丰盛的心田。",
    advice: "把能量放回身体和生活本身，稳定的照料会带来结果。先给自己浇水，才有余力灌溉别人。"
  },
  {
    id: 4,
    name: "皇帝",
    symbol: "IV",
    image: "assets/cards/The Emperor.png",
    upright: "秩序正在建立，混乱被框入了可管理的结构。你拥有制定规则、划定边界的权力，稳定的领导力源于内在的自律。把视野放远，为长期的目标铺设坚实的基础。",
    reversed: "控制欲膨胀成了僵化的教条，规则不再是保护而是牢笼。你可能在用权威掩盖内心的不安全感，或者恰恰相反——完全放弃了本该承担的责任。",
    advice: "给局面设定清楚规则，温柔并不等于没有边界。结构存在的目的，是为了让人在其中安全地生长。"
  },
  {
    id: 5,
    name: "教皇",
    symbol: "V",
    image: "assets/cards/The Hierophant.png",
    upright: "智慧的传承正在向你敞开大门，传统和经验是值得信赖的指南。或许有一位导师或体系能够帮你理解眼前的迷雾。在既有的框架中找到属于自己的位置，也是一种深刻的修行。",
    reversed: "僵化的教条窒息了你的独立思考，你感到被规则捆绑却不敢挣脱。也可能你正在用叛逆的外衣掩盖对认同的饥渴。真正需要重新审视的，是你自己的信念根基。",
    advice: "参考经验，但别把别人的答案误认成你的命运。真正的信仰是你亲身验证过的真相。"
  },
  {
    id: 6,
    name: "恋人",
    symbol: "VI",
    image: "assets/cards/The Lovers.png",
    upright: "一个重要的选择摆在面前，这不是简单的对错题，而是价值观的对齐。深刻的连接正在形成——与爱人、与事业、与真实的自我的连接。坦诚和透明会带来真正的亲密。",
    reversed: "犹豫在撕裂你的决心，天平迟迟无法倾斜。关系中出现不真诚的信号，或是你对自己不够诚实。价值冲突让你感到被两面拉扯，每一个选项都带着代价。",
    advice: "真正的问题不是选谁，而是你愿意成为怎样的人。选择之后的承诺，比选择本身更重。"
  },
  {
    id: 7,
    name: "战车",
    symbol: "VII",
    image: "assets/cards/The Chariot.png",
    upright: "两股相反的力量被你驯服在同一架战车上，朝着确定的方向碾压式推进。自律、意志和节奏感是你最大的武器。胜利不在终点，而在每一次把缰绳握紧的瞬间。",
    reversed: "战车偏离了轨道，黑白双马在朝不同方向狂奔。内耗正在消耗你本可以用作推进的能量，目标太多等于没有目标。失控不是因为力道不够，而是方向散了。",
    advice: "把力量收束到同一个方向，接下来靠节奏赢。别急着加速，先确认轮子还在轨上。"
  },
  {
    id: 8,
    name: "力量",
    symbol: "VIII",
    image: "assets/cards/Strength.png",
    upright: "真正的力量不是压倒，而是驯服。你正在用耐心与温柔化解一头猛兽的敌意，内心的勇气大于外部的蛮力。持久而稳定的靠近，远比一次爆发的冲击更有力量。",
    reversed: "自我怀疑正在耗尽你的内在火力，你感觉自己软弱，却忘了软弱本身也是人性的一部分。情绪被压抑得久了，变成了慢性耗竭。你需要的不是更强的自己，而是更接纳的自己。",
    advice: "不要硬碰硬，最强的方式可能是稳定地靠近。温柔是你最被低估的武器。"
  },
  {
    id: 9,
    name: "隐士",
    symbol: "IX",
    image: "assets/cards/The Hermit.png",
    upright: "提灯独自走入黑暗，不是为了逃避人群，而是为了寻找内心那片沉寂已久的地图。孤独此刻是养分，你正在与更高版本的自己对话。慢下来，答案会在静默中浮现。",
    reversed: "独处变成了孤立，你切断了与外界的桥梁却找不到归路。迷失不是因为黑暗太深，而是你拒绝了他人的光。沉默太久会让回声也消失。",
    advice: "退一步不是失败，是为了听见更真实的问题。但别忘了提着灯回来——智慧最终要回到人群中才有意义。"
  },
  {
    id: 10,
    name: "命运之轮",
    symbol: "X",
    image: "assets/cards/Wheel of Fortune.png",
    upright: "轮盘正在转动，一个周期进入了关键的转折点。好运、机遇和意外的推力同时到场，你正被命运之手轻轻推向下一个阶段。顺势而为，你会发现自己站在了更高处。",
    reversed: "命运之轮逆行，你感觉被卡在一个反复出现的课题里打转。抗拒变化只会让轮盘转得更慢，而每一次循环都带着相同的功课——学会了才能毕业。",
    advice: "变化已经开始，顺势调整比强行固定更有利。轮子在转的时候，松手比抓紧更需要智慧。"
  },
  {
    id: 11,
    name: "正义",
    symbol: "XI",
    image: "assets/cards/Justice.png",
    upright: "天平正在归零，因果法则开始显形。一个清晰、公平的决定将被做出，依据的是事实而非情绪。你被召唤以冷静和客观的眼光审视局面，真相是你的盟友。",
    reversed: "天平倾斜了，偏见或未被看见的信息扭曲了判断。你可能在逃避一个必须承担的责任，或者被不公平对待却选择了沉默。迟到的公正仍在路上。",
    advice: "回到事实本身，承认每个选择都带着后果。公正不是没有代价，而是代价由正确的人来承担。"
  },
  {
    id: 12,
    name: "倒吊人",
    symbol: "XII",
    image: "assets/cards/The Hanged Man.png",
    upright: "你被倒吊在树上，却看见了别人永远看不到的角度。暂停不是惩罚，而是一种主动的臣服。有些问题不能用前进来解决，只能通过换一个完全颠倒的视角来理解。",
    reversed: "停滞变成了僵局，你悬在半空却拒绝去看。无谓的牺牲正在消耗你的生命能量，拖延本身就是一种选择。是时候把自己放下来了。",
    advice: "暂时慢下来，换一个角度看会发现出口。但不要迷恋悬挂的舒适——视角终需落地。"
  },
  {
    id: 13,
    name: "死神",
    symbol: "XIII",
    image: "assets/cards/Death.png",
    upright: "一段旧章节正在被翻过，无可挽回的结束同时也是无可阻挡的新生。剥离的过程可能疼痛，但被清除的都是早已枯死的部分。让骨骸留在过去，你继续往前。",
    reversed: "你紧紧抓住已经死去的东西不放——一段关系、一个身份、一个旧梦。抗拒告别让腐烂蔓延到了原本健康的土地上。改变不会因为你的抵触就绕道而行。",
    advice: "让该结束的结束，新的空间不会凭空出现。悼念是必要的，但不要在墓碑旁建房子。"
  },
  {
    id: 14,
    name: "节制",
    symbol: "XIV",
    image: "assets/cards/Temperance.png",
    upright: "对立的两极正在你的杯中融合为第三种可能。你用耐心缓慢地调配着生活——不过量、不枯竭、不极端。疗愈正在发生，不是因为猛药，而是因为恰好合适的温度。",
    reversed: "生活的配方失衡了——某个部分过量而另一个部分被忽略。节奏混乱让身体和情绪都感到透支。你正在试图用极端手段解决一个需要微调的问题。",
    advice: "别追求立刻定论，调和比取胜更重要。把两个杯子来回倒，直到温度刚好。"
  },
  {
    id: 15,
    name: "恶魔",
    symbol: "XV",
    image: "assets/cards/The Devil.png",
    upright: "你看清了自己被什么锁住——欲望、执念、或是某种让你上瘾的模式。枷锁是真实存在的，但钥匙也在你身上。直视阴影面的那一刻，你已经开始了挣脱。",
    reversed: "锁链已经松动，你开始看清那些束缚的本质不过是纸做的镣铐。旧习惯对你的控制力正在减弱，自由不再是遥远的概念，而是触手可及的实践。",
    advice: "诚实看见你被什么吸引，也看见它要你付出什么。觉醒就是从问自己「我真的需要这个吗」开始的。"
  },
  {
    id: 16,
    name: "高塔",
    symbol: "XVI",
    image: "assets/cards/The Tower.png",
    upright: "一道闪电劈开了你苦心构建的结构，崩塌来得猝不及防。然而倒塌的从来只是那些本就不稳的根基。真相之光虽然刺眼，却比黑暗中的安稳更值得信赖。",
    reversed: "你预感到崩塌正在逼近，却拼命加固着注定破裂的墙。推迟倒塌只是在积累更大的势能。害怕失控本身，比实际的重建更消耗心力。",
    advice: "不稳的结构正在暴露问题，重建会比修补更诚实。闪电过后，空气会格外干净。"
  },
  {
    id: 17,
    name: "星星",
    symbol: "XVII",
    image: "assets/cards/The Star.png",
    upright: "风暴过后，你跪在清澈的水边仰望星空。空灵而坚实的希望正在重新填满胸腔——这不是盲目的乐观，而是经历过黑暗后真正的确信。疗愈如泉水自然流淌。",
    reversed: "希望的光芒被乌云遮蔽，你暂时看不见前路。信心像漏水的碗，怎么都装不满。但星星本身并没有消失，只是被暂时的迷雾遮挡了。",
    advice: "把注意力放回长期愿景，微弱的光也能指路。你先相信光还在，眼睛才能重新适应黑暗。"
  },
  {
    id: 18,
    name: "月亮",
    symbol: "XVIII",
    image: "assets/cards/The Moon.png",
    upright: "月光把一切照得暧昧而变形，你正在穿越一片情绪的沼泽。界限模糊了，直觉和幻觉交织在一起。不要急着判明真假，有些真相只能在迷雾中显现。",
    reversed: "迷雾开始散开，真相的轮廓从朦胧中浮现。焦虑虽然仍在，但它的源头终于可以被辨认了。隐藏的恐惧一旦被命名，就会失去大部分魔力。",
    advice: "此刻不适合草率定案，先分清事实和想象。月光虽美，别指望靠它来测距。"
  },
  {
    id: 19,
    name: "太阳",
    symbol: "XIX",
    image: "assets/cards/The Sun.png",
    upright: "正午的阳光毫无保留地洒落，一切都清晰可见。喜悦从简单的存在中涌出，不带条件和阴影。你正站在生命力最旺盛的时刻，成功不是问题，享受就好。",
    reversed: "阳光被薄云遮住，不是阴天，只是不够明亮。过度的乐观可能让你忽略了真实的瑕疵。短暂的迟滞不代表光芒的消逝，稍等片刻云就会散。",
    advice: "让事情简单一点，坦率和可见度会带来帮助。阳光最擅长的事，就是让人看清自己。"
  },
  {
    id: 20,
    name: "审判",
    symbol: "XX",
    image: "assets/cards/Judgement.png",
    upright: "号角吹响，来自深处的一声召唤唤醒了沉睡的自我。旧账被清算、旧伤被承认，你的灵魂正在整理过往的碎片并重新出发。觉醒伴随着责任，但那是一种轻盈的责任。",
    reversed: "你听不见号角，或者听见了却假装没听见。过度的自我批判让赎罪的循环迟迟无法结束。害怕改变让你选择留在敞开的墓穴里。",
    advice: "你已经听见召唤，接下来需要回应，而不是继续证明自己有资格回应。"
  },
  {
    id: 21,
    name: "世界",
    symbol: "XXI",
    image: "assets/cards/The World.png",
    upright: "一个完整的循环在这里画上了句号——你抵达了，你完成了，你成为了。桂冠环绕的不只是一段旅程的终点，更是下一段旅程的入场券。圆满不是结束，是圆满地开始。",
    reversed: "最后一步卡住了，你距闭环只差一个动作却迟迟不动。未完成的线头散落各处，让你无法宣告结束。圆满被推迟，但并未被否决。",
    advice: "把最后一步做完，真正的结束会释放下一段旅程。不要停在距终点一米的地方。"
  }
];

const roles = {
  single: [""],
  three: ["过去", "现在", "建议"]
};

const state = {
  spread: "single",
  ritualStage: "idle",
  hands: null,
  cameraController: null,
  cameraReady: false,
  tableauCards: [],
  selectedIndex: 0,
  selectedIndices: [],
  pendingCards: [],
  pendingReading: null,
  pointerTrail: [],
  smoothedPalm: null,
  waveStart: null,
  prevFingertipsY: null,
  stableOpenFrames: 0,
  stableFistFrames: 0,
  openSeenAt: 0,
  fistSeenAt: 0,
  lastStageAt: 0,
  lastGestureAt: 0,
  history: JSON.parse(localStorage.getItem("tarotHistory") || "[]")
};

const els = {
  draw: document.querySelector("#drawButton"),
  camera: document.querySelector("#cameraButton"),
  video: document.querySelector("#cameraVideo"),
  canvas: document.querySelector("#handCanvas"),
  meter: document.querySelector("#motionMeter"),
  status: document.querySelector("#gestureStatus"),
  portal: document.querySelector(".portal-ring"),
  deck: document.querySelector("#deck"),
  deckZone: document.querySelector("#deckZone"),
  tableau: document.querySelector("#tableau"),
  selection: document.querySelector("#selectionFrame"),
  drawnStage: document.querySelector("#drawnCardsStage"),
  ritualLabel: document.querySelector("#ritualLabel"),
  deckHint: document.querySelector("#deckHint"),
  interpretation: document.querySelector("#interpretation"),
  title: document.querySelector("#readingTitle"),
  copy: document.querySelector("#copyButton"),
};

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => setSpread(button.dataset.spread));
});

els.draw.addEventListener("click", () => {
  if (state.ritualStage === "revealed") resetRitual();
  else performReading("button");
});
els.deck.addEventListener("click", advanceFallbackRitual);
els.deck.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    advanceFallbackRitual();
  }
});
els.camera.addEventListener("click", toggleCamera);
els.copy.addEventListener("click", copyReading);
els.tableau.addEventListener("pointermove", handlePointerSelect);
els.tableau.addEventListener("click", () => {
  if (state.ritualStage === "spread") extractSelection("pointer");
  else if (state.ritualStage === "drawn") revealPendingReading("pointer");
});
els.drawnStage.addEventListener("click", () => {
  if (state.ritualStage === "drawn") revealPendingReading("card");
});

resetRitual();

function setSpread(spread) {
  state.spread = spread;
  document.querySelectorAll(".segment").forEach((button) => {
    const isActive = button.dataset.spread === spread;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function toggleCamera() {
  if (state.cameraController) {
    stopCamera();
    return;
  }

  if (!window.Hands || !window.Camera) {
    els.status.textContent = "手势识别库还没加载完成，请稍后再试";
    return;
  }

  try {
    state.hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    state.hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.72,
      minTrackingConfidence: 0.7
    });
    state.hands.onResults(handleHandResults);

    state.cameraController = new Camera(els.video, {
      onFrame: async () => {
        await state.hands.send({ image: els.video });
      },
      width: 960,
      height: 720
    });

    await state.cameraController.start();
    state.cameraReady = true;
    els.camera.textContent = "关闭手势";
    els.status.textContent = "伸出五指，牌堆会切换到俯视视角";
    els.deckHint.textContent = getCameraHint();
  } catch (error) {
    els.status.textContent = "摄像头或识别库不可用，请用牌堆点击兜底操作";
    state.cameraReady = false;
  }
}

function stopCamera() {
  if (state.cameraController) state.cameraController.stop();
  if (els.video.srcObject) {
    els.video.srcObject.getTracks().forEach((track) => track.stop());
  }
  state.cameraController = null;
  state.hands = null;
  state.cameraReady = false;
  els.camera.textContent = "开启手势";
  els.status.textContent = "开启手势后，先伸出五指";
  els.deckHint.textContent = getFallbackHint();
  els.meter.style.width = "0%";
  clearHandCanvas();
}

function handleHandResults(results) {
  drawHandOverlay(results);
  const hand = results.multiHandLandmarks?.[0];
  if (!hand) {
    els.meter.style.width = "0%";
    state.stableOpenFrames = 0;
    state.stableFistFrames = 0;
    state.pointerTrail = [];
    state.waveStart = null;
    state.prevFingertipsY = null;
    state.smoothedPalm = null;
    return;
  }

  const gesture = inferGesture(hand);
  els.meter.style.width = `${Math.min(100, gesture.extendedCount * 20)}%`;
  processGesture(gesture);
}

function inferGesture(points) {
  const now = Date.now();
  const rawPalm = mirrorPoint(points[9]);
  const palm = smoothPalm(rawPalm);
  const handScale = Math.max(distance(points[0], points[9]), 0.08);
  const fingers = [
    isFingerExtended(points, 8, 6, handScale),
    isFingerExtended(points, 12, 10, handScale),
    isFingerExtended(points, 16, 14, handScale),
    isFingerExtended(points, 20, 18, handScale)
  ];
  const thumbOpen = distance(points[4], points[17]) > distance(points[2], points[17]) + handScale * 0.18;
  const extendedCount = fingers.filter(Boolean).length + (thumbOpen ? 1 : 0);
  const isOpen = extendedCount >= 4;
  const isFist = extendedCount <= 1;

  state.stableOpenFrames = isOpen ? state.stableOpenFrames + 1 : 0;
  state.stableFistFrames = isFist ? state.stableFistFrames + 1 : 0;

  // Fingertip-based wave-down: average Y of index/middle/ring/pinky tips
  const fingertipsY = (points[8].y + points[12].y + points[16].y + points[20].y) / 4;
  const fingertipsVelocityY = state.prevFingertipsY != null ? (fingertipsY - state.prevFingertipsY) : 0;
  state.prevFingertipsY = fingertipsY;

  state.pointerTrail.push({ time: now, x: palm.x, y: palm.y });
  state.pointerTrail = state.pointerTrail.filter((item) => now - item.time < 760);
  const trailFirst = state.pointerTrail[0] || { x: palm.x, y: palm.y };
  const trailElapsed = Math.max(1, now - trailFirst.time);
  const trailDx = palm.x - trailFirst.x;
  const trailDy = palm.y - trailFirst.y;
  const velocityX = trailDx / trailElapsed;

  // Wave-down: capture start when fingertips accelerate downward
  if (fingertipsVelocityY > 0.0008 && !state.waveStart) {
    state.waveStart = { time: now, y: fingertipsY };
  }
  // Reset if fingertips move back up or time out
  if (state.waveStart && (fingertipsVelocityY < -0.00015 || now - state.waveStart.time > 760)) {
    state.waveStart = null;
  }

  let waveDown = false;
  if (state.waveStart) {
    const waveDy = fingertipsY - state.waveStart.y;
    const waveElapsed = now - state.waveStart.time;
    waveDown = waveDy > 0.5 && waveElapsed > 120 && waveElapsed < 760;
  }

  // Swipe-right: use trail for horizontal detection
  const swipeRight = trailDx > 0.12 && Math.abs(trailDy) < 0.18 && trailElapsed > 120 && trailElapsed < 760 && velocityX > 0.00028;

  return {
    palm,
    extendedCount,
    isOpen,
    isStableOpen: state.stableOpenFrames >= 5,
    isFist,
    isStableFist: state.stableFistFrames >= 4,
    swipeRight,
    waveDown
  };
}

function smoothPalm(point) {
  if (!state.smoothedPalm) {
    state.smoothedPalm = point;
    return point;
  }
  const alpha = 0.42;
  state.smoothedPalm = {
    x: state.smoothedPalm.x * (1 - alpha) + point.x * alpha,
    y: state.smoothedPalm.y * (1 - alpha) + point.y * alpha
  };
  return state.smoothedPalm;
}

function isFingerExtended(points, tip, pip, handScale) {
  return points[pip].y - points[tip].y > handScale * 0.28;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
}

function mirrorPoint(point) {
  return {
    x: 1 - point.x,
    y: point.y
  };
}

function processGesture(gesture) {
  const now = Date.now();
  if (now - state.lastStageAt < 760 || now - state.lastGestureAt < 500) return;

  if (state.ritualStage === "idle" && gesture.isStableOpen) {
    if (!state.openSeenAt) state.openSeenAt = now;
    if (now - state.openSeenAt > 220) enterTopView("五指保持：牌堆切换为俯视视角");
    return;
  }
  if (!gesture.isOpen) state.openSeenAt = 0;

  if (state.ritualStage === "top" && gesture.swipeRight) {
    spreadTableau("右滑完成：牌面已经摊开");
    return;
  }

  if (state.ritualStage === "spread") {
    updateSelectionFromPoint(gesture.palm, true);
    if (gesture.waveDown || gesture.isStableFist) extractSelection("gesture");
    return;
  }

  if (state.ritualStage === "drawn" && gesture.isStableFist) {
    if (!state.fistSeenAt) state.fistSeenAt = now;
    if (now - state.fistSeenAt > 180) {
      els.status.textContent = "已识别握拳，重新伸开手掌即可解读";
      els.portal.classList.add("active");
    }
    return;
  }

  if (state.ritualStage === "drawn" && gesture.isStableOpen && state.fistSeenAt && now - state.fistSeenAt > 260 && now - state.fistSeenAt < 3200) {
    revealPendingReading("gesture");
    return;
  }

  if (!gesture.isFist && state.ritualStage === "drawn" && now - state.fistSeenAt > 3200) state.fistSeenAt = 0;
}

function getCameraHint() {
  const hints = {
    idle: "五指张开切换俯视",
    top: "手掌右滑摊开牌组",
    spread: state.spread === "three"
      ? "左右滑动框选，下挥或捏合四指依次选择 3 张牌"
      : "左右滑动框选，下挥或捏合四指选择卡牌",
    drawn: "握拳，张开五指，牌意显现",
    revealed: "点击立即抽牌，开始下一轮"
  };
  return hints[state.ritualStage] || hints.idle;
}

function getFallbackHint() {
  const hints = {
    idle: "点击牌组或左下角开启手势，进行占卜",
    top: "点击摊开牌组",
    spread: state.spread === "three"
      ? "点击依次选择 3 张牌"
      : "点击选择卡牌",
    drawn: "点击卡牌，牌意显现",
    revealed: "点击立即抽牌，开始下一轮"
  };
  return hints[state.ritualStage] || hints.idle;
}

function resetRitual() {
  state.ritualStage = "idle";
  state.selectedIndex = 0;
  state.pendingCards = [];
  state.pendingReading = null;
  state.tableauCards = createTableau();
  state.pointerTrail = [];
  state.smoothedPalm = null;
  state.stableOpenFrames = 0;
  state.stableFistFrames = 0;
  state.openSeenAt = 0;
  state.fistSeenAt = 0;
  state.lastStageAt = Date.now();
  els.deckZone.className = "deck-zone idle";
  els.deckHint.textContent = state.cameraReady ? getCameraHint() : getFallbackHint();
  els.drawnStage.innerHTML = "";
  els.drawnStage.classList.remove("single-card");
  document.body.classList.remove("reading-visible");
  renderTableau();
  hideSelection();
}

function enterTopView(message) {
  state.ritualStage = "top";
  markStageChange();
  els.deckZone.className = "deck-zone top-view";
  els.deckHint.textContent = state.cameraReady ? getCameraHint() : getFallbackHint();
  els.status.textContent = message;
  pulsePortal();
}

function spreadTableau(message) {
  state.ritualStage = "spread";
  state.selectedIndices = [];
  markStageChange();
  els.deckZone.className = "deck-zone spread";
  els.deckHint.textContent = state.cameraReady ? getCameraHint() : getFallbackHint();
  els.status.textContent = message;
  renderTableau();
  highlightCard(state.selectedIndex);
  pulsePortal();
}

function extractSelection(source) {
  // For gesture source, add the currently highlighted card to selection
  if (source === "gesture" && state.spread === "three") {
    if (!state.selectedIndices.includes(state.selectedIndex)) {
      state.selectedIndices.push(state.selectedIndex);
    }
    els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
      card.classList.toggle("selected", state.selectedIndices.includes(Number(card.dataset.index)));
    });
  }

  if (state.spread === "three" && state.selectedIndices.length < 3) {
    const hint = state.cameraReady
      ? `已选 ${state.selectedIndices.length}/3 张，下挥或捏合四指继续选择`
      : `已选 ${state.selectedIndices.length}/3 张，请继续点击选择`;
    els.deckHint.textContent = hint;
    state.lastGestureAt = Date.now();
    state.waveStart = null;
    return;
  }
  const cards = cardsFromSelection();
  state.pendingCards = cards;
  state.pendingReading = buildReading(cards, "", source);
  state.ritualStage = "drawn";
  markStageChange();
  els.deckZone.className = "deck-zone drawn";
  els.deckHint.textContent = state.cameraReady ? getCameraHint() : getFallbackHint();
  els.status.textContent = "向下挥动完成抽牌：握拳再伸开进入解读";
  renderCards(cards);
  els.title.textContent = "牌已抽出，等待解读手势";
  els.interpretation.innerHTML = `<p>牌已经离开牌堆。握拳，保持一下，再重新张开手掌，牌意会在这里显现。</p>`;
  document.body.classList.remove("reading-visible");
  pulsePortal();
}

function revealPendingReading(source) {
  if (!state.pendingCards.length || !state.pendingReading) return;
  renderInterpretation(state.pendingReading);
  els.title.textContent = state.pendingCards.length > 1 ? "三张牌意已显现" : "牌意已显现";
  document.body.classList.add("reading-visible");
  els.status.textContent = source === "gesture" ? "握拳再张开：牌意解读完成" : "点击兜底：牌意解读完成";
  saveHistory(state.pendingCards, state.pendingReading);
  state.ritualStage = "revealed";
  markStageChange();
  els.deckZone.className = "deck-zone drawn revealed";
  els.deckHint.textContent = "点击立即抽牌，开始下一轮";
  pulsePortal();
}

function advanceFallbackRitual() {
  if (state.ritualStage === "idle") enterTopView("点击牌堆：切换为俯视视角");
  else if (state.ritualStage === "top") spreadTableau("点击牌堆：牌面已经摊开");
  else if (state.ritualStage === "spread") extractSelection("deck");
  else if (state.ritualStage === "drawn") revealPendingReading("deck");
  else if (state.ritualStage === "revealed") resetRitual();
}

function performReading(source) {
  const count = state.spread === "three" ? 3 : 1;
  const selected = drawCards(count);
  const reading = buildReading(selected, "", source);

  renderCards(selected);
  renderInterpretation(reading);
  els.title.textContent = state.spread === "three" ? "三张牌阵已展开" : "此刻的牌已翻开";
  document.body.classList.add("reading-visible");
  saveHistory(selected, reading);
  state.pendingCards = selected;
  state.pendingReading = reading;
  state.ritualStage = "revealed";
  markStageChange();
  els.deckZone.className = "deck-zone drawn revealed";
  els.deckHint.textContent = "点击立即抽牌，开始下一轮";
}

function saveHistory(cards, reading) {
  state.history.unshift({
    id: crypto.randomUUID(),
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    question: "即时抽牌",
    cards,
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

function createTableau() {
  const pool = [...deck];
  return Array.from({ length: 7 }, (_, index) => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const card = pool.splice(randomIndex, 1)[0];
    return {
      ...card,
      tableauIndex: index,
      reversed: Math.random() > 0.72
    };
  });
}

function cardsFromSelection() {
  if (state.spread === "three") {
    return state.selectedIndices.map((index, roleIndex) => ({
      ...state.tableauCards[index],
      role: roles.three[roleIndex]
    }));
  }
  return [{
    ...state.tableauCards[state.selectedIndex],
    role: roles.single[0]
  }];
}

function buildReading(cards, question, source) {
  const details = cards.map((card) => {
    const meaning = card.reversed ? card.reversed : card.upright;
    const orientation = card.reversed ? "逆位" : "正位";
    return {
      title: card.role ? `${card.role}：${card.symbol} · ${card.name} ${orientation}` : `${card.symbol} · ${card.name} ${orientation}`,
      text: card.role ? `「${card.name}」以${orientation}的姿态出现在${card.role}位置。${meaning}\n\n💡 ${card.advice}` : `「${card.name}」以${orientation}的姿态出现。${meaning}\n\n💡 ${card.advice}`
    };
  });

  let synthesis;
  if (cards.length === 1) {
    const card = cards[0];
    const orient = card.reversed ? "逆位" : "正位";
    synthesis = `你抽到的这张「${card.name}」以${orient}出现，是你此刻最需要听见的声音。它不是一个简单的"好"或"坏"的判决，而是一面镜子，映照出你当下最核心的课题：\n\n${card.reversed ? "逆位提示你注意" : "正位鼓励你把握"}这个方向上的能量——${card.advice.replace("。", "")}。`;
  } else {
    const past = cards[0];
    const present = cards[1];
    const future = cards[2];
    const pastOrient = past.reversed ? "逆位" : "正位";
    const presentOrient = present.reversed ? "逆位" : "正位";
    const futureOrient = future.reversed ? "逆位" : "正位";

    synthesis = `这三张牌构成了一条从"曾经历过的"到"正在经历的"再到"可以成为的"完整路径——`;

    if (past.reversed && present.reversed) {
      synthesis += `过去的「${past.name}」(${pastOrient})和现在的「${present.name}」(${presentOrient})都处于逆行状态，说明一个旧有模式正在被反复拷问。这不是惩罚，而是一再出现直到你真正正视它为止的功课。`;
    } else if (past.reversed) {
      synthesis += `过去「${past.name}」(${pastOrient})的课题尚未完全消化，但现在的「${present.name}」(${presentOrient})已经站在了新的起点上。旧伤为现在的清醒提供了必不可少的角度。`;
    } else if (present.reversed) {
      synthesis += `过去「${past.name}」(${pastOrient})积累了稳定的基础，但现在的「${present.name}」(${presentOrient})显示你正处在一个需要暂停校准的节点。`;
    } else {
      synthesis += `过去「${past.name}」(${pastOrient})铺下的轨道，让现在的「${present.name}」(${presentOrient})得以稳定运行。两股能量一脉相承，正在把你推向一个关键的转折。`;
    }

    synthesis += `\n\n建议位给出的「${future.name}」(${futureOrient})指明了接下来最有效率的行动方向：${future.advice}`;

    if (future.reversed) {
      synthesis += `逆位的建议不是"不要做"，而是"换一种方式做"——阻力本身会告诉你正确的路径在哪。`;
    }
  }

  const sourceLine = source === "gesture"
    ? "这次抽牌由手势触发，带着强烈的即时性能量——你的身体比头脑更早知道答案。"
    : "这次抽牌由你主动确认，适合拿来做清醒的自我校准——意识参与的选择总是更有分量。";

  return [
    { title: "📖 触发方式", text: sourceLine },
    ...details,
    { title: "🔮 综合解读", text: synthesis }
  ];
}

function renderCards(cards) {
  const isSingle = cards.length === 1;
  els.drawnStage.classList.toggle("single-card", isSingle);
  els.drawnStage.innerHTML = cards
    .map(
      (card) => `
        <article class="tarot-card ${card.reversed ? "reversed" : ""}">
          ${!isSingle ? `<div class="card-role">${card.role}</div>` : ""}
          <div class="card-image-wrap">
            <img class="card-image" src="${card.image}" alt="${card.name}" />
          </div>
          <div class="card-bottom">
            <span class="card-name">${card.name}</span>
            <span class="card-orientation">${card.reversed ? "逆位" : "正位"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function markStageChange() {
  state.lastStageAt = Date.now();
  state.lastGestureAt = Date.now();
  state.pointerTrail = [];
  state.waveStart = null;
  state.prevFingertipsY = null;
  state.stableOpenFrames = 0;
  state.stableFistFrames = 0;
  state.openSeenAt = 0;
  lastHighlightedIndex = -1;
  lastPointerIndex = -1;
}

function renderTableau() {
  els.tableau.querySelectorAll(".gesture-card").forEach((node) => node.remove());
  state.tableauCards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "gesture-card";
    button.type = "button";
    button.dataset.index = String(index);
    button.style.setProperty("--i", index);
    button.innerHTML = `
      <span class="gesture-card-back"></span>
      <span class="card-pointer"></span>
    `;
    button.addEventListener("pointerenter", () => highlightCard(index));
    button.addEventListener("focus", () => highlightCard(index));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      updateSelectionByIndex(index);
      if (state.ritualStage === "spread") extractSelection("deck");
    });
    els.tableau.appendChild(button);
  });
}

let lastHighlightedIndex = -1;
let lastPointerIndex = -1;
function updateSelectionFromPoint(point, showPointer = false) {
  if (state.ritualStage !== "spread") return;
  const rect = els.tableau.getBoundingClientRect();
  const x = rect.left + point.x * rect.width;
  const y = rect.top + point.y * rect.height;
  let closest = 0;
  let closestDistance = Infinity;
  els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const distance = Math.hypot(centerX - x, centerY - y);
    if (distance < closestDistance) {
      closest = Number(card.dataset.index);
      closestDistance = distance;
    }
  });

  if (closest !== lastHighlightedIndex) {
    lastHighlightedIndex = closest;
    highlightCard(closest);
  }
  moveSelectionFrame(x, y);

  if (showPointer && closest !== lastPointerIndex) {
    lastPointerIndex = closest;
    els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
      card.classList.toggle("pointer-visible", Number(card.dataset.index) === closest);
    });
  } else if (!showPointer) {
    lastPointerIndex = -1;
    els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
      card.classList.remove("pointer-visible");
    });
  }
}

function handlePointerSelect(event) {
  if (state.cameraReady || state.ritualStage !== "spread") return;
  const rect = els.tableau.getBoundingClientRect();
  updateSelectionFromPoint({
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height
  });
}

function highlightCard(index) {
  state.selectedIndex = Math.max(0, Math.min(state.tableauCards.length - 1, index));

  els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
    const i = Number(card.dataset.index);
    card.classList.toggle("hovered", i === state.selectedIndex && !state.selectedIndices.includes(i));
  });

  const target = els.tableau.querySelector(`[data-index="${state.selectedIndex}"]`);
  if (!target) return;
  const rect = target.getBoundingClientRect();
  moveSelectionFrame(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height);
}

function updateSelectionByIndex(index) {
  state.selectedIndex = Math.max(0, Math.min(state.tableauCards.length - 1, index));

  if (state.spread === "three") {
    const pos = state.selectedIndices.indexOf(index);
    if (pos >= 0) {
      state.selectedIndices.splice(pos, 1);
    } else if (state.selectedIndices.length < 3) {
      state.selectedIndices.push(index);
    }
    els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
      const i = Number(card.dataset.index);
      card.classList.toggle("selected", state.selectedIndices.includes(i));
      card.classList.remove("hovered");
    });
  } else {
    state.selectedIndices = [index];
    els.tableau.querySelectorAll(".gesture-card").forEach((card) => {
      card.classList.toggle("selected", Number(card.dataset.index) === state.selectedIndex);
    });
  }

  const selected = els.tableau.querySelector(`[data-index="${state.selectedIndex}"]`);
  if (!selected) return;
  const rect = selected.getBoundingClientRect();
  moveSelectionFrame(rect.left + rect.width / 2, rect.top + rect.height / 2, rect.width, rect.height);
}

function moveSelectionFrame(centerX, centerY, width = 90, height = 132) {
  const rect = els.tableau.getBoundingClientRect();
  els.selection.style.opacity = "1";
  els.selection.style.width = `${width + 16}px`;
  els.selection.style.height = `${height + 16}px`;
  els.selection.style.transform = `translate(${centerX - rect.left - (width + 16) / 2}px, ${centerY - rect.top - (height + 16) / 2}px)`;
}

function hideSelection() {
  els.selection.style.opacity = "0";
}

function renderInterpretation(reading) {
  els.interpretation.innerHTML = reading
    .map(
      (item) => `
        <p><strong>${item.title}</strong></p><p class="reading-text">${item.text}</p>
      `
    )
    .join("");
}

function drawHandOverlay(results) {
  const canvas = els.canvas;
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  context.clearRect(0, 0, width, height);
  const points = results.multiHandLandmarks?.[0];
  if (!points) return;
  context.fillStyle = "rgba(230, 185, 93, 0.88)";
  context.strokeStyle = "rgba(116, 192, 167, 0.7)";
  context.lineWidth = 2;
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [17, 18], [18, 19], [19, 20],
    [0, 17]
  ];
  connections.forEach(([from, to]) => {
    const a = mirrorPoint(points[from]);
    const b = mirrorPoint(points[to]);
    context.beginPath();
    context.moveTo(a.x * width, a.y * height);
    context.lineTo(b.x * width, b.y * height);
    context.stroke();
  });
  points.forEach((point) => {
    const p = mirrorPoint(point);
    context.beginPath();
    context.arc(p.x * width, p.y * height, 4, 0, Math.PI * 2);
    context.fill();
  });
}

function clearHandCanvas() {
  const context = els.canvas.getContext("2d");
  context.clearRect(0, 0, els.canvas.width, els.canvas.height);
}

function pulsePortal() {
  els.portal.classList.remove("active");
  void els.portal.offsetWidth;
  els.portal.classList.add("active");
}

function renderHistory() {
  if (!els.history) return;
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
  if (els.question) els.question.value = item.question;
  renderCards(item.cards);
  els.interpretation.innerHTML = item.text
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");
  els.title.textContent = "已载入历史解读";
  document.body.classList.add("reading-visible");
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
