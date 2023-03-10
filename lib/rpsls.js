const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];

export default {
     optionsrps: optionsrps,
     optionsrpsls: optionsrpsls, 

     rpsStandard: function () {
     
          return (
               { player: rand(optionsrps) }
          );
     },

     rps: function (playeroption) {
          
          const whatopponentchooses = rand(optionsrps);
           
          return (
               {
                  player: playeroption,
                  otherplayer: whatopponentchooses,  
                  result: gameLogic(playeroption,whatopponentchooses)
               }
           );
      },
      rpslsStandard: function () {
           return (
                { player: rand(optionsrpsls) }
           );
      },
      
      rpsls: function (playeroption) {
             const whatopponentchooses = rand(optionsrpsls); 
      
      return (
         {
                 player: playeroption, 
                 otherplayer: whatopponentchooses,
                 result: gameLogic(playeroption, whatopponentchooses)
         }
      );
     },
}

function rand(arg) {
      return arg[(Math.random() * arg.length) | 0];
} 

function gameLogic(player, otherplayer) {
      
      if (player === "rock") {
          if (otherplayer === "rock") return "lose";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "win";
          if (otherplayer === "lizard") return "win";
          if (otherplayer === "spock") return "lose";
      }
      
      if (player === "paper") {
          if (otherplayer === "rock") return "win";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "lose";
          if (otherplayer === "lizard") return "lose";
          if (otherplayer === "spock") return "win";
      } 

     if (player === "scissors") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win";
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizard") return "win";
         if (otherplayer === "spock") return "lose";
      }

     if (player === "lizard") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win"; 
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizard") return "lose";
         if (otherplayer === "spock") return "win";
      }

     if (player === "spock") {
        if (otherplayer === "rock") return "win";
        if (otherplayer === "paper") return "lose";
        if (otherplayer === "scissors") return "win";
        if (otherplayer === "lizard") return "lose";
        if (otherplayer === "spock") return "lose";
      }

     return "lose";
} 