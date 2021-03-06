const users = require("../Model/Users");

module.exports = async function (bot, message, user) {
    try {
        const userId = message.from.id;
        const messageId = message.message.message_id;

        let keyboard = {
            inline_keyboard: [
                [
                    {
                        text: "๐บ๐ฟ O'zbekcha",
                        callback_data: "uz",
                    },
                    {
                        text: "๐ท๐บ ะ ัััะบะธะน",
                        callback_data: "ru",
                    },
                    {
                        text: "๐ฌ๐ง English",
                        callback_data: "eng",
                    },
                ],
            ],
        };

        await users.findOneAndUpdate(
            {
                user_id: userId,
            },
            {
                step: "lang",
            }
        );

        await bot.editMessageReplyMarkup(keyboard, {
            chat_id: userId,
            message_id: messageId,
        });
    } catch (e) {
        console.log(e + "");
    }
};
