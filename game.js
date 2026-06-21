const STORAGE_KEY = "noAcSummerSaveV1";

const GAME_CONFIG = {
  modes: {
    easy: {
      name: "简单模式",
      heatwaveMin: 5,
      heatwaveMax: 7,
      initialSan: 90,
      initialRoomTemp: 27,
      initialBodyTemp: 36.6,
      sleepOkayTemp: 29,
      studyNeed: 6,
      mealNeed: 2,
      badEventChance: 0.35,
      eventMin: 1,
      eventMax: 2,
      starterItems: true
    },
    hard: {
      name: "困难模式",
      heatwaveMin: 9,
      heatwaveMax: 14,
      initialSan: 75,
      initialRoomTemp: 29,
      initialBodyTemp: 36.8,
      sleepOkayTemp: 28,
      studyNeed: 8,
      mealNeed: 2.5,
      badEventChance: 0.58,
      eventMin: 2,
      eventMax: 3,
      starterItems: false
    }
  },
  orientations: {
    north: { name: "朝北", directSun: [5, 6], heatFactor: 0.82, nightCooling: 0.84, sunHours: "11:00-13:00", description: "直射 2 小时，夜间降温慢" },
    east: { name: "朝东", directSun: [1, 2, 3, 4, 5], heatFactor: 1.0, nightCooling: 1.0, sunHours: "7:00-12:00", description: "上午 5 小时直射" },
    south: { name: "朝南", directSun: [4, 5, 6, 7, 8, 9, 10, 11], heatFactor: 1.2, nightCooling: 0.92, sunHours: "10:00-18:00", description: "中午到下午 8 小时直射" },
    west: { name: "朝西", directSun: [8, 9, 10, 11, 12, 13, 14], heatFactor: 1.34, nightCooling: 0.72, sunHours: "14:00-21:00", description: "14:00-21:00 直射" }
  },
  floors: {
    low: { name: "低楼层", dayHeat: -0.2, topHeat: 0, windowRisk: 0.28, nightVent: 0.95, description: "白天稍凉，开窗风险高" },
    mid: { name: "中楼层", dayHeat: 0, topHeat: 0, windowRisk: 0.16, nightVent: 1, description: "均衡但不慈悲" },
    top: { name: "顶楼", dayHeat: 0.35, topHeat: 0.65, windowRisk: 0.12, nightVent: 1.18, description: "白天升温快，夜风略强" }
  },
  phases: [
    { id: "h06", name: "06:00", time: "6:00-7:00", outdoorPoint: 0.06, night: false, hour: 6 },
    { id: "h07", name: "07:00", time: "7:00-8:00", outdoorPoint: 0.12, night: false, hour: 7 },
    { id: "h08", name: "08:00", time: "8:00-9:00", outdoorPoint: 0.25, night: false, hour: 8 },
    { id: "h09", name: "09:00", time: "9:00-10:00", outdoorPoint: 0.4, night: false, hour: 9 },
    { id: "h10", name: "10:00", time: "10:00-11:00", outdoorPoint: 0.55, night: false, hour: 10 },
    { id: "h11", name: "11:00", time: "11:00-12:00", outdoorPoint: 0.7, night: false, hour: 11 },
    { id: "h12", name: "12:00", time: "12:00-13:00", outdoorPoint: 0.84, night: false, hour: 12 },
    { id: "h13", name: "13:00", time: "13:00-14:00", outdoorPoint: 0.94, night: false, hour: 13 },
    { id: "h14", name: "14:00", time: "14:00-15:00", outdoorPoint: 1.0, night: false, hour: 14 },
    { id: "h15", name: "15:00", time: "15:00-16:00", outdoorPoint: 1.0, night: false, hour: 15 },
    { id: "h16", name: "16:00", time: "16:00-17:00", outdoorPoint: 0.93, night: false, hour: 16 },
    { id: "h17", name: "17:00", time: "17:00-18:00", outdoorPoint: 0.85, night: false, hour: 17 },
    { id: "h18", name: "18:00", time: "18:00-19:00", outdoorPoint: 0.74, night: false, hour: 18 },
    { id: "h19", name: "19:00", time: "19:00-20:00", outdoorPoint: 0.64, night: false, hour: 19 },
    { id: "h20", name: "20:00", time: "20:00-21:00", outdoorPoint: 0.55, night: false, hour: 20 },
    { id: "h21", name: "21:00", time: "21:00-22:00", outdoorPoint: 0.46, night: true, hour: 21 },
    { id: "h22", name: "22:00", time: "22:00-23:00", outdoorPoint: 0.34, night: true, hour: 22 },
    { id: "bedtime", name: "睡前", time: "23:00-24:00", outdoorPoint: 0.23, night: true, hour: 23 }
  ],
  thresholds: {
    sanMin: 0,
    bodyFail: 39,
    sickTemp: 38.5,
    recoverTemp: 37.5,
    sleepBadFail: 3,
    logLimit: 80,
    requiredStudy: 5,
    requiredMeal: 2
  },
  inventoryLabels: {
    ice: "冰块",
    towel: "旧毛巾",
    clip: "夹子",
    spray: "喷雾瓶",
    icePack: "冰袋",
    earplug: "耳塞",
    shadeCloth: "遮阳布",
    mat: "凉席",
    fan: "二手风扇"
  },
  weatherEvents: [
    { id: "sahara", name: "撒哈拉热浪", text: "空气像被吹风机预热过。", effects: { highAdd: 3, nightCoolingFactor: 0.72, heatPenalty: 1 } },
    { id: "windless", name: "无风日", text: "窗户开了，空气没动。", effects: { ventFactor: 0.5 } },
    { id: "coldNight", name: "夜间冷空气", text: "晚上可能有真正的风，不是心理作用。", effects: { nightVentFactor: 2 } },
    { id: "stormHint", name: "雷阵雨预告", text: "云来了，雨未必来，闷湿先来了。", effects: { afternoonOutdoorDrop: 2, sanStart: -3, humid: 1 } },
    { id: "heatIsland", name: "城市热岛", text: "整座城市都像没关的电热毯。", effects: { topWestHeat: 0.8, nightCoolingFactor: 0.84 } },
    { id: "cloudyLuck", name: "阴天好运", text: "云层短暂站在你这边。", effects: { solarFactor: 0.6 } },
    { id: "muggy", name: "闷热日", text: "不热的时候也很难受。", effects: { naturalCoolingFactor: 0.62, sanHeatFactor: 1.25, humid: 1 } },
    { id: "dryWind", name: "干热风", text: "热，但至少味道传播没那么夸张。", effects: { heatFactor: 1.12, doorSmellFactor: 0.7 } },
    { id: "warmNight", name: "夜晚不降温", text: "夜晚只是把太阳关成了低功率。", effects: { lowAdd: 2, nightVentFactor: 0.62 } },
    { id: "coolMorning", name: "早晨短暂凉爽", text: "早晨有一小段可以假装自己住在北欧。", effects: { morningVentFactor: 1.6 } },
    { id: "noonBlast", name: "午后暴晒", text: "中午和下午的阳光很有事业心。", effects: { noonSolarFactor: 1.35 } },
    { id: "stagnantAir", name: "空气停滞", text: "门窗都开了，像在跟空气谈判。", effects: { crossVentFactor: 0.55 } },
    { id: "peak", name: "热浪峰值", text: "今天是本轮热浪的重点章节。", effects: { highAdd: 2, heatPenalty: 1.4 } },
    { id: "fakeCool", name: "假凉快", text: "天气 App 看起来温柔，房间完全不配合。", effects: { naturalCoolingFactor: 0.55 } },
    { id: "duskBackflow", name: "黄昏热回流", text: "傍晚热气开始回家。", effects: { eveningHeat: 0.75 } },
    { id: "morningCloud", name: "清晨云层", text: "上午阳光被云层拖住了一会儿。", effects: { morningSolarFactor: 0.65 } },
    { id: "eveningBreeze", name: "日落后大风", text: "21:00 后开窗或外排风扇效果增强。", effects: { eveningVentFactor: 1.7, strongWind: 1 } },
    { id: "dryThunder", name: "闷雷但不下雨", text: "雷声很努力，降温没有参与。", effects: { sanStart: -4 } },
    { id: "islandNight", name: "热岛夜", text: "睡前室外温度依然很有存在感。", effects: { lowAdd: 1.5, sleepPenalty: 2 } },
    { id: "luckyBreeze", name: "短时大风", text: "随机 1 个小时风力很强，开窗才可能降温。", effects: { luckyBreeze: 1, strongWind: 1 } }
  ],
  dormEvents: [
    { id: "hallCooking", name: "室友在走廊煮饭", text: "开门会闻到公共厨房史诗。", effects: { doorSanAdd: 4 } },
    { id: "smokeHall", name: "楼道有人抽烟", text: "走廊空气有自己的主线任务。", effects: { doorSanAdd: 5 } },
    { id: "crossWind", name: "隔壁开窗形成穿堂风", text: "门窗同时打开时，风终于有路线了。", effects: { crossVentFactor: 1.8 } },
    { id: "mosquito", name: "蚊子出现", text: "夜间生存游戏加入空中单位。", effects: { mosquito: 1 } },
    { id: "computerRoar", name: "电脑风扇狂转", text: "下一次学习会附赠热浪伴奏。", effects: { computerHeat: 0.8 } },
    { id: "mentorQuestion", name: "导师发来 quick question", text: "今日学习需求 +1，San 先扣为敬。", effects: { studyNeedAdd: 1, sanStart: -4 } },
    { id: "zoomTrap", name: "Zoom meeting 无法逃避", text: "今天认真学习以外的学习选择会有心理账单。", effects: { zoomTrap: 1 } },
    { id: "fridgeRoar", name: "冰箱疯狂散热", text: "冰箱在制造冰，也在制造夏天。", effects: { fridgeHeat: 0.8 } },
    { id: "iceWater", name: "冰箱里发现冰水", text: "冰箱里居然有文明遗迹。", effects: { grant: "ice" } },
    { id: "mysteryFood", name: "室友神秘食物", text: "打开冰箱可能影响精神健康。", effects: { fridgeSanRisk: 1 } },
    { id: "curtainHole", name: "窗帘破洞扩大", text: "遮阳系统进入抽象派阶段。", effects: { curtainPenalty: 0.25 } },
    { id: "findClip", name: "找到夹子", text: "夹子 +1。朴素但救命。", effects: { grant: "clip" } },
    { id: "findTowel", name: "找到旧毛巾", text: "旧毛巾 +1。它有故事，也有用途。", effects: { grant: "towel" } },
    { id: "findSpray", name: "找到喷雾瓶", text: "喷雾瓶 +1。小型人工降雨。", effects: { grant: "spray" } },
    { id: "findEarplug", name: "找到耳塞", text: "耳塞 +1。对抗噪音政治。", effects: { grant: "earplug" } },
    { id: "hotMattress", name: "床垫储热", text: "今晚床像白天的记忆棉。", effects: { bedPenalty: 3 } },
    { id: "coolFloor", name: "地板意外很凉", text: "地板今天看起来很有安全感。", effects: { floorBonus: 1 } },
    { id: "quietHall", name: "走廊突然安静", text: "开门惩罚降低，奇迹不常见。", effects: { doorSanFactor: 0.55 } },
    { id: "bbqDownstairs", name: "楼下烧烤", text: "低楼层开窗会获得烟火气。", effects: { lowWindowPenalty: 1 } },
    { id: "topMeltdown", name: "楼上也在崩溃", text: "顶楼群众互相确认还活着。", effects: { topSan: -3 } },
    { id: "lakeInvite", name: "朋友邀请去湖边", text: "特殊行动：去湖边。凉快，但会耽误学习。", effects: { specialLake: 1 } },
    { id: "libraryFull", name: "图书馆座位满了", text: "今天图书馆学习不可用。", effects: { libraryFull: 1 } },
    { id: "libraryAC", name: "图书馆有空调传说", text: "去图书馆学习可能接近人类舒适圈。", effects: { libraryAC: 1 } },
    { id: "coldCanteen", name: "食堂冷餐", text: "今天冷食不会显得那么绝望。", effects: { coldFoodBonus: 5 } },
    { id: "saunaKitchen", name: "厨房像桑拿", text: "煮饭升温额外增加。", effects: { stoveHeat: 1 } },
    { id: "powerOut", name: "停电一小时", text: "风扇不能用，San -5。", effects: { fanBlocked: 1, sanStart: -5 } },
    { id: "fireCheck", name: "宿舍消防检查", text: "长时间开门会被打扰。", effects: { fireCheck: 1 } },
    { id: "laundryHeat", name: "洗衣房热气入侵", text: "晚上门缝通风效果降低。", effects: { eveningDoorFactor: 0.55 } },
    { id: "forecastWrong", name: "手机天气预报误判", text: "今日最高温临时修正。", effects: { highRandom: 2 } },
    { id: "midnightBreeze", name: "半夜救命凉风", text: "睡前开窗可减少睡眠惩罚。", effects: { midnightBreeze: 1 } },
    { id: "construction", name: "窗外施工", text: "开窗会听到人生被钻孔。", effects: { windowSanAdd: 8 } },
    { id: "perfume", name: "邻居香水味过量", text: "开门 San -6，但至少不是烟味。", effects: { doorSanAdd: 3 } },
    { id: "foodSpoil", name: "食物坏掉", text: "如果今天不吃饭，睡前额外崩溃。", effects: { noFoodPenalty: 5 } },
    { id: "showerQueue", name: "冷水澡排队", text: "今天厨房卡新增冷水澡行动，有概率失败。", effects: { coldShower: 1 } },
    { id: "wetTowelWin", name: "晾湿毛巾成功", text: "湿毛巾效果增强。", effects: { wetTowelFactor: 1.35 } },
    { id: "wetTowelFail", name: "晾湿毛巾失败", text: "湿毛巾可能增加闷热感。", effects: { wetTowelSide: 1 } },
    { id: "findIcePack", name: "床边发现冰袋", text: "冰袋 +1。来源不明但温度明确。", effects: { grant: "icePack" } },
    { id: "fanBorrowed", name: "室友借风扇", text: "本时间段风扇不可用。", effects: { fanBorrowed: 1 } },
    { id: "fanNoise", name: "风扇异响", text: "开风扇会掉 San，但热风也算风。", effects: { fanNoise: 1 } },
    { id: "summerCollapse", name: "夏日崩溃感", text: "室温 >33°C 时 San 额外下降。", effects: { collapseOver33: 1 } }
  ],
  furniture: {
    window: { name: "窗户", icon: "🪟", hint: "通风、噪音、蚊子，以及一点希望。" },
    curtain: { name: "破窗帘", icon: "▥", hint: "遮阳能力取决于夹子和运气。" },
    computer: { name: "电脑", icon: "💻", hint: "学习会推进人生，也会推进室温。" },
    fridge: { name: "冰箱", icon: "🧊", hint: "冰块不是免费的，热量会转嫁到房间。" },
    door: { name: "门", icon: "🚪", hint: "走廊可能比房间凉，也可能更有味道。" },
    bed: { name: "床", icon: "🛏️", hint: "睡觉是每日结算，不是休闲选项。" },
    stove: { name: "厨房", icon: "🍳", hint: "热饭治 San，也治好了房间不够热的问题。" },
    wardrobe: { name: "衣柜", icon: "👕", hint: "翻找道具，或者整理出一点掌控感。" },
    fan: { name: "风扇", icon: "🌀", hint: "有风扇才有行动，没风扇只有凝视。" }
  }
};

let state = null;
let selectedMode = "easy";
let selectedOrientation = "east";
let selectedFloor = "mid";
let activeFurnitureId = null;

function init() {
  const saved = getSavedGame();
  if (saved) {
    selectedMode = saved.mode || "easy";
    selectedOrientation = saved.orientation || "east";
    selectedFloor = saved.floor || "mid";
  }
  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeModal();
  });
  render();
}

function startNewGame() {
  const mode = GAME_CONFIG.modes[selectedMode];
  const starterInventory = createEmptyInventory();
  if (mode.starterItems) {
    starterInventory.fan += 1;
    const starter = pickRandom(["towel", "clip", "spray", "ice", "mat"]);
    starterInventory[starter] += 1;
  }

  state = {
    gameStarted: true,
    gameOver: false,
    result: null,
    mode: selectedMode,
    orientation: selectedOrientation,
    floor: selectedFloor,
    day: 1,
    phase: 0,
    heatwaveLength: randomInt(mode.heatwaveMin, mode.heatwaveMax),
    outdoorTemp: 25,
    todayHigh: randomInt(33, 38),
    todayLow: randomInt(20, 25),
    previousHigh: null,
    roomTemp: mode.initialRoomTemp,
    bodyTemp: mode.initialBodyTemp,
    san: mode.initialSan,
    studyProgress: 0,
    totalStudyMissed: 0,
    totalStudyCompleted: 0,
    ateToday: false,
    mealProgress: 0,
    sleepBadStreak: 0,
    sickMode: false,
    sickDays: 0,
    floorSleepStreak: 0,
    coldFoodStreak: 0,
    snackStreak: 0,
    lowClothesChanged: false,
    deadlinePressure: false,
    inventory: starterInventory,
    roomState: createRoomState(),
    daily: createDailyState(),
    guideDismissed: false,
    log: []
  };

  addLog("热浪开始：你住进了一间没有空调、但很有性格的欧洲学生宿舍。", "warn");
  if (mode.starterItems) addLog("简单模式开局道具：二手风扇 +1，并随机获得 1 个基础小道具。", "good");
  generateDailyWeather();
  generateRandomEvents();
  updateOutdoorTempForPhase();
  saveGame();
  render();
}

function saveGame() {
  if (!state) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadGame() {
  const saved = getSavedGame();
  if (!saved) return;
  state = normalizeLoadedState(saved);
  saveGame();
  render();
}

function resetGame() {
  localStorage.removeItem(STORAGE_KEY);
  state = null;
  render();
}

function dismissGuide() {
  if (!state) return;
  state.guideDismissed = true;
  saveGame();
  render();
}

function getSavedGame() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    return null;
  }
}

function normalizeLoadedState(saved) {
  saved.mealProgress = saved.mealProgress ?? (saved.ateToday ? mealNeedForMode(saved.mode) : 0);
  saved.ateToday = saved.mealProgress >= mealNeedForMode(saved.mode);
  saved.inventory = { ...createEmptyInventory(), ...(saved.inventory || {}) };
  saved.roomState = { ...createRoomState(), ...(saved.roomState || {}) };
  saved.daily = { ...createDailyState(), ...(saved.daily || {}) };
  saved.daily.modifiers = { ...createModifiers(), ...(saved.daily.modifiers || {}) };
  saved.guideDismissed = saved.guideDismissed ?? false;
  saved.daily.windowAdjustedPhase = saved.daily.windowAdjustedPhase ?? -1;
  saved.daily.studyNeed = saved.daily.studyNeed || GAME_CONFIG.modes[saved.mode || "easy"].studyNeed;
  if (saved.phase >= GAME_CONFIG.phases.length) saved.phase = GAME_CONFIG.phases.length - 1;
  return saved;
}

function mealNeedForMode(modeId) {
  return GAME_CONFIG.modes[modeId || "easy"].mealNeed || GAME_CONFIG.thresholds.requiredMeal;
}

function render() {
  const app = document.getElementById("app");
  document.body.classList.toggle("night", state && isNightPhase());
  if (!state || !state.gameStarted) {
    app.innerHTML = renderStartScreen();
    bindStartControls();
    return;
  }
  if (state.gameOver) {
    app.innerHTML = renderEnding();
    return;
  }
  app.innerHTML = `
    <div class="game-layout">
      <header class="top-bar">${renderStatus()}</header>
      <main class="main-column">
        ${renderWeather()}
        ${renderRoom()}
      </main>
      <aside class="side-column">
        ${renderTasks()}
        ${renderInventory()}
        ${renderLog()}
      </aside>
    </div>
    ${renderGuide()}
  `;
}

function renderStartScreen() {
  const hasSave = !!getSavedGame();
  return `
    <section class="start-screen">
      <div class="start-card">
        <div class="title-row">
          <div>
            <h1>没有空调的夏天</h1>
            <p class="subtitle">No AC Summer: Dorm Survival</p>
          </div>
          <div class="sun-badge" aria-hidden="true">☀️</div>
        </div>
        <p class="intro-copy">
          你是一个住在欧洲学生宿舍里的留子。夏天来了，热浪来了，空调没有来。
          每天你必须吃饭、学习、睡觉，同时管理室温、体温和 San 值。热饭能救精神，电脑会升温，开门可能带来走廊气味，冰箱制冰也会把热量还给房间。
        </p>
        <div class="setup-grid">
          <div class="setup-card">
            <label for="modeSelect">模式</label>
            <select id="modeSelect">
              ${optionHtml("easy", "简单：5-7 天，San 较高", selectedMode)}
              ${optionHtml("hard", "困难：9-14 天，更热更脆", selectedMode)}
            </select>
          </div>
          <div class="setup-card">
            <label for="orientationSelect">房间朝向</label>
            <select id="orientationSelect">
              ${Object.entries(GAME_CONFIG.orientations).map(([id, item]) => optionHtml(id, `${item.name}：${item.description}`, selectedOrientation)).join("")}
            </select>
          </div>
          <div class="setup-card">
            <label for="floorSelect">楼层</label>
            <select id="floorSelect">
              ${Object.entries(GAME_CONFIG.floors).map(([id, item]) => optionHtml(id, `${item.name}：${item.description}`, selectedFloor)).join("")}
            </select>
          </div>
        </div>
        <div class="start-actions">
          <button class="primary-button" onclick="startNewGame()">新游戏</button>
          <button class="secondary-button" onclick="loadGame()" ${hasSave ? "" : "disabled"}>继续游戏</button>
          <button class="danger-button" onclick="resetGame()">重置游戏</button>
        </div>
      </div>
    </section>
  `;
}

function renderStatus() {
  const phase = currentPhase();
  return `
    <div class="status-grid">
      ${statusItem("天数", `${state.day}/${state.heatwaveLength}`)}
      ${statusItem("时间段", `${phase.name} ${phase.time}`)}
      ${statusItem("最高温", `${formatTemp(state.todayHigh)}`, heatClass(state.todayHigh))}
      ${statusItem("室外", `${formatTemp(state.outdoorTemp)}`, heatClass(state.outdoorTemp))}
      ${statusItem("室温", `${formatTemp(state.roomTemp)}`, heatClass(state.roomTemp))}
      ${statusItem("体温", `${formatTemp(state.bodyTemp)}`, bodyHeatClass(state.bodyTemp))}
      ${statusItem("San", `${Math.round(state.san)}/100`, sanClass(state.san))}
      ${statusItem("学习", `${formatNumber(state.studyProgress)}/${studyNeed()}`, state.studyProgress >= studyNeed() ? "heat-safe" : "heat-warm")}
      ${statusItem("吃饭", `${formatNumber(state.mealProgress)}/${formatNumber(mealNeed())}`, state.mealProgress >= mealNeed() ? "heat-safe" : "heat-warm")}
      ${statusItem("状态", `${state.sleepBadStreak} 晚${state.sickMode ? " / 生病" : ""}`, state.sickMode ? "heat-danger" : "")}
    </div>
  `;
}

function renderWeather() {
  const orientation = GAME_CONFIG.orientations[state.orientation];
  const floor = GAME_CONFIG.floors[state.floor];
  const sunlight = hasDirectSun(state.phase) ? "当前小时直射" : "当前小时无直射";
  const tip = makeDailyTip();
  return `
    <section class="weather-panel">
      <h2>今日天气</h2>
      <div class="weather-lines">
        ${weatherLine("温度区间", `${formatTemp(state.todayLow)} - ${formatTemp(state.todayHigh)}`)}
        ${weatherLine("天气事件", `${state.daily.weatherName}：${state.daily.weatherText}`)}
        ${weatherLine("宿舍事件", state.daily.eventNames.length ? state.daily.eventNames.join(" / ") : "今天宿舍暂时没有加戏")}
        ${weatherLine("直射时间", `${orientation.name} ${orientation.sunHours}，${sunlight}`)}
        ${weatherLine("房间条件", `${floor.name}，室外最低 ${formatTemp(state.todayLow)}，最高 ${formatTemp(state.todayHigh)}`)}
        ${weatherLine("今日提示", tip)}
      </div>
    </section>
  `;
}

function renderRoom() {
  return `
    <section class="panel">
      <h2>房间家具</h2>
      <div class="furniture-grid">
        ${Object.entries(GAME_CONFIG.furniture).map(([id, item]) => `
          <button class="furniture-card" onclick="openFurnitureModal('${id}')">
            <span class="furniture-top"><span class="furniture-name">${item.name}</span><span class="furniture-icon">${item.icon}</span></span>
            <span class="furniture-state">${furnitureStateText(id)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTasks() {
  const roomTarget = state.roomTemp <= 28;
  const danger = currentDangerText();
  return `
    <section class="panel">
      <h2>每日任务</h2>
      <div class="task-list">
        ${taskItem(state.mealProgress >= mealNeed(), "吃饭", `进度 ${formatNumber(state.mealProgress)}/${formatNumber(mealNeed())}，热饭 +2，冷食 +1，零食 +0.5。`)}
        ${taskItem(state.studyProgress >= studyNeed(), "学习", `进度 ${formatNumber(state.studyProgress)}/${studyNeed()}，每次学习最多 +1。`)}
        ${taskItem(roomTarget, "睡前目标", `23:00 前尽量 ≤28°C，目前 ${formatTemp(state.roomTemp)}。`, !roomTarget && state.phase >= 12)}
        ${taskItem(!danger, "主要危险", danger || "暂时还没有被热浪点名。", !!danger)}
      </div>
    </section>
  `;
}

function renderInventory() {
  const entries = Object.entries(state.inventory).filter(([, count]) => count > 0);
  return `
    <section class="panel">
      <h2>道具</h2>
      ${entries.length ? `<div class="inventory-grid">${entries.map(([id, count]) => `<div class="inventory-item">${GAME_CONFIG.inventoryLabels[id]} × ${count}</div>`).join("")}</div>` : `<p class="empty-inventory">你目前只有热空气。</p>`}
    </section>
  `;
}

function renderLog() {
  return `
    <section class="log-panel">
      <h2>事件日志</h2>
      <div class="log-list">
        ${state.log.map(item => `<div class="log-entry ${item.type || ""}">${escapeHtml(item.text)}</div>`).join("")}
      </div>
    </section>
  `;
}

function renderGuide() {
  if (state.guideDismissed) return "";
  return `
    <section class="guide-overlay" aria-label="新手指导">
      <div class="guide-card">
        <button class="guide-close" type="button" onclick="dismissGuide()" aria-label="关闭新手指导">×</button>
        <h2>新手指导</h2>
        <p>目标：熬过 ${state.heatwaveLength} 天热浪。每天 23:00-24:00 必须睡觉，睡前室温最好压到 28°C 附近。</p>
        <ul>
          <li>每天按小时行动。大多数家具行动会推进 1 小时。</li>
          <li>开窗、关窗、夜间大通风不耗时，但每小时只能调整一次窗户。</li>
          <li>学习：简单 6 小时，困难 8 小时；每次学习最多 +1。刷手机不学习，但会回复 San。</li>
          <li>吃饭：热饭 +2 但大幅升温；冷食 +1；零食 +0.5。</li>
          <li>21:00 才日落。21:00-24:00 是主要降温窗口。</li>
          <li>普通开窗不主动降温；需要大风、夜间冷空气，或风扇对窗外排热。</li>
          <li>门、窗、窗帘开着会每小时持续影响室温或 San。</li>
        </ul>
        <button class="primary-button" type="button" onclick="dismissGuide()">知道了</button>
      </div>
    </section>
  `;
}

function renderEnding() {
  const result = state.result;
  return `
    <section class="ending-panel">
      <div class="ending-card">
        <h1>${result.title}</h1>
        <p>${result.text}</p>
        <div class="ending-stats">
          <div class="ending-stat">坚持天数：${state.day}/${state.heatwaveLength}</div>
          <div class="ending-stat">最终室温：${formatTemp(state.roomTemp)}</div>
          <div class="ending-stat">最终体温：${formatTemp(state.bodyTemp)}</div>
          <div class="ending-stat">最终 San：${Math.round(state.san)}</div>
          <div class="ending-stat">学习达标天数：${state.totalStudyCompleted}</div>
          <div class="ending-stat">睡不好连续：${state.sleepBadStreak}</div>
        </div>
        <button class="primary-button" onclick="resetGame()">重新开始</button>
      </div>
    </section>
  `;
}

function openFurnitureModal(furnitureId) {
  if (!state || state.gameOver) return;
  activeFurnitureId = furnitureId;
  const item = GAME_CONFIG.furniture[furnitureId];
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalHint").textContent = item.hint;
  const actions = getFurnitureActions(furnitureId);
  document.getElementById("modalBody").innerHTML = `<div class="action-list">${actions.map(action => `
    <button class="action-button" onclick="performAction('${action.id}')" ${action.disabled ? "disabled" : ""}>
      <strong>${action.name}</strong>
      <span>${action.description}${action.disabledReason ? `（${action.disabledReason}）` : ""}</span>
    </button>
  `).join("")}</div>`;
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").setAttribute("aria-hidden", "false");
}

function performAction(actionId) {
  if (!state || state.gameOver) return;
  if (isSleepPhase() && !actionId.startsWith("sleep-")) {
    addLog("睡前时间到了。今天不再适合折腾家具，必须选择一种睡觉方式。", "warn");
    closeModal();
    render();
    return;
  }

  const before = snapshotNumbers();
  let consumed = true;

  switch (actionId) {
    case "open-window": actionOpenWindow(); consumed = false; break;
    case "close-window": actionCloseWindow(); consumed = false; break;
    case "night-vent": actionNightVent(); consumed = false; break;
    case "close-curtain": actionCloseCurtain(); break;
    case "repair-curtain": actionRepairCurtain(); break;
    case "wet-towel-curtain": actionWetTowelCurtain(); break;
    case "study-hard": actionStudyHard(); break;
    case "study-low": actionStudyLow(); break;
    case "phone-scroll": actionPhoneScroll(); break;
    case "library-study": actionLibraryStudy(); break;
    case "make-ice": actionMakeIce(); break;
    case "use-ice-body": actionUseIceBody(); break;
    case "use-ice-room": actionUseIceRoom(); break;
    case "open-fridge": actionOpenFridge(); break;
    case "open-door": actionOpenDoor(); break;
    case "crack-door": actionCrackDoor(); break;
    case "close-door": actionCloseDoor(); break;
    case "hot-meal": actionHotMeal(); break;
    case "cold-food": actionColdFood(); break;
    case "snack": actionSnack(); break;
    case "cold-shower": actionColdShower(); break;
    case "light-clothes": actionLightClothes(); break;
    case "search-wardrobe": actionSearchWardrobe(); break;
    case "tidy-wardrobe": actionTidyWardrobe(); break;
    case "fan-on": actionFanOn(); break;
    case "fan-wet": actionFanWet(); break;
    case "clean-fan": actionCleanFan(); break;
    case "fan-exhaust": actionFanExhaust(); break;
    case "lake-trip": actionLakeTrip(); break;
    case "use-spray": actionUseSpray(); break;
    case "sleep-normal": applySleep("normal"); consumed = false; break;
    case "sleep-floor": applySleep("floor"); consumed = false; break;
    case "sleep-towel": applySleep("towel"); consumed = false; break;
    case "sleep-icepack": applySleep("icepack"); consumed = false; break;
    default:
      addLog("这个行动还没接上按钮，热浪暂停了一秒。", "warn");
  }

  clampStateNumbers();
  if (!actionId.startsWith("sleep-")) {
    logDelta(before);
  }
  checkWinLose();
  closeModal();
  if (!state.gameOver && consumed) advancePhase();
  saveGame();
  render();
}

function advancePhase() {
  if (state.gameOver) return;
  if (state.phase >= GAME_CONFIG.phases.length - 1) {
    addLog("已经是睡前了。选择一种睡觉方式来结算今天。", "warn");
    return;
  }
  const before = snapshotNumbers();
  state.phase += 1;
  updateOutdoorTempForPhase();
  updateRoomTemp();
  updateBodyTemp();
  updateSan();
  logHourlyDelta(before);
  checkWinLose();
  saveGame();
}

function startNewDay() {
  state.day += 1;
  state.phase = 0;
  state.previousHigh = state.todayHigh;
  state.studyProgress = 0;
  state.ateToday = false;
  state.mealProgress = 0;
  state.lowClothesChanged = false;
  state.roomState.fanOn = false;
  state.roomState.wetTowelUsed = false;
  state.roomState.fridgeCooling = false;
  state.daily = createDailyState();

  if (state.sickMode) {
    state.sickDays += 1;
    state.san -= 5;
    addLog("生病模式持续：早晨 San -5，身体像正在加载失败。", "danger");
  }
  if (state.deadlinePressure) {
    state.san -= 3;
    addLog("deadline 压力还在，San -3。导师的邮件没有空调。", "warn");
  }

  generateDailyWeather();
  generateRandomEvents();
  updateOutdoorTempForPhase();
  updateRoomTemp();
  updateBodyTemp();
  checkWinLose();
  saveGame();
}

function generateDailyWeather() {
  const previous = state.previousHigh || state.todayHigh || randomInt(33, 38);
  let high = previous + randomInt(-3, 3);
  let low = randomFloat(20, 25);
  const event = pickRandom(GAME_CONFIG.weatherEvents);
  state.daily.weatherId = event.id;
  state.daily.weatherName = event.name;
  state.daily.weatherText = event.text;
  state.daily.modifiers = createModifiers();
  applyEffects(event.effects || {});
  if (state.daily.modifiers.highRandom) high += randomInt(-state.daily.modifiers.highRandom, state.daily.modifiers.highRandom);
  high += state.daily.modifiers.highAdd;
  low += state.daily.modifiers.lowAdd;
  state.todayHigh = clamp(high, Math.max(33, previous - 3), Math.min(38, previous + 3));
  state.todayLow = clamp(low, 20, 25);
  state.daily.luckyBreezePhase = state.daily.modifiers.luckyBreeze ? randomInt(0, GAME_CONFIG.phases.length - 2) : -1;
  addLog(`第 ${state.day} 天：${event.name}。室外最低 ${formatTemp(state.todayLow)}，最高 ${formatTemp(state.todayHigh)}，直射 ${sunHoursText()}。`, "warn");
}

function generateRandomEvents() {
  const mode = GAME_CONFIG.modes[state.mode];
  const count = randomInt(mode.eventMin, mode.eventMax);
  const pool = [...GAME_CONFIG.dormEvents];
  for (let i = 0; i < count; i += 1) {
    const event = pool.splice(randomInt(0, pool.length - 1), 1)[0];
    if (!event) continue;
    state.daily.eventIds.push(event.id);
    state.daily.eventNames.push(event.name);
    state.daily.eventTexts.push(event.text);
    applyEffects(event.effects || {});
    addLog(`${event.name}：${event.text}`, isBadEvent(event) ? "warn" : "good");
  }
  state.daily.studyNeed = GAME_CONFIG.modes[state.mode].studyNeed + state.daily.modifiers.studyNeedAdd;
  if (state.floor === "top" && state.daily.modifiers.topSan) state.san += state.daily.modifiers.topSan;
}

function updateOutdoorTempForPhase() {
  const phase = currentPhase();
  const point = phase.outdoorPoint;
  let temp = state.todayLow + (state.todayHigh - state.todayLow) * point;
  if (state.daily.modifiers.afternoonOutdoorDrop && phase.hour >= 15 && phase.hour <= 18) temp -= state.daily.modifiers.afternoonOutdoorDrop;
  if (phase.hour >= 21) temp += state.daily.modifiers.lowAdd * 0.45;
  state.outdoorTemp = clamp(temp, 18, 40);
}

function updateRoomTemp() {
  const orientation = GAME_CONFIG.orientations[state.orientation];
  const floor = GAME_CONFIG.floors[state.floor];
  const modifiers = state.daily.modifiers;
  const phase = currentPhase();
  const gap = state.outdoorTemp - state.roomTemp;
  let delta = 0;

  if (gap > 0) {
    delta += gap * (state.roomState.windowOpen ? 0.34 : 0.12);
  } else {
    const canCoolByWindow = state.roomState.windowOpen && (isStrongWindHour() || state.roomState.fanExhaust);
    if (canCoolByWindow) delta += gap * 0.24;
    else delta += gap * (state.roomState.windowOpen ? 0.0 : 0.025);
  }

  if (hasDirectSun(state.phase)) {
    let solar = randomFloat(0.45, 1.25) * orientation.heatFactor * (modifiers.solarFactor || 1) * (modifiers.heatFactor || 1);
    if (phase.hour < 11) solar *= modifiers.morningSolarFactor || 1;
    if (phase.hour >= 12 && phase.hour <= 16) solar *= modifiers.noonSolarFactor || 1;
    if (state.orientation === "south" && phase.hour >= 12 && phase.hour <= 17) solar += randomFloat(0.25, 0.6);
    if (state.orientation === "west" && phase.hour >= 16 && phase.hour <= 21) solar += randomFloat(0.35, 0.85);
    if (state.floor === "top") solar += randomFloat(0.25, 0.75) + floor.topHeat * 0.45;
    if (state.roomState.curtainClosed) {
      let block = randomFloat(0.35, 0.5) + (state.roomState.curtainRepaired ? 0.18 : 0) + state.roomState.shadeBonus * 0.08 + (state.inventory.shadeCloth > 0 ? 0.12 : 0);
      block -= modifiers.curtainPenalty || 0;
      solar *= clamp(1 - block, 0.22, 0.82);
    }
    delta += solar;
  } else {
    const storedHeat = Math.max(0, state.roomTemp - state.outdoorTemp) * 0.025 * (modifiers.naturalCoolingFactor || 1) * (modifiers.nightCoolingFactor || 1);
    delta -= storedHeat;
  }

  delta += randomFloat(0.08, 0.28);
  if (state.floor === "low" && !isNightPhase()) delta += floor.dayHeat;
  if (state.floor === "top" && phase.hour >= 12 && phase.hour <= 21) delta += 0.18;
  if (state.floor === "top" && state.orientation === "west" && modifiers.topWestHeat) delta += modifiers.topWestHeat * 0.5;
  if (phase.hour >= 18 && phase.hour <= 21 && modifiers.eveningHeat) delta += modifiers.eveningHeat;

  if (state.roomState.doorOpen) delta -= calculateVentAmount(state.roomState.windowOpen, true);
  if (state.roomState.fanOn && state.roomTemp > 30) delta -= 0.05;

  state.roomTemp = clamp(state.roomTemp + delta, 20, 45);
  if (state.roomTemp > 37 && !state.daily.heatWarningIssued) {
    addLog(`危险警告：室温 ${formatTemp(state.roomTemp)}，体温会上升更快。`, "danger");
    state.daily.heatWarningIssued = true;
  }
}
function updateBodyTemp() {
  let delta = 0;
  if (state.roomTemp < 28) delta -= randomFloat(0.04, 0.1);
  else if (state.roomTemp < 32) delta += randomFloat(0, 0.04);
  else if (state.roomTemp < 35) delta += randomFloat(0.03, 0.1);
  else if (state.roomTemp < 37) delta += randomFloat(0.08, 0.2);
  else delta += randomFloat(0.18, 0.42);

  if (state.san < 25) delta += 0.04;
  if (state.sickMode) delta += 0.06;
  if (state.roomState.fanOn) delta -= 0.08;
  if (state.lowClothesChanged) delta -= 0.04;

  state.bodyTemp = clamp(state.bodyTemp + delta, 35.8, 40.5);
  if (state.bodyTemp > GAME_CONFIG.thresholds.sickTemp) enterSickMode();
}

function updateSan() {
  let delta = 0;
  const heatFactor = state.daily.modifiers.sanHeatFactor || 1;
  if (state.roomTemp > 37) delta -= 3 * heatFactor;
  else if (state.roomTemp > 35) delta -= 1.5 * heatFactor;
  else if (state.roomTemp > 33) delta -= 0.75 * heatFactor;
  if (state.bodyTemp > 38.3) delta -= 2;
  else if (state.bodyTemp > 37.5) delta -= 1;
  if (state.sickMode) delta -= 2;
  if (state.roomState.windowOpen) {
    delta -= state.floor === "low" ? 0.7 : 0.35;
    if (hasDormEvent("construction")) delta -= 1.2;
    if (hasDormEvent("mosquito") && isNightPhase()) delta -= 0.8;
  }
  if (state.roomState.doorOpen) {
    delta -= 1.1 * (state.daily.modifiers.doorSanFactor || 1) + (state.daily.modifiers.doorSanAdd || 0) * 0.2;
  }
  if (state.roomState.curtainClosed && currentPhase().hour >= 8 && currentPhase().hour <= 20) delta -= 0.45;
  if (state.daily.modifiers.collapseOver33 && state.roomTemp > 33) delta -= 3;
  if (delta < 0) state.san += delta;
}

function applySleep(method) {
  if (!isSleepPhase()) {
    addLog("现在还不是睡前。床保持沉默。", "warn");
    return;
  }

  if (state.mealProgress < mealNeed()) {
    const missingMeal = mealNeed() - state.mealProgress;
    const penalty = Math.ceil(6 + missingMeal * 4 + (state.daily.modifiers.noFoodPenalty || 0));
    state.san -= penalty;
    state.bodyTemp += 0.08 + missingMeal * 0.03;
    addLog(`吃饭不足：${formatNumber(state.mealProgress)}/${formatNumber(mealNeed())}，睡前 San -${penalty}。`, "danger");
  }
  if (state.studyProgress < studyNeed()) {
    const penalty = state.daily.modifiers.studyNeedAdd ? 10 : 6;
    state.san -= penalty;
    state.totalStudyMissed += 1;
    addLog(`今天学习不足，睡前 San -${penalty}。`, "warn");
    if (state.totalStudyMissed >= 2 && !state.deadlinePressure) {
      state.deadlinePressure = true;
      addLog("连续学习不足，deadline 压力开启。之后每天 San 额外下降。", "danger");
    }
  } else {
    state.totalStudyCompleted += 1;
  }

  let effectiveTemp = state.roomTemp;
  if (state.inventory.mat > 0) effectiveTemp -= 1;
  if (state.inventory.fan > 0 && state.roomState.fanOn) effectiveTemp -= randomFloat(0.5, 1.0);
  if (method === "floor") {
    effectiveTemp -= state.daily.modifiers.floorBonus ? 1.5 : 0.6;
    state.bodyTemp -= randomFloat(0.1, state.daily.modifiers.floorBonus ? 0.45 : 0.28);
    state.san -= 4 + (state.floorSleepStreak > 0 ? 3 : 0);
    state.floorSleepStreak += 1;
    addLog("你选择地板睡觉。尊严下降，体温略有希望。", "warn");
  } else {
    state.floorSleepStreak = 0;
  }
  if (method === "towel") {
    if (state.inventory.towel <= 0) {
      addLog("没有旧毛巾，湿毛巾睡法失败，只能普通睡。", "warn");
    } else {
      state.bodyTemp -= randomFloat(0.3, 0.7) * (state.daily.modifiers.wetTowelFactor || 1);
      effectiveTemp -= 0.4;
      if (chance(state.daily.modifiers.humid ? 0.45 : 0.24)) {
        state.san -= 3;
        addLog("湿毛巾带来一点凉意，也带来一点潮湿人生。San -3。", "warn");
      }
    }
  }
  if (method === "icepack") {
    if (state.inventory.icePack > 0) {
      state.inventory.icePack -= 1;
      state.bodyTemp -= randomFloat(0.45, 0.9);
      effectiveTemp -= 1.1;
      addLog("冰袋抱睡：今晚你和冰袋建立了短期合作关系。", "good");
    } else if (state.inventory.ice > 0) {
      state.inventory.ice -= 1;
      state.bodyTemp -= randomFloat(0.25, 0.55);
      effectiveTemp -= 0.55;
      addLog("没有冰袋，你抱着冰块睡。逻辑不强，但有用。", "good");
    } else {
      addLog("没有冰袋或冰块，冰袋抱睡变成普通睡。", "warn");
    }
  }
  if (state.roomState.windowOpen && hasDormEvent("midnightBreeze")) effectiveTemp -= 1.2;
  if (hasDormEvent("mosquito") && state.inventory.earplug <= 0) {
    state.san -= 4;
    addLog("蚊子参与睡眠结算，San -4。", "warn");
  }
  if (hasDormEvent("hotMattress") && method === "normal") effectiveTemp += 1.2;
  effectiveTemp += (state.daily.modifiers.sleepPenalty || 0) * 0.35;

  let quality = "";
  if (effectiveTemp <= 26 && state.bodyTemp < 37.2) {
    quality = "完美睡眠";
    state.san += 12;
    state.sleepBadStreak = 0;
    state.bodyTemp = Math.max(36.6, state.bodyTemp - 0.45);
    addLog("完美睡眠：你没有空调，但今晚像有策略。San +12。", "good");
  } else if (effectiveTemp <= 28) {
    quality = "正常睡眠";
    state.san += state.sickMode ? 3 : 6;
    state.sleepBadStreak = 0;
    state.bodyTemp = Math.max(36.7, state.bodyTemp - 0.25);
    addLog("正常睡眠：热，但还没有离谱。San 恢复。", "good");
  } else if (effectiveTemp <= 31) {
    quality = "勉强睡眠";
    const loss = randomInt(4, 8);
    state.san -= loss;
    state.sleepBadStreak += 1;
    addLog(`勉强睡眠：醒了几次，San -${loss}。`, "warn");
  } else if (effectiveTemp <= 34) {
    quality = "热醒多次";
    const loss = randomInt(10, 18);
    state.san -= loss;
    state.bodyTemp += randomFloat(0.2, 0.5);
    state.sleepBadStreak += 1;
    addLog(`热醒多次：床像缓存了下午的太阳。San -${loss}。`, "danger");
  } else {
    quality = "几乎无法入睡";
    state.san -= 20;
    state.bodyTemp += 0.6;
    state.sleepBadStreak += 1;
    addLog("几乎无法入睡：你没有被热醒，因为基本没睡着。San -20。", "danger");
    if (chance(0.55)) enterSickMode();
  }

  if (state.bodyTemp < GAME_CONFIG.thresholds.recoverTemp && state.sickMode && ["完美睡眠", "正常睡眠"].includes(quality)) recoverFromSickMode();
  clampStateNumbers();
  checkWinLose();
  if (state.gameOver) return;

  if (state.day >= state.heatwaveLength) {
    finishGame(true);
    return;
  }
  startNewDay();
}

function checkWinLose() {
  if (!state || state.gameOver) return;
  if (state.san <= GAME_CONFIG.thresholds.sanMin) {
    finishGame(false, "San 归零", "你没有被热浪击败，你只是突然理解了为什么欧洲人夏天都在放假。请立刻离开这间精神桑拿房。");
  } else if (state.bodyTemp >= GAME_CONFIG.thresholds.bodyFail) {
    finishGame(false, "体温过高", "体温达到危险线。游戏结束，但现实里这应该叫求助。保持阴凉、补水、联系医疗支持。");
  } else if (state.sleepBadStreak >= GAME_CONFIG.thresholds.sleepBadFail) {
    finishGame(false, "连续睡不好", "连续三晚睡不好后，你开始和天花板建立长期凝视关系。热浪赢了。");
  } else if (state.sickMode && state.sickDays >= 2 && state.bodyTemp >= GAME_CONFIG.thresholds.recoverTemp) {
    finishGame(false, "生病未恢复", "生病状态持续太久，身体拒绝继续参与这场宿舍实验。热浪赢了。");
  }
}

function enterSickMode() {
  if (state.sickMode) return;
  state.sickMode = true;
  state.sickDays = 0;
  addLog("进入生病模式：体温过高，学习效率下降，睡眠恢复变差。", "danger");
}

function recoverFromSickMode() {
  state.sickMode = false;
  state.sickDays = 0;
  addLog("体温降回安全区并睡了一觉，生病模式解除。", "good");
}

function addLog(text, type = "") {
  if (!state) return;
  state.log.unshift({ text, type });
  state.log = state.log.slice(0, GAME_CONFIG.thresholds.logLimit);
}

function getFurnitureActions(id) {
  const sleepOnly = isSleepPhase();
  const actions = {
    window: [
      actionDef("open-window", "开窗", "不消耗小时。无大风/外排风扇时只能减缓升温，不能主动降温。", windowAlreadyAdjusted(), "本小时已调整窗户"),
      actionDef("close-window", "关窗", "不消耗小时。降低热空气进入，但室内热量散得更慢。", windowAlreadyAdjusted(), "本小时已调整窗户"),
      actionDef("night-vent", "夜间大通风", "不消耗小时。21:00 日落后，且大风或外排风扇时会明显降温。", !(currentPhase().hour >= 21) || windowAlreadyAdjusted(), !(currentPhase().hour >= 21) ? "21:00 后可用" : "本小时已调整窗户")
    ],
    curtain: [
      actionDef("close-curtain", "拉上窗帘", "降低阳光直射升温，可能影响学习心情。"),
      actionDef("repair-curtain", "修补窗帘", "夹子成功率更高，大成功可获得永久遮阳加成。"),
      actionDef("wet-towel-curtain", "湿毛巾挂窗帘", "需要旧毛巾，立即小幅降温，但可能闷。", state.inventory.towel <= 0, "需要旧毛巾")
    ],
    computer: [
      actionDef("study-hard", "认真学习", "学习 +1，每天需要 6-8 小时，电脑升温明显。"),
      actionDef("study-low", "低功耗学习", "学习 +0.5，升温较少但更占时间。"),
      actionDef("phone-scroll", "摸鱼刷手机", "不学习，稳定回复 San，但会消耗 1 小时。"),
      actionDef("library-study", "去图书馆学习", "房间不升温。座位满了会不可用。", hasDormEvent("libraryFull"), "图书馆座位满了")
    ],
    fridge: [
      actionDef("make-ice", "冻冰块", "冰块 +1，但冰箱散热会升室温。"),
      actionDef("use-ice-body", "使用冰块降体温", "冰块 -1，明显降低体温。", state.inventory.ice <= 0, "没有冰块"),
      actionDef("use-ice-room", "用冰块给房间续命", "冰块 -1，小幅降低室温。", state.inventory.ice <= 0, "没有冰块"),
      actionDef("open-fridge", "打开冰箱门冷静一下", "体温小降，室温上升，San 随机变化。")
    ],
    door: [
      actionDef("open-door", "开门通风", "降温比门缝强，但走廊事件会伤 San。"),
      actionDef("crack-door", "门缝通风", "小幅降温，风险较低。"),
      actionDef("close-door", "关门自闭", "可能恢复 San，但太热时失败。")
    ],
    bed: [
      actionDef("sleep-normal", "正常睡觉", "根据室温和体温结算睡眠。", !sleepOnly, "只能睡前"),
      actionDef("sleep-floor", "地板睡觉", "降低体感但掉尊严，连续睡更难受。", !sleepOnly, "只能睡前"),
      actionDef("sleep-towel", "湿毛巾睡法", "需要旧毛巾，降低体温但可能闷。", !sleepOnly || state.inventory.towel <= 0, !sleepOnly ? "只能睡前" : "需要旧毛巾"),
      actionDef("sleep-icepack", "冰袋抱睡", "需要冰袋或冰块，改善高温睡眠。", !sleepOnly || (state.inventory.icePack <= 0 && state.inventory.ice <= 0), !sleepOnly ? "只能睡前" : "需要冰袋或冰块")
    ],
    stove: [
      actionDef("hot-meal", "煮热饭", "吃饭 +2，San 恢复，但室温 +2.2 到 +4.5°C。"),
      actionDef("cold-food", "冷食", "吃饭 +1，几乎不升温。困难模式通常需要搭配第二次进食。"),
      actionDef("snack", "吃零食", "吃饭 +0.5，升温低，但 San 波动较差。"),
      actionDef("cold-shower", "冷水澡", "特殊事件行动，降低体温并恢复 San。", !hasDormEvent("showerQueue"), "今天没有冷水澡机会")
    ],
    wardrobe: [
      actionDef("light-clothes", "换轻薄衣服", "小幅降低体温，并减轻后续热惩罚。"),
      actionDef("search-wardrobe", "翻找降温道具", "随机获得道具或什么都没有，San -2。"),
      actionDef("tidy-wardrobe", "整理衣柜", "恢复一点 San，但劳动会热。"),
      actionDef("use-spray", "喷雾瓶降温", "喷雾瓶 -1，体温小降，San +2。", state.inventory.spray <= 0, "没有喷雾瓶")
    ],
    fan: [
      actionDef("fan-on", "开风扇", "不明显降室温，但降低体感。", state.inventory.fan <= 0 || hasDormEvent("powerOut") || hasDormEvent("fanBorrowed"), fanDisabledReason()),
      actionDef("fan-wet", "风扇 + 湿毛巾", "需要旧毛巾，降体温和小幅降室温。", state.inventory.fan <= 0 || state.inventory.towel <= 0 || hasDormEvent("powerOut"), state.inventory.fan <= 0 ? "没有风扇" : "需要旧毛巾且不能停电"),
      actionDef("fan-exhaust", "风扇对窗外排热", "需要先开窗。消耗 1 小时，室外更低时才会把室温往下拉。", state.inventory.fan <= 0 || !state.roomState.windowOpen || hasDormEvent("powerOut"), state.inventory.fan <= 0 ? "没有风扇" : "需要开窗且不能停电"),
      actionDef("clean-fan", "清理风扇灰尘", "San -2，后续风扇效果增强。", state.inventory.fan <= 0, "没有风扇")
    ]
  };
  if (id === "computer" && hasDormEvent("lakeInvite")) actions.computer.push(actionDef("lake-trip", "去湖边", "降低体温并恢复 San，但学习进度 -1。"));
  return actions[id] || [];
}

function actionOpenWindow() {
  state.roomState.windowOpen = true;
  markWindowAdjusted();
  let change = 0;
  if (state.outdoorTemp > state.roomTemp) {
    change = randomFloat(0.1, 0.4);
    state.roomTemp += change;
  } else if (isStrongWindHour() || state.roomState.fanExhaust) {
    change = -randomFloat(0.3, 0.9);
    state.roomTemp += change;
  }
  const risk = GAME_CONFIG.floors[state.floor].windowRisk + (hasDormEvent("construction") ? 0.18 : 0) + (hasDormEvent("bbqDownstairs") && state.floor === "low" ? 0.18 : 0);
  if (chance(risk)) {
    const sanLoss = randomInt(3, 8) + (state.daily.modifiers.windowSanAdd || 0);
    state.san -= sanLoss;
    addLog(`开窗：室外 ${formatTemp(state.outdoorTemp)}，室温 ${formatTemp(state.roomTemp)}，San -${sanLoss}。`, "warn");
  } else {
    addLog(`开窗：室外 ${formatTemp(state.outdoorTemp)}。${change < 0 ? `大风/外排使室温 ${formatDelta(change)}` : change > 0 ? `热空气进入，室温 ${formatDelta(change)}` : "无大风，室温不下降"}。`, change < 0 ? "good" : "warn");
  }
}

function actionCloseWindow() {
  state.roomState.windowOpen = false;
  markWindowAdjusted();
  const loss = state.roomTemp > 34 ? 2 : 1;
  state.san -= loss;
  addLog(`关窗：当前室外 ${formatTemp(state.outdoorTemp)}，室温 ${formatTemp(state.roomTemp)}。San -${loss}。`, "warn");
}

function actionNightVent() {
  state.roomState.windowOpen = true;
  markWindowAdjusted();
  let amount = 0;
  if (state.outdoorTemp < state.roomTemp && (isStrongWindHour() || state.roomState.fanExhaust)) {
    amount = randomFloat(0.8, 1.8) * GAME_CONFIG.floors[state.floor].nightVent;
    if (hasWeather("coldNight") || hasDormEvent("midnightBreeze")) amount *= 1.4;
    state.roomTemp -= amount;
  } else if (state.outdoorTemp > state.roomTemp) {
    amount = -randomFloat(0.1, 0.4);
    state.roomTemp -= amount;
  }
  if (chance(0.22 + GAME_CONFIG.floors[state.floor].windowRisk)) {
    const loss = state.inventory.earplug > 0 ? 2 : randomInt(4, 8);
    state.san -= loss;
    addLog(`夜间大通风：室外 ${formatTemp(state.outdoorTemp)}，室温变化 ${formatSigned(-amount, 1)}°C，San -${loss}。`, "warn");
  } else {
    addLog(`夜间大通风：室外 ${formatTemp(state.outdoorTemp)}，室温变化 ${formatSigned(-amount, 1)}°C。`, amount > 0 ? "good" : "warn");
  }
}
function actionCloseCurtain() {
  state.roomState.curtainClosed = true;
  const loss = currentPhase().hour >= 7 && currentPhase().hour <= 20 ? randomInt(4, 6) : 2;
  state.san -= loss;
  addLog(`拉上窗帘：后续直射升温下降，当前 San -${loss}。`, "warn");
}

function actionRepairCurtain() {
  const hasClip = state.inventory.clip > 0;
  if (hasClip) state.inventory.clip -= 1;
  const successChance = hasClip ? 0.82 : 0.45;
  if (chance(successChance)) {
    state.roomState.curtainRepaired = true;
    if (chance(0.18)) {
      state.roomState.shadeBonus += 1;
      addLog("修补窗帘大成功：遮阳加成永久 +1。", "good");
    } else {
      addLog("修补窗帘成功：今天的阳光少了一点机会。", "good");
    }
  } else {
    state.san -= 4;
    addLog("修补窗帘失败：夹子崩飞，窗帘更有个性，San -4。", "warn");
  }
}

function actionWetTowelCurtain() {
  state.roomState.wetTowelUsed = true;
  const cooling = randomFloat(0.3, 0.8) * (state.daily.modifiers.wetTowelFactor || 1);
  state.roomTemp -= cooling;
  const side = randomInt(2, state.daily.modifiers.humid || state.daily.modifiers.wetTowelSide ? 5 : 3);
  state.san -= side;
  addLog(`湿毛巾挂窗帘：室温 -${cooling.toFixed(1)}°C，但闷湿 San -${side}。`, "warn");
}

function actionStudyHard() {
  let progress = state.sickMode ? 0.5 : 1;
  state.studyProgress += progress;
  let heat = randomFloat(0.4, 0.9) + (state.daily.modifiers.computerHeat || 0);
  state.roomTemp += heat;
  let loss = randomInt(1, 3) + (state.roomTemp > 32 ? 1 : 0);
  state.san -= loss;
  if (state.roomTemp > 35) state.bodyTemp += 0.2;
  addLog(`认真学习：学习 +${formatNumber(progress)}，室温 +${heat.toFixed(1)}°C，San -${loss}。`, "warn");
}

function actionStudyLow() {
  let progress = state.sickMode ? 0.25 : 0.5;
  state.studyProgress += progress;
  const heat = randomFloat(0.1, 0.3);
  state.roomTemp += heat;
  const loss = randomInt(0, 2) + (hasDormEvent("zoomTrap") ? 6 : 0);
  state.san -= loss;
  addLog(`低功耗学习：学习 +${formatNumber(progress)}，室温 +${heat.toFixed(1)}°C，San -${loss}。`, "warn");
}

function actionPhoneScroll() {
  const heat = randomFloat(0.1, 0.2);
  const gain = state.studyProgress < studyNeed() ? randomInt(5, 7) : randomInt(7, 10);
  state.roomTemp += heat;
  state.san += gain;
  addLog(`摸鱼刷手机：学习 +0，室温 +${heat.toFixed(1)}°C，San +${gain}。`, "good");
}

function actionLibraryStudy() {
  state.studyProgress += state.sickMode ? 0.5 : 1;
  if (hasDormEvent("libraryAC")) {
    state.bodyTemp -= 0.3;
    state.san += 4;
    addLog("去图书馆学习：学习 +1，体温 -0.3°C，San +4。", "good");
  } else {
    if (state.todayHigh > 32) state.bodyTemp += randomFloat(0.1, 0.4);
    state.san -= 2;
    addLog("去图书馆学习：房间没升温，但路上像在穿越烤盘。学习推进。", "good");
  }
}

function actionMakeIce() {
  state.inventory.ice += 1;
  const heat = randomFloat(0.6, 1.4) + (state.daily.modifiers.fridgeHeat || 0);
  state.roomTemp += heat;
  state.san -= 1;
  addLog(`冻冰块：冰块 +1，室温 +${heat.toFixed(1)}°C，San -1。你知道这很荒谬。`, "warn");
}

function actionUseIceBody() {
  state.inventory.ice -= 1;
  const cool = randomFloat(0.3, state.bodyTemp > 37.3 ? 0.8 : 0.45);
  state.bodyTemp -= cool;
  state.san += 2;
  addLog(`使用冰块降体温：体温 -${cool.toFixed(1)}°C，San +2。`, "good");
}

function actionUseIceRoom() {
  state.inventory.ice -= 1;
  let cool = randomFloat(0.2, 0.6);
  if (state.roomTemp > 34) cool *= 0.6;
  state.roomTemp -= cool;
  addLog(`用冰块给房间续命：室温 -${cool.toFixed(1)}°C${state.roomTemp > 34 ? "，冰块像在挑战太阳" : ""}。`, "good");
}

function actionOpenFridge() {
  state.bodyTemp -= randomFloat(0.1, 0.3);
  state.roomTemp += randomFloat(0.4, 0.9);
  if (hasDormEvent("mysteryFood") && chance(0.45)) {
    state.san -= 4;
    addLog("打开冰箱门冷静一下：体温降了，室温升了，还看见室友神秘食物，San -4。", "warn");
  } else {
    state.san += chance(0.5) ? 2 : -3;
    addLog("打开冰箱门冷静一下：短暂有效，长期可疑。", "warn");
  }
}

function actionOpenDoor() {
  state.roomState.doorOpen = true;
  const cool = randomFloat(0.2, 1.0) * (state.daily.modifiers.crossVentFactor || 1) * (state.daily.modifiers.eveningDoorFactor || 1);
  state.roomTemp -= cool;
  let loss = randomInt(2, 8) + (state.daily.modifiers.doorSanAdd || 0);
  loss = Math.round(loss * (state.daily.modifiers.doorSanFactor || 1) * (state.daily.modifiers.doorSmellFactor || 1));
  if (hasDormEvent("fireCheck")) loss += 3;
  state.san -= loss;
  addLog(`开门通风：室温 -${cool.toFixed(1)}°C，走廊现实让 San -${loss}。`, loss > 6 ? "danger" : "warn");
}

function actionCrackDoor() {
  const cool = randomFloat(0.1, 0.5) * (state.daily.modifiers.eveningDoorFactor || 1);
  const loss = randomInt(1, 3);
  state.roomTemp -= cool;
  state.san -= loss;
  addLog(`门缝通风：室温 -${cool.toFixed(1)}°C，San -${loss}。`, "warn");
}

function actionCloseDoor() {
  state.roomState.doorOpen = false;
  if (state.roomTemp > 33) {
    addLog("关门自闭失败：热气还在，San 没恢复。", "warn");
  } else {
    const gain = randomInt(1, 3);
    state.san += gain;
    addLog(`关门自闭：至少世界安静了一点，San +${gain}。`, "good");
  }
}

function actionHotMeal() {
  addMealProgress(2);
  state.coldFoodStreak = 0;
  const gain = randomInt(8, 12);
  let heat = randomFloat(2.2, 4.5) + (state.daily.modifiers.stoveHeat || 0);
  if (currentPhase().hour >= 12 && currentPhase().hour <= 17) heat += 0.8;
  state.roomTemp += heat;
  state.san += gain;
  if (state.roomTemp > 32) state.bodyTemp += randomFloat(0.2, 0.4);
  addLog(`煮热饭：吃饭 +2，San +${gain}，室温 +${heat.toFixed(1)}°C。`, "warn");
}

function actionColdFood() {
  addMealProgress(1);
  state.coldFoodStreak += 1;
  state.roomTemp += 0.1;
  const gain = hasDormEvent("coldCanteen") ? 5 : randomInt(-2, 3) - (state.coldFoodStreak > 2 ? 2 : 0);
  state.san += gain;
  addLog(`冷食：吃饭 +1，室温 +0.1°C，San ${formatSigned(gain)}。`, gain >= 0 ? "good" : "warn");
}

function actionSnack() {
  addMealProgress(0.5);
  state.snackStreak += 1;
  state.roomTemp += randomFloat(0.1, 0.2);
  const gain = chance(0.5) ? 4 : -6 - (state.snackStreak > 1 ? 2 : 0);
  state.san += gain;
  addLog(`吃零食：吃饭 +0.5，室温 +0.1°C，San ${formatSigned(gain)}。`, gain > 0 ? "good" : "warn");
}

function actionColdShower() {
  if (chance(0.25)) {
    state.san -= 2;
    addLog("冷水澡排队失败：你获得了等待和 San -2。", "warn");
    return;
  }
  const cool = randomFloat(0.5, 1.0);
  state.bodyTemp -= cool;
  state.san += 5;
  addLog(`冷水澡成功：体温 -${cool.toFixed(1)}°C，San +5。`, "good");
}

function actionLightClothes() {
  const cool = state.lowClothesChanged ? randomFloat(0.03, 0.08) : randomFloat(0.1, 0.3);
  state.bodyTemp -= cool;
  state.lowClothesChanged = true;
  addLog(`换轻薄衣服：体温 -${cool.toFixed(1)}°C，后续热惩罚略低。`, "good");
}

function actionSearchWardrobe() {
  state.san -= 2;
  const found = pickRandom(["clip", "towel", "spray", "icePack", "earplug", "shadeCloth", "mat", "fan", "nothing", "nothing"]);
  if (found === "nothing") {
    if (chance(0.18)) {
      state.san += 4;
      addLog("翻找衣柜：什么都没找到，但你整理出一点人生秩序，San +2。", "good");
    } else {
      addLog("翻找衣柜：什么都没找到，San -2。热空气库存充足。", "warn");
    }
  } else {
    state.inventory[found] += 1;
    addLog(`翻找衣柜：找到 ${GAME_CONFIG.inventoryLabels[found]} +1。`, "good");
  }
}

function actionTidyWardrobe() {
  const heat = randomFloat(0.1, 0.3);
  state.roomTemp += heat;
  if (state.roomTemp > 34) {
    state.san -= 3;
    addLog("整理衣柜：太热了，劳动变成惩罚，San -3。", "warn");
  } else {
    const gain = randomInt(3, 6);
    state.san += gain;
    addLog(`整理衣柜：San +${gain}，室温 +${heat.toFixed(1)}°C。`, "good");
  }
}

function actionUseSpray() {
  state.inventory.spray -= 1;
  state.bodyTemp -= 0.2;
  state.san += 2;
  addLog("喷雾瓶降温：体温 -0.2°C，San +2。小型人工降雨完成。", "good");
}

function actionFanOn() {
  state.roomState.fanOn = true;
  let cool = randomFloat(0.1, 0.3) + (state.roomState.fanCleaned ? 0.1 : 0);
  state.bodyTemp -= cool;
  let gain = randomInt(2, 5);
  if (state.roomTemp > 35) gain -= 4;
  if (hasDormEvent("fanNoise")) gain -= 3;
  state.san += gain;
  addLog(`开风扇：体温 -${cool.toFixed(1)}°C，San ${formatSigned(gain)}${state.roomTemp > 35 ? "，吹出来的是热风" : ""}。`, gain >= 0 ? "good" : "warn");
}

function actionFanWet() {
  state.roomState.fanOn = true;
  state.roomState.wetTowelUsed = true;
  const bodyCool = randomFloat(0.3, 0.8) * (state.daily.modifiers.wetTowelFactor || 1);
  const roomCool = randomFloat(0.2, 0.5);
  state.bodyTemp -= bodyCool;
  state.roomTemp -= roomCool;
  if (state.daily.modifiers.humid && chance(0.45)) {
    state.san -= 4;
    addLog(`风扇 + 湿毛巾：体温 -${bodyCool.toFixed(1)}°C，室温 -${roomCool.toFixed(1)}°C，但闷热 San -4。`, "warn");
  } else {
    addLog(`风扇 + 湿毛巾：体温 -${bodyCool.toFixed(1)}°C，室温 -${roomCool.toFixed(1)}°C。`, "good");
  }
}

function actionFanExhaust() {
  state.roomState.fanOn = true;
  state.roomState.fanExhaust = true;
  if (state.outdoorTemp >= state.roomTemp) {
    const heat = randomFloat(0.1, 0.4);
    state.roomTemp += heat;
    state.san -= 1;
    addLog(`风扇外排：室外 ${formatTemp(state.outdoorTemp)} 不低于室温，室温 +${heat.toFixed(1)}°C，San -1。`, "warn");
    return;
  }
  const cool = randomFloat(0.5, 1.4) * (isStrongWindHour() ? 1.25 : 1);
  state.roomTemp -= cool;
  state.bodyTemp -= 0.05;
  state.san += 1;
  addLog(`风扇外排：室外 ${formatTemp(state.outdoorTemp)}，室温 -${cool.toFixed(1)}°C，San +1。`, "good");
}

function actionCleanFan() {
  state.san -= 2;
  state.roomState.fanCleaned = true;
  if (chance(0.35)) {
    state.san += 3;
    addLog("清理风扇灰尘：San 先 -2，但发现它还能撑几天，San +3。", "good");
  } else {
    addLog("清理风扇灰尘：San -2，后续风扇效果增强。", "warn");
  }
}

function actionLakeTrip() {
  state.bodyTemp -= randomFloat(0.4, 0.9);
  state.san += randomInt(6, 10);
  state.studyProgress = Math.max(0, state.studyProgress - 1);
  addLog("去湖边：体温下降，San 回来了一些，学习进度 -1。湖水没有导师。", "good");
}

function finishGame(won, title, text) {
  state.gameOver = true;
  if (won) {
    let endingTitle = "普通结局";
    let endingText = "你活下来了。房间没有变凉，但你变强了。";
    if (state.san > 65 && state.bodyTemp < 37.3 && state.totalStudyCompleted >= Math.floor(state.heatwaveLength * 0.7)) {
      endingTitle = "完美结局";
      endingText = "你没有空调，但你有策略。";
    } else if (state.totalStudyCompleted >= state.heatwaveLength - 1 && state.san < 35) {
      endingTitle = "学术结局";
      endingText = "论文推进了，人也快蒸发了。";
    } else if (state.bodyTemp < 37.2 && state.totalStudyMissed >= 2) {
      endingTitle = "躺平结局";
      endingText = "你保住了体温，也失去了导师的信任。";
    }
    state.result = { won: true, title: endingTitle, text: endingText };
    addLog(`胜利：${endingText}`, "good");
  } else {
    state.result = { won: false, title: title || "热浪失败", text: text || "热浪赢了，宿舍仍然没有空调。" };
    addLog(`失败：${state.result.text}`, "danger");
  }
  saveGame();
}

function createEmptyInventory() {
  return { ice: 0, towel: 0, clip: 0, spray: 0, icePack: 0, earplug: 0, shadeCloth: 0, mat: 0, fan: 0 };
}

function createRoomState() {
  return { windowOpen: false, curtainClosed: false, curtainRepaired: false, doorOpen: false, fanOn: false, fanExhaust: false, fanCleaned: false, wetTowelUsed: false, fridgeCooling: false, shadeBonus: 0, nightVentilationPrepared: false };
}

function createDailyState() {
  return { weatherId: "", weatherName: "", weatherText: "", eventIds: [], eventNames: [], eventTexts: [], modifiers: createModifiers(), studyNeed: GAME_CONFIG.modes[state?.mode || selectedMode].studyNeed, luckyBreezePhase: -1, heatWarningIssued: false, windowAdjustedPhase: -1 };
}

function createModifiers() {
  return { highAdd: 0, lowAdd: 0, solarFactor: 1, heatFactor: 1, naturalCoolingFactor: 1, nightCoolingFactor: 1, ventFactor: 1, nightVentFactor: 1, morningVentFactor: 1, morningSolarFactor: 1, noonSolarFactor: 1, eveningVentFactor: 1, crossVentFactor: 1, doorSmellFactor: 1, doorSanFactor: 1, doorSanAdd: 0, windowSanAdd: 0, studyNeedAdd: 0 };
}

function applyEffects(effects) {
  const modifiers = state.daily.modifiers;
  Object.entries(effects).forEach(([key, value]) => {
    if (key === "grant") {
      state.inventory[value] = (state.inventory[value] || 0) + 1;
    } else if (["solarFactor", "heatFactor", "naturalCoolingFactor", "nightCoolingFactor", "ventFactor", "nightVentFactor", "morningVentFactor", "morningSolarFactor", "noonSolarFactor", "eveningVentFactor", "crossVentFactor", "doorSmellFactor", "doorSanFactor", "eveningDoorFactor", "wetTowelFactor"].includes(key)) {
      modifiers[key] = (modifiers[key] || 1) * value;
    } else {
      modifiers[key] = (modifiers[key] || 0) + value;
    }
  });
  if (effects.sanStart) state.san += effects.sanStart;
}

function calculateVentAmount(windowOpen, doorOpen) {
  if (!doorOpen && !windowOpen) return 0;
  if (state.outdoorTemp >= state.roomTemp) return -randomFloat(0.05, 0.25);
  let base = doorOpen ? randomFloat(0.1, 0.45) : 0;
  if (windowOpen && (isStrongWindHour() || state.roomState.fanExhaust)) base += randomFloat(0.25, 0.9);
  if (windowOpen && doorOpen) base *= state.daily.modifiers.crossVentFactor || 1;
  if (isNightPhase()) base *= state.daily.modifiers.nightVentFactor || 1;
  if (currentPhase().hour < 9) base *= state.daily.modifiers.morningVentFactor || 1;
  if (currentPhase().hour >= 21) base *= state.daily.modifiers.eveningVentFactor || 1;
  return base * ventModifier();
}

function ventModifier() {
  let factor = state.daily.modifiers.ventFactor || 1;
  if (state.daily.luckyBreezePhase === state.phase) factor *= 2.2;
  if (hasWeather("coldNight") && isNightPhase()) factor *= 1.8;
  return factor;
}

function hasDirectSun(phaseIndex) {
  return GAME_CONFIG.orientations[state.orientation].directSun.includes(phaseIndex);
}

function hasWeather(id) {
  return state.daily.weatherId === id;
}

function hasDormEvent(id) {
  return state.daily.eventIds.includes(id);
}

function currentPhase() {
  return GAME_CONFIG.phases[state.phase];
}

function isNightPhase() {
  return currentPhase().night;
}

function isSleepPhase() {
  return state.phase === GAME_CONFIG.phases.length - 1;
}

function isStrongWindHour() {
  return hasWeather("coldNight") && isNightPhase() || hasWeather("eveningBreeze") && currentPhase().hour >= 21 || state.daily.luckyBreezePhase === state.phase;
}

function sunHoursText() {
  return GAME_CONFIG.orientations[state.orientation].sunHours;
}

function windowAlreadyAdjusted() {
  return state.daily.windowAdjustedPhase === state.phase;
}

function markWindowAdjusted() {
  state.daily.windowAdjustedPhase = state.phase;
}

function mealNeed() {
  return GAME_CONFIG.modes[state.mode].mealNeed || GAME_CONFIG.thresholds.requiredMeal;
}

function addMealProgress(amount) {
  state.mealProgress = clamp((state.mealProgress || 0) + amount, 0, mealNeed());
  state.ateToday = state.mealProgress >= mealNeed();
}

function studyNeed() {
  return state.daily.studyNeed || GAME_CONFIG.modes[state.mode].studyNeed || GAME_CONFIG.thresholds.requiredStudy;
}

function clampStateNumbers() {
  state.san = clamp(state.san, -10, 100);
  state.roomTemp = clamp(state.roomTemp, 12, 44);
  state.bodyTemp = clamp(state.bodyTemp, 35.5, 41);
  Object.keys(state.inventory).forEach(key => state.inventory[key] = Math.max(0, Math.floor(state.inventory[key])));
}

function snapshotNumbers() {
  return { roomTemp: state.roomTemp, bodyTemp: state.bodyTemp, san: state.san };
}

function logDelta(before) {
  const room = state.roomTemp - before.roomTemp;
  const body = state.bodyTemp - before.bodyTemp;
  const san = state.san - before.san;
  if (Math.abs(room) >= 0.15 || Math.abs(body) >= 0.05 || Math.abs(san) >= 1) {
    addLog(`行动影响：室温 ${formatSigned(room, 1)}°C，体温 ${formatSigned(body, 1)}°C，San ${formatSigned(san, 0)}。`, san < -6 || body > 0.4 ? "warn" : "");
  }
}

function logHourlyDelta(before) {
  const room = state.roomTemp - before.roomTemp;
  const body = state.bodyTemp - before.bodyTemp;
  const san = state.san - before.san;
  if (Math.abs(room) >= 0.5 || Math.abs(body) >= 0.12 || san <= -3) {
    addLog(`${currentPhase().time}：室外 ${formatTemp(state.outdoorTemp)}，室温 ${formatSigned(room, 1)}°C，体温 ${formatSigned(body, 1)}°C，San ${formatSigned(san, 0)}。`, room > 1.2 || body > 0.25 || san <= -5 ? "warn" : "");
  }
}

function bindStartControls() {
  const mode = document.getElementById("modeSelect");
  const orientation = document.getElementById("orientationSelect");
  const floor = document.getElementById("floorSelect");
  if (mode) mode.addEventListener("change", event => selectedMode = event.target.value);
  if (orientation) orientation.addEventListener("change", event => selectedOrientation = event.target.value);
  if (floor) floor.addEventListener("change", event => selectedFloor = event.target.value);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function optionHtml(value, label, selected) {
  return `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`;
}

function statusItem(label, value, className = "") {
  return `<div class="status-item"><span class="status-label">${label}</span><span class="status-value ${className}">${value}</span>${label === "室温" ? meter(roomTempPercent(), heatClass(state.roomTemp)) : ""}</div>`;
}

function weatherLine(label, value) {
  return `<div class="weather-line"><span>${label}</span><strong>${value}</strong></div>`;
}

function taskItem(done, title, detail, danger = false) {
  const cls = done ? "task-done" : danger ? "task-danger" : "";
  return `<div class="task-item ${cls}"><span class="task-mark">${done ? "✓" : danger ? "!" : "·"}</span><div><strong>${title}</strong><br><span>${detail}</span></div></div>`;
}

function meter(percent, className) {
  const color = className === "heat-danger" ? "#c83232" : className === "heat-hot" ? "#e15f37" : className === "heat-warm" ? "#e8a525" : "#4b9b9a";
  return `<div class="meter"><div class="meter-fill" style="width:${clamp(percent, 0, 100)}%;background:${color}"></div></div>`;
}

function roomTempPercent() {
  return ((state.roomTemp - 22) / 17) * 100;
}

function furnitureStateText(id) {
  const s = state.roomState;
  const texts = {
    window: s.windowOpen ? `开着：${isStrongWindHour() || s.fanExhaust ? "可降温" : "只减缓升温"}。` : "关着：减少热空气进入。",
    curtain: `${s.curtainClosed ? "已拉上" : "没拉"}${s.curtainRepaired ? "，已修补" : "，破洞可见"}`,
    computer: `学习 ${formatNumber(state.studyProgress)}/${studyNeed()}。每小时最多 +1。`,
    fridge: `冰块 ${state.inventory.ice}，冰袋 ${state.inventory.icePack}。`,
    door: s.doorOpen ? "开着：走廊正在进入房间。" : "关着：自闭但安静。",
    bed: isSleepPhase() ? "睡前：请选择今晚怎么活。" : `睡不好连续 ${state.sleepBadStreak} 天。`,
    stove: `吃饭 ${formatNumber(state.mealProgress)}/${formatNumber(mealNeed())}。热饭 +2，冷食 +1。`,
    wardrobe: "可换衣、翻找道具或整理。",
    fan: state.inventory.fan > 0 ? (s.fanOn ? "开着：体感略有救。" : "有风扇：未开启。") : "你还没有风扇。"
  };
  return texts[id] || "";
}

function makeDailyTip() {
  if (hasWeather("coldNight")) return "21:00 后开窗有降温机会；无风时开窗不主动降温。";
  if (hasWeather("windless")) return "无风日：开窗主要减缓升温，外排风扇更重要。";
  if (state.orientation === "west") return "西向直射 14:00-21:00，14:00 前拉窗帘收益最高。";
  if (state.roomTemp > 33) return "室温 >33°C：优先降体温或减少电脑/热饭升温。";
  return `今日室外 ${formatTemp(state.todayLow)}-${formatTemp(state.todayHigh)}，直射 ${sunHoursText()}。`;
}

function currentDangerText() {
  if (state.bodyTemp >= 38.5) return "体温过高，已经进入生病风险。";
  if (state.bodyTemp >= 37.8) return "体温偏高，尽快用冰、风扇或冷水澡降温。";
  if (state.roomTemp >= 36) return "室温危险，继续升温会快速推高体温。";
  if (state.san <= 25) return "San 太低，任何坏睡眠都可能终结游戏。";
  if (isSleepPhase() && state.roomTemp > 31) return "睡前室温过高，今晚很难睡。";
  return "";
}

function fanDisabledReason() {
  if (state.inventory.fan <= 0) return "没有风扇";
  if (hasDormEvent("powerOut")) return "停电中";
  if (hasDormEvent("fanBorrowed")) return "室友借走了";
  return "";
}

function actionDef(id, name, description, disabled = false, disabledReason = "") {
  return { id, name, description, disabled, disabledReason };
}

function isBadEvent(event) {
  return /San|惩罚|不能|升温|失败|热|烟|蚊|施工|停电|崩溃|破洞|满了/.test(event.text + event.name);
}

function heatClass(temp) {
  if (temp >= 35) return "heat-danger";
  if (temp >= 32) return "heat-hot";
  if (temp >= 28) return "heat-warm";
  return "heat-safe";
}

function bodyHeatClass(temp) {
  if (temp >= 38.5) return "heat-danger";
  if (temp >= 37.8) return "heat-hot";
  if (temp >= 37.2) return "heat-warm";
  return "heat-safe";
}

function sanClass(san) {
  if (san <= 20) return "heat-danger";
  if (san <= 40) return "heat-hot";
  if (san <= 60) return "heat-warm";
  return "heat-safe";
}

function formatNumber(value) {
  return Number(value).toFixed(Number.isInteger(value) ? 0 : 1);
}

function formatTemp(value) {
  return `${Number(value).toFixed(1)}°C`;
}

function formatDelta(value) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}°C`;
}

function formatSigned(value, digits = 0) {
  return `${value >= 0 ? "+" : ""}${Number(value).toFixed(digits)}`;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function chance(probability) {
  return Math.random() < probability;
}

function pickRandom(array) {
  return array[randomInt(0, array.length - 1)];
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

window.addEventListener("DOMContentLoaded", init);
