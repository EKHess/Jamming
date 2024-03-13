function toArrayOfObjects(nestedObj) {
    let arrayOfObjs = [];
    const lengthOfNestedObj = Object.keys(nestedObj).length;

    for (i=0; i < lengthOfNestedObj; i++) {
        arrayOfObjs.push(nestedObj[i]);
    }

    return arrayOfObjs;
}

export default toArrayOfObjects;