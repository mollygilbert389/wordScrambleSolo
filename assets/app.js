
$(document).ready(function(){

    //VARIABLE LIST
    
        const letterBank = ["Soup", "Fruit", "Onion", "Fish", "Strawberry", "Grape", "Carrot", "Apple", "Cake", "Steak", "Salad", "Chicken", "Potato", "Mango", "Chips", "Popcorn", "Peanuts", "Watermelon", "Water", "Cookie", "Brownie", "Bagel", "Pizza", "Salsa", "Cheese", "Eggs", "Bacon", "Candy", "Olive", "Cherry", "Tomato", "Bread", "Orange", "Lemon", "Mustard", "Coffee", "Milk", "Butter", "Pepper", "Pasta", "Rice", "Cereal", "Salt", "Honey", "Garlic", "Beans", "Sugar", "Lettuce", "Ham", "Pork", "Crab", "Shrimp", "Turkey", "Mushroom", "Celery", "Lime", "Nuts", "Pumpkin", "Pecans", "Lamb", "Cream", "Flour", "Granola", "Beef", "Jerky", "Seeds", "Spices", "Yogurt", "Berries", "Vegetable", "Peas", "Vinegar", "Ginger", "Chocolate", "Pastry", "Noodles", "Yeast", "Vanilla", "Dough", "Buttermilk", "Batter", "Rasin", "Caramel", "Cornmeal", "Crackers"];
    
        let chosenWord = "";
        let score = 0;
    
    
    
    //GAME FUNCTION
    $("#playModal").show();
    $("#startBtn").on ("click", function(){
        loading();
    });
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////FUNCTIONS/////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    
    function playGame () {
        let gameTime = 60;
    
        $("#userGuessBox").show();
        $("#directions").empty();
        $("#directions").append("GO!");
        chooseWord();
        $("#timer").html("Time Left in the Game: " + gameTime);
        newTimer = setInterval(gameCountdown,  1000);
    
        function gameCountdown() {
            gameTime--;
            $("#timer").html("Time Left in the Game: " + gameTime);
            if (gameTime <= 0) {
                clearInterval(newTimer);
                showWinner();
            };
        };
    
    };
    
        $("#wordGuess").on("click", function () {
            let userGuess = $("#userGuess").val().trim().toLowerCase();
            const frm = document.getElementsByName('gameForm')[0];
            if (userGuess === chosenWord) {
                score++;
                $("#score").empty();
                $("#score").append("Score: " + score);
                chooseWord();
                frm.reset();
            } else {
                frm.reset();
            };
    
        });
    
        function chooseWord() {
            chosenWord = letterBank[Math.floor(Math.random() * letterBank.length)];
            $("#displayBox").empty();
            chosenWord = chosenWord.toLowerCase();
            scrambledWord = chosenWord.split("");
            console.log(scrambledWord);
            scrambledWord = scrambledWord.sort(function(){return 0.5-Math.random()}).join('');
            console.log(scrambledWord);
            $("#displayBox").append(scrambledWord);
        };
    
        function loading() {
            $("#playModal").hide();
            let counter = 10;
            $("#userGuessBox").hide();
            timer = setInterval(countDown,  1000);
            
            function countDown() {
                counter--;
                $("#timer").html("Time till start: " + counter);
                if (counter <= 0) {
                    clearInterval(timer);
                    playGame();
                };
            };
        };

        function showWinner() {
            modal = $("#myModal");
            message = $("#modalWinner");
            message.empty();
            message.append("We have a winner! Final Score: " + score);
            modal.show();
            $("#playAgain").on("click", function() {
                modal.hide();
                location.reload();
            });
    
            $("#closeBtn").on("click", function(){
                modal.hide();
                location.reload();
            });
        };
        
    });