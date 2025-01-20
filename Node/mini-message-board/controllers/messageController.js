


const {messages, dateConverter,} = require('../routes/indexRouter');


async function addMessage (req, res) {
    console.log(req.body);
    console.log('I controllern');

    const newMessage = {
        user: req.body.author,
        text: req.body.message,
        added: dateConverter(new Date()),
    }
    messages.push(newMessage);

    res.redirect('/');
}

module.exports = {addMessage}