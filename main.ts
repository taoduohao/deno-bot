import { Bot } from 'https://deno.land/x/grammy@v1.23.0/mod.ts'

const bot = new Bot('7388996011:AAHnWNmEBm66fwt_twpY9i3KPzxHX9vkolI')

bot.command('start', (ctx) => ctx.reply('Hello from Deno & grammY!'))

bot.on('message', (ctx) => ctx.reply('How can I help you?'))

bot.start()
