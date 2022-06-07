
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7765C0C5354A',
}

// Other
global.owner = ['6283856237922','6283856237922','6283856237922']
global.premium = ['6283856237922']
global.packname = 'ʀᴏʙᴏᴛ ᴍᴏɴᴋᴇʏ ᴋɪɴɢ-Mdོ'
global.author = '♕𖦹ᴍᴏɴᴋᴇʏ ᴋɪɴɢ𖦹♕'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '♧'
global.mess = {
    success: '✓ Ini Kak',
    admin: 'Fitur Khusus Admin Group Kak',
    botAdmin: 'Tomori Harus Menjadi Admin Terlebih Dahulu Kak',
    owner: 'Fitur Khusus Owner Tomori',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Tomori',
    wait: 'Permintaan Anda Sedang Tomori Proses...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./src/fake.jpg')
global.pajar = fs.readFileSync('./src/fake.jpg')

global.menu = fs.readFileSync('./src/fake2.jpg')
global.bc = fs.readFileSync('./src/fake3.jpg')
global.sewa = fs.readFileSync('./src/fake4.jpg')
global.fake = fs.readFileSync('./src/fake.jpg')
global.video = { url: 'https://a.uguu.se/XifETdsn.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
