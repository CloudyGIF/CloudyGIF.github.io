const HorizontalText = document.querySelectorAll(".text-scroll");

const languages = [
    "C#",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Python"
  ];

  function initializeItems() {
    HorizontalText.forEach((scrollItem) => {
      scrollItem.innerHTML = "";
    });
};

  initializeItems();


  languages.forEach((item) => {
    addItemToScrolls(item);
  });

function addItemToScrolls(input) {
 
    HorizontalText.forEach((scrollItem) => {
      const textItem = document.createElement("span");
      textItem.classList.add("text");
      textItem.innerHTML = " " + input + " ";
      scrollItem.appendChild(textItem);
      console.log(input);
    });
    
    };