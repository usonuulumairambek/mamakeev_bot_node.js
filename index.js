const TelegramApi = require("node-telegram-bot-api");

const token = "5097198088:AAHsheZIeZGm-iMbIoiuxkvEIvsxZQ797kI";

const bot = new TelegramApi(token, { polling: true });

let start = () => {
  bot.on("message", (msg) => {
    let text = msg.text;
    let userId = msg.chat.id;

    bot.setMyCommands([
      {
        command: "/start",
        description: "Начать",
      },
      {
        command: "/info",
        description: "Информация о вас",
      },
    ]);
    bot.answerInlineQuery(userId, "sddssds");
    if (text == "/start") {
      return bot.sendMessage(userId, `Как тебя зовут?  / `);
    }
    if (text == "/info") {
      return bot.sendMessage(
        userId,
        `Имя: ${msg.from.first_name}, Фамилия: ${msg.from.last_name}`
      );
    }
    return bot.sendMessage(userId, "Пока я вас не понимаю");
  });
};
start();
