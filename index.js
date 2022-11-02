const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/define [whatever]"
// bot.onText(/\/define (.+)/, (msg, match) => {
bot.onText(/!bot (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  console.log(`Received: ${resp}`);

  let reply = `Sorry, I have not learnt about ${resp} yet.`;
  if (resp.toLowerCase() === 'TC'.toLowerCase()) {
    reply =
      'TC refers to the total compensation of a job in a year. Total compensation in a tech company typically consists of 3 components: base salary, bonus and stock (or RSU / stock options).';
  } else if (resp.toLowerCase() === 'IC'.toLowerCase()) {
    reply =
      'IC is an acronym for individual contributor. Individual contributor is one of the two tracks for software engineering career, the other being the management track.';
  } else if (resp.toLowerCase() === 'lgtm'.toLowerCase()) {
    reply =
      'The letters LGTM stand for "looks good to me." Those working in software development often use it after reviewing code.';
  } else if (
    resp.toLowerCase() === 'PR'.toLowerCase() ||
    resp.toLowerCase() === 'MR'.toLowerCase()
  ) {
    reply =
      "PR/MR means pull request or merge request. They tell others about changes you've pushed to a branch in a repository. They are essentially a request to merge one branch into another.";
  }

  console.log(`Reply: ${reply}`);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, reply);
});

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

console.log('Bot started');
