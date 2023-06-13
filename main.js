let flavors = [
    "豚骨拉麵",
    "醬油拉麵",
    "味噌拉麵",
    "鹽味拉麵"
];
let previousIndex;
$(function(){
    $("input").on("click", function(){
        let randomIndex = Math.floor(Math.random()*flavors.length);
        while(randomIndex == previousIndex)
        {
            randomIndex = Math.floor(Math.random()*flavors.length);
        }
        previousIndex = randomIndex;
        $("#flavor").text(flavors[randomIndex]);
    });
});