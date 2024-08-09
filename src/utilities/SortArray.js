export const SortArray = (Array, String, id) => {
    let CurrentItem = [Array.filter(item => item.id === id)[0]];

    let filteredArray = Array.filter(item => item.id !== id);
    let sortedArray = filteredArray.sort((a, b) => {
        const firstValueA = Object.values(a)[0].toLowerCase();
        const firstValueB = Object.values(b)[0].toLowerCase();
        const searchLower = String.toLowerCase();

        // Calcular la distancia de Levenshtein para cada valor
        const distanceA = levenshteinDistance(searchLower, firstValueA);
        const distanceB = levenshteinDistance(searchLower, firstValueB);

        // Ordenar por la distancia de Levenshtein (menor es mejor)
        if (distanceA !== distanceB) return distanceA - distanceB;

        // Si las distancias son iguales, ordenar por id
        return a.id - b.id;
    });

    let FinalArray = [...CurrentItem, ...sortedArray];

    return FinalArray;
};

export const SortByUsage = (Array) => {
    return Array.sort((a, b) => a.Usage - b.Usage);
}

const levenshteinDistance = (a, b) => {
    const matrix = [];

    // Inicializar la primera fila y columna
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Calcular las distancias
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
};
