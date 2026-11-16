export enum MatrixOperation {
    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Inverse = 'inverse',
    Determinant = 'determinant',
    RowReduce = 'rowReduce',
}

export const operationLabels = {
    [MatrixOperation.Add]: 'Add',
    [MatrixOperation.Subtract]: 'Subtract',
    [MatrixOperation.Multiply]: 'Multiply',
    [MatrixOperation.Inverse]: 'Inverse',
    [MatrixOperation.Determinant]: 'Determinant',
    [MatrixOperation.RowReduce]: 'Row reduce',
} satisfies Record<MatrixOperation, string>;