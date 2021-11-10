const users = require("../Model/Users");
const { CityChange } = require("./Texts");

module.exports = async function (bot, message, user) {
    try {
        const userId = message.from.id;
        const messageId = message.message.message_id;
        const data = message.data;

        await users.findOneAndUpdate(
            {
                user_id: userId,
            },
            {
                city: data,
                step: 5,
            }
        );
        let msg = CityChange(user.lang);
        await bot.deleteMessage(userId, messageId);
        await bot.sendMessage(userId, msg);
        await MenuController(bot, message, user);
    } catch (e) {
        console.log(e);
    }
};
