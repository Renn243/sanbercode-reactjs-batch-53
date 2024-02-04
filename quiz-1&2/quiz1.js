const myCountPromise = (a) => {
    return new Promise((resolve, reject) => {
        if (a !== undefined) {
            setTimeout(() => {
                const result = a * 2;
                resolve(result);
            }, 2000);
        } else {
            reject("Maaf tidak ada nilai dalam parameter");
        }
    });
};

myCountPromise(2)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });