const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("../config");
const MenuController = require("./Controllers/MenuController");
const MessageController = require("./Controllers/MessageController");
const SignUp = require("./Controllers/SignUp");
const mongo = require("./Model/mongo");
const users = require("./Model/Users");
const LangController = require("./Controllers/LangController");
const LangSave = require("./Controllers/LangSave");
const CityController = require("./Controllers/CityController");
const CityChange = require("./Controllers/CityChange");
const PhoneController = require("./Controllers/PhoneController");

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

mongo();

bot.on("message", async (message) => {
    let userId = message.from.id;

    let user = await users.findOne({
        user_id: userId,
    });
    if (!user || (Number(user.step) && Number(user.step) < 5)) {
        await SignUp(bot, message, user);
    } else {
        await MessageController(bot, message, user);
    }
});

bot.on("callback_query", async (message) => {
    const userId = message.from.id;
    const data = message.data;

    let user = await users.findOne({
        user_id: userId,
    });

    if (data == "lang") {
        await LangController(bot, message, user);
    } else {
        if (user.step == "lang") {
            await LangSave(bot, message, user);
        }
    }

    if (data == "city") {
        await CityController(bot, message, user);
    } else {
        if (user.step == "city") {
            await CityChange(bot, message, user);
        }
    }

    if (data == "phone") {
        await PhoneController(bot, message, user);
    }
});
