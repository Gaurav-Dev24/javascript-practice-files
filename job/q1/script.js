// Selecting the divs one by one
const firstDiv = document.getElementById("sectionOne");
const secondDiv = document.getElementById("sectionTwo");
const thirdDiv = document.getElementById("sectionThird");

// Set an initial flag to indicate if the div has been added or not
let divAdded = true;

// Creating anchor to open second div element
const secondDivAnchor = document.createElement("a");
secondDivAnchor.id = "nextdiv";
secondDivAnchor.innerText = "component";

// Function to add a div element
function addFirstDiv() {
  
    // Adding Section one heading
    const h2 = document.createElement("h2");
    h2.innerHTML = "What is State?";
    firstDiv.appendChild(h2);

    // Adding paragraphs in the section
    const para1 = document.createElement("p");
    para1.innerText = `State is a JavaScript object that stores a component’s dynamic data and determines the component’s
  behaviour. Because state is dynamic, it enables a component to keep track of changing information in
  between renders and for it to be dynamic and interactive.`;
    firstDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.innerHTML = `<p>State is similar to props but unlike props, it is private to a <a href="#" id= "nextDiv" onClick= "addSecondDiv()">component</a>  and is controlled solely by the
  said component. In the examples from previous chapters, the behaviour of components has primarily
  depended on the props that are passed down to them. In those cases, the components that receive the
  props have no control over them because props are read-only.</p>`;

    firstDiv.appendChild(para2);
    // firstDiv.scrollIntoView()
    // // Append the div to the body
    document.body.appendChild(firstDiv);
}

// Get the anchor element by its id
const addFirstDivLink = document.getElementById("state-link");

// Add a click event listener to the anchor element
// addFirstDivLink.addEventListener("click", addFirstDiv);

addFirstDivLink.addEventListener('click', () => {
  if (divAdded){
    addFirstDiv();
    divAdded = false;
  }

})

// ****************************

// Function to add a second div element

function addSecondDiv() {
  if (!divAdded) {
    
    // Adding heading of section
    const h2 = document.createElement("h2");
  h2.innerText = "Adding State to a Class Component";
  secondDiv.appendChild(h2);

  // Adding code one
  const pre1 = document.createElement("pre");
  pre1.innerText = `class Greeting extends React.Component {
    render(){
      return &lt;h1&gt;I’m a component in need of some state! &lt;/h1&gt;;
    }
  }`;
  secondDiv.appendChild(pre1);

  // Adding the second div para
  const para1 = document.createElement("p");
  para1.innerHTML = `<p>
  Adding state to the Greeting component above involves defining within the <a href="#" id= "nextDiv" onClick= "addThirdDiv()"> class component </a>, a constructor
  function that assigns the initial state using this.state.
  </p>`;
  secondDiv.appendChild(para1);
  // secondDiv.scrollIntoView();
  // Adding Code 2
  const pre2 = document.createElement("pre");
  pre2.innerText = `class Greeting extends React.Component {
    render(){
      return &lt;h1&gt;I’m a component in need of some state! &lt;/h1&gt;;
    }
  }`;
  secondDiv.appendChild(pre2);
  
  // Append the div to the body
  document.body.appendChild(secondDiv);
  divAdded = true;
}  
}




// ***************************************************************

// Function to add third div

function addThirdDiv() {
  if(divAdded){

    // Adding heading of section
    const h2 = document.createElement("h2");
  h2.innerText = "Investigating State using React Dev Tools";
  thirdDiv.appendChild(h2);

  const para1 = document.createElement("p");
  para1.innerHTML = `<p>The devtools are available for download on both <a href = "https://firefox-source-docs.mozilla.org/devtools-user/" target= "_blank">Mozilla Firefox Add-ons</a> and the <a href="https://developer.chrome.com/docs/devtools/" target="_blank"> Chrome Web Store</a>. Follow
the appropriate link to install the devtools depending on which browser you have installed on your
computer.</p>`;
  thirdDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.innerText = `Throughout the rest of this book, Chrome will be used as the browser of choice. In order to confirm
successful installation of the devtools on Chrome, open the developer tools window using Cmd+Opt+I on a
Mac or Ctrl+Alt+I on a windows PC. You should now see a React tab.`;
  thirdDiv.appendChild(para2);
  // para2.scrollIntoView();

  document.body.appendChild(thirdDiv);
  divAdded = false;
}
}
