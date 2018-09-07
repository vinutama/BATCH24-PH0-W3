function balikString(sentence) {
    var result = '';
    for (var i = sentence.length - 1; i >= 0; i--) {
        result = result + sentence[i];
    }

    return result;
}



console.log(balikString('hello world!'));


//input "hello world!"
//output
// "!dlrow olleh"