window.onload = function () {
  function saintJosephDay(djs) {
    const curentDate = new Date();
    const daysLeft = djs - curentDate;
    const cleanDate = Math.round(daysLeft / (1000 * 60 * 60 * 24));
    return `Days left until Saint Joseph’s Day  ${cleanDate}.`
  }
  const dateSanJose = new Date(2026, 3, 19);
  document.write(saintJosephDay(dateSanJose));
    
    

}
