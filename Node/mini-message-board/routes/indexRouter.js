
function dateConverter (date) {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    return date.getFullYear() + ' - ' + (months[(date.getMonth())]);
}


const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: dateConverter(new Date())
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: dateConverter(new Date())
    }
];

const {Router} = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages});
});

module.exports = { indexRouter, messages, dateConverter};
