const { async } = require("rxjs")

function bestRockBand(band){
    return new Promise((resolve, reject) => {
        if(band == "Queen"){
            resolve({
                success: true,
                bandName: band,
                msg: `${band} is the best rock band ever!`
            })
        }else{
            reject({
                success: false,
                msg: "I am not sure"
            })
        }
    })
}
function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if(response.success) {
            resolve(`Bohemian Rapsody by ${response.bandName}`)
        }else{
            reject("Do you know Queen?")
        }
    })
}

async function doTheJob(){
    try{
    const rockBandResponse = await bestRockBand("Queen")
    const bestRockSongResponse = await bestRockSong(rockBandResponse)
    console.log(bestRockSongResponse)
    }catch(err){
        console.log(err.msg)
    }
}
doTheJob()