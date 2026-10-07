const {createInterface} = require("node:readline");

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// for loop
rl.question("masukkan total baris!", function (ans) {
    const total = parseInt(ans)

    if (!NaN && total > 0){
        let hasil = "";
        for (let x = 1; x <= total; x++) {
            for (let y = 1; y <= x; y++) {
                hasil += '* ';
            }
            hasil += '\n';
        }
        console.log(hasil);
    } else {
        console.log("Input must be a number!");
    }

    rl.close();
})

// while loop
// rl.question("masukkan total baris!", function(ans) {
//     const total = parseInt(ans);

//     if (!NaN && total > 0) {
//         let hasil = "";
//         let i = 1;
//         while (i <= total){
//             let j = 1;
//             while(j <= i){
//                 hasil += "* ";
//                 j++
//             }
//             hasil += "\n";
//             i++
//         }
//         console.log(hasil);
//     } else {
//         console.log("Input must be a number & greater than 0")
//     }
//     rl.close();
// })

// do while loop
// rl.question("masukkan total baris!", function(ans) {
//     const total = parseInt(ans);

//     if(!NaN && total > 0){
//         let hasil = "";
//         let i = 1;
//         do {
//             let j = 1;
//             do {
//                 hasil += "* ";
//                 j++;
//             } while (j <= i);
//             hasil += "\n";
//             i++
//         } while (i <= total);
//         console.log(hasil);
//     } else {
//         console.log("Input must be number & greater than 0");
//     }
//     rl.close();
// })



