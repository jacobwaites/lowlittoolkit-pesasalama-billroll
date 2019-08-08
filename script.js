/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var currentTransfer = parseFloat($(".transfer-amount").text());
var currentBalance = parseFloat($(".balance-number").text());

// width of the bill-roll
var billLength = 450;

$(".home-view .back").css("pointer-events","none");

$(".bill-roll .currency-button").click(function() {
  var value = $(this).find(".denomination");
  var number = parseFloat(value.text());
  console.log(number);
  updateTransfer(number);
  updateBalanceSubtract(number);
  
  var billholder = $( ".live-bill-holder" );
  
  if (number == 1000) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>1000</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fbill-1000shilling.png?v=1563972795671'/></div>");
      attachSubtract(newBill);  
      billholder.append(newBill);
  }
  
  if (number == 500) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>500</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fbill-500shilling.png?v=1563972795844'/></div>");
      attachSubtract(newBill);  
      billholder.append(newBill);
  }
  
  
  if (number == 200) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>200</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fbill-200shilling.png?v=1563314684553'/></div>");
      attachSubtract(newBill);  
      billholder.append(newBill);
  }
  
    if (number == 100) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>100</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fbill-100shilling.png?v=1563972795607'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
    if (number == 50) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>50</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fbill-50shilling.png?v=1563972795560'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
    if (number == 40) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>40</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fcoin-40shilling.png?v=1563972795178'/></div>");
      attachSubtract(newBill);  
      billholder.append(newBill);
  }
  
    if (number == 20) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>20</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fcoin-20shilling.png?v=1563972795303'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
    if (number == 10) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>10</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fcoin-10shilling.png?v=1563972795233'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
    if (number == 5) {
      const newBill = $.parseHTML("<div class='bill currency-button'><div class='denomination'>5</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fcoin-5shilling.png?v=1563972795355'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
    if (number == 1) {
      const newBill = $.parseHTML("<div class='coin currency-button'><div class='denomination'>1</div><img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fcoin-1shilling.png?v=1563314682701'/></div>");
      attachSubtract(newBill);
      billholder.append(newBill);
  }
  
});


function attachSubtract(newBill) {
    $(newBill).click(function() {
    var value = $(this).find(".denomination");
    var number = parseFloat(value.text());
    console.log(number);
    subtractTransfer(number);
    updateBalanceAdd(number)
    $(this).remove();
  });
}

function updateTransfer(number) {
  console.log("adding " + number);
  var newTransferAmount = currentTransfer + number;
  var formattedTransfer = newTransferAmount.toFixed(2)
  $(".transfer-amount").html(formattedTransfer);
  currentTransfer = Math.abs(newTransferAmount);
  console.log("new transfer amount is " + newTransferAmount.toFixed(2));
}

function subtractTransfer(number) {
  console.log("subtracting " + number);
  var newTransferAmount = currentTransfer - number;
  var formattedTransfer = newTransferAmount.toFixed(2)
  $(".transfer-amount").html(formattedTransfer);
  currentTransfer = Math.abs(newTransferAmount);
  console.log("new transfer amount is " + newTransferAmount.toFixed(2));
}

function updateBalanceSubtract(number) {
  var newBalance = currentBalance - number
  
  if (newBalance < currentBalance) {
    $(".balance").css("color","red");
  }
  
  if (newBalance >= currentBalance) {
    $(".balance").css("color","#444");
  }
  
  console.log("current balance is being updated to " + newBalance);
  var formattedBalance = newBalance.toFixed(2);
  $(".balance-number").html(formattedBalance);
  currentBalance = Math.abs(formattedBalance);
  
}

function updateBalanceAdd(number) {
  var newBalance = currentBalance + number
  
  if (newBalance < currentBalance) {
    $(".balance").css("color","red");
  }
  
  if (newBalance >= currentBalance) {
    $(".balance").css("color","#444");
  }
  
  console.log("current balance is being updated to " + newBalance);
  var formattedBalance = newBalance.toFixed(2);
  $(".balance-number").html(formattedBalance);
  currentBalance = Math.abs(formattedBalance); // Math.abs(formattedBalance) for absolute value
  
}


$(".numberbutton").click(function() {
  
  console.log("CLICKED IS " + $(this).text());
  
  if ($(this).text() == ".") {
      var buttonID = $(this).text();
    console.log("logged .");
  }
  
  else if ($(this).text() == "<") {
    var buttonID = $(this).text();
    console.log("logged <");
  }
  
  else {
    var buttonID = parseFloat($(this).text());
  }
  
  console.log(buttonID);
  updateTransferButtonMode(buttonID);
});


function updateTransferButtonMode(buttonID) {
  if (currentTransfer == 0.00) {
      $(".transfer-amount").empty();
      console.log("cleared transfer");
  }
  
    if (currentTransfer == 0) {
      $(".transfer-amount").empty();
      console.log("cleared transfer");
  }
  
  console.log("updating balance via numpad, entered " + buttonID);
  
  if (buttonID == "<") {
    var getCurrentTransfer = $(".transfer-amount:visible").text();
    console.log(getCurrentTransfer);
    var trimmedTransfer = getCurrentTransfer.substring(0, getCurrentTransfer.length - 1);
    console.log("trimming transfer to " + trimmedTransfer);
    var newTransferAmountButton = parseFloat(trimmedTransfer);
    $(".transfer-amount").text(trimmedTransfer);
    
  }
  else {
    $(".transfer-amount").append(buttonID);
    var newTransferAmountButton = parseFloat($(".transfer-amount").text());
  }
  
  currentTransfer = newTransferAmountButton;
  
}

console.log("starting with " + currentTransfer);
console.log("current balance is " + currentBalance);

$(".speak-to-me").css("animation","none");

$(".numpad").click(function() {
  $(".numpad").addClass("active");
  $(".billpad").removeClass("active");
  $(".speakpad").removeClass("active");
  $(".speak-to-me").css("animation","none");
  var clear = 0;
  $(".transfer-amount").empty();
  $(".transfer-amount").html(clear.toFixed(2));
  currentTransfer = 0;
  console.log("changed to numpad mode, cleared transfer. " + currentTransfer);
  $(".numberpad").removeClass("hide");
  $(".bill-roll").addClass("hide");
  $(".speaker").addClass("hide");
  $(".live-area").addClass("pad-mode");
  anime({
  targets: '.live-area',
  height: '22vh',
  duration: 200
  });
  $(".numberpad").addClass("pad-mode");
});

$(".billpad").click(function() {
  $(".numpad").removeClass("active");
  $(".billpad").addClass("active");
  $(".speakpad").removeClass("active");
  $(".speak-to-me").css("animation","none");
  var clear = 0;
  $(".transfer-amount").empty();
  $(".transfer-amount").html(clear.toFixed(2));
  currentTransfer = 0;
  console.log("changed to bill mode, cleared transfer. " + currentTransfer);
  $(".numberpad").addClass("hide");
  $(".bill-roll").removeClass("hide");
  $(".speaker").addClass("hide");
  $(".live-area").removeClass("pad-mode");
  anime({
  targets: '.live-area',
  height: '50vh',
  duration: 200
  });
  $(".numberpad").removeClass("pad-mode");
});


$(".speakpad").click(function() {
  $(".numpad").removeClass("active");
  $(".billpad").removeClass("active");
  $(".speakpad").addClass("active");
  $(".speaker").removeClass("hide");
  $(".speak-to-me").css("animation","pulse 1.5s infinite");
  var clear = 0;
  $(".transfer-amount").empty();
  $(".transfer-amount").html(clear.toFixed(2));
  currentTransfer = 0;
  console.log("changed to bill mode, cleared transfer. " + currentTransfer);
  $(".numberpad").addClass("hide");
  $(".bill-roll").addClass("hide");
  $(".live-area").removeClass("pad-mode");
  anime({
  targets: '.live-area',
  height: '50vh',
  duration: 200
  });
  $(".numberpad").removeClass("pad-mode");
});


$(".transfer-view .send-transfer-confirm").click(function() {
  var command = 'send';
  $(".final-transfer-amount").html(currentTransfer);
  console.log("Final confirmed transfer: " + currentTransfer);
  
  anime({
    targets: '.live-area',
    height: '86vh',
    duration: 700
  });
  
  anime({
    targets: '.live-bill-holder',
    height:'10vh',
    opacity: '0',
    duration: 700
  });
  
  anime({
    targets: '.transfer-view .confirm',
    scale: '0',
    duration: 700
  });
  
  anime({
    targets: '.transfer-actions',
    translateY: '0px',
    height:'30vh',
    opacity:1,
    delay:700,
    duration: 800
  });
  
  anime({
  targets:'.wallet-balance.img-button',
  scale:0,
  duration: 600
  });
  

  
  
  setTimeout(function(){ switchToConfirmView(command); }, 1200);
  
  function switchToConfirmView(command) {
    $(".tool-switcher").toggleClass('hide');
    $(".live-bill-holder").toggleClass('hide');
    $(".transfer-view .confirm").toggleClass('hide');
    $(".transfer-view .live-area .group").addClass('transfer-mode');
    $(".transfer-view").addClass('transfer-mode');
    $(".transfer-view .live-area").addClass('transfer-mode');
    $(".transfer-view .live-area .group").prepend('<div class="main-action"><h3>Tuma</h3></div>');
    $(".wallet-balance").addClass("hide");
    
    $(".bottom-bar").addClass('game-time');
    $(".back.img-button").addClass('filled');
    $(".help.img-button").addClass('filled');
    
    $('.transfer-view .back .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fback-white.svg?v=1564071905473' />");
    $('.transfer-view .help .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fforward-white.svg?v=1564071905387' />");
    $('.transfer-view .help').addClass("confirm-button");
    armButtons();
    
    
  }
  
});



$(".transfer-view .recieve-transfer-confirm").click(function() {
  var command = 'recieve';
  $(".final-transfer-amount").html(currentTransfer);
  console.log("Final confirmed transfer: " + currentTransfer);
  
  anime({
    targets: '.live-area',
    height: '86vh',
    duration: 700
  });
  
  anime({
    targets: '.live-bill-holder',
    height:'10vh',
    opacity: '0',
    duration: 700
  });
  
  anime({
    targets: '.transfer-view .confirm',
    scale: '0',
    duration: 700
  });
  
  anime({
    targets: '.transfer-actions',
    translateY: '0px',
    height:'30vh',
    opacity:1,
    delay:700,
    duration: 800
  });
  
  anime({
  targets:'.wallet-balance.img-button',
  scale:0,
  duration: 600
  });
  

  
  
  setTimeout(function(){ switchToConfirmView(command); }, 1200);
  
  function switchToConfirmView(command) {
    $(".tool-switcher").toggleClass('hide');
    $(".live-bill-holder").toggleClass('hide');
    $(".transfer-view .confirm").toggleClass('hide');
    $(".transfer-view .live-area .group").addClass('transfer-mode');
    $(".transfer-view").addClass('transfer-mode');
    $(".transfer-view .live-area").addClass('transfer-mode');
    $(".transfer-view .live-area .group").prepend('<div class="main-action"><h3>Pokea</h3></div>');
    $(".wallet-balance").addClass("hide");
    
    $(".bottom-bar").addClass('game-time');
    $(".back.img-button").addClass('filled');
    $(".help.img-button").addClass('filled');
    
    $('.transfer-view .back .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fback-white.svg?v=1564071905473' />");
    $('.transfer-view .help .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fforward-white.svg?v=1564071905387' />");
    $('.transfer-view .help').addClass("confirm-button");
    armButtons(command);
    
    
  }
  
});


function armButtons(command) {
  console.log("buttons armed.");
  
  
  
  $('.confirm-button').click(function() {
  console.log("clicked");  
    

    
  anime({
  targets:'.wallet-balance.img-button',
  scale:1,
  duration: 600
  });
    
  anime({
  targets:'.balance',
  color:'#4ECC00',
  duration: 600
  });
    
  anime({
  targets:'.transfer-actions',
  translateY: '230px',
  height:'0vh',
  opacity:0,
  duration: 600
  });
    
  anime({
  targets:'.finalized',
  scale:'1',
  delay:900,
  duration: 1000, 
  easing:'easeInOutQuart'
  });
    
  setTimeout(function(){ switchToFinalizedView(command); }, 1000);  
  
  function switchToFinalizedView(command) {
    if (command == 'send') {
      $(".transfer-view .main-action").html('<div class="main-action"><h3>Imetumwa!</h3></div>');
      console.log(command);
    }
    
    if (command == 'recieve') {
      $(".transfer-view .main-action").html('<div class="main-action"><h3>Umeagiza!</h3></div>');
      console.log(command);
    }

    $(".transfer-view .current-transfer").addClass('hide');
    $(".bottom-bar").removeClass('game-time');
    $(".back.img-button").removeClass('filled');
    $(".help.img-button").removeClass('filled');
    $(".wallet-balance").removeClass("hide");
    $(".transfer-actions").addClass("hide");
    $('.transfer-view .back .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fhome-icon.svg?v=1564075771505' />");
    $('.transfer-view .help .button-backer').html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fhelp.svg?v=1564077055736' />");
    $('.transfer-view .back .button-backer').addClass("go-home");
    $('.transfer-view .back-text').addClass("go-home");
    $('.transfer-view .back-text').html("nyumbani");
    $('.transfer-view .bottom-bar .back').addClass("home");
    $('.transfer-view .bottom-bar .back').removeClass("back");
    armFinalize(command);
  }
    
});
}


function armFinalize(command) {
  
  $('.transfer-view .home').click(function() {
  
  if (command == "send") {
    $(".transfer-view.send-transfer").addClass('hide');
  }
  if (command == "recieve") {
    $(".transfer-view.recieve-transfer").addClass('hide');
  }
    
  $(".send-recieve-money").toggleClass("hide");
  $(".home-view").removeClass('hide');
  assembleHome();
  
  function assembleHome() {
    console.log("assembling home..");

    anime({
      targets: '.live-area',
      height: '15vh',
      duration: 700
    });

    anime({
      targets: '.house.locked',
      bottom:'-5px',
      duration: 700
    });

    anime({
      targets: '.decision-switch',
      height: '71vh',
      duration: 700
    });
    
    anime({
      targets: '.send',
      opacity: '1',
      duration: 700
    });
    
    anime({
      targets: '.recieve',
      opacity: '1',
      duration: 700
    });

    

    console.log("checking after animations..")

      $(".account-options").addClass("horizontal");
      $(".account-listing").addClass("horizontal");
      $(".account-options").removeClass("hide");
      $(".live-area .group").addClass("hide");
      $(".accounts").removeClass("hide");
      $(".user-list").addClass("hide");
      $(".keypad-option").addClass("hide");
      $(".qr-option").addClass("hide");
      $(".send-recieve-money").removeClass("hide");
      // $(".decision-switch").addClass("horizontal");
      $(".send").toggleClass("hide");
      $(".recieve").toggleClass("hide");

    console.log("fully rebuilt");
  }

});
  
}


$(".accounts").click(function() {
        anime({
        targets: '.account-options',
        translateX:"-24rem",
        opacity: '0',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.account-listing',
        translateX:["24rem","0rem"],
        delay:300,
        duration: 800,
        easing: 'easeInOutQuad'
        });

        $(".account-holdings .balance").css("color","#444");
        $(".home-view .back").css("pointer-events","all");
  
});

$(".account-one").click(function() {
  
        $(".account-history-view").toggleClass("hide");
        $(".account-history-view .live-area .group").removeClass("hide");
    
        anime({
        targets: '.account-history-view',
        translateX:["24rem","0rem"],
        opacity: '1',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.live-area',
        height:'16vh',
        duration: 800,
        easing: 'easeInOutQuad'
        });
       
  
});

$(".account-history-view .back").click(function() {
  
        anime({
        targets: '.account-history-view',
        translateX:["0rem,","24rem"],
        opacity: '0',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.live-area',
        height:'14vh',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.decision-switch',
        height:'72vh',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        setTimeout(function(){ hideAccountHistory(); }, 900);
  
        function hideAccountHistory() {
          $(".account-history-view").toggleClass("hide");
        }   
  
});

$(".home-view .back").click(function() {
  
        anime({
        targets: '.account-options',
        translateX:"0rem",
        opacity: '1',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.account-listing',
        translateX:["0rem","24rem"],
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
//         setTimeout(function(){ hideAccountHistory(); }, 900);
  
//         function hideAccountHistory() {
//           $(".account-history-view").toggleClass("hide");
//         }   
  
});


/*------   ROUTING ---------*/

$(".key-maker-option").click(function() {
  $(".decision-switch").addClass("keydraw-mode");
  $(".live-area").addClass("keydraw-mode");
  $(".main-action p").html("chora ufunguo wako.");
  $(".main-action h2").remove();
  $(".cards").addClass("hide");
  $(".key-draw-holder").removeClass("hide");
  
  anime({
  targets: '.house.locked',
  bottom: '-94px',
  duration: 700,
  easing: 'easeInOutQuad'
  });
  
  
  anime({
  targets: '.speak-initial',
  scale: 0,
  opacity:0,
  duration: 1200
  });
  
    anime({
  targets: '.key-top',
  bottom: '-20px',
  delay: 1100,
  duration: 1200,
   easing: 'easeInOutQuad'
  });
  
    anime({
  targets: '.home-view .live-area',
  background: '#fff',
  delay: 1100,
  duration: 1200
  });
  
});


$(".transfer-view .back").click(function() {
  $(".home-view").removeClass("hide");
  $(".transfer-view").addClass("hide");
});


var lock = new PatternLock("#lock", {
  onPattern: function(pattern) {
    // Context is the pattern lock instance
    console.log(pattern)
    if (pattern == 261014192016151120000) {
     lock.success();
      
      anime({
        targets: '.key-top',
        bottom: '-160px',
        opacity:0,
        duration: 700
      });
      
      
      anime({
        targets: '.house.locked',
        bottom: '-5px',
        delay: 300,
        duration: 600
      });
      
      anime({
        targets: '.door-wrap',
        rotateY: '59deg',
        scale: '.95',
        translateY: '-1.5px',
        translateX: '-9px',
        delay: 1300,
        duration: 400,
        easing: 'easeInOutQuad'
      });
      
      anime({
        targets: '.key-draw-holder',
        opacity: '0',
        duration: 600
      });
      
      setTimeout(function(){ logMeIn(); }, 3000);
      
      function logMeIn() {
        console.log("finished animation");
        anime({
        targets: '.user-icon',
        width: '3rem',
        height: '3rem',
        duration: 600
        });
        anime({
        targets: '.house-icon',
        width: '4rem',
        duration: 600
        });
        anime({
        targets: '.live-area',
        height: '12vh',
        duration: 600
        });
        anime({
        targets: '.light-bg',
        background:'#F6F6F6',
        duration: 600
        });
        anime({
        targets: '.decision-switch',
        delay:400,
        height: '74vh',
        duration: 600
        });

        setTimeout(function(){ switchToAccountView(); }, 750);
        
        
      }
                
       function switchToAccountView() {
          $(".main-action").empty();
          $(".decision-switch").removeClass("keydraw-mode");
          $(".key-draw-holder").addClass("hide");
          $(".live-area").removeClass("keydraw-mode");
          $(".cards").removeClass("hide");
          $(".keypad-option").toggleClass("hide");
          $(".key-maker-option").toggleClass("hide");
          $(".accounts").toggleClass("hide");
          $(".send-recieve-money").toggleClass("hide");
          $(".decision-switch").addClass("horizontal");
          $(".back-text").html("Rudi");
          $(".button-backer .red").html("<img src='https://cdn.glitch.com/349dde6e-43fb-4589-9e89-701ce6e072ac%2Fback.svg?v=1563805379172'/>");
        }
      
    }
    else {
      lock.error();
            anime({
        targets: '.key-top',
        keyframes: [
          {translateX: 0},
          {translateX: -5},
          {translatex: 5},
          {translateX: 0},
          {translateX: -5},
          {translatex: 5},
          {translateX: 0},
          {translateX: -5},
          {translatex: 5},
          {translateX: 0}
          
        ],
        duration: 400,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
    }
    
   }
});

$(".send-recieve-money").click(function() {
  $(".send").toggleClass("hide");
  $(".recieve").toggleClass("hide");
  $(".decision-switch").addClass("horizontal");

        anime({
        targets: '.account-options',
        translateX:"-24rem",
        opacity: '0',
        duration: 800,
        easing: 'easeInOutQuad'
        });
  
        anime({
        targets: '.send-recieve-options',
        translateX:["24rem","0rem"],
        delay:300,
        duration: 800,
        easing: 'easeInOutQuad'
        });
  // $(".home-view .back").addClass("send-recieve-view-isactive");
  // $(".home-view .back").css("pointer-events","none");
    // armBackButtonSendRecieve();
  
  
});


// function armBackButtonSendRecieve() {
    
//     $(".send-recieve-view-isactive").click(function() {
//     $(".home-view .back").css("pointer-events","none");
//     $(".send").toggleClass("hide");
//     $(".recieve").toggleClass("hide");

//           anime({
//           targets: '.account-options',
//           translateX:["-24rem","0rem"],
//           opacity: '0',
//           duration: 800,
//           easing: 'easeInOutQuad'
//           });

//           anime({
//           targets: '.send-recieve-money',
//           translateX:["0rem","24rem"],
//           duration: 800,
//           easing: 'easeInOutQuad'
//           });

//     $(".home-view .back").removeClass("send-recieve-view-isactive");
//   });
// }



$(".send").click(function() {
  
      anime({
        targets: '.house.locked',
        bottom: '-150px',
        duration: 600
      });
  
        anime({
        targets: '.live-area',
        height: '15vh',
        duration: 300
      });
  
      anime({
        targets: '.decision-switch',
        height: '35vh',
        duration: 150
      });
  
     anime({
        targets: '.send',
        opacity: '0',
        duration: 1000
      });
  
       anime({
        targets: '.recieve',
        opacity: '0',
        duration: 1000
      });
  
      anime({
      targets: '.account-options',
      translateX:"0rem",
      opacity: '1',
      duration: 800,
      easing: 'easeInOutQuad'
      });
  
      anime({
      targets:'.speak-initial',
      scale:1,
      opacity:1,
      duration: 400
      });

  
  
      $('.home-view .live-area .group').css("flex-direction","row");
      $('.speak-initial').addClass("generally-speaking");

      $(".send-recieve-money").toggleClass("hide");
      $(".accounts").toggleClass("hide");
      $(".decision-switch").removeClass("horizontal");
      $(".keypad-option").toggleClass("hide");
      $(".qr-option").toggleClass("hide");
     $(".account-options").removeClass("horizontal");
  
      function updateforSendRecieve() {
      $(".send").toggleClass("hide");
      $(".recieve").toggleClass("hide");
      $(".main-action").empty();
      $(".main-action").append("<h3>ninataka ku</h3>");
      $('.home-view .live-area .group').toggleClass("hide");  
      $(".user-list.send-list").removeClass("hide");
      }

      setTimeout(function(){ updateforSendRecieve(); }, 750);

});




$(".send-list .wanjiku").click(function() {
  
  anime({
  targets: '.live-area',
  height: '50vh',
  duration: 300
  });
  
  $(".home-view").toggleClass("hide");
  $(".transfer-view.send-transfer").toggleClass("hide");
  $(".bill-roll").scrollLeft( billLength / 2 );
  $(".back-text").html("Toka");
  
  

});




/*--- REQUEST MONEY ----*/

$(".recieve").click(function() {
  
      anime({
        targets: '.house.locked',
        bottom: '-150px',
        duration: 600
      });
  
        anime({
        targets: '.live-area',
        height: '15vh',
        duration: 300
      });
  
      anime({
        targets: '.decision-switch',
        height: '35vh',
        duration: 150
      });
  
     anime({
        targets: '.send',
        opacity: '0',
        duration: 1000
      });
  
       anime({
        targets: '.recieve',
        opacity: '0',
        duration: 1000
      });
  
      anime({
      targets: '.account-options',
      translateX:"0rem",
      opacity: '1',
      duration: 800,
      easing: 'easeInOutQuad'
      });
  
      anime({
      targets:'.speak-initial',
      scale:1,
      opacity:1,
      duration: 400
      });

  
  
      $('.home-view .live-area .group').css("flex-direction","row");
      $('.speak-initial').toggleClass("generally-speaking");

      $(".send-recieve-money").toggleClass("hide");
      $(".accounts").toggleClass("hide");
      $(".decision-switch").removeClass("horizontal");
      $(".keypad-option").toggleClass("hide");
      $(".qr-option").toggleClass("hide");
      
  
      function updateforSendRecieve() {
      $(".send").toggleClass("hide");
      $(".recieve").toggleClass("hide");
      $(".main-action").append("<h3>ninataka ku</h3>");
      $(".user-list.recieve-list").removeClass("hide");
        
        
      }

      setTimeout(function(){ updateforSendRecieve(); }, 750);

});

$(".recieve-list .wanjiku").click(function() {
  
  anime({
  targets: '.live-area',
  height: '50vh',
  duration: 300
  });
  
  $(".home-view").toggleClass("hide");
  $(".transfer-view.recieve-transfer").toggleClass("hide");
  $(".bill-roll").scrollLeft( billLength / 2 );
  $(".back-text").html("Toka");
  
  

});












$(".refresh-button").click(function() {
 location.reload();
});