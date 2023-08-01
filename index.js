function scuberGreetingForFeet(ride){
  if (ride <=400) {
  return 'This one is on me!';
  } else if (ride >400 && ride < 2000) {
    return 'That will be twenty bucks.';
  } else if (ride >= 2000 && ride < 2500){
    return'I will gladly take your thirty bucks.';
  } else if (ride > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  let cityCheck = cityName === "NYC" ? "Ok, sounds good." : "No go.";
  return cityCheck;
}

function switchOnCharmFromTip(tipPaid){   
  let tipMessage;

  switch (tipPaid){
    case 'generous':
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = "Thank you.";
      break;
    default:
      tipMessage = "Bye.";
      break;
  }
  return tipMessage;
}