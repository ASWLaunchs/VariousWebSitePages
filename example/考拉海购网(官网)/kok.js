var res = i = 0;
while (i < 100) {
    if (i % 2 != 0) {
        res += i;
    }
    i++;
}

console.log("0到99之和:" + res);

for (let i = 100; i > 0; i--) {
    console.log(i);
}


for (var i = 0; i < 6; i++) {
    for (var j = 0; j < i; j++) {
        document.write("");
    }
    document.write('<br/>');
}


