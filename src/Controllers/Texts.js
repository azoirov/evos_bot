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

    static MenuMsg(lang) {
        if (lang == "uz") {
            return {
                text: "Quyidagilardan birini tanlang",
                keyboard: {
                    order: "🛒 Buyurtma qilish",
                    orders: "🛍 Buyurtmalarim",
                    vacancy: "👪 EVOS Oilasi",
                    comment: "✍️ Fikr bildirish",
                    settings: "⚙️ Sozlamalar",
                },
            };
        } else if (lang == "ru") {
            return {
                text: "Выберите один из следующих",
                keyboard: {
                    order: "🛒 Заказать",
                    orders: "🛍 Мои заказы",
                    vacancy: "👪 Семья EVOS",
                    comment: "✍️ Обратная связь",
                    settings: "⚙️ Настройки",
                },
            };
        } else if (lang == "eng") {
            return {
                text: "Choose one of the following",
                keyboard: {
                    order: "🛒 Order",
                    orders: "🛍 My Orders",
                    vacancy: "👪 Family EVOS",
                    comment: "✍️ Leave comment",
                    settings: "⚙️ Settings",
                },
            };
        }
    }

    static CommentStart(lang) {
        if (lang == "uz") {
            return {
                text: "Fikr va mulohazalaringizni yuboring",
                btn: "⬅️ Ortga",
            };
        } else if (lang == "ru") {
            return {
                text: "Отправьте свои мысли и отзывы",
                btn: "⬅️ Назад",
            };
        } else if (lang == "eng") {
            return {
                text: "Leave your commments",
                btn: "⬅️ Back",
            };
        }
    }

    static CommentSaved(lang) {
        if (lang == "uz") {
            return "Fikr va mulohazalaringiz uchun rahmat";
        } else if (lang == "ru") {
            return "Спасибо за ваш отзыв и отзыв";
        } else if (lang == "eng") {
            return "Thanks for your comments";
        }
    }

    static Settings(user) {
        if (user.lang == "uz") {
            return {
                text: `<b>Muloqot tili:</b> 🇺🇿 O'zbekcha\n<b>Shahar:</b> ${user.city}\n<b>Telefon:</b> ${user.phone_number}\n\nQuyidagilardan birini tanlang`,
                btns: {
                    lang: "Muloqot tili",
                    city: "Shahar",
                    phone: "Telefon",
                },
            };
        } else if (user.lang == "ru") {
            return {
                text: `<b>Язык общения:</b> 🇷🇺 Русский\n<b>Город:</b> ${user.city}\n<b>Телефон:</b> ${user.phone_number}\n\nВыберите один из следующих`,
                btns: {
                    lang: "Язык общения",
                    city: "Город",
                    phone: "Телефон",
                },
            };
        } else if (user.lang == "eng") {
            return {
                text: `<b>Language:</b> 🇬🇧 English\n<b>City:</b> ${user.city}\n<b>Phone:</b> ${user.phone_number}\n\nChoose one of the following`,
                btns: {
                    lang: "Language",
                    city: "City",
                    phone: "Phone",
                },
            };
        }
    }

    static LangChange(lang) {
        if (lang == "uz") {
            return "Muloqot tili o'zgardi";
        } else if (lang == "ru") {
            return "Изменился язык общения";
        } else if (lang == "eng") {
            return "Language was changed";
        }
    }

    static async CityList(lang) {
        if (lang == "uz") {
            return {
                cities: ["Toshkent", "Buxoro", "Samarqand", "Qo'qon"],
            };
        } else if (lang == "ru") {
            return {
                cities: ["Ташкент"],
            };
        } else if (lang == "eng") {
            return {
                cities: ["Tashkent"],
            };
        }
    }

    static CityChange(lang) {
        if (lang == "uz") {
            return "Shahar o'zgardi";
        } else if (lang == "ru") {
            return "Город изменился";
        } else if (lang == "eng") {
            return "City was changed";
        }
    }

    static PhoneSend(user) {
        if (user.lang == "uz") {
            return {
                text: `<b>Muloqot tili:</b> 🇺🇿 O'zbekcha\n<b>Shahar:</b> ${user.city}\n<b>Telefon:</b> ${user.phone_number}\n\nTelefon raqamingizni yozib qoldiring`,
                btns: {
                    back: "⬅️ Ortga",
                },
            };
        } else if (user.lang == "ru") {
            return {
                text: `<b>Язык общения:</b> 🇷🇺 Русский\n<b>Город:</b> ${user.city}\n<b>Телефон:</b> ${user.phone_number}\n\nЗапишите свой номер телефона`,
                btns: {
                    back: "⬅️ Назад",
                },
            };
        } else if (user.lang == "eng") {
            return {
                text: `<b>Language:</b> 🇬🇧 English\n<b>City:</b> ${user.city}\n<b>Phone:</b> ${user.phone_number}\n\nSend your phone number`,
                btns: {
                    lang: "⬅️ Back",
                },
            };
        }
    }
};
