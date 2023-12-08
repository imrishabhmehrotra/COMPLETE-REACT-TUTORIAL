import React from "react";
import ReactDOM from "react-dom/client";

//const child1 = React.createElement('p', {}, "I am a child 1")
//const child2 = React.createElement('p', {}, "I am a child 2")

//const div = React.createElement('div', {className: 'text'}, [child1, child2])

//here div is not a component but it is react element.

//Conditional rendering ternary operators
const isMorning = false;
const morningText = "good morning user";
const afternoonText = "Good afternoon user";

function handleClick() {
    console.log("i was clicked")
}

//conditional rendering
const morningElement = (
  <div>
    {morningText} <span onClick = {handleClick}>it is 8am</span>
  </div>
);
const afternoonElement = <div>{afternoonText} it is 6pm</div>;
const greetingElement = isMorning ? morningElement : afternoonElement;

//const div = <div className="text">{isMorning ? morningText : afternoonText}</div>

// In JavaScript style style it can be written as:
//const GreetingComponent = () => <>
//  {greetingElement}i am inside component</>

const GreetingComponent = function () {
  return <div>{greetingElement}i am inside component
  </div>;
};
console.log(GreetingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(GreetingComponent());
