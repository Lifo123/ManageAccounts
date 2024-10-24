import { db1, analytics1 } from "@Services/firebase";
import { ref, get, set, query, limitToLast } from "firebase/database";

const getData = async (userId: string) => {
    try {
        const userRef = ref(db1, `accounts/acc${userId}`);
        const userSnapshot = await get(userRef);
        
        return userSnapshot.val()

    } catch (e) {
        console.log(e);
        return undefined
    }

}


export const queryAcc = {
    getData,
}