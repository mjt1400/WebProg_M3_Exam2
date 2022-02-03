newDeck();
var deckID;

var rules = {
    "ACE": ["Waterfall", "All the players start continuously drinking their drink at the same time. Each player can't stop drinking until the player on their left and right side stopped, with the exception of the card picker who can stop drinking whenever he or she pleases."],
    "2": ["Choose Two", "The player who picks this card chooses two other players to drink two fingers each."],
    "3": ["Three for Me", "The player who picks this card drinks three fingers."],
    "4": ["Give Two, Take Two", "The player who picks this card drinks two fingers and chooses another player to drink two fingers."],
    "5": ["Make a Rule", "The player who picks this card makes up a rule. Any player who breaks the rule drinks one finger. The rule is in effect until the next 'Make a Rule' card is picked."],
    "6": ["Thumb Master", "The player who picks this card becomes the Thumb Master. At any point the Thumb Master can place their thumb on a surface. When they do this, all other players must also place their thumbs on a surface as fast as possible. The last player to do so drinks two fingers. Each Thumb Master can only do this once and must do it before another 'Thumb Master' card is picked."],
    "7": ["Heaven", "When this card is picked all the players point to the ceiling as fast as possible. The last player to do so drinks two fingers."],
    "8": ["Mate", "The card picker nominates another player to be their mate. The player nominated has to drink every time the card picker drinks and vice versa. This excludes King's Cup and lasts for the rest of the game."],
    "9": ["Bust a Rhyme", "Each player in turn, starting with the card picker, says a sentence. The last word of each sentence has to rhyme with the previous sentence's last word. The first player to hesitate, fail to rhyme, or use a rhyming word already used, drinks two fingers."],
    "10": ["Categories", "The player who picks this card chooses a category (e.g Types of fruit). Each player in turn, starting with the card picker, names something that belongs to the caregory (e.g apple). The first player to hesitate, name something not in the category, or name something already said, drinks two fingers."],
    "JACK": ["Guys", "All the male players drink two fingers each."],
    "QUEEN": ["Girls", "All the female players drink two fingers each."],
    "KING": ["The King's Cup", "The player who picks this card fills the King's Cup by a quarter using their own drink."] 
}

function newDeck(){
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(function (response){
        if (response.status !== 200) {
            console.log("Looks like there was a problem. Status Code: " + response.status);
        return;
        }

        response.json().then(function (data){
            deckID = data.deck_id;
        })
    })

    .catch(function (err){
        console.log(err + "404");
    })
}

$(function(){
    $('#draw-btn').click(function(){
        fetch("http://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1")
        .then(function (response){
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status Code: " + response.status);
            return;
            }

            response.json().then(function (data){
                const cardImg = data.cards[0].image;
                const cardVal = data.cards[0].value;
                const cardRem = data.remaining;
                document.getElementById("cardImg").src = cardImg;
                document.getElementById("rule-header").innerHTML = rules[cardVal][0];
                document.getElementById("rule-info").innerHTML = rules[cardVal][1];
                document.getElementById("card-num").innerHTML = "Cards Remaining: " + cardRem;
            })
        })

        .catch(function (err){
            console.log(err + "404");
        })
    })
})

$(function(){
    $('#draw-btn').click(function(){
        draw = $('#num-draw');
        draw.addClass('move-animate');
    })
})

$(function(){
    $('#draw-btn').click(function(){
        crdImg = $('#cardImg');
        ruleH = $('#rule-header');
        ruleI = $('#rule-info');
        crdImg.addClass('appear-animate');
        ruleH.addClass('appear-animate');
        ruleI.addClass('appear-animate');
        crdImg.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            crdImg.removeClass('appear-animate');
        });
        ruleH.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            ruleH.removeClass('appear-animate');
        });
        ruleI.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            ruleI.removeClass('appear-animate');
        });
    })
})
