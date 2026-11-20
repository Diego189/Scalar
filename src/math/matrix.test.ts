import { matrix, ref } from "./matrix";

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
        name: "normalizes a single-row matrix",
        a: [
            [2, 4, 6]
        ],
        expected: [
            [1, 2, 3],
        ],
    },
    {
        name: "converts a 2×2 matrix to REF",
        a: [
            [2, 4],
            [4, 10],
        ],
        expected: [
            [1, 2],
            [0, 1],
        ],
    },
    {
        name: "converts a 3×3 matrix to REF",
        a: [
            [1, 2, 3],
            [2, 5, 8],
            [3, 8, 14],
        ],
        expected: [
            [1, 2, 3],
            [0, 1, 2],
            [0, 0, 1],
        ],
    },
    {
        name: "handles negative numbers",
        a: [
            [-2, 4],
            [4, -10],
        ],
        expected: [
            [1, -2],
            [0, 1],
        ],
    },
    {
        name: "handles fractional pivots",
        a: [
            [2, 1],
            [1, 1],
        ],
        expected: [
            [1, 0.5],
            [0, 1],
        ],
    },
    {
        name: "handles a rectangular matrix with more columns than rows",
        a: [
            [2, 4, 6],
            [4, 10, 14],
        ],
        expected: [
            [1, 2, 3],
            [0, 1, 1],
        ],
    },
])("$name", ({ a, expected }) => {
    const A = createMatrix(a);

    const result = ref(A);

    expect(result.entries).toEqual(expected);
    expect(result.rows).toBe(expected.length);
    expect(result.cols).toBe(expected[0].length);
});