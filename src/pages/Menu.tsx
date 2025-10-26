import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
}

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <Card className="p-6 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold" style={{ fontFamily: '"Futura Round", sans-serif' }}>
          {item.name}
        </h3>
        <span className="text-xl font-black text-primary neon-glow whitespace-nowrap">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-sm text-muted-foreground">{item.description}</p>
      )}
    </div>
  </Card>
);

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const coffeeMenu: MenuItem[] = [
    { name: 'Эспрессо', price: '120₽', description: 'Классический крепкий кофе' },
    { name: 'Американо', price: '150₽', description: 'Эспрессо с горячей водой' },
    { name: 'Капучино', price: '200₽', description: 'Эспрессо с молочной пенкой' },
    { name: 'Латте', price: '220₽', description: 'Нежный кофе с молоком' },
    { name: 'Флэт Уайт', price: '230₽', description: 'Двойной эспрессо с бархатной молочной пенкой' },
    { name: 'Раф Кофе', price: '250₽', description: 'Сливочный кофе со сливками и ванилью' },
    { name: 'Карамельный Латте', price: '270₽', description: 'Латте с карамельным сиропом' },
    { name: 'Ванильный Капучино', price: '250₽', description: 'Капучино с ванильным сиропом' },
    { name: 'Кокосовый Латте', price: '280₽', description: 'Латте на кокосовом молоке' },
    { name: 'Банановый Раф', price: '290₽', description: 'Раф с банановым сиропом' },
  ];

  const bubbleTeaMenu: MenuItem[] = [
    { name: 'Классический Bubble Tea', price: '350₽', description: 'Чёрный чай с тапиокой и молоком' },
    { name: 'Клубничный Bubble Tea', price: '380₽', description: 'Клубничный чай с тапиокой' },
    { name: 'Манго Bubble Tea', price: '380₽', description: 'Манговый чай с тапиокой' },
    { name: 'Маракуйя Bubble Tea', price: '390₽', description: 'Тропический чай с маракуйей и тапиокой' },
    { name: 'Матча Bubble Tea', price: '400₽', description: 'Зелёный чай матча с тапиокой' },
    { name: 'Шоколадный Bubble Tea', price: '380₽', description: 'Шоколадный напиток с тапиокой' },
    { name: 'Карамельный Bubble Tea', price: '380₽', description: 'Сливочно-карамельный с тапиокой' },
    { name: 'Таро Bubble Tea', price: '400₽', description: 'Экзотический вкус таро с тапиокой' },
  ];

  const lemonadeMenu: MenuItem[] = [
    { name: 'Классический Лимонад', price: '250₽', description: 'Освежающий лимонад с мятой' },
    { name: 'Клубничный Лимонад', price: '280₽', description: 'Лимонад со свежей клубникой' },
    { name: 'Маракуйя Лимонад', price: '300₽', description: 'Тропический лимонад с маракуйей' },
    { name: 'Арбузный Лимонад', price: '280₽', description: 'Летний лимонад с арбузом' },
    { name: 'Манго Лимонад', price: '300₽', description: 'Лимонад с манго и апельсином' },
    { name: 'Малиновый Мохито', price: '320₽', description: 'Безалкогольный мохито с малиной' },
  ];

  const dessertsMenu: MenuItem[] = [
    { name: 'Пончик с сахарной пудрой', price: '120₽', description: 'Классический пончик' },
    { name: 'Пончик с шоколадом', price: '150₽', description: 'Пончик с шоколадной глазурью' },
    { name: 'Пончик с карамелью', price: '150₽', description: 'Пончик с карамельной начинкой' },
    { name: 'Пончик с клубникой', price: '170₽', description: 'Пончик с клубничным топпингом' },
    { name: 'Пончик Ореховый', price: '180₽', description: 'Пончик с орехами и карамелью' },
    { name: 'Чизкейк', price: '250₽', description: 'Нежный сливочный чизкейк' },
  ];

  const otherMenu: MenuItem[] = [
    { name: 'Какао', price: '200₽', description: 'Горячий шоколадный напиток' },
    { name: 'Горячий шоколад', price: '250₽', description: 'Насыщенный шоколадный напиток' },
    { name: 'Матча Латте', price: '280₽', description: 'Японский зелёный чай с молоком' },
    { name: 'Чай чёрный/зелёный', price: '150₽', description: 'Классический чай' },
    { name: 'Смузи Ягодный', price: '300₽', description: 'Смузи из свежих ягод' },
    { name: 'Смузи Тропический', price: '320₽', description: 'Смузи с манго и маракуйей' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-1 bubble-gradient z-50"></div>
      
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bubble-gradient flex items-center justify-center shadow-lg">
              <span className="text-xl font-black text-white">BC</span>
            </div>
            <span className="text-2xl font-black neon-glow hidden md:block" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              BUBBLE COFFEE
            </span>
          </Link>
          
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Главная</Link>
            <Link to="/menu" className="text-primary font-bold">Меню</Link>
            <Link to="/franchise" className="text-foreground hover:text-primary transition-colors font-medium">Франшиза</Link>
            <Link to="/brandbook" className="text-foreground hover:text-primary transition-colors font-medium">Брендбук</Link>
          </div>

          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-2 p-4">
              <Link to="/" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Главная</Link>
              <Link to="/menu" className="p-3 bg-primary/10 text-primary rounded-lg">Меню</Link>
              <Link to="/franchise" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Франшиза</Link>
              <Link to="/brandbook" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Брендбук</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold mb-4">
              НАШЕ МЕНЮ
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black neon-glow mb-4" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              Вкус, который запомнишь
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Авторские напитки, свежая тапиока и десерты каждый день
            </p>
          </div>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-card/50 p-2 h-auto mb-8">
              <TabsTrigger value="coffee" className="text-sm md:text-base">
                <Icon name="Coffee" className="mr-2" size={18} />
                Кофе
              </TabsTrigger>
              <TabsTrigger value="bubble" className="text-sm md:text-base">
                <Icon name="Droplet" className="mr-2" size={18} />
                Bubble Tea
              </TabsTrigger>
              <TabsTrigger value="lemonade" className="text-sm md:text-base">
                <Icon name="Wine" className="mr-2" size={18} />
                Лимонады
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm md:text-base">
                <Icon name="Cake" className="mr-2" size={18} />
                Десерты
              </TabsTrigger>
              <TabsTrigger value="other" className="text-sm md:text-base">
                <Icon name="Sparkles" className="mr-2" size={18} />
                Другое
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  ☕ Авторский кофе
                </h2>
                <p className="text-muted-foreground">30+ рецептов на мексиканском зерне</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coffeeMenu.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bubble" className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  🫧 Bubble Tea
                </h2>
                <p className="text-muted-foreground">Свежая тапиока, которую варим каждый день</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bubbleTeaMenu.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lemonade" className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  🍋 Освежающие лимонады
                </h2>
                <p className="text-muted-foreground">Идеально для жаркого дня</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lemonadeMenu.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  🍩 Сладости
                </h2>
                <p className="text-muted-foreground">Пончики и десерты к кофе</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dessertsMenu.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-4 animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  ✨ Другие напитки
                </h2>
                <p className="text-muted-foreground">Чай, какао, смузи</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherMenu.map((item, idx) => (
                  <MenuItemCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/30">
            <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-3xl md:text-4xl font-black mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              Приходите к нам!
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Москва, Юлиана Семенова, 8к2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://yandex.ru/maps/-/CDdkmPwH" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bubble-gradient text-white font-bold hover-scale">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Открыть на картах
                </Button>
              </a>
              <a href="https://eda.yandex.ru/restaurant/bubble_coffee" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold">
                  <Icon name="ShoppingBag" className="mr-2" size={20} />
                  Заказать доставку
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              🚚 Доставка работает с 8:00 до 22:00
            </p>
          </Card>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 Bubble Coffee. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
