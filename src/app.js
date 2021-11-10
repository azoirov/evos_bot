const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("../config");
const SignUp = require("./Controllers/SignUp");
const mongo = require("./Model/mongo");
const users = require("./Model/Users");

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

mongo();

bot.on("message", async (message) => {
    let userId = message.from.id;

    let user = await users.findOne({
        user_id: userId,
    });
    console.log(user);
    if (!user || (Number(user.step) && Number(user.step) < 5)) {
        await SignUp(bot, message, user);
    }
});
