var Questions = [
    'What\'s your name?',
    'Where are you from?',
    'What\'s your age?',
    'What do u do?',
    'It was nice talking to you :)'
];

var num = 0;

var response = document.querySelector('#ans');

var question = document.querySelector('#result');
question.innerHTML = Questions[0];


function showResponse(){
    if (response.value == ""){

    }else{
        if (num == 0){
            question.innerHTML = `Hello ${response.value}, nice meeting an awesome person like you :)`
            num++;
            response.value = "";
            response.setAttribute('placeholder', 'Please wait for 2secs...');
            setTimeout(changeQuestion, 2000);
        }else if (num == 1){
            question.innerHTML = `${response.value} is an awesome place`
            num++;
            response.value = "";
            response.setAttribute('placeholder', 'Please wait for 2secs...');
            setTimeout(changeQuestion, 2000);
        }else if (num == 2) {
            question.innerHTML = `Wow!! it means you were born in ${2020 - response.value}`
            num++;
            response.value = "";
            response.setAttribute('placeholder', 'Please wait for 2secs...');
            setTimeout(changeQuestion, 2000);
        }else if (num == 3) {
            question.innerHTML = `Hmmm, ${response.value} is really cool huh, nice.`
            num++;
            response.value = "";
            response.setAttribute('placeholder', 'Please wait for 2secs...');
            setTimeout(changeQuestion, 2000);
        }
    }
}

function changeQuestion(){
    question.innerHTML = Questions[num];
    response.setAttribute('placeholder', 'Please enter your response');

    if (num == 4){
        response.style.display = 'none';
    }
}


document.addEventListener('keypress', function(e){
    if (e.which == 13){
        showResponse();
    }
})