function reason(reason) {
    var message = "";

    if (reason ==1) {
        message = "今年に入ってから一度も行けていないからめちゃくちゃ行きたい";
    } else if (reason ==2) {
        message = "きれいな景色を見たいのと美味しいものをたくさん食べたい";
    } else if (language ==3) {
        message = " 一度も行ったことがなく、おいしいものを食べるのはもちろん買い物したり、本国でのアイドルのライブに行きたい"
    } else {
        message = "想定されていない引数です"
    }

    alert(message);
}