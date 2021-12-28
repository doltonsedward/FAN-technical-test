/*
    Soal 1
    Hitunglah jumlah pasang kaos kaki yang dapat dijual oleh sales.
    Contoh:
    Input: [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
    Output: 3
    Keterangan: Hanya 3 pasang kaos kaki yang dapat dijual (5, 7, 10)
*/

function generateQuantity(input) {
    const sortInp = input.sort((a, b) => a - b)
    let pairs = 0
    let isPairs = false 
    
    for (let i = 0; i <= sortInp.length; i++) {
        if (sortInp[i] === sortInp[i + 1]) {
            if (isPairs) {
                isPairs = false
                continue
            } 

            isPairs = true
            pairs++
        }
    }
    
    return pairs
}

// jawaban soal A
let input = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
console.log(input)
generateQuantity(input)

// jawaban soal B
input = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
console.log(input)
generateQuantity([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])

// jawaban soal C
input = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
console.log(input)
generateQuantity([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])