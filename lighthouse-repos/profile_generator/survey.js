const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("what is your name?", (answer2) => {
      console.log(`Thank you for your valuable feedback: ${answer2}`);
        rl.question('What do you listen to while doing that?', (answer3) => {
          console.log(`Thank you for your valuable feedback: ${answer3}`);
            rl.question('What do you listen to while doing that?', (answer4) => {
              console.log(`Thank you for your valuable feedback: ${answer4}`);
                rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer5) => {
                  console.log(`Thank you for your valuable feedback: ${answer5}`);
                  rl.question("What's your favourite thing to eat for that meal?", (answer6) => {
                    console.log(`Thank you for your valuable feedback: ${answer6}`);
                      rl.question(`Which sport is your absolute favourite?`, (answer7) => {
                        console.log(`Thank you for that ${answer7}`);
                          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer8) => {
                            console.log(`thank you for that ${answer8}`);
                              rl.close();
                          })
                      })
                   })
                })
            })
        })
    })  
  
});