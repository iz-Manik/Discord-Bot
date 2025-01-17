const {REST , Routes} = require('discord.js');

const commands=[
    {
        name:"create",
        description:"create a new short URL"
    },
    {
        name:"hello",
        description:"Replies with Hi!"
    }
]

const rest = new REST({ version: '10' }).setToken("token");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationCommands('YOUR_APPLICATION_ID'),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
