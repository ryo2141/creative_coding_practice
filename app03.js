function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // ellipse(width / 2, height / 2, width, height);
    // strokeWeight(10);
    // stroke(240); // 色番号 0~255
    noFill(); // 塗りなし
    // // 幅 / 4なので、横25%の位置に円を表示
    // // circle(x座標, y座標, 直径)
    // circle(width / 4, height / 2, 100);

    // noStroke();
    // fill(240);
    // circle(width / 4 * 3, height / 2, 100);
}

function draw() {
    // clear();
    // 直径をマウスのx座標にする
    // circle(mouseX, mouseY, 100);
    // circle(mouseY, mouseX, 100);
    // 直径をランダムにする
    // circle(mouseX, mouseY, random(100));

    // ストロークの太さを1~5にする
    // strokeWeight(random(1, 5));
    // ストロークの色を180~255にする
    stroke(random(255));
    // 直径を50~300にする
    // circle(width / 2, height / 2, random(50, 300));
    // 楕円の横幅、縦幅をランダム
    ellipse(random(width), height / 2, random(300), random(300));
}

// 円を描くには circle(x, y, 直径) を指定する。
// 楕円を描くには ellipse(x, y, 横幅, 縦幅) を指定する。
// strokeWeight() でストロークの太さを、stroke() でストロークの色を、fill() で塗りの色を指定する。
// stroke(240) のように1つの数を指定するとグレースケールでの色指定になり、指定できる数の範囲は 0～255 である。
// noStroke() でストロークを無効に、noFill() で塗りを無効にする。
// windowWidth, windowHeight が参照した時点での画面幅・高さを返すのに対して、width, height は createCanvas() で生成したCanvasの幅と高さを返す。
// 画面の中央座標は (width / 2, height / 2) で参照できる。
// mouseX, mouseY でマウス座標を取得する。
// random(x) で0以上x未満の実数を返す。
// random(a, b) でa以上b未満の実数を返す。