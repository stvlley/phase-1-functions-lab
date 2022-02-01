function distanceFromHqInBlocks(someValue){
// returns the number of blocks given a value
const distanceInBlocks = Math.abs(42 - someValue)
    return distanceInBlocks
}
distanceFromHqInBlocks(43)

function distanceFromHqInFeet(blocks){
    return((Math.abs(blocks -42)) * 264)
    
}
distanceFromHqInFeet(43)

function distanceTravelledInFeet(start, end) {
   return((Math.abs(start - end)) * 264);

}
// distanceTravelledInFeet(43, 48)



function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02

    } else if (distance > 2000 && distance < 2500) {
        return  25

    }else{
        return "cannot travel that far"
    }}



// calculatesFarePrice(start, destination)