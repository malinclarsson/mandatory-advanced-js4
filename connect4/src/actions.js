// När någon trycker på en kolumn
export function dropTile(col) {
    return {
        type: 'DROP_TILE',
        payload: col,
    };
}