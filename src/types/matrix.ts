export enum MatrixOperation {
    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Inverse = 'inverse',
    Determinant = 'determinant',
    RowReduce = 'rowReduce',
}

export const operationLabels = {
    [MatrixOperation.Add]: 'Addition',
    [MatrixOperation.Subtract]: 'Subtraction',
    [MatrixOperation.Multiply]: 'Multiplication',
    [MatrixOperation.Inverse]: 'Inverse',
    [MatrixOperation.Determinant]: 'Determinant',
    [MatrixOperation.RowReduce]: 'Row Reduction',
} satisfies Record<MatrixOperation, string>;


const enum operations {
    Addition = 'A + B',
    Subtraction = 'A - B',
    Multiplication = 'A × B',
    Inverse = 'A⁻¹',
    Determinant = 'det(A)',
    RowReduction = 'rref(A)',
}

export const operationLabelsMap: Record<MatrixOperation, operations> = {
    [MatrixOperation.Add]: operations.Addition,
    [MatrixOperation.Subtract]: operations.Subtraction,
    [MatrixOperation.Multiply]: operations.Multiplication,
    [MatrixOperation.Inverse]: operations.Inverse,
    [MatrixOperation.Determinant]: operations.Determinant,
    [MatrixOperation.RowReduce]: operations.RowReduction,
};

export type MatrixA = {
    colA: number;
    rowA: number;
};

export type MatrixB = {
    colB: number;
    rowB: number;
};