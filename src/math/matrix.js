class Matrix {
    constructor() {
        this.entries = [[]];
        this.rows = 0;
        this.cols = 0;
    }

    addEntry(entry) {
        this.entries[this.rows].push(entry);
    }

    addRow() {
        this.entries.push([]);
        this.rows++;
    }

    access(row, col) {
        return this.entries[row][col];
    }

    finalize() {
        this.cols = this.entries[0].length;
        if (this.entries[this.rows].length === 0) {
            this.entries.pop();
        }
    }
}

function matrixMul(A, B) {
    // Multiplies two matrices together and returns the product
    const C = new Matrix();

    for (let i = 0; i < A.rows; i++) {

        for (let j = 0; j < B.cols; j++) {
            let c = 0;

            for (let k = 0; k < A.cols; k++) {
                let a = A.access(i, k);
                let b = B.access(k, j);

                c += a * b;
            }

            C.addEntry(c);
        }
        C.addRow();
    }

    return C;
}

function inverseMatrix(A) {
    // Finds the inverse of a given matrix
    // Placeholder
    return A;
}

function charPoly(A) {
    // Finds the charateristic polynomial of a given matrix
    // Placeholder
    let bob = "hi";
    return bob;
}

const test_matrix1 = new Matrix();

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        test_matrix1.addEntry(j + i);
    }

    test_matrix1.addRow();

}
test_matrix1.finalize();

const test_matrix2 = new Matrix();

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        test_matrix2.addEntry(j + i);
    }

    test_matrix2.addRow();
}
test_matrix2.finalize();

for (let i = 0; i < 4; i++) {
    console.log(test_matrix1.entries[i]);
}

console.log("\n");

for (let i = 0; i < 4; i++) {
    console.log(test_matrix2.entries[i]);
}

let test_matrix3 = matrixMul(test_matrix1, test_matrix2);

console.log("\n");

for (let i = 0; i < 4; i++) {
    console.log(test_matrix3.entries[i]);
}