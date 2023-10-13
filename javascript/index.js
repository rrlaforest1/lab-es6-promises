// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  // ...
  if (step0) {
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      // ... Your code here
      // ...
      if (step1) {
        getInstruction("mashedPotatoes", 2, (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;
          // ... Your code here
          // ...
          if (step2) {
            getInstruction("mashedPotatoes", 3, (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;
              // ... Your code here
              // ...
              if (step3) {
                getInstruction("mashedPotatoes", 4, (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  // ... Your code here
                  // ...
                  if (step4) {
                    getInstruction("mashedPotatoes", 4, (step4) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                      // ... Your code here
                      // ...
                      document
                        .querySelector("#mashedPotatoesImg")
                        .removeAttribute("hidden");
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 1);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 2);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 3);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 4);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 5);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 6);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction("steak", 7);
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li> Stake is ready!.</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    let instruction = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ...

const allOfTheInstructions = Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
]);

allOfTheInstructions
  .then((dataAsArray) => {
    const brusselsSproutsOl = document.querySelector("#brusselsSprouts");
    dataAsArray.map((el, i) => {
      const instructionText = document.createElement("li");
      instructionText.textContent = el;
      brusselsSproutsOl.append(instructionText);
    });
    const lastText = document.createElement("li");
    lastText.textContent = "Brussels sprouts are ready!";
    brusselsSproutsOl.append(lastText);
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));
