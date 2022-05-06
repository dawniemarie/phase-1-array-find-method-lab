function superbowlWin(record) {
    const win = record.find(element => element.result === "W")
    return win ? win.year : undefined
}