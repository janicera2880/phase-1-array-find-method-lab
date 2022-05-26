// code your solution here
function superbowlWin(record) {
    const recordResult = record.find(recordYear=> recordYear.result === 'W')
    if (recordResult === undefined) {

    }

else {
    return recordResult.year;
    }
}