const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        try {
            console.log(`✅ ${client.user.tag} est connecté et prêt !`);

            client.user.setPresence({
                activities: [
                    {
                        name: 'Système d\'email temporaire',
                        type: ActivityType.Playing,
                        state: 'Made With 💖 by Droska'
                    }
                ],
                status: 'online'
            });

        } catch (error) {
            console.error('❌ Erreur lors de l\'initialisation:', error);
        }
    }
};