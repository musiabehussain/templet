
//here iam selecting the id of input
  let screen = document.getElementById('screen');
  buttons = document.querySelectorAll('button');
  let screenValue = '';
//here iam using for loop with click event
for (item of buttons) {
//its arrow function;
     item.addEventListener('click', (e) => {
          buttonText = e.target.innerText;
          console.log('button text io ', buttonText);
// if condition for multiplicatation
// first i can use  just X for goog loock on screen 
//ana i can change its value with multipilication (*)
          if (buttonText == 'X') {
               buttonText = '*';
               screenValue += buttonText;
               screen.value = screenValue;
          }
//its for clear button......................................................
          else if (buttonText == 'C') {
               screenValue = "";
               screen.value = screenValue;
//......................................................................
            }
//here iam using eval function which can be evalvate all the values
          else if (buttonText == '=') {
               screen.value = eval(screenValue);
//=======================================================.
          }
          else {
               screenValue += buttonText;
               screen.value = screenValue;
          }

     });
}
