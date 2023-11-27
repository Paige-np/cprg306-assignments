import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

export async function addNewItem(userId, itemObj){
    try {
        let userItemsCollectionRef = collection(db, "users", userId, "items");
        let addItemPromise = await addDoc (userItemsCollectionRef, itemObj); // need to define where to add the item
        console.log(addItemPromise.id);
    } catch (error) {
        console.log(error);
    }
    
}

export async function getItemList(userID){
    let userItemsCollectionRef = collection(db, "users", userID, "items");
    let collectionSnapshot = await getDocs(userItemsCollectionRef);
    let itemList = [];
    collectionSnapshot.forEach(doc => {
        let thisItem = {
            id: doc.id,
            ...doc.data(),
        };
        console.log(doc.id, " - ", doc.data());
        itemList.push(thisItem);
    });
    //console.log(itemList)
    return itemList;

}

