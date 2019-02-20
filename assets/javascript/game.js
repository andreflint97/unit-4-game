

$( document ).ready(function() {


    var yourFighter;
    var defender;
    var characterSelected = false;
    var defenderSelected = true;
    var yourFighterPower;
    var yourFighterHp;
    var defenderPower;
    var defenderHp;
    var attack;
    var attackPlus;
    

function startGame() {

        reset();
        


            $('#attack-dialogue').hide();

           
            $('body').on('click', '.character', function(){
                
                    $(this).removeClass('col-md-3 character').addClass('col characterSelected');
                    yourFighter = $(this).data("name");
                     $('.characterSelected').appendTo('#your-fighter');
                    console.log(yourFighter);
                    
                    $('.character').appendTo('#available-enemies').removeClass('character').addClass('defender');

                    yourFighterPower = $(this).data("power");
                    console.log('Power = ' + yourFighterPower);

                    attackPlus = $(this).data("power");
                    console.log('attackPlus = ' + attackPlus);

                    yourFighterHp = $(this).data("hp");
                    console.log('HP = ' + yourFighterHp);
                    
            });
        
 

            $('body').on('click','.defender' , function(){
                
                $(this).removeClass('col-md-3 defender').addClass('col enemySelected');
                
                defender = $(this).data("name");
                console.log(defender);
               
                $('.enemySelected').appendTo('#enemy');
               
                defenderPower = $(this).data("power");
                console.log('Power = ' + defenderPower);

                defenderHp = $(this).data("hp");
                console.log('HP = ' + defenderHp);
    
            });

            


            
            $('body').on('click','#fight-btn' , function(){
                
                
                attack();

                $('#attack-dialogue').show().html('<p>' + 'You attacked ' + defender + ' for ' + yourFighterPower + ' damage' + '<p>' + 
                '<p>' + defender + ' counter attacked you ' +  ' for ' + defenderPower + ' damage' + '<p>');


                if (defenderHp <= 0) {
                    $('.enemySelected').addClass('hide').removeClass('enemySelected');

                    
                }

                if (yourFighterHp <= 0) {
                    $('.characterSelected').addClass('hide').removeClass('characterSelected'); 
                    $('.btn-danger').text('RESET');
                    $('.btn-danger').click(function() {
                        location.reload();
                    });
                    
                } 
                

            });


            
            

        }; /

            function attack() {
            
                    yourFighterHp -= defenderPower;
                    $("#your-fighter #hp").text(yourFighterHp);
                    console.log('yourFighterHp = ' + yourFighterHp);
                    
                    
                    defenderHp -= yourFighterPower;
                    $("#enemy #hp").text(defenderHp);
                    console.log('defenderHp = ' + defenderHp);

                    yourFighterPower = yourFighterPower + attackPlus;
                    console.log('yourFighterPower = ' + yourFighterPower);

  

            }

        function reset () {
           
            

        }
    
            startGame();  

}); 
