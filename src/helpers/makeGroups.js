

export const makeGroups = (arr) => {
    let arrTotal = arr.slice(0, arr.length)
    let arr1 = [];
    for (let i = 0; i < arrTotal.length; i++) {
        let number = Math.floor(Math.random() * arrTotal.length - 1);
        arr1[i] = arrTotal.splice(number, 1)[0];

    }
    return {
        team1: arr1,
        team2: arrTotal
    }

}