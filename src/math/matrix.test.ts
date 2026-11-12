import { matrix, matrixMul } from "./matrix";

// Builds a Matrix
function createMatrix(entries: number[][]): matrix {
    const Matrix = new matrix();

    for (const row of entries) {
        for (const entry of row) {
            Matrix.addEntry(entry);
        }

        Matrix.addRow();
    }

    Matrix.finalize();
    return Matrix;
}

test.each([
    {
        name: "multiplies two 2×2 matrices",
        a: [
            [1, 2],
            [3, 4],
        ],
        b: [
            [5, 6],
            [7, 8],
        ],
        expected: [
            [19, 22],
            [43, 50],
        ],
    },
    {
        name: "multiplies a 2×3 matrix by a 3×2 matrix",
        a: [
            [1, 2, 3],
            [4, 5, 6],
        ],
        b: [
            [7, 8],
            [9, 10],
            [11, 12],
        ],
        expected: [
            [58, 64],
            [139, 154],
        ],
    },
    {
        name: "preserves a matrix when multiplied by the identity",
        a: [
            [2, 3],
            [4, 5],
        ],
        b: [
            [1, 0],
            [0, 1],
        ],
        expected: [
            [2, 3],
            [4, 5],
        ],
    },
    {
        name: "returns a zero matrix with the correct dimensions",
        a: [
            [1, 2],
            [3, 4],
        ],
        b: [
            [0, 0, 0],
            [0, 0, 0],
        ],
        expected: [
            [0, 0, 0],
            [0, 0, 0],
        ],
    },
    {
        name: "handles negative numbers",
        a: [
            [-1, 2],
            [3, -4],
        ],
        b: [
            [5, -6],
            [-7, 8],
        ],
        expected: [
            [-19, 22],
            [43, -50],
        ],
    },
])("$name", ({ a, b, expected }) => {
    const A = createMatrix(a);
    const B = createMatrix(b);

    const result = matrixMul(A, B);

    expect(result.entries).toEqual(expected);
    expect(result.rows).toBe(expected.length);
    expect(result.cols).toBe(expected[0].length);
});