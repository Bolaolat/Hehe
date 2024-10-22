require("./all/module")

//=================================================//

//GLOBAL PAYMENT
global.storename = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.dana = "2347041039367"
global.gopay = false
global.ovo = false
global.qris = "https://l.top4top.io/p_31903ydpr1.jpg"
//=================================================//

// GLOBAL SETTING

global.owner = "2347041039367" //ganti nomer lu biar bisa di gunakan botnya
global.namabot = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.nomorbot = "2347041039367"
global.namaCreator = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.linkyt = "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
//=================================================//
global.autoJoin = false
//NOT CHANGE / JANGAN GANTI
global.antilink = false
//NOT CHANGE / JANGAN GANTI
global.versisc = '5.0'
//NOT CHANGE / JANGAN GANTI
//=================================================//
global.delayjpm = 5500
// JGN GANTI NANTI ERROR
//=================================================//

// SETTING PANEL
global.apikey = '' //Plta
global.capikey = '' //Pltc
global.domain = 'https://'
global.eggsnya = '15'
global.location = '1'

//=================================================//

//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://b.top4top.io/p_3189wqnd31.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.packname = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.author = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.jumlah = "5"
//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})