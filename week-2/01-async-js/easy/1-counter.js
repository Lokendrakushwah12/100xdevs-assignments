let counter = () => {
    let cnt = 1;
    setInterval(() => {
        console.log(cnt++);
    }, 1000)
}

counter();