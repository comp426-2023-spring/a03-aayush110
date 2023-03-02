const optionsrps = ["rock", "paper", "scissors"];
const optionsrpsls = ["rock", "paper", "scissors", "lizard", "spock"];

export default () {
     optionsrps: optionsrps;
     optionsrpsls: optionsrpsls;

     function rpsStandard() {
          return (
               { personplaying: rand(optionsrps) }
          );
     }

     function rps (playeroption) {
          const whatopponentchooses = rand(optionsrps);
          return (
               {
                    personplaying: playeroption,
                    otherplayer: whatopponentchooses,  
                    result: gameLogic(playeroption,whatopponentchooses)
                 }
          );
     }

     function rpslsStandard() {
          return (
               { personplaying: rand(optionsrpsls) }
          );
     }
     function rpsls(personplaying) {
          const whatopponentchooses = rand(optionsrpsls); 
   
   return (
      {
              personplaying: playeroption, 
              otherplayer: whatopponentchooses,
              result: gameLogic(playeroption, whatopponentchooses)
      }
   );
  }

    

function rand(arg) {
      return arg[(Math.random() * arg.length) | 0];
} 

function gameLogic(personplaying, otherplayer) {
      
      if (personplaying === "rock") {
          if (otherplayer === "rock") return "lose";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "win";
          if (otherplayer === "lizzard") return "win";
          if (otherplayer === "spock") return "lose";
      }
      
      if (personplaying === "paper") {
          if (otherplayer === "rock") return "win";
          if (otherplayer === "paper") return "lose";
          if (otherplayer === "scissors") return "lose";
          if (otherplayer === "lizzard") return "lose";
          if (otherplayer === "spock") return "win";
      } 

     if (personplaying === "scissors") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win";
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizzard") return "win";
         if (otherplayer === "spock") return "lose";
      }

     if (personplaying === "lizzard") {
         if (otherplayer === "rock") return "lose";
         if (otherplayer === "paper") return "win"; 
         if (otherplayer === "scissors") return "lose";
         if (otherplayer === "lizzard") return "lose";
         if (otherplayer === "spock") return "win";
      }

     if (personplaying === "spock") {
        if (otherplayer === "rock") return "win";
        if (otherplayer === "paper") return "lose";
        if (otherplayer === "scissors") return "win";
        if (otherplayer === "lizzard") return "lose";
        if (otherplayer === "spock") return "lose";
      }

     return "lose";
} 
}