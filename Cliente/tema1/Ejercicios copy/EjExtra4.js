window.onload = function () {
  function saintJosephDay(djs) {
    const currentDate = new Date();
    const daysLeft = djs - currentDate;
    const cleanDate = Math.round(daysLeft / (1000 * 60 * 60 * 24));
    return `Days left until Saint Joseph’s Day  ${cleanDate}.`
  }
  const dateSanJose = new Date(2026, 2, 19);
  document.write(saintJosephDay(dateSanJose));
    
    

}
