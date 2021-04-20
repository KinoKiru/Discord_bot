const config = require('../Assets/config.json');
const group = require('../Assets/Groups');
const name = 'delete';
group.get("Owner Commands").push(name);
module.exports = {
    name: name,
    description: '!delete *Amount*: deletes the amount of messages',
    async execute(message, args) {
        if (message.author.id === config.UserId) {
            if (!args[0]) {
                await message.reply('Please enter the amount of messages to clear!');
            } else if (isNaN(args[0])) {
                await message.reply('Please type a real number!');
            } else if (args[0] > 100) {
                await message.reply('You can\'t remove more than 100 messages!');
            } else if (args[0] < 1) {
                await message.reply('You have to delete at least one message!');
            } else {
                await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                    message.channel.bulkDelete(messages)
                });
            }
        } else {
            message.channel.send("U heeft niet de rechten")
        }
    }
}