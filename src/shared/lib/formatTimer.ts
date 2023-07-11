export const formatTimer = (time: number) => {
  //If time is less than one minute then just return
  // amount of seconds
  if (time <= 59000) {
    return `${time / 1000}`;
  }

  //If time more or equal than one minute then calculate amount of full minutes
  // while remainder will be amount of seconds
  if (time > 59000) {
    const minutes = Math.floor(time / 60000);
    let seconds = (time % 60000) / 1000;

    //If seconds will be less than 9 then push zero to the start
    // else just return seconds
    if (seconds <= 9) {
      return `${minutes} : 0${seconds}`;
    } else return `${minutes} : ${seconds}`;
  }
};
