// let d; // 直径
let r; // 半径

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // d = 0; // 直径の初期化
    reset();
}

function draw() {
    // 直径
    // d += 2;
    r += 4;

    // 適当な大きさでreset
    // dist(x1, y1, x2, y2) で (x1, y1)～(x2, y2) までの直線距離を返す。
    // なので、画面中央から画面端 (0, 0) までの最短距離を求めたい場合は上記のように指定すればいい。
    if(r > dist(0, 0, width / 2, height / 2)) {
        reset();
    }

    clear();
    circle(width / 2, height / 2, r * 2)
}

// このメソッドが呼ばれると直径が初期サイズに戻り、リセット
function reset() {
    r = 0;
}

// 画面をマウスでクリックするとリセット
function mouseClicked() {
    reset();
}