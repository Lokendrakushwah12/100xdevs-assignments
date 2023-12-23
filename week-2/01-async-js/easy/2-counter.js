let counter = (cnt) => {
    setTimeout(() => {
        console.log(cnt++);
        counter(cnt);
    }, 1000);
}

let cnt = 1;
counter(cnt);