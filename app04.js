let d; // 直径

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    // d = 0; // 直径の初期化
    reset();
}

function draw() {
    d += 2;

    // 適当な大きさでreset
    // dist(x1, y1, x2, y2) で (x1, y1)～(x2, y2) までの直線距離を返す。
    // なので、画面中央から画面端 (0, 0) までの最短距離を求めたい場合は上記のように指定すればいい。
    if(d / 2 > dist(0, 0, width / 2, height / 2)) {
        reset();
    }

    clear();
    circle(width / 2, height / 2, d)
}

// このメソッドが呼ばれると直径が初期サイズに戻り、リセット
function reset() {
    d = 0;
}

// 画面をマウスでクリックするとリセット
function mouseClicked() {
    reset();
}