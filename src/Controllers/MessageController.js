const users = require("../Model/Users");
const CommentController = require("./CommentController");
const CommentSave = require("./CommentSave");
const MenuController = require("./MenuController");
const sms = require("./MessageSend");
const SettingsController = require("./SettingsController");
const { reqPhone, reqCode } = require("./Texts");

module.exports = async function (bot, message, user) {
    try {
        const userId = message.from.id;
        const text = message.text;
        const messageId = message.message_id;

        if (
            (text == "✍️ Fikr bildirish" ||
                text == "✍️ Обратная связь" ||
                text == "✍️ Leave comment") &&
            user.step == 5
        ) {
            await CommentController(bot, message, user);
        } else if (user.step == "comment") {
            if (text == "⬅️ Ortga" || text == "⬅️ Назад" || text == "⬅️ Back") {
                await users.findOneAndUpdate(
                    {
                        user_id: userId,
                    },
                    {
                        step: 5,
                    }
                );
                await MenuController(bot, message, user);
            } else {
                await CommentSave(bot, message, user);
            }
        } else if (
            user.step == 5 &&
            (text == "⚙️ Sozlamalar" ||
                text == "⚙️ Настройки" ||
                text == "⚙️ Settings")
        ) {
            await SettingsController(bot, message, user);
        } else if (user.step == "phone") {
            let code = ("" + Math.random()).substring(2, 7);
            if (
                !Number(text) ||
                !(Number(text) <= 998999999999) ||
                !(Number(text) > 998000000000)
            ) {
                let msg = reqPhone(user.lang);
                await bot.sendMessage(userId, msg);
                return;
            }
            await users.findOneAndUpdate(
                {
                    user_id: userId,
                },
                {
                    step: "phone_code",
                    phone_number: Number(text),
                    code: code,
                }
            );
            await sms(Number(text), `Fulfil Dostavka: ${code}`);
            let data = reqCode(user.lang);
            await bot.sendMessage(userId, data.text);
        } else if (user.step == "phone_code") {
            if (text == user.code) {
                await users.findOneAndUpdate(
                    {
                        user_id: userId,
                    },
                    {
                        step: 5,
                    }
                );
                await MenuController(bot, message, user);
            }
        }
    } catch (e) {
        console.log(e);
    }
};
