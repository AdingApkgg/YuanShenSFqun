const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#0eb83a',
    loop: 'all',
    order: 'list',
    preload: 'metadata',
    volume: 0.2,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: '36vh',
    audio: [
        {
            name: '让风告诉你',
            artist: '花玲&喵☆酱&宴宁&kinsen',
            url: './Audio-and-video/Music/让风告诉你 - 花玲喵☆酱宴宁kinsen.mp3',
            cover: './Audio-and-video/Pic/让风告诉你 - 花玲喵☆酱宴宁kinsen.jpg',
            lrc: './Audio-and-video/Lrc/让风告诉你 - 花玲喵☆酱宴宁kinsen.lrc',
        },
        {
            name: '门的另一端',
            artist: '多多poi&宴宁',
            url: './Audio-and-video/Music/门的另一端 - 多多poi宴宁.mp3',
            cover: './Audio-and-video/Pic/门的另一端 - 多多poi宴宁.jpg',
            lrc: './Audio-and-video/Lrc/门的另一端 - 多多poi宴宁.lrc',
        },
        {
            name: '璃云月海',
            artist: '宴宁鹿喑&kana&XY大甘蔗&杜冥鸦',
            url: './Audio-and-video/Music/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.mp3',
            cover: './Audio-and-video/Pic/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.jpg',
            lrc: './Audio-and-video/Lrc/璃云月海 - 宴宁鹿喑kanaXY大甘蔗杜冥鸦.lrc',
        },
        {
            name: '騎士王の誇り',
            artist: '川井憲次',
            url: './Audio-and-video/Music/騎士王の誇り - 川井憲次.mp3',
            cover: './Audio-and-video/Pic/騎士王の誇り - 川井憲次.jpg',
            lrc: './Audio-and-video/Lrc/騎士王の誇り - 川井憲次.lrc',
        },
        {
            name: 'Ref：rain',
            artist: 'Aimer',
            url: './Audio-and-video/Music/Ref：rain - Aimer.mp3',
            cover: './Audio-and-video/Pic/Ref：rain - Aimer.jpg',
            lrc: './Audio-and-video/Lrc/Ref：rain - Aimer.lrc',
            theme: '#e95295',
        },
        {
            name: 'カワキヲアメク',
            artist: '美波',
            url: './Audio-and-video/Music/カワキヲアメク - 美波.mp3',
            cover: './Audio-and-video/Pic/カワキヲアメク - 美波.png',
            lrc: './Audio-and-video/Lrc/カワキヲアメク - 美波.lrc',
        },
        {
            name: 'God knows...',
            artist: '平野綾',
            url: './Audio-and-video/Music/God knows... - 平野綾.mp3',
            cover: './Audio-and-video/Pic/God knows... - 平野綾.png',
            lrc: './Audio-and-video/Lrc/God knows... - 平野綾.lrc',
        },
        {
            name: '光るなら',
            artist: 'Goose house',
            url: './Audio-and-video/Music/光るなら - Goose house.mp3',
            cover: './Audio-and-video/Pic/光るなら - Goose house.jpg',
            lrc: './Audio-and-video/Lrc/光るなら - Goose house.lrc',
        },
        {
            name: 'Rain',
            artist: '秦基博',
            url: './Audio-and-video/Music/Rain - 秦基博.mp3',
            cover: './Audio-and-video/Pic/Rain - 秦基博.jpg',
            lrc: './Audio-and-video/Lrc/Rain - 秦基博.lrc',
        },
        {
            name: 'oath sign',
            artist: 'LiSA',
            url: './Audio-and-video/Music/oath sign - LiSA.mp3',
            cover: './Audio-and-video/Pic/oath sign - LiSA.jpg',
            lrc: './Audio-and-video/Lrc/oath sign - LiSA.lrc',
        },
        {
            name: 'Prologue',
            artist: '美波',
            url: './Audio-and-video/Music/Prologue - 美波.mp3',
            cover: './Audio-and-video/Pic/Prologue - 美波.png',
            lrc: './Audio-and-video/Lrc/Prologue - 美波.lrc',
        },
        {
            name: 'ふわふわ時間',
            artist: '桜高軽音部',
            url: './Audio-and-video/Music/ふわふわ時間 - 桜高軽音部.mp3',
            cover: './Audio-and-video/Pic/ふわふわ時間 - 桜高軽音部.jpg',
            lrc: './Audio-and-video/Lrc/ふわふわ時間 - 桜高軽音部.lrc',
        },
        {
            name: '比翼の羽根',
            artist: 'eufonius',
            url: './Audio-and-video/Music/比翼の羽根 - eufonius.mp3',
            cover: './Audio-and-video/Pic/比翼の羽根 - eufonius.jpg',
            lrc: './Audio-and-video/Lrc/比翼の羽根 - eufonius.lrc',
        },
        {
            name: '病名恋ワズライ',
            artist: 'HoneyWorks',
            url: './Audio-and-video/Music/病名恋ワズライ - HoneyWorks.mp3',
            cover: './Audio-and-video/Pic/病名恋ワズライ - HoneyWorks.jpg',
            lrc: './Audio-and-video/Lrc/病名恋ワズライ - HoneyWorks.lrc',
        },
        {
            name: '渡月橋 ～君 想ふ～',
            artist: '仓木麻衣',
            url: './Audio-and-video/Music/渡月橋 ～君 想ふ～ - 仓木麻衣.mp3',
            cover: './Audio-and-video/Pic/渡月橋 ～君 想ふ～ - 仓木麻衣.jpg',
            lrc: './Audio-and-video/Lrc/渡月橋 ～君 想ふ～ - 仓木麻衣.lrc',
        },
        {
            name: '告白の夜',
            artist: 'Ayasa绚沙',
            url: './Audio-and-video/Music/告白の夜 - Ayasa绚沙.mp3',
            cover: './Audio-and-video/Pic/告白の夜 - Ayasa绚沙.jpg',
            lrc: './Audio-and-video/Lrc/告白の夜 - Ayasa绚沙.lrc',
        },
        {
            name: '恋のうた',
            artist: 'Yunomi&鬼頭明里',
            url: './Audio-and-video/Music/恋のうた - Yunomiu0026鬼頭明里.mp3',
            cover: './Audio-and-video/Pic/恋のうた - Yunomiu0026鬼頭明里.jpg',
            lrc: './Audio-and-video/Lrc/恋のうた - Yunomiu0026鬼頭明里.lrc',
        },
        {
            name: '鳥の詩',
            artist: 'Lia',
            url: './Audio-and-video/Music/鳥の詩 - Lia.mp3',
            cover: './Audio-and-video/Pic/鳥の詩 - Lia.jpg',
            lrc: './Audio-and-video/Lrc/鳥の詩 - Lia.lrc',
        },
        {
            name: '群青',
            artist: 'YOASOBI',
            url: './Audio-and-video/Music/群青 - YOASOBI.mp3',
            cover: './Audio-and-video/Pic/群青 - YOASOBI.jpg',
            lrc: './Audio-and-video/Lrc/群青 - YOASOBI.lrc',
        },
        {
            name: '心做し',
            artist: 'majiko',
            url: './Audio-and-video/Music/心做し - majiko.mp3',
            cover: './Audio-and-video/Pic/心做し - majiko.jpg',
            lrc: './Audio-and-video/Lrc/心做し - majiko.lrc',
        },
    ]
});

const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function () {
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function () {
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});