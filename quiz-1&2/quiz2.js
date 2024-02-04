function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books = [
            { name: "shinchan", totalPage: 50, isColorful: true },
            { name: "Kalkulus", totalPage: 250, isColorful: false },
            { name: "doraemon", totalPage: 40, isColorful: true },
            { name: "algoritma", totalPage: 250, isColorful: false },
        ];

        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = "Maaf buku di bawah 40 halaman tidak tersedia";
            reject(reason);
        }
    });
}

async function execute(colorful, amountOfPage) {
    try {
        let result = await filterBooksPromise(colorful, amountOfPage);
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}

execute(30);
execute(true, 40);
execute(true, 50);
execute(false, 250);