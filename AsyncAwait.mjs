function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

async function getResults() {
    try{
        const Joe = await luckyDraw('Tina');
        console.log(Joe);

        const Caroline = await luckyDraw('Jorge');
        console.log(Caroline);

        const Sabrina = await luckyDraw('Julien');
        console.log(Sabrina);
    } catch (err){
        console.error(err)
    }
}

getResults()