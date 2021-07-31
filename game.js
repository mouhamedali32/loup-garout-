var start_button=document.getElementById('start_button')
var input_players=document.getElementById('players_input')
var game_zone=document.getElementById('game_zone')
var first_card=document.getElementById('first_card_player')
var player_1_name=document.getElementById('player_1_name')
var player_2_name=document.getElementById('player_2_name')
var player_3_name=document.getElementById('player_3_name')
var player_4_name=document.getElementById('player_4_name')
var player_5_name=document.getElementById('player_5_name')
var player_6_name=document.getElementById('player_6_name')
start_button.addEventListener('click',function(){
    document.getElementById('deleted').style.display='none'
    game_zone.style.display="block"
    input_players.style.display="none"  
    first_card.style.display='block'
    //add names
    player_1_name.innerText=document.getElementById('players_1_name').value
    player_2_name.innerText=document.getElementById('players_2_name').value
    player_3_name.innerText=document.getElementById('players_3_name').value
    player_4_name.innerText=document.getElementById('players_4_name').value
    player_5_name.innerText=document.getElementById('players_5_name').value
    player_6_name.innerText=document.getElementById('players_6_name').value
   
    
    //add names
})
//displaying players cards
//remove first card and display second card
var next_player_1=document.getElementById('first_player_next_player')
var second_card=document.getElementById('second_card_player')
next_player_1.addEventListener('click',function(){
    first_card.style.display='none'
    second_card.style.display='block'
})
//remove first card and display second card
//remove second card and display third card
var next_player_2=document.getElementById('second_player_next_player')
var third_card=document.getElementById('third_card_player')
next_player_2.addEventListener('click',function(){
    second_card.style.display='none'
    third_card.style.display='block'
})
//remove second card and display third card
//remove third card and display fourth card
var next_player_3=document.getElementById('third_player_next_player')
var fourth_card=document.getElementById('four_card_player')
next_player_3.addEventListener('click',function(){
    third_card.style.display='none'
    fourth_card.style.display='block'
})
//remove third card and display fourth card
//remove fourth card and display five card
var next_player_4=document.getElementById('four_player_next_player')
var five_card=document.getElementById('five_card_player')
next_player_4.addEventListener('click',function(){
    fourth_card.style.display='none'
    five_card.style.display='block'

})
//remove fourth card and display five card
//remove five card and display five card
var next_player_5=document.getElementById('five_player_next_player')
var carater_btn=document.getElementById('caracters_button')
var six_card=document.getElementById('six_card_player')
next_player_5.addEventListener('click',function(){
    five_card.style.display='none'
    six_card.style.display='block'
    carater_btn.style.display='block'
    carater_btn.style.textAlign='center'
    
    
})
//remove fourth card and display five card





//diplaying players cards
//caractere displaying
var btn_carctere=document.getElementById('caracters_button')
var images_container=document.getElementById('images_container')
var cards_container=document.getElementsByClassName('cards_first_div')
var  starting_time=document.getElementById('start_time')
var removing=document.getElementById('six_player_start')
btn_carctere.addEventListener('click',function(){
    removing.style.display='none'
    six_card.style.display='none'
    images_container.style.display='block'
    starting_time.style.display='block'
    btn_carctere.style.display='none'
    
    
    
})

//caractere displaying

//caracters button



//caracters button

//end of game

//random array
 var teryoin_lannister='images/chasseur.jpg'
var daeneres='images/salvateur.jpg'
var john_snow='images/villageois - Copie (2).jpg'
var game_errif_img='images/loupGarou - Copie (2).jpg'
var sersei='images/sorciere.jpg'
var the_haunt='images/voyante.jpg'
var arr=[teryoin_lannister,daeneres,game_errif_img,john_snow,sersei,the_haunt]
  //first player img
  for (let i=0;i<arr.length;i++){
    var player_1_img=arr[Math.floor(Math.random()*arr.length)]
}
//second player img
for (let i=0;i<arr.length;i++){
    var player_2_img=arr[Math.floor(Math.random()*arr.length)];
    while (player_2_img==player_1_img){
        var player_2_img=arr[Math.floor(Math.random()*arr.length)]
    
    }
}
//third player img
for (let i=0;i<arr.length;i++){
    var player_3_img=arr[Math.floor(Math.random()*arr.length)]
    while(player_3_img==player_2_img || player_3_img==player_1_img){
        var player_3_img=arr[Math.floor(Math.random()*arr.length)]
    }
}
//fourth player img
for (let i=0;i<arr.length;i++){
    var player_4_img=arr[Math.floor(Math.random()*arr.length)]
    while (player_4_img==player_1_img || player_4_img==player_2_img || player_4_img==player_3_img){
        var player_4_img=arr[Math.floor(Math.random()*arr.length)]
        
    }
}
//fifth player img
for (let i=0;i<arr.length;i++){
    var player_5_img=arr[Math.floor(Math.random()*arr.length)]
    while(player_5_img==player_1_img || player_5_img==player_2_img || player_5_img==player_3_img || player_5_img==player_4_img){
        var player_5_img=arr[Math.floor(Math.random()*arr.length)]
    }
}
//sixth player img
for (let i=0;i<arr.length;i++){
    var player_6_img=arr[Math.floor(Math.random()*arr.length)]
    while (player_6_img==player_1_img || player_6_img==player_2_img || player_6_img==player_3_img || player_6_img==player_4_img || player_6_img==player_5_img){
        var player_6_img=arr[Math.floor(Math.random()*arr.length)]
    }
}



//random array

//add images
//first player add img
var img_plyer_1=document.getElementById('first_player_img')
var start_game_1=document.getElementById('first_player_start')
start_game_1.addEventListener('click',function(){
    img_plyer_1.removeAttribute('src')
    img_plyer_1.setAttribute('src',player_1_img)
})
//first player add img
var img_plyer_2=document.getElementById('second_player_img')
var start_game_2=document.getElementById('second_player_start')
start_game_2.addEventListener('click',function(){
    img_plyer_2.removeAttribute('src')
    img_plyer_2.setAttribute('src',player_2_img)
})
//second player add image
var img_plyer_3=document.getElementById('third_player_img')
var start_game_3=document.getElementById('third_player_start')
start_game_3.addEventListener('click',function(){
    img_plyer_3.removeAttribute('src')
    img_plyer_3.setAttribute('src',player_3_img)
})
//third player add img
var img_plyer_4=document.getElementById('four_player_img')
var start_game_4=document.getElementById('four_player_start')
start_game_4.addEventListener('click',function(){
    img_plyer_4.removeAttribute('src')
    img_plyer_4.setAttribute('src',player_4_img)
})
//fourth plyer add img
var img_plyer_5=document.getElementById('five_player_img')
var start_game_5=document.getElementById('five_player_start')
start_game_5.addEventListener('click',function(){
    img_plyer_5.removeAttribute('src')
    img_plyer_5.setAttribute('src',player_5_img)
})
//sicth player add img
var img_plyer_6=document.getElementById('six_player_img')
var start_game_6=document.getElementById('six_player_start')
start_game_6.addEventListener('click',function(){
    img_plyer_6.removeAttribute('src')
    img_plyer_6.setAttribute('src',player_6_img)
})


//add images
//spay
var game_errif_1=document.getElementById('game_errif_1')

var starting_time=document.getElementById('start_time')
starting_time.addEventListener('click',function(){
    
    document.getElementById('game_errrif_style').style.visibility='visible'
    if (player_1_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('players_1_name').value
    }
    else if(player_2_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('players_2_name').value

    }
    else if(player_3_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('player_3_name').value
    }
    else if(player_4_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('players_4_name').value
    }
    else if(player_5_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('players_5_name').value
    }
    else if(player_6_img==game_errif_img){
        game_errif_1.innerText=document.getElementById('players_6_name').value
    }
    document.getElementById('images_container').style.display='none'
    document.getElementById('caracters_button').style.display='none'
    document.getElementById('start_time').style.display='none'
})

