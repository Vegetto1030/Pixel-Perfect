let bcColor = document.querySelector('body');

setTimeout(() => {
    bcColor.style.backgroundColor = 'yellow';
    setTimeout(() => {
        bcColor.style.backgroundColor = 'red';
        setTimeout(() => {
            bcColor.style.backgroundColor = 'cyan';
            setTimeout(() => {
                bcColor.style.backgroundColor = 'violet';
                setTimeout(() => {
                    bcColor.style.backgroundColor = 'green';
                    setTimeout(() => {
                        bcColor.style.backgroundColor = 'purple';
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
