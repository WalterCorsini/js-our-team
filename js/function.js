function saveCard(value) {
  let string = '<div class="card">';
  for (let elem in value) {
    //for in
    if (elem !== "photo") {
      string = string + `<span><strong>${value[elem]}</strong></span><br>`;
    } else {
      string = string + `<img src="./img/${value[elem]}" alt=""></div><br>`;
    }
  }
  return string;
}
