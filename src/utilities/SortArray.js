export const SortArray = (Array, String) => {
    const sortedArray = Array.sort((a, b) => {
        // Obtener las posiciones de la coincidencia de la cadena en los nombres de las plataformas
        const posA = a.Platform.toLowerCase().indexOf(String.toLowerCase());
        const posB = b.Platform.toLowerCase().indexOf(String.toLowerCase());

        if (posA === -1) return 1; // Si no se encuentra la coincidencia en 'a', mover hacia el final
        if (posB === -1) return -1; // Si no se encuentra la coincidencia en 'b', mover hacia el final

        // Ordenar por la posición de coincidencia
        return posA - posB;
    });
    
    return sortedArray; // Retornar el array ordenado
};
