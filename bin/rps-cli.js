#!/usr/bin/env node
import rpsls from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
   console.log(
    
  `Usage: node-rps [SHOT]
   Play Rock Paper Scissors (RPS)

   -h, --help      display this help message and exit
   -r, --rules     display the rules and exit

 Examples:
   node-rps        Return JSON with single player RPS result.
                   e.g. {"player":"rock"}
  node-rps rock    Return JSON with results for RPS played against a simulated opponent.
                   e.g {"player":"rock","opponent":"scissors","result":"win"}
 `
  );
  process.exit(0);
}

if (args.r || args.rules) {
   console.log(

  `Rules for Rock Paper Scissors:

   - Scissors CUTS Paper
   - Paper COVERS Rock
   - Rock CRUSHES Scissors
   `
   );
   process.exit(0);
}

if (args._.length > 1) {
   console.error("Arguments out of range.");
   console.log(
`
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}

Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors
`
     );
     process.exit(0);
}

else if (args._.length === 0) {
      console.log(JSON.stringify(rpsls.rpsDefault()));
}

else {
    let playeroption = args._[0].toLowerCase();
    if (rpsls.optionsrps.includes(playeroption)) {
        console.log(JSON.stringify(rpsls.rps(playeroption)));
     }
     else {
        console.error (
` 
 Invalid argument.
 Acceptable arguments: rock | paper | scissors
`    
    );
    console.log(
`Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors          
`
     );
   }
} 