const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];

export default {
     optionsrps: optionsrps,
     optionsrpsls: optionsrpsls, 

     rpsStandard: function () {
     
          return (
               { personplaying: rand(optionsrps) }
          );
     },

     rps: function (playeroption) {
          
          const whatopponentchooses = rand(optionsrps);
           
          return (
               {
                  personplaying: playeroption,
                  otherplayer: whatopponentchooses,  
                  result: gameLogic(playeroption,whatopponentchooses)
               }
           );
      },
      rpslsStandard: function () {
           return (
                { personplaying: rand(optionsrpsls) }
           );
      },
      
      rpsls: function (personplaying) {
             const whatopponentchooses = rand(optionsrpsls); 
      
      return (
         {
                 personplaying: playeroption, 
                 otherplayer: whatopponentchooses,
                 result: gameLogic(playeroption, whatopponentchooses)
         }
      );
     },
}

function rand(arg) {
      return arg[(Math.random() * arg.length) | 0];
} 

function gameLogic(personplaying, otherplayer) {
      
      if (personplaying === "rock") {
          if (otherplayer === "rock") return "lose";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "win";
          if (otherplayer === "lizard") return "win";
          if (otherplayer === "spock") return "lose";
      }
      
      if (personplaying === "paper") {
          if (otherplayer === "rock") return "win";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "lose";
          if (otherplayer === "lizard") return "lose";
          if (otherplayer === "spock") return "win";
      } 

     if (personplaying === "scissors") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win";
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizard") return "win";
         if (otherplayer === "spock") return "lose";
      }

     if (personplaying === "lizard") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win"; 
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizard") return "lose";
         if (otherplayer === "spock") return "win";
      }

     if (personplaying === "spock") {
        if (otherplayer === "rock") return "win";
        if (otherplayer === "paper") return "lose";
        if (otherplayer === "scissors") return "win";
        if (otherplayer === "lizard") return "lose";
        if (otherplayer === "spock") return "lose";
      }

     return "lose";
} 