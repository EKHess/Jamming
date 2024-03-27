let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

export function toArrayOfObjects(nestedObj) {
    let arrayOfObjs = [];
    const lengthOfNestedObj = Object.keys(nestedObj).length;

    for (let i=0; i < lengthOfNestedObj; i++) {
        arrayOfObjs.push(nestedObj[i]);
    }

    return arrayOfObjs;
}

export function toTrackResultObj(spotifyTrackObj) {
    const trackResultObj = {
        title: spotifyTrackObj.name,
        artist: spotifyTrackObj.artists[0].name,
        album: spotifyTrackObj.album.name,
        id: spotifyTrackObj.id,
        uri: spotifyTrackObj.uri,
        img: spotifyTrackObj.album.images[0].url,
    }

    return trackResultObj;
}