const CI = {
    PLAYER_NAME: 0,
    TEAM_NAME: 1,
    YEAR: 2,
    CARD_MAN: 3,
    SERIES: 4,
    SET: 5,
    CARD_NUM: 6,
    TAGS: 7
}

const ERR_RESPONSE = {
    NULL: (key) => `${key} value = null`,
    EMPTY: (key) => `${key} array is empty`,
    WRONG_TYPE: (key, expectedType, foundType) => {
        return `${key} value is the wrong type.  Expected ${expectedType.toString()} but got ${foundType.toString()}`
    },

}

class CardInfo {
    constructor(
        player, team, year, cardMan, series, set, cardNum, tags
    ) {
        let cardInfoStream = [player, team, year, cardMan, series, set, cardNum, tags]
        checkIncomingCardInfo(cardInfoStream)


        this.player = player
        this.team = team
        this.year = year
        this.cardMan = cardMan
        this.series = series
        this.set = set
        this.cardNum = cardNum
        this.tags = tags
    }
}

class CardInfoError {
    constructor(field, message) {
        this.field = field
        this.message = message
    }
}

let checkIncomingCardInfo = (cardInfoStream) => {
 let x = checkPlayerName(cardInfoStream[0])

 if (!x) {
     console.log(`Error found in ${x.field}: ${x.message}`)
 }

 console.log(`No Errors Found`)
}

let checkPlayerName = (playerName) => {
    let ret
    let caught = false
    let key = `player name`
    switch(playerName) {
        case playerName == null:
            ret = new CardInfoError(`player`, ERR_RESPONSE.NULL(key))
            caught = true
        case playerName.length === 0:
            ret = new CardInfoError(`player`, ERR_RESPONSE.EMPTY(key))
            caught = true
        case typeof(playerName) != typeof([]):
            ret = new CardInfoError(`player`, ERR_RESPONSE.WRONG_TYPE(key, typeof([]), typeof(playerName)))
            caught = true
        default:
            ret = true
    }
        
}

