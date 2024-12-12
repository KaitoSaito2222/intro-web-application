function printNames(namesList) {
  const pr1 = document.createElement("p");
  pr1.id = "output";
  for (let i = 0; i < namesList.length; i++) {
    const names = document.createTextNode(namesList[i] + "\n");
    pr1.appendChild(names);
  }
  // Append the paragraph to the
  //  body of the document
  document.body.appendChild(pr1);
}
