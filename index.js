module.exports = function ExodorFlight(mod) {
    mod.hook('S_MOUNT_VEHICLE', 2, e =>{
        if(mod.game.me.gameId==e.gameId && mod.game.me.zone==2000)enabledFlight()
    })
    mod.hook('S_UNMOUNT_VEHICLE', 2, e =>{
        if(mod.game.me.gameId==e.gameId && mod.game.me.zone==2000)disableFlight()
    })

    function enabledFlight(){
        mod.send('S_ABNORMALITY_BEGIN', 4, {
            target: mod.game.me.gameId,
            source: mod.game.me.gameId,
            id: 30010000,
            duration: 600000n,
            stacks: 1,
            hitCylinderId: 0,
            unk3: 0
        })
    }
    function disableFlight(){
        mod.send('S_ABNORMALITY_END', 1, {
            target: mod.game.me.gameId,
            id: 30010000
        })
    }
}