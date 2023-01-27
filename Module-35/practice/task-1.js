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
    address: [{permanent: 'France'}, {present: 'Palestine'}, {past: 'Uk'}],
    play: function() {
        return `${this.name} is captain of ${this.clubName}. His height is ${this.figure.height}`;
    }
}

const playFunction = footballPlayer.play();
console.log(playFunction);
const footballerAddress = footballPlayer.address
for(const player of footballerAddress) {
    const playerInformation = Object.player(footballPlayer);
    console.log(playerInformation);
}