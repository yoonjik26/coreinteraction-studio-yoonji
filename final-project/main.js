var username;

$('.submit-button').click(function () {
  username = $('.name-input').val();
  $('.name-form').hide();
  $('.color-input').show();
});

$('.option-0').click(function () { 
  $(".one").toggle();
  $('.images div').show();
  sendMessage(0); });
$('.option-1').click(function () { 
  $(".two").toggle();
  $('.images div').show();
  sendMessage(1); });
$('.option-2').click(function () { 
  $(".three").toggle();
  $('.images div').show();
  sendMessage(2); });
$('.option-3').click(function () { 
  $(".four").toggle();
  $('.images div').show();
  sendMessage(3); });
$('.option-4').click(function () { 
  $(".five").toggle();
  $('.images div').show();
  sendMessage(4); });
$('.option-5').click(function () { 
  $(".six").toggle();
  $('.images div').show();
  sendMessage(5); });
$('.option-6').click(function () { 
  $(".seven").toggle();
  $('.images').show();
  sendMessage(6); });
$('.option-7').click(function () { 
  $(".eight").toggle();
  $('.images div').show();
  sendMessage(7); });
$('.option-8').click(function () { 
  $(".nine").toggle();
  $('.images div').show();
  sendMessage(8); });
$('.option-9').click(function () { 
  $(".ten").toggle();
  $('.images div').show();
  sendMessage(9); });
$('.option-10').click(function () {
  $(".eleven").toggle();
  $('.images div').show();
  sendMessage(10); });
$('.option-11').click(function() {
  $(".twelve").toggle();
   $('.images').hide();
  sendMessage(11); });

function sendMessage(value) {
  Chat.sendMessage({
    sender: username,
    type: 'color',
    value: value
  });
}

var layers = {
  0: '.one',
  1: '.two',
  2: '.three',
  3: '.four',
  4: '.five',
  5: '.six',
  6: '.seven',
  7: '.eight',
  8: '.nine',
  9: '.ten',
  10: '.eleven',
  11: '.twelve',
};

Chat.onMessage(function (messageData) {
  var selector = layers[messageData.value];
  $(selector).toggle();
});