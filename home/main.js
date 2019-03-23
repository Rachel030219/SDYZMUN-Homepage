var archivesBackground = document.getElementsByClassName("main-archives-transitionBG")[0];
var blogEntrance = document.getElementsByClassName("main-archives-text")[0];

function onBlogMouseOver() {
    var archivesBackground = document.getElementsByClassName("main-archives-transitionBG")[0];
    archivesBackground.id = "transition";
}
function onBlogMouseOut() {
    var archivesBackground = document.getElementsByClassName("main-archives-transitionBG")[0];
    archivesBackground.id = "";
}
