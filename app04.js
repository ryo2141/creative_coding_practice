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
    if(d > 1900) {
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