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
    stroke(random(180, 255));
    // 直径を50~300にする
    // circle(width / 2, height / 2, random(50, 300));
    // 楕円の横幅、縦幅をランダム
    ellipse(width / 2, height / 2, random(50, 300), random(50, 300));
}