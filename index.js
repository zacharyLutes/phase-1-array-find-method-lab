
const superbowlWin = objectArray => {
    const r = objectArray.find(element => element.result === 'W');
    if (r) {
        return r.year
    } else {
        return undefined;
    }
}