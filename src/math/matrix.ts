class Matrix {
    entries: number[][];
    rows: number;
    cols: number;

    constructor() {
        this.entries = [[]];
        this.rows = 0;
        this.cols = 0;
    }

    addEntry(entry: number): void {
        this.entries[this.rows].push(entry);
    }

    addRow(): void {
        this.entries.push([]);
        this.rows++;
    }

    access(row: number, col: number): number {
        return this.entries[row][col];
    }

    finalize(): void {
        this.cols = this.entries[0].length;

        if (this.entries[this.rows].length === 0) {
            this.entries.pop();
        }
    }
}

function matrixMul(A: Matrix, B: Matrix): Matrix {
    const C = new Matrix();

    for (let i = 0; i < A.rows; i++) {
        for (let j = 0; j < B.cols; j++) {
            let c = 0;

            for (let k = 0; k < A.cols; k++) {
                const a = A.access(i, k);
                const b = B.access(k, j);

                c += a * b;
            }

            C.addEntry(c);
        }

        C.addRow();
    }

    C.finalize();

    return C;
}

function inverseMatrix(A: Matrix): Matrix {
    // Placeholder: does not calculate the inverse yet.
    return A;
}

function charPoly(A: Matrix): string {
    // Placeholder: does not calculate the characteristic polynomial yet.
    return "hi";
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

const test_matrix3 = matrixMul(test_matrix1, test_matrix2);

console.log("\n");

for (let i = 0; i < 4; i++) {
    console.log(test_matrix3.entries[i]);
}