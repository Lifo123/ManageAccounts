
export default function searchSortLifo(Accounts, Input, currentID) {
    // Separate the active platform from the rest
    let activePlatform = [];
    let restPlatforms = [];
    for (let i = 0; i < Accounts.length; i++) {
        if (Accounts[i].id === currentID) {
            activePlatform = Accounts[i];
        } else {
            restPlatforms.push(Accounts[i]);
        }
    }


    for (let i = 0; i < restPlatforms.length - 1; i++) {
        for (let j = 0; j < restPlatforms.length - i - 1; j++) {
            let platformA = restPlatforms[j].Platform.toLowerCase();
            let platformB = restPlatforms[j + 1].Platform.toLowerCase();
            let search = Input.toLowerCase();

            let matchesA = countMatches(platformA, search);
            let matchesB = countMatches(platformB, search);

            // Compara el número de coincidencias
            if (matchesA < matchesB) {
                let temp = restPlatforms[j];
                restPlatforms[j] = restPlatforms[j + 1];
                restPlatforms[j + 1] = temp;
            } 
            // Si las coincidencias son iguales, ordena por la primera letra
            else if (matchesA === matchesB) {
                if (platformA[0] > platformB[0]) {
                    let temp = restPlatforms[j];
                    restPlatforms[j] = restPlatforms[j + 1];
                    restPlatforms[j + 1] = temp;
                }
            }
            
        }
    }

    let result = [activePlatform];
    for (let i = 0; i < restPlatforms.length; i++) {
        result.push(restPlatforms[i]);
    }

    return result;
}

const countMatches = (platform, search) => {
    let count = 0;
    for (let i = 0; i < platform.length; i++) {
        for (let j = 0; j < search.length; j++) {
            if (platform[i] === search[j]) {
                count++;
                break; 
            }
        }
    }
    return count;
}