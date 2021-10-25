onEvent("start", "click", function( ) {
  setScreen("q1");
});
onEvent("correct1", "click", function( ) {
  setScreen("q2");
});
onEvent("wrong1", "click", function( ) {
  setScreen("you-lose");
});
onEvent("correct2", "click", function( ) {
  setScreen("wining");
});
onEvent("wrong2", "click", function( ) {
  setScreen("you-lose");
});
onEvent("w3", "click", function( ) {
  setScreen("you-lose");
});
onEvent("w4", "click", function( ) {
  setScreen("you-lose");
});
onEvent("playagain1", "click", function( ) {
  setScreen("homescreen");
});
onEvent("playagain2", "click", function( ) {
  setScreen("homescreen");
});
