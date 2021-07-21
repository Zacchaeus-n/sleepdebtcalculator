// get user actual sleep hours
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

// get user ideal sleep hours
const getIdealSleepHours = (idealHours) => idealHours * 7;

// get user sleep debt hours
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);
  let sleepDifference = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than needed.`
    );
  } else {
    console.log(
      `You got ${sleepDifference} hour(s) less sleep, you should get some rest.`
    );
  }
};

console.log(calculateSleepDebt());
