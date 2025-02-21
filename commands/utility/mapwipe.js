const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mapwipe')
    .setDescription('Map Wipe Announcement')
    .addStringOption((option) =>
      option
        .setName('wipe_time')
        .setDescription('Wipe Time in UNIX Timestamp')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName('map').setDescription('Map URL').setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName('map_thumbnail')
        .setDescription('Map Thumbnail PNG')
        .setRequired(true)
    ),

  async execute(interaction) {
    const truly = interaction.options.getString('map');
    const thumb = interaction.options.getString('map_thumbnail');
    const wipe_time = interaction.options.getString('wipe_time');
    const timestampString = `<t:${wipe_time}:F>`;

    const exampleEmbed = new EmbedBuilder()
      .setColor(0xef2929)
      .setTitle('Rust Map Wipe')
      .setAuthor({
        name: 'Dads After Dark',
        iconURL: 'https://i.imgur.com/dlecsVP.png',
        url: 'https://i.imgur.com/dlecsVP.png',
      })
      .setDescription('Map Wipe Announcement')
      .addFields(
        { name: 'Map Announcement', value: `${truly}` },
        { name: 'Wipe Time', value: `${timestampString}` }
        //.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
      )
      .setImage(`${thumb}`);
    //.setTimestamp();
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
