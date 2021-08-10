// Get values by COMP
function getChoosenByComp() {
    const comp = Math.random()  
    console.log('comp', comp)  
    if( comp < 0.34 ) return 'batu'  
    if( comp >= 0.34 && comp < 0.67 ) return 'kertas'  
    return 'gunting'  
}

// Get possibility PLAYER VS COM
function getPossibility(comp, player) {
    console.log('comp', comp)
    console.log('player', player)

      if( player === comp ) 
        return 'SERI !'  
      if( player === 'batu' )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        return ( comp === 'gunting' ) ? 'Kamu menang !' : 'Kamu kalah !'  
      if( player === 'gunting' ) 
        return ( comp === 'batu' ) ? 'Kamu kalah !' : 'Kamu menang !'  
      if( player === 'kertas' ) 
        return ( comp === 'gunting' ) ? 'Kamu kalah !' : 'Kamu menang !'  
      if( player === 'gunting' ) 
        return ( comp === 'kertas' ) ? 'Kamu menang !' : 'Kamu kalah !'  
      if( player === 'kertas' ) 
        return ( comp === 'batu' ) ? 'Kamu menang !' : 'Kamu kalah !'  
      if( player === 'batu' ) 
        return ( comp === 'kertas' ) ? 'Kamu kalah !' : 'Kamu menang !'  
}

// Animated
// function animated () {
//     const imgComp = document.querySelector('.img-comp')  
//     const picture = ['batu','kertas','gunting']  
//     let i = 0

//     // Started time                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//     const startedTime = new Date().getTime()  

//     // set interval
//     setInterval(() => {
//         // stop interval after 1 second
//         if(new Date().getTime() - startedTime > 1000){
//             clearInterval  
//             return  
//         }
//         if(i === picture.length) {
//             console.log('BERHASIL MAUSK')
//             return i = 0
//         } else {
//             console.log('GAGAL MAUSK')
//         }
//         imgComp.setAttribute('src', `assets/${picture[i++]}.png`)  

//     }, 100)   // 100 = 0.1 second
// }

// Event action
const choosen = document.querySelectorAll('.grid-item img')  
choosen.forEach((c) => {
    // Event click
    c.addEventListener('click', () => {
    const choosenByComp = getChoosenByComp()  
    const choosenByPlayer = c.className
    const result = getPossibility(choosenByComp, choosenByPlayer)  

    // Do function Animated
    // animated()

    setTimeout(() => {
            // Manipulation dom
            const imgComp = document.querySelector('.img-comp')  
            imgComp.setAttribute('src', `assets/${choosenByComp}.png`)  

            // Print result status
            const info = document.querySelector('.info')  
            info.innerHTML = result  
        })
    }, 1000)

    // // Manipulation dom
    // const imgComp = document.querySelector('.img-comp')  
    // imgComp.setAttribute('src', 'assets/' + choosenByComp + '.png')  

    // // Print result status
    // const info = document.querySelector('.info')  
    // info.innerHTML = result  
    // })
})