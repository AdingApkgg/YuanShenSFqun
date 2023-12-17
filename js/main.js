// Aplayer默认关闭歌词
function removelrc() {
  // 检测是否存在歌词按钮
  const lrcIcon = document.querySelector(".aplayer-icon-lrc");
  if (!lrcIcon) {
    return;
  }

  // 触发以后立刻移除监听
  observer.disconnect();

  // 稍作延时保证触发函数时存在按钮
  setTimeout(() => {
    // 以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
    lrcIcon.click();
  }, 1);
}

const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      removelrc();
    }
  }
});

const observerConfig = {
  childList: true, // 观察子节点的变化
  subtree: true, // 观察所有后代节点的变化
};

observer.observe(document, observerConfig); // 开始观察document节点的变化
// Aplayer配置
const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: true,
  theme: "#0eb83a",
  loop: "all",
  order: "list",
  preload: "metadata",
  volume: 0.2,
  lrcType: 3,
  listFolded: false,
  listMaxHeight: "36vh",
  audio: [
    {
      name: "让风告诉你",
      artist: "花玲&喵☆酱&宴宁&kinsen",
      url: "../audio/让风告诉你 - 花玲喵☆酱宴宁kinsen.mp3",
      cover: "../img/pic/让风告诉你 - 花玲喵☆酱宴宁kinsen.webp",
      lrc: "../lrc/让风告诉你 - 花玲喵☆酱宴宁kinsen.lrc",
    },
    {
      name: "门的另一端",
      artist: "多多poi&宴宁",
      url: "../audio/门的另一端 - 多多poi宴宁.mp3",
      cover: "../img/pic/门的另一端 - 多多poi宴宁.webp",
      lrc: "../lrc/门的另一端 - 多多poi宴宁.lrc",
    },
    {
      name: "璃云月海",
      artist: "宴宁鹿喑&kana&XY大甘蔗&杜冥鸦",
      url: "../audio/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.mp3",
      cover: "../img/pic/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.webp",
      lrc: "../lrc/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.lrc",
    },
    {
      name: "騎士王の誇り",
      artist: "川井憲次",
      url: "../audio/騎士王の誇り - 川井憲次.mp3",
      cover: "../img/pic/騎士王の誇り - 川井憲次.webp",
      lrc: "../lrc/騎士王の誇り - 川井憲次.lrc",
    },
    {
      name: "Ref：rain",
      artist: "Aimer",
      url: "../audio/Ref：rain - Aimer.mp3",
      cover: "../img/pic/Ref：rain - Aimer.webp",
      lrc: "../lrc/Ref：rain - Aimer.lrc",
    },
    {
      name: "カワキヲアメク",
      artist: "美波",
      url: "../audio/カワキヲアメク - 美波.mp3",
      cover: "../img/pic/カワキヲアメク - 美波.webp",
      lrc: "../lrc/カワキヲアメク - 美波.lrc",
    },
    {
      name: "God knows...",
      artist: "平野綾",
      url: "../audio/God knows... - 平野綾.mp3",
      cover: "../img/pic/God knows... - 平野綾.webp",
      lrc: "../lrc/God knows... - 平野綾.lrc",
    },
    {
      name: "光るなら",
      artist: "Goose house",
      url: "../audio/光るなら - Goose house.mp3",
      cover: "../img/pic/光るなら - Goose house.webp",
      lrc: "../lrc/光るなら - Goose house.lrc",
    },
    {
      name: "Rain",
      artist: "秦基博",
      url: "../audio/Rain - 秦基博.mp3",
      cover: "../img/pic/Rain - 秦基博.webp",
      lrc: "../lrc/Rain - 秦基博.lrc",
    },
    {
      name: "oath sign",
      artist: "LiSA",
      url: "../audio/oath sign - LiSA.mp3",
      cover: "../img/pic/oath sign - LiSA.webp",
      lrc: "../lrc/oath sign - LiSA.lrc",
    },
    {
      name: "Prologue",
      artist: "美波",
      url: "../audio/Prologue - 美波.mp3",
      cover: "../img/pic/Prologue - 美波.webp",
      lrc: "../lrc/Prologue - 美波.lrc",
    },
    {
      name: "ふわふわ時間",
      artist: "桜高軽音部",
      url: "../audio/ふわふわ時間 - 桜高軽音部.mp3",
      cover: "../img/pic/ふわふわ時間 - 桜高軽音部.webp",
      lrc: "../lrc/ふわふわ時間 - 桜高軽音部.lrc",
    },
    {
      name: "比翼の羽根",
      artist: "eufonius",
      url: "../audio/比翼の羽根 - eufonius.mp3",
      cover: "../img/pic/比翼の羽根 - eufonius.webp",
      lrc: "../lrc/比翼の羽根 - eufonius.lrc",
    },
    {
      name: "病名恋ワズライ",
      artist: "HoneyWorks",
      url: "../audio/病名恋ワズライ - HoneyWorks.mp3",
      cover: "../img/pic/病名恋ワズライ - HoneyWorks.webp",
      lrc: "../lrc/病名恋ワズライ - HoneyWorks.lrc",
    },
    {
      name: "渡月橋 ～君 想ふ～",
      artist: "仓木麻衣",
      url: "../audio/渡月橋 ～君 想ふ～ - 仓木麻衣.mp3",
      cover: "../img/pic/渡月橋 ～君 想ふ～ - 仓木麻衣.webp",
      lrc: "../lrc/渡月橋 ～君 想ふ～ - 仓木麻衣.lrc",
    },
    {
      name: "告白の夜",
      artist: "Ayasa绚沙",
      url: "../audio/告白の夜 - Ayasa绚沙.mp3",
      cover: "../img/pic/告白の夜 - Ayasa绚沙.webp",
      lrc: "../lrc/告白の夜 - Ayasa绚沙.lrc",
    },
    {
      name: "恋のうた",
      artist: "Yunomi&鬼頭明里",
      url: "../audio/恋のうた - Yunomiu0026鬼頭明里.mp3",
      cover: "../img/pic/恋のうた - Yunomiu0026鬼頭明里.webp",
      lrc: "../lrc/恋のうた - Yunomiu0026鬼頭明里.lrc",
    },
    {
      name: "鳥の詩",
      artist: "Lia",
      url: "../audio/鳥の詩 - Lia.mp3",
      cover: "../img/pic/鳥の詩 - Lia.webp",
      lrc: "../lrc/鳥の詩 - Lia.lrc",
    },
    {
      name: "群青",
      artist: "YOASOBI",
      url: "../audio/群青 - YOASOBI.mp3",
      cover: "../img/pic/群青 - YOASOBI.webp",
      lrc: "../lrc/群青 - YOASOBI.lrc",
    },
    {
      name: "心做し",
      artist: "majiko",
      url: "../audio/心做し - majiko.mp3",
      cover: "../img/pic/心做し - majiko.webp",
      lrc: "../lrc/心做し - majiko.lrc",
    },
  ],
});

var btnTop = document.getElementById("btnTop");
var scrollDown = document.getElementById("scroll-down");
var dumOnscroll = document.getElementById("dumOnscroll");
var aplayer = document.getElementById("aplayer");
var navTop = document.getElementById("navTop");
var rewardBtn = document.getElementById("rewardBtn");
var exitIconReward = document.getElementById("exitIconReward");
var tempTF = 0;

function topScroll() {
  document.documentElement.scrollTop = 0;
}
function rewardUi() {
  var rewardUl = document.getElementById("rewardUl");
  var divMask = document.getElementById("mask");
  if (tempTF == 0) {
    rewardUl.style.cssText = "display: flex;";
    divMask.style.cssText = "display: block;";
    tempTF = 1;
  } else if (tempTF == 1) {
    rewardUl.style.cssText = "display: none;";
    divMask.style.cssText = "display: none;";
    tempTF = 0;
  }
}
window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 300) {
    btnTop.style.cssText = "display: block;";
    aplayer.style.cssText = "display: block;";
    navTop.style.cssText = "display: block;";
  } else if (scroll < 300) {
    btnTop.style.cssText = "display: none;";
    aplayer.style.cssText = "display: none;";
    navTop.style.cssText = "display: none;";
  }
};
scrollDown.onclick = function () {
  var dumOnscroll = document.getElementById("boxTitle01One");
  document.documentElement.scrollTop = dumOnscroll.offsetTop;
};
btnTop.addEventListener("click", topScroll);
