

$( document ).ready(function() {

    

    var yourCharacter;
    var defender;
    var characterSelected = false;
    var defenderSelected = true;
    var yourCharacterPower;
    var yourCharacterHp;
    var defenderPower;
    var defenderHp;
    var attack;
    var attackPlus;
    

function startGame() {

        reset();
        


            $('#attack-dialogue').hide();

           
            $('body').on('click', '.character', function(){
                
                    $(this).removeClass('col-md-3 character').addClass('col characterSelected');
                    yourCharacter = $(this).data("name");
                     $('.characterSelected').appendTo('#your-character');
                    console.log(yourCharacter);
                    
                    $('.character').appendTo('#available-enemies').removeClass('character').addClass('defender');

                    yourCharacterPower = $(this).data("power");
                    console.log('Power = ' + yourCharacterPower);

                    attackPlus = $(this).data("power");
                    console.log('attackPlus = ' + attackPlus);

                    yourCharacterHp = $(this).data("hp");
                    console.log('HP = ' + yourCharacterHp);
                    
            });
        
 

            $('body').on('click','.defender' , function(){
                
                $(this).removeClass('col-md-3 defender').addClass('col enemySelected');
                
                defender = $(this).data("name");
                console.log(defender);
               
                $('.enemySelected').appendTo('#the-defender');
               
                defenderPower = $(this).data("power");
                console.log('Power = ' + defenderPower);

                defenderHp = $(this).data("hp");
                console.log('HP = ' + defenderHp);
    
            });

            


            
            $('body').on('click','#fight-btn' , function(){
                
                
                attack();

                $('#attack-dialogue').show().html('<p>' + 'You attacked ' + defender + ' for ' + yourCharacterPower + ' damage' + '<p>' + 
                '<p>' + defender + ' counter attacked you ' +  ' for ' + defenderPower + ' damage' + '<p>');


                if (defenderHp <= 0) {
                    $('.enemySelected').addClass('hide').removeClass('enemySelected');
                
                    
                }

                if (yourCharacterHp <= 0) {
                    $('.characterSelected').addClass('hide').removeClass('characterSelected'); 
                    $('.btn-danger').text('RESET');
                    $('.btn-danger').click(function() {
                        location.reload();
                    });
                    
                } 
                

            });


            
            

        }; // startGame   

            function attack() {
            
                    yourCharacterHp -= defenderPower;
                    $("#your-character #hp").text(yourCharacterHp);
                    console.log('yourCharacterHp = ' + yourCharacterHp);
                    
                    
                    defenderHp -= yourCharacterPower;
                    $("#the-defender #hp").text(defenderHp);
                    console.log('defenderHp = ' + defenderHp);

                    yourCharacterPower = yourCharacterPower + attackPlus;
                    console.log('yourCharacterPower = ' + yourCharacterPower);

  

            }

        function reset () {
           
            

        }
    
            startGame();  

}); 
