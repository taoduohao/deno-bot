import { Bot, InlineKeyboard } from 'https://deno.land/x/grammy@v1.23.0/mod.ts'

const bot = new Bot('6998202214:AAE3YW0fMx-Q5zAF8nlJPuTdPI7VMi0iRLU') // FF机器人ID

await bot.api.setMyCommands([
  { command: 'start', description: 'Start the bot' },
  { command: 'invite', description: 'Invite a friend' },
  { command: 'help', description: 'Show help text' },
])

bot.command(['start', 'invite', 'help'], async (ctx: any) => {
  const text = ctx.message.text
  const chatId = ctx.message.from.id
  const homeUrl = 'https://test-h5.ximi.world/'
  const inviteUrl = `https://t.me/FutureFun_earningwct_bot/FutureFun?startapp=chatId${chatId}`
  console.log('【消息来源】', chatId)
  if (text.includes('start')) {
    const keyboard1 = new InlineKeyboard()
      .webApp('Play now', homeUrl)
      .row()
      .url('Join community', 'https://t.me/FutureFunOffcial')
      .row()
      .url('Contaact support', 'https://t.me/FutureFunOfficial')
    await bot.api.sendPhoto(chatId, '', {
      parse_mode: 'HTML',
      reply_markup: keyboard1,
      photo: 'https://test-h5.ximi.world/static/img/telegram/picture2.png',
      caption:
        'Thank you for choosing us, the airdrop of the platform token is about to begin, please select your mining method:\nIf you are a free-to-play player, please choose to mine via invitation.\nIf you want to earn the highest profits, please choose to mine via playing games.\n<b>Earning 1 WCT = 1 USD.</b>\nEarning Method: Send out your invitation link, and for each person you invite, you will earn 50 WCT = 50 USD!\nRegardless of whether you win or lose, betting 10 USDT will earn you 1 WCT = 1 USD in mining rewards!\nJoin the community for exclusive benefits during the beta testing phase!',
    })
  } else if (text.includes('invite')) {
    const keyboard2 = new InlineKeyboard()
      .webApp('Invite a friend', 'https://test-h5.ximi.world/ppromotions/share')
      .row()
      .webApp('Back to game', homeUrl)
    await bot.api.sendPhoto(chatId, '', {
      parse_mode: 'HTML',
      reply_markup: keyboard2,
      photo: 'https://test-h5.ximi.world/static/img/telegram/picture3.png',
      caption:
        'Invite your friends, and for every friend you invite, you will receive 50 WCT (1 WCT = 1 USD)! 🎁\nYour personal link \n' +
        inviteUrl,
    })
  } else if (text.includes('help')) {
    const keyboard3 = new InlineKeyboard().webApp('Play now', homeUrl)
    await bot.api.sendMessage(
      chatId,
      'Dear FuntrueFuners, if you have any issues while using our products, don not hesitate to contact us.\nPurchase Statement\nThe FuntrunFun platform forbids users under the age of 18 to top up on the platform, and the platform has the right to refuse top-up orders from non-compliant users.\n📖 How to Register\nIf you have a Telegram account, you can automatically complete the registration by clicking on the game link, for others, please refer to the tutorial.\nLink: https://t.me/FutureFunOffcial/36\n📬 How to Mine by Invitation\nFree to play. Please refer to the specific tutorial.\nLink: https://t.me/FutureFunOffcial/37\nHow to Mine by Playing Games\nThe highest yield mining method. Please refer to the specific tutorial.\nLink: https://t.me/FutureFunOffcial/38\nOther Common Questions\nLink: https://t.me/FutureFunOffcial/17',
      {
        parse_mode: 'HTML',
        reply_markup: keyboard3,
      }
    )
  }
})

// 错误提示
bot.catch((err: any) => {
  console.log('【错误提示】', err)
})
bot.start()
