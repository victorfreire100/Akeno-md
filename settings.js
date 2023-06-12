//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}


//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true//auto reading in gc (true to on, false to off)
global.autoRecord = true//auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['917605902011'] //ur owner number
global.ownername = "🦄GURU" //ur owner name
global.ytname = "YT: KAKASHI" //ur yt chanel name
global.socialm = "GitHub: GURU" //ur github or insta name
global.location = "India, Odisha, Cuttack" //ur location

//bot bomdy 
global.owner = ['917605902011']
global.botname = 'Akeno Bot MD V4' //ur bot name
global.linkz = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.instagram.com/lungs__hacker/" //ur website to be displayed
global.botscript = 'https://wa.me/+917605902011?text=HII' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Akeno Bot  " //ur sticker watermark packname
global.author = "🦄GURU" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['917605902011'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Here is your material darling ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'make me admin darling!',
    owner: 'This Feature Is Only For my master Guru sama!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Darling Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The Horny mode has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
