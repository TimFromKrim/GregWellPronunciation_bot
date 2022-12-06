const TelegramApi = require('node-telegram-bot-api');

const token = '5921626147:AAEtjUrbiP5vmKRyooWxq9YUC8Qd1zdmeD4';

const bot = new TelegramApi(token, {polling: true});



const start = () => {
	bot.setMyCommands([
		{command: '/start', description: 'Стартовое приветствие'},
		{command: '/info', description: 'Информация о боте'}
	])

	bot.on('message', async msg => {
		console.log(msg);
		const text = msg.text;
		const charID = msg.chat.id;
		const FirstName = msg.from.first_name;
		const LastName = msg.from.last_name;
		const testWord = text.toLocaleLowerCase();
	
	if(text === '/start'){
		return bot.sendMessage(charID, `Привет, ${FirstName} ${LastName}!  Это тестовая версия! Я могу прислать тебе правильное произношение английского слова, если знаю его! Просто напиши мне одно слово на английском в чат! Доступные слова: `);
	}
	
	if(text === '/info'){
		return bot.sendMessage(charID, `В тестовом режиме меня разработал:\n @TimmyTheLamb(Теймураз Джалагонія)\n Правильное произношение и голос:\n @goldentide123(Greg)`);
	}

	if(testWord === 'abroad'){
		await bot.sendMessage(charID, `Abroad /əˈbrɔːd/\nЗа границей`);
		return bot.sendVoice(charID, 'AwACAgIAAxkBAANZY4-QCbNCZn5OFPXTcGvczkQStj8AAq0mAAJi_IBIYjbLoaUG2ywrBA');
	}
	

	return bot.sendMessage(charID, `Извини, пока что я не поддерживаю это слово или команду. Но всё впереди, жди будущих обновлений!`)
	})
}

start();