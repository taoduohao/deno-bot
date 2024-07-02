import { Bot, InlineKeyboard } from 'https://deno.land/x/grammy@v1.24.0/mod.ts'

// 外测环境
// const botToken = '7388996011:AAHnWNmEBm66fwt_twpY9i3KPzxHX9vkolI' // 蒙娜丽莎机器人ID
// const botUrl = `https://t.me/haiyanstar_bot/` // 机器人链接
// const miniAppUrl = 'https://t.me/haiyanstar_bot/ximi/' // 小程序链接
// const groupUrl = 'https://t.me/FutureFunGenesisOfficial' // 群组链接
// const homeUrl = 'https://test-h5.ximi.world/' // 主页
// const walletUrl = 'https://test-h5.ximi.world/pages/wallet' // 钱包
// const promoteUrl = 'https://test-h5.ximi.world/pages/promote?mode=1' // 推广

// 正式环境
const botToken = '6998202214:AAE3YW0fMx-Q5zAF8nlJPuTdPI7VMi0iRLU' // FF机器人ID
const botUrl = `https://t.me/FutureFun_earningwct_bot/` // 机器人链接
const miniAppUrl = 'https://t.me/FutureFun_earningwct_bot/FutureFun/' // 小程序链接
const groupUrl = 'https://t.me/FutureFunGenesisOfficial' // 群组链接
const homeUrl = 'https://ff.zone/' // 主页
const walletUrl = 'https://ff.zone/pages/wallet' // 钱包
const promoteUrl = 'https://ff.zone/pages/promote?mode=1' // 推广

const channelUrl = 'https://t.me/FutureFunOfficial' // TG频道
const paperUrl = 'https://ff-whitepaper.ff.zone/' // 白皮书

const bot = new Bot(botToken)
// 快捷消息列表
const commandList = [
  { command: 'start', description: 'Start the bot' },
  { command: 'invite', description: 'Invite a friend' },
  { command: 'help', description: 'Show help text' },
]

// 指令列表
const instructList = ['start', 'invite', 'help']

// 字符串转base64
const encode = (str) => {
  let _str = encodeURI(str)
  let base64 = btoa(_str)
  return base64
}

// 答复数据
const languageObj = {
  start: {
    photo: 'https://test-h5.ximi.world/static/img/telegram/picture2.png',
    caption:
      'Thank you for choosing us! The platform coin airdrop is about to begin. The earlier you join, the more advantageous the coin offering! \nDeposit ≥100 USDT on the platform and receive up to 105% equivalent in WCT. Deposit 100 USDT and get 205 USDT (100 USDT + value of 105 USDT in WCT). Buy more, get more with no upper limit. \nCurrent estimate: <b>1 WCT ≈ 1 USDT</b>, next time estimate: 1 WCT ≈ 1.02 USDT. Take advantage of the rising WCT coin price. Acquire at the highest 105% gift ratio before the adjustment for more advantages. Stay ahead in wealth accumulation. \nJoin the community during the public testing period to enjoy exclusive benefits. What are you waiting for? Come and join the fun!',
  },
  invite: {
    photo: 'https://test-h5.ximi.world/static/img/telegram/picture3.png',
    caption:
      'Invite your friends to sign up for the platform and top up via your exclusive link.\nAfter your friend tops up successfully, you will immediately receive 2% USDT cashback.\nIf your friend participates in the game betting, you will get 49% rebate USDT cashback.🎁\nYour personal link ',
  },
  help: {
    photo: '',
    caption:
      'Dear FuntrueFuners, if you have any issues while using our products, dot not hesitate to contact us.\nPurchase Statement\nThe FuntrunFun platform forbids users under the age of 18 to top up on the platform, and the platform has the right to refuse top-up orders from non-compliant users.\n📖 How to Register\nIf you have a Telegram account, you can automatically complete the registration by clicking on the game link, for others, please refer to the tutorial.\nLink: https://t.me/FutureFunOfficial/36\n📬 How to Mine by Invitation\nOther Common Questions\nLink: https://t.me/FutureFunOfficial/17',
  },
}

// Deposit Now —— TG平台钱包主页
// Play Now ——TG平台主页
// Join the Community —— 平台TG频道
// Whitepaper —— WCT白皮书
// Online Customer Service ——官方群

// start 指令
const keyboard1 = new InlineKeyboard()
  .webApp('Deposit Now', walletUrl)
  .row()
  .webApp('Play now', homeUrl)
  .row()
  .url('Join the Community', channelUrl)
  .url('Whitepaper', paperUrl)
  .row()
  .url('Online Customer Service', groupUrl)

// invite指令
const keyboard2 = new InlineKeyboard()
  .webApp('Invite a friend', promoteUrl)
  .row()
  .webApp('Back to game', homeUrl)

// help指令
const keyboard3 = new InlineKeyboard().webApp('Play now', homeUrl)

// 7140201455 思琪  7344034452 海燕
// 获取个人信息
const me = await bot.api.getMe()
console.log('【个人信息】', me)

// 获取个人信息
const updates = await bot.api.getUpdates()
console.log('【更新信息】', updates)

// 获取按钮信息
const chatMenuButton = await bot.api.getChatMenuButton()
console.log('【按钮信息】', chatMenuButton)

await bot.api.setMyCommands(commandList)

// bot.on('message', async (ctx) => {
//   console.log('【会话信息】', ctx.message)
// })

bot.command(instructList, async (ctx: any) => {
  const {
    text,
    from: { id: chatId },
  } = ctx.message

  const inviteUrl = `${miniAppUrl}?startapp=chat_str${encode(chatId)}`
  console.log('【消息信息】', ctx.message)
  console.log('【消息来源】', chatId)
  console.log('【邀请链接】', inviteUrl)

  if (text.includes('start')) {
    await bot.api.sendPhoto(chatId, '', {
      parse_mode: 'HTML',
      reply_markup: keyboard1,
      ...languageObj?.start,
    })
  } else if (text.includes('invite')) {
    await bot.api.sendPhoto(chatId, '', {
      parse_mode: 'HTML',
      reply_markup: keyboard2,
      ...languageObj?.invite,
      caption: languageObj?.invite.caption + inviteUrl,
    })
  } else if (text.includes('help')) {
    await bot.api.sendMessage(chatId, languageObj?.help.caption, {
      parse_mode: 'HTML',
      reply_markup: keyboard3,
    })
  }
})

// 错误提示
bot.catch((err: any) => {
  console.log('【错误提示】', err)
})
bot.start() // deno run --allow-net bot.ts
