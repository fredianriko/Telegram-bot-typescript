import TelegramBot, { InlineKeyboardButton } from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

export const BotServer = async () => {
  const token = process.env.TELEGRAM_API_TOKEN as string;

  const bot: TelegramBot = new TelegramBot(token, { polling: true });

  // This accept event from command "/echo <text>"
  // and directly send back the same text you send
  bot.onText(/\/\echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match ? match[1] : "";

    // showing s
    bot.sendMessage(chatId, "tai lu", {
      reply_markup: {
        keyboard: [
          [{ text: "Sample text" }, { text: "Second sample" }],
          [{ text: "Keyboard" }],
          [{ text: "I'm robot" }],
        ],
      },
    });
  });

  // This is just sending notification when the message receieved by the bot, and send confirmation message
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Received your message");
  });

  console.log("Telegram Bot Server Started");

  // Graceful shutdown handling
  process.on("SIGTERM", () => {
    console.log("SIGTERM signal received");
    console.log("Terminating bot server");
    bot.stopPolling().then(() => {
      console.log("Polling stopped");
      process.exit(0);
    });
  });
};

BotServer();
