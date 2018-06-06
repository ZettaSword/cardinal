var Discord = require('discord.js');
var bot = new Discord.Client();
var embed = new Discord.RichEmbed()
	.setThumbnail(url="https://cdn3.dualshockers.com/wp-content/uploads/2017/02/AWvsSAO-MT.jpg")
	.setFooter(text="Это Информация по вашему запросу!")
	.setTitle('SAO vs Accel World')
	.setDescription('Данный рассказ вошел в десятый том серии ранобэ Accel World под названием Elements. Том представляет собой сборник побочных рассказов, являющихся ответвлением от основго сюжета. Сюда же попал и Versus.')
	.setColor(0x0f0f85)


var cardinalhp = new Discord.RichEmbed()
	.setThumbnail(url="http://vignette4.wikia.nocookie.net/swordartonline/images/7/71/Cardinal.PNG/revision/latest?cb=20140429111544")
	.setFooter(text="")
	.setTitle('CARDINAL HP')
	.setDescription(':regional_indicator_h: :regional_indicator_p: INFINITY/INFINITY')
	.setColor(0xff0a0a)
var help = new Discord.RichEmbed()
	.setThumbnail(url="https://get.wallhere.com/photo/landscape-anime-Sword-Art-Online-Alps-plateau-Alfheim-Online-mountain-meadow-plain-screenshot-computer-wallpaper-mountainous-landforms-ecosystem-mountain-range-77234.jpg")
	.setFooter(text="")
	.setTitle('Your Help:')
	.setDescription('')
	.setColor(0x0f0f85)

//Functions
function userInfo(user) {
	var finalString = '';

	finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';

	return finalString;

};

bot.on('message', message => {




	var sender = message.author;
	var msg = message.content.toUpperCase();
	var prefix = '<'
	var comer = message.receiver;

	if (msg === prefix + 'SAO') {
		message.channel.send('Первый том Ранобэ выпущен в 2002 году для конкурса Dengeki Game Novel Prize, автор Рэки Кавахара.Аниме-адаптация ранобэ была анонсирована на осеннем фестивале Dengeki Bunko 2011, вместе с другой серией ранобэ Рэки Кавахары, Ускоренный мир.')

	}
	if (msg === prefix + 'DDOS') {
		message.channel.send((sender) +  '  DDOS' + ' не разрешен для использования, вы не имеете прав Разработчика!')

	}
	if (msg === prefix + 'ARKS') {
		message.channel.send((sender) +  ' SAO на данный момент имеет пять сюжетных арок:')
		message.channel.send((sender) + 'Арка Айнкрада - Акихико Каяба, гений компьютерных технологий, создал технологию Полного Погружения, которая была доступна благодаря разработанному им Нейрошлему. И он же создал огромную вселенную своей мечты, вселенную Sword Art Online. За время бета-теста о игре были многообещающие отзывы и первые десять тысяч копий игры слетели с прилавков магазинов в считанные часы. Однако, на деле же оказалось, что весь этот мир — одна большая смертельная ловушка. В самом начале нас знакомят с главным героем, известным под ником Кирито (в реальной жизни Киригая Кадзуто). Он был заядлым фанатом компьютерных игр, а также одним из тех счастливцев, кто участвовал в бета-тесте.')
		message.channel.send((sender) + 'Арка Танца Фей - После того, как Кирито смог досрочно завершить игру «Sword Art Online», все оставшиеся в живых игроки покинули виртуальный мир Айнкрада… почти все. Триста игроков, среди которых оказалась и возлюбленная Кирито — Асуна, так и не смогли выйти в реальный мир. Индикаторы их Нейрошлемов (виртуального погружения) по-прежнему показывали, что пользователь присоединён к виртуальному миру, несмотря на то, что сервер игры SAO давно отключен. Пару месяцев спустя Кирито получает от Эгиля скриншот из новой VRMMORPG-игры — «Alfheim Online». На изображении — гигантское подобие золотой птичьей клетки с заключённой внутри девушкой, слишком похожей на Асуну.')
		message.channel.send((sender) + 'Арка Розарий Матери - В один из вечеров Лизбет рассказывает Асуне о Дзэкэне — «Абсолютном мече» — таинственном новом игроке скоростного типа с одноручным мечом, который опубликовал на «ММО Завтра» вызов на дуэль со всеми желающими с призом за победу: исключительным 11-ударным комбо из новой системы "Оригинальных навыков мечника". По словам Лизбет, 30 человек пришли проучить зазнавшегося новичка, но никто из них не смог отнять у «Абсолютного меча» более 30% здоровья.И ни одному человеку не удалось заставить Дзэкэн применить 11-ударный комбо. Асуна понимает, что такой сильный игрок устраивает дуэли с какой-то определенной целью, и, решив сама все выяснить, отправляется на дуэль.')
		message.channel.send((sender) + 'Арка Призрачная Пуля - Кикуока Сэйдзиро даёт задание Кирито расследовать странные смерти в GGO. Для этого Кирито приходится сконвертировать своего аватара из ALO. Для расследования Кирито планировал попасть на турнир "Золотая пуля" , проводимый в игре, где участвовали лучшие стрелки GGO, т.к. там была большая вероятность встретить Дес Гана, предполагаемого убийцу...')
		message.channel.send((sender) + 'Арка Алисизация - действия вертятся вокруг виртуального мира Underworld. Underworld (сокр. от Underground World (Подземный мир) — виртуальный мир, построенный по принципиально новой технологии с использованием преобразователя души — STL. В отличие от показанных до него миров (SAO, ALO, и GGO), не является развлекательной игрой, так как единственная цель его создания — Проект Алисизация. Кирито по совету Кикуоки подрабатывает в компании RATH, сам того не понимая, участвует в секретном правительственном проекте «Алисизация». ')
	}
	if (msg === prefix + 'CARDINAL') {
		message.channel.send('Система "Кардинал" — высокофункциональная автономная программа, разработанная Каябой Акихико для автоматического контроля VRMMO-среды. Первая её версия была использована в SAO. Система "Кардинал" управляет различными существующими VRMMO, регулирует баланс валюты, предметов и мест появления монстров, управляет растениями, рельефом и погодными условиями, разными объектами и эффектами, стремясь сохранить закономерность. Все миры, кроме Sword Art Online и Alfheim Online, используют облегченную версию системы "Кардинал".')

	}
	if (msg === prefix + 'SAOCHRONOLOGY') {
		message.channel.send((sender) +  ' Вот результат по вашему запросу:' + 'https://vignette.wikia.nocookie.net/sword-art-online/images/0/05/Хронология_SAO1.png/revision/latest/scale-to-width-down/1280?cb=20130708163523&path-prefix=ru')

	}
	if (msg === prefix + 'PING') {
		message.channel.send((sender) + 'Pong')

	}
	if (msg === prefix + 'KIRITO') {
		message.channel.send((sender) + ' Вот информация по вашему запросу:' + '   http://ru.sword-art-online.wikia.com/wiki/Кирито' + '    https://www.walldevil.com/wallpapers/a44/images-kirito-swordartonline.jpg')

	}
	if (msg === prefix + 'ASUNA') {
		message.channel.send((sender) + ' Вот информация по вашему запросу:' + '   http://ru.sword-art-online.wikia.com/wiki/Асуна' + '    http://images5.fanpop.com/image/photos/31700000/Asuna-asuna-yuuki-31720326-1280-720.jpg')

	}
	if (msg === prefix + 'SAO3') {
		message.channel.send((sender) + ' дата выхода 14 октября 2018 года.')

	}
	if (msg === prefix + 'SAO2') {
		message.channel.send((sender) + ' сезон уже выпущен.')

	}
	if (msg === prefix + 'SAO1') {
		message.channel.send((sender) + ' сезон уже выпущен.')

	}
	if (msg === prefix + 'SAOGAMES') {
		message.channel.send((sender) + '  Sword Art Online: Endworld; 01.02.2013; PlayStation Portable')
		message.channel.send((sender) + '  Sword Art Online: Infinity Moment; 14.03.2013; PlayStation Vita - 20.08.2014; PlayStation 4 - 04.08.2015; PC (Windows) - 30.03.2018')
		message.channel.send((sender) + '  Sword Art Online: Code Register; Bandai Namco Entertainment Inc.; iOS, Android - 28.11.2014; ')
		message.channel.send((sender) + '  Sword Art Online: Progress Link; Bandai Namco Entertainment Inc.; iOS, Android - 10.02.2015; ' )
		message.channel.send((sender) + '  Sword Art Online: Lost Song Artdink Corporation PlayStation 3, PlayStation Vita -13.11.2015; PlayStation 4 - 04.08.2015; ')
		message.channel.send((sender) + '  Sword Art Online: Black Swordsman; Bandai Namco Entertainment Inc.; iOS, Android - 26.05.2016; ')
		message.channel.send((sender) + '  Sword Art Online: Hollow Realization; AQURIA Co., Ltd.; PlayStation 4, PlayStation Vita - 08.11.2016; PC (Windows) - 27.10.2017; ')
		message.channel.send((sender) + '  Sword Art Online: Memory Defrag; Bandai Namco Entertainment Inc.; iOS, Android - 25.01.2017; ')
		message.channel.send((sender) + '  Accel World vs Sword Art Online; Artdink Corporation PlayStation 4, PlayStation Vita - 07.07.2017; PC (Windows) - 12.09.2017 ')
		message.channel.send((sender) + '  Sword Art Online: Fatal Bullet; DIMPS; PlayStation 4, Xbox One, PC (Windows) - 23.02.2018; ')
		message.channel.send((sender) + '  Sword Art Online: Replication; Bandai Namco Entertainment Inc.; Virtual Reality (VR) - 2018; ')
		message.channel.send((sender) + '  Sword Art Online: Integral Factor; Bandai Namco Entertainment Inc.; iOS, Android - 2018; ')
		message.channel.send((sender) + '  ----- Это все игры найденные по вашему запросу.')



	}
	if (msg ==='СПОКОЙНОЙ НОЧИ') {
		message.channel.send('  Спокойной ночи:  ' + (sender) + ' :sleeping:')
	}
	if (msg ==='УДАЧИ') {
		message.channel.send('  Удачи  ' + (sender) + ' :alien:')
	}
	if (msg ==='ПОКА') {
		message.channel.send('  Надеюсь вы вернетесь  ' + (sender) + ' :hand_splayed:')
	}
	if (msg === prefix + 'CODE') {
		message.channel.send('  Шифр отправлен  ' + (sender) + '  MDAxMTExMDAwMTAwMDAxMTAxMTAwMDAxMDExMTAwMTAwMTEwMDEwMDAxMTAxMDAxMDExMDExMTAwMTEwMDAwMTAxMTAxMTAwMDExMDAxMDEwMTAwMDEwMDAxMTAwMTAxMDEwMDExMDAwMTEwMDAwMTAxMDEwMDAwMDExMDAwMDEwMTExMDAxMDAxMTEwMTAwMDExMTEwMDE= ')
		message.channel.send((sender) + ' -Где-то тут должна быть столовка?')
		message.channel.send(' -Не не видел, сам понимаешь нам ведь еще 64 рейса лететь! ')
		message.channel.send((sender) + ' -Эх....Гребанная летающая база!')
	}
	if (msg === prefix + 'CARDINALEDELAPARTY') {
		message.channel.send((sender) +'  Шифр получен...  ')
		message.channel.send('  Запрос...  ')
		message.channel.send('  Запрос Потвержден...  ')
		message.channel.send('  Выполнение...  ')
		message.channel.send('  1%...  ')
		message.channel.send('  2%...  ')
		message.channel.send('  3%...  ')
		message.channel.send('  4%...  ')
		message.channel.send('  5%...  ')
		message.channel.send('  6%...  ')
		message.channel.send('  7%...  ')
		message.channel.send('  25%...  ')
		message.channel.send('  67%...  ')
		message.channel.send('  89%...  ')
		message.channel.send('  90%...  ')
		message.channel.send('  95%...  ')
		message.channel.send('  100%...  ')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
		message.channel.send(':aerial_tramway::dolphin::tongue::eye::alien::eyeglasses::robot::monkey_face::game_die::regional_indicator_p::regional_indicator_a::regional_indicator_r::regional_indicator_t::regional_indicator_y::money_mouth::skull::whale2::milky_way::izakaya_lantern::level_slider::spy::comet:')
	}
	if (msg === prefix + 'SAOVSAW') {
		message.channel.sendEmbed(embed)
	}
	if (msg === prefix + 'INVITENEW') {
		message.channel.send('     Система отреагировала на появление неподходящих по параметрам ИИ...')
		message.channel.send('     Неподходящий по параметрам ИИ был удален из базы данных...')
		message.channel.send((sender) + ' Система заблокировала попытку взлома...')
	}
	if (msg === prefix + 'INVITENEW' + ' YUI') {
		message.channel.send('https://cdn.quotesgram.com/img/83/40/563038824-Yui.png')
		message.channel.send('https://discordapp.com/oauth2/authorize?client_id=410422917415829515&scope=bot&permissions=0')
	}
	if (msg === prefix + 'PINA') {
		message.channel.send((sender) + 'http://www.swordart-online.net/SAOA/img/wp/pc1/BestofMonster.jpg')
		message.channel.send((sender) + 'Пина — фамильяр Силики в SAO и она, также, первый монстр, которого удалось приручить. Она понимает команды хозяйки, будет защищать ее и следовать за ней. Также, Пина представлена и в Alfheim Online, как фамильяр Кайт Ши. ')
		message.channel.send((sender) + 'Пина способна восстанавливать небольшое количество здоровья.')
		message.channel.send((sender) + 'Пина обладает развитым самосознанием и интеллектом, хотя это и не предусмотрено системой.')
		message.channel.send((sender) + 'Пина может сделать прыжки Силики выше.')
		message.channel.send((sender) + 'Пина может парализовать противника, выстрелив в него пузырями.')
		message.channel.send((sender) + '  -Вот результаты по вашему запросу!')

	}
	if (msg ==='$!HELP') {
		message.channel.send((sender) + ' Вы уверены в ваших действиях?....Анализ...')
	}
	if (msg ==='!HELP') {
		message.channel.send((sender) + ' Вам не стыдно!?.Обработка...')
	}
	if(msg ==='ХОЧУ В САО') {
    message.channel.send(' Ваш запрос принят успешно...' + ' :one: ' + 'http://wallpapercraft.net/wp-content/uploads/2016/10/Image-of-Binary-Code-1.jpg')
  }
	if (msg ==='ВЕСТ ДОЛБАЕБ') {
		message.channel.send((sender) + ' Вам не стыдно!?.Обработка данных...')
		message.channel.send((sender) + ' Данные верны!')
	}
	if (msg === prefix + 'ITEMS') {
		message.channel.send((sender) + ' Вот результаты по запросу:')
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Категория:Предметы')
	}
	if (msg === prefix + 'WEAPONS') {
		message.channel.send((sender) + ' Вот результаты по запросу:')
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Категория:Оружие')
	}
	if (msg === prefix + 'KIRITOWEAPON') {
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Вразумитель')
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Сокрушитель_тьмы')
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Закаленный_меч')
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Kagemitsu_G4')
	}
	if (msg === prefix + 'ASUNAWEAPON') {
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Сияющий_свет')
	}
	if (msg === prefix + 'WIKI') {
		message.channel.send('http://ru.sword-art-online.wikia.com/wiki/Sword_Art_Online_Вики')
	}
	if (msg === prefix + 'ANIMEOPENINGS') {
		message.channel.send('https://www.youtube.com/playlist?list=PLcuqjfzzDM4QkPeGUlNiMWWaPkmzJq5iM')
	}
	if (msg === prefix + 'ANILIBRIA') {
		message.channel.send('https://www.anilibria.tv/')
	}
	if (msg === prefix + 'ANIMEVOSTORG') {
		message.channel.send('http://animevost.org/')
	}
	if (msg === prefix + 'YUMMYANIME') {
		message.channel.send('https://yummyanime.com/')
	}
	if (msg === prefix + 'SAOANIME') {
		message.channel.send('http://animevost.org/tip/tv/125-sword-art-online1.html')
		message.channel.send('https://www.anilibria.tv/release/sword-art-online-i.html')
		message.channel.send('https://yummyanime.com/catalog/item/mastera-mecha-onlajn')
	}
	//////////////////////////////////////SECRET-Commands
	if (msg === 'AGNI SOFTY PERIMUS DEDLIS FIR') {
		message.channel.send('//////Запрос..........')
		message.channel.send('.Ответ/Получен..........')
		message.channel.send('....Error///1100100 1100101 1110100 1100101 1110010 1101101 1101001 1101110 1101111 1110011 100000 1100110 1101100 1101001 1110010 1100101 1110011 100000 1100100 1100101 1100100 1101100 1101001 1110011 100000 1110010 1101001 1101110 100000 1100110 1101001 1110010 100000 1101001 1101110 1100110 1101001 1101110 1101001 1110100 100000 1111010 1101001 1110010 1101111 100000 1110101 1101110 100000 1110111 1101111 1110010 1100100 100000 1110000 1101001 1110010 100000 1100110 1101100 1101001 1110010 1100101 1110011 100000 1110000 1100101 1110010 1101001 1101101 1110101 1110011 100000 1110011 1110000 1110010 1101001 1110100 100000 1100001 1100111 1101110 1101001 100000 1110101 1101110 100000 1100100 1100101 1110100 1100101 1110010 1101101 1101001 1101110 1101111 1110011 ')
		message.channel.send('.///../Retrying..........')
		message.channel.send('/./..Succesfully.///../.../')
		message.channel.send('.decryption..........')
		message.channel.send('.Loading..........')
	  message.channel.send('.Succesfully....')
		message.channel.send((sender) + ' Your request is ready!')
		message.channel.send((sender) + ' :green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart:You Heal @everyone for 100 HP:green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart::green_heart:')
	}
	if (msg === 'DETERMINOS FLIRES DEDLIS RIN FIR INFINIT ZERO UN WORD PIR FLIRES PERIMUS SPRIT AGNI UN DETERMINOS') {
		message.channel.send('.....Запрос....')
		message.channel.send('.....Ответ Получен....')
		message.channel.send('.....Успешно....')
		message.channel.send('.....Расшифровка....')
		message.channel.send('.....Загрузка....')
		message.channel.send('.....Успешно....')
		message.channel.send((sender) + ' Ваш запрос готов!')
		message.channel.send((sender) + ' :fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire:Ты наносишь серверу -300 HP Урона:fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire:')
	}
	if (msg === prefix + 'CARDINALHP') {
		message.channel.sendEmbed(cardinalhp)
	}
	if (msg === 'ZERO DETERMINOS') {
		message.channel.send((sender) + ' :fire::fire::fire::fire::fire:Ты наносишь серверу 10 HP Урона!:fire::fire::fire::fire::fire:')
	}
	if(msg ==='RAINY DAY') {
    message.channel.send(' ｀、ヽ｀ヽ｀、ヽ(ノ＞＜)ノ ｀、ヽ｀☂ヽ｀、ヽ ｀、ヽ｀ヽ｀、ヽ ｀、ヽ｀ヽ｀、ヽ ｀、ヽ｀ヽ｀、ヽ ｀、ヽ｀ヽ｀、ヽ ｀、ヽ｀ヽ｀、ヽ')
  }
	if(msg ==='NEKO') {
		message.channel.send(' Neko?' + 'https://pbs.twimg.com/media/DVtwBUcW0AAG5YY.jpg')
	}

	/////////////////////////////////////////////////////
	///////////////////////////////////HELP/////////////
	if (msg === prefix + 'HELP') {
		message.channel.sendEmbed(help)
		message.channel.send('  <SAO - A little information about the Novel of Sao and the Anime adaptation! ')
		message.channel.send('  <ddos - DDOS server ')
		message.channel.send('  <arks - Information about SAO arks! ')
		message.channel.send('  <cardinal - About system cardinal! ')
		message.channel.send('  <SAOchronology - Chronology of Universe of SAO ')
		message.channel.send('  <ping - Pong! ')
		message.channel.send('  <kirito - Info about Kirito! ')
		message.channel.send('  <asuna - Info about Asuna! ')
		message.channel.send('  <SAO1 - First season of Sword Art Online! ')
		message.channel.send('  <SAO2 - Second season of Sword Art Online! ')
		message.channel.send('  <SAO3 - Third season of Sword Art Online! ')
		message.channel.send('  <SAOgames - Games in Sword Art Online Universe! ')
		message.channel.send('  <code - Can you decode that? ')
		message.channel.send('  <SAOvsAW - Info about crossover of Sword Art Online and Accel World ')
		message.channel.send('  <InviteNew Yui - Link Yui to your server!(I DONT know the creator of Yui)  ')
		message.channel.send('  <pina - Info about Pina(Thats a Silikas familiar). ')
		message.channel.send('  <items - Items in SAO Universe!  ')
		message.channel.send('  <weapons - Weapons in SAO Universe!  ')
		message.channel.send('  <kiritoWeapon - You know Kirito weapon? ')
		message.channel.send('  <asunaWeapon - You know Asuna weapon? ')
		message.channel.send('  <wiki - Wiki about SAO! ')
		message.channel.send('  <AnimeOpenings - Playlist of Anime Openings(have 200+ openings!) ')
		message.channel.send('  <Anilibria - Anilibria site!(For RU-Community)  ')
		message.channel.send('  <Animevostorg - Animevost site!(For RU-Community)  ')
		message.channel.send('  <Yummyanime - Yummyanime site!(For RU-Community)  ')
		message.channel.send('  <SAOAnime - Give you 3 sites for watch SAO!(For RU-Community)  ')
		message.channel.send('  AGNI SOFTY PERIMUS DEDLIS FIR - ???? ')
		message.channel.send('  <CardinalHP - Info about System Cardinal Hit Points! ')
		message.channel.send( (sender) + '  At the Wiki go to bottom of the page and turn ENGLISH! ')

	}
	///////////////////////////////////////////////////



});



bot.on('ready', () => {
	console.log('Cardinal Launched...')

	bot.user.setStatus('Online')
	bot.user.setGame('Sword Art Online', 'https://www.twitch.tv/saoproject');


});






bot.login('NDM4MDQxNjQ4ODQ1NDIyNTky.DcD7bA.-yV9gKissEH1aNFUYkHsdwYeJF4');
