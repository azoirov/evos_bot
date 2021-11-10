module.exports = class Texts {
    static reqCity(lang) {
        if (lang == "uz") {
            return {
                text: `Shaharni tanlang`,
                cities: ["Toshkent", "Buxoro", "Samarqand", "Qo'qon"],
            };
        } else if (lang == "ru") {
            return {
                text: `Выберите город`,
                cities: ["Ташкент"],
            };
        } else if (lang == "eng") {
            return {
                text: `Choose city`,
                cities: ["Tashkent"],
            };
        }
    }

    static reqPhone(lang) {
        if (lang == "uz") {
            return `Ro'yxatga olish uchun telefon raqamingizni kiriting!\nMasalan: +998xx xxx xx xx`;
        } else if (lang == "ru") {
            return `Введите свой номер телефона для регистрации! \nНапример: + 998xx xxx xx xx`;
        } else if (lang == "eng") {
            return `Enter your phone number to register! \nFor example: + 998xx xxx xx xx`;
        }
    }

    static reqCode(lang) {
        if (lang == "uz") {
            return {
                text: `Telefoningizga tasdiqlash kodi yuborildi. Tasdiqlash kodini kiriging!`,
                btn: "Qayta kod so'rash",
            };
        } else if (lang == "ru") {
            return {
                text: `На ваш телефон отправлен код подтверждения. Введите код подтверждения!`,
                btn: "Запросить код еще раз",
            };
        } else if (lang == "eng") {
            return {
                text: `A confirmation code has been sent to your phone. Enter the confirmation code!`,
                btn: "Request code again",
            };
        }
    }

    static incorrectCode(lang) {
        if (lang == "uz") {
            return `Xato kod terildi, qayta urinib ko'ring`;
        } else if (lang == "ru") {
            return `Набран код ошибки, попробуйте еще раз`;
        } else if (lang == "eng") {
            return `Error code dialed, try again`;
        }
    }

    static finishReg(lang) {
        if (lang == "uz") {
            return `Registratsiya jarayoningiz muvaffaqqiyatli o'tdi`;
        } else if (lang == "ru") {
            return `Ваш процесс регистрации прошел успешно`;
        } else if (lang == "eng") {
            return `Your registration process has been successful`;
        }
    }
};
