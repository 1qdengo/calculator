function add(char) {
    const display = document.getElementById('display');

    display.value = display.value + char;
    //display에 값을 넣어줍니다
}

function calculate() {

    const display = document.getElementById('display');

    const result = eval(display.value);
    //display의 값을 계산한다

    document.getElementById('result').value = result;
    //계산한 값을 result에 표시한다
}

function reset() {
    //받은 값을 리셋한다
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}
