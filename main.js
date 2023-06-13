let flavors = [
    "豚骨拉麵",
    "醬油拉麵",
    "味噌拉麵",
    "鹽味拉麵"
];
let concentration = [
    "很濃",
    "濃",
    "清爽",
    "清淡",
    "很清淡"
];
let thickness = [
    "細麵",
    "中粗麵",
    "粗麵"
];
let firmness = [
    "超硬",
    "偏硬",
    "普通",
    "偏軟",
    "超軟"
];
$(function(){
    $("input").on("click", function(){
        let randomFlavor = Math.floor(Math.random()*flavors.length);
        let randomConcentrtion = Math.floor(Math.random()*concentration.length);
        let randomThickness = Math.floor(Math.random()*thickness.length);
        let randomFirmness = Math.floor(Math.random()*firmness.length);
        $("#flavor").text(flavors[randomFlavor]+" "+concentration[randomConcentrtion]+" "+thickness[randomThickness]+" "+firmness[randomFirmness]);
    });
});