n = prompt()
for( let i = 2; i < n; i++){
    let res = true
    for( let j = 2; j < (i ** (1/2)) + 1; j++){
        if(i % j == 0){
            res = false
        }
    }
    alert(2)
    if(res == true){
        alert(i)
    }
}