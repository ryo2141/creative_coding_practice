function setup() {
    createCanvas(windowWidth, windowHeight);
    
    strokeWeight(10);
    stroke(240); // 色番号 0~255
    noFill(); // 塗りなし
    // 幅 / 4なので、横25%の位置に円を表示
    // circle(x座標, y座標, 直径)
    circle(width / 4, height / 2, 100);

    noStroke();
    fill(240);
    circle(width / 4 * 3, height / 2, 100);
}