let timer = 0;
function test_console() {
    console.log('Test Console...');
}

function number() {
    console.log('数字をいっぱい並べる。');
    timer = 100;
    while(timer<=100){
        timer = timer + 1;
        console.log('数字：' + timer);
    }
}

function function_a() {
    test_console();
    number();
}