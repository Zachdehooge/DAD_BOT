const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mapwipe')
        .setDescription('Map Wipe Announcement')
        .addStringOption(option =>
            option
                .setName('map')
                .setDescription('Map URL'))
        .addStringOption(option =>
            option
                .setName('map_thumbnail')
                .setDescription('Map Thumbnail PNG')),

    async execute(interaction) {

        const truly = interaction.options.getString('map')
        const thumb = interaction.options.getString('map_thumbnail')

        const exampleEmbed = new EmbedBuilder()
            .setColor(0xef2929)
            .setTitle('Rust Map Wipe')
            .setAuthor({ name: 'Dads After Dark', iconURL: 'https://i.imgur.com/dlecsVP.png', url: 'https://i.imgur.com/dlecsVP.png' })
            .setDescription('Map Wipe Announcement')
            .addFields(
                { name: 'Map Announcement', value: `${truly}` },
                //.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
            )
            .setImage(`${thumb}`)
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] })
    },
};