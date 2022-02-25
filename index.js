const TelegramApi = require("node-telegram-bot-api");

const token = "TOKEN";

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
    if (text == "/start") {
      return bot.sendMessage(
        userId,
        `Добро Пожаловать
        Наш сайт: mamakeev.com
      
        1 Условие работы /work
        2 График работы /time
        3 Условия оплаты /pay
        4 Наш сайт /site
        5 Телефон /phone
      `
      );
    }

    if (text == "/work") {
      return bot.sendMessage(
        userId,
        `Условие работы:
        Возможны выплаты каждый день, день-в-день
        Большое количество заказов
        Без оплаты за подключение
        Внутренняя система обучения
        `
      );
    }
    if (text == "/time") {
      return bot.sendMessage(
        userId,
        `График работы:
        5/2 8:00 - 18:00
        `
      );
    }
    if (text == "/pay") {
      return bot.sendMessage(
        userId,
        `Способы оплаты
        Наличными
        Visa
        mBank
        Элсом
        `
      );
    }
    if (text == "/site") {
      return bot.sendMessage(
        userId,
        `Наш сайт mamakeev.com`
      );
    }
    if (text == "/phone") {
      return bot.sendMessage(
        userId,
        `Номер телефона 0555 575 457`
      );
    }
    if (text == "салам") {
      return bot.sendMessage(
        userId,
        `Салам ${msg.from.first_name}`
      );
    }
    if (text == "Салам") {
      return bot.sendMessage(
        userId,
        `Салам ${msg.from.first_name}`
      );
    }
    return bot.sendMessage(userId, "Повоните нам по номеру 0555 575 457");
  });
};
start();
