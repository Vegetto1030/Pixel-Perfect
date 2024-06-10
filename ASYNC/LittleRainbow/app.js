let bcColor = document.querySelector('body');
bcColor.style.backgroundColor = 'blue';

new Promise((resolve) => {
    setTimeout(() => {
        bcColor.style.backgroundColor = 'yellow';
        resolve();
    }, 1000);
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            bcColor.style.backgroundColor = 'red';
            resolve();
        }, 1000);
    });
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            bcColor.style.backgroundColor = 'cyan';
            resolve();
        }, 1000);
    });
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            bcColor.style.backgroundColor = 'violet';
            resolve();
        }, 1000);
    });
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            bcColor.style.backgroundColor = 'green';
            resolve();
        }, 1000);
    });
}).then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            bcColor.style.backgroundColor = 'purple';
            resolve();
        }, 1000);
    });
});
