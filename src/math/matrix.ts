export class matrix {
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


export function matrixMul(A: matrix, B: matrix): matrix {
    const C = new matrix();

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


export function matrixAdd(A: matrix, B: matrix): matrix {
    const C = new matrix();
    for (let i = 0; i<A.rows; i++) {
        for (let j = 0; j<A.cols; j++) {
            const a = A.access(i,j);
            const b = B.access(i,j);
            const c = a + b;
            C.addEntry(c);
        }
        C.addRow();
    }
    C.finalize();
    return C;
}


function inverseMatrix(A: matrix): matrix {
    // Placeholder: does not calculate the inverse yet.
    return A;
}


function charPoly(A: matrix): string {
    // Placeholder: does not calculate the characteristic polynomial yet.
    return "hi";
}


function det(A: matrix): number {
    return 0
}

