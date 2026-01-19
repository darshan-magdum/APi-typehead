const restify = require('restify');
const { BotFrameworkAdapter, ActivityHandler } = require('botbuilder');

/**
 * Bot implementation
 */
class SearchBot extends ActivityHandler {
    constructor() {
        super();

        this.onInvokeActivity = async (context) => {
            if (context.activity.name === 'application/search') {
                return this.handleSearch(context);
            }
            return { status: 404 };
        };
    }

    async handleSearch(context) {
        const { queryText, dataset } = context.activity.value;

        if (dataset !== 'games') {
            return { status: 400 };
        }

        const results = this.getGames(queryText);

        return {
            status: 200,
            body: {
                type: 'application/vnd.microsoft.search.searchResponse',
                value: {
                    results
                }
            }
        };
    }

    getGames(searchText = '') {
        const games = [
            { title: 'Call of Duty', value: 'call_of_duty' },
            { title: "Death's Door", value: 'deaths_door' },
            { title: 'Grand Theft Auto V', value: 'grand_theft' },
            { title: 'Minecraft', value: 'minecraft' },
            { title: 'Mine Legends', value: 'mine_legends' },
            { title: 'Mine Rush', value: 'mine_rush' }
        ];

        return games.filter(g =>
            g.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }
}

/**
 * Server setup
 */
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(process.env.PORT || 3978, () => {
    console.log('Bot listening on port 3978');
});

const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

const bot = new SearchBot();

/**
 * IMPORTANT FIX:
 * Route handler MUST be async
 */
server.post('/api/messages', async (req, res) => {
    await adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});
