// ** https://www.hackerrank.com/challenges/simple-text-editor/problem?isFullScreen=true

function processData(input) {
  const [_, ...inputArr] = input.split('\n');
  let str = '';
  const history = [];

  for (let i = 0; i < inputArr.length; i++) {
    const command = parseInt(inputArr[i].split(' ')[0]);
    const args = inputArr[i].split(' ')[1];

    switch (command) {
      case 1:
        history.push(str);
        str = str + args;
        break;
      case 2:
        history.push(str);
        str = str.substring(0, str.length - parseInt(args));
        break;
      case 3:
        console.log(str.charAt(parseInt(args) - 1));
        break;
      case 4:
        str = history.pop();
        break;
    }
  }
}
