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
console.log('Input: ', [input.toString()])
console.log('Output: ', generateQuantity(input), '\n')

// jawaban soal B
input = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
console.log('Input: ', [input.toString()])
console.log('Output: ', generateQuantity(input), '\n')

// jawaban soal C
input = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
console.log('Input: ', [input.toString()])
console.log('Output: ', generateQuantity(input), '\n')







console.log('\n\n')







/*
    Soal 2
    Hitunglah jumlah kata pada sebuah kalimat.
    Contoh:
    Input: Kemarin Shopia per[gi ke mall.
    Output: 4 (Karena kata pergi memiliki special karakter)
*/

function countNumberOfWord (word) {
    const filter = /[!@#$%^&*()_+\=\[\]{};':"\\|<>\/]/
    const splitWord = word.split(' ')

    return splitWord.filter(item => !filter.test(item)).length
}

// jawaban soal A
input = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'
console.log('Input: ', input)
console.log('Output: ', countNumberOfWord(input), '\n')

// jawaban soal B
input = 'Berapa u(mur minimal[ untuk !mengurus ktp?'
console.log('Input: ', input)
console.log('Output: ', countNumberOfWord(input), '\n')

// jawaban soal C
input = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'
console.log('Input: ', input)
console.log('Output: ', countNumberOfWord(input), '\n')