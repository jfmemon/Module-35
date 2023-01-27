const footballPlayer = {
    name: 'Karim Benjema',
    clubName: 'Real madrid',
    age: 30,
    isGoodPerson: true,
    figure: {
        height: 60,
        weight: 70,
        skinColor: 'white'
    },
    address: [
        { permanent: 'France' },
        { present: 'Palestine' },
        { past: 'Uk' }
    ],
    play: function () {
        return `${this.name} is captain of ${this.clubName}. His height is ${this.figure.height}`;
    }
}

const playerAddressThirdIndex = footballPlayer.address[2];
// console.log(playerAddressThirdIndex);
const pastAddress = Object.values(playerAddressThirdIndex);
// console.log(pastAddress);
const templateString = `Karim benzema's past address is ${pastAddress}. His height is ${footballPlayer.figure.height}, his weight is ${footballPlayer.figure.weight} and his skin color is ${footballPlayer.figure.skinColor}.`;
console.log(templateString);