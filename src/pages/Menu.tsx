import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItem {
  name: string;
  sizes: {
    ml30?: string;
    ml200?: string;
    ml300?: string;
    ml400?: string;
  };
  description?: string;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const sizes = Object.entries(item.sizes).filter(([_, price]) => price);
  
  return (
    <Card className="p-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
      <div className="space-y-2">
        <h3 className="text-base font-bold" style={{ fontFamily: '"Futura Round", sans-serif' }}>
          {item.name}
        </h3>
        {item.description && (
          <p className="text-xs text-muted-foreground">{item.description}</p>
        )}
        <div className="flex flex-wrap gap-2 pt-2">
          {sizes.map(([size, price]) => {
            const mlSize = size === 'ml30' ? '30мл' : size === 'ml200' ? '200мл' : size === 'ml300' ? '300мл' : '400мл';
            return (
              <div key={size} className="flex items-center gap-2 bg-primary/10 px-2 py-1 rounded-lg">
                <span className="text-xs text-muted-foreground">{mlSize}</span>
                <span className="text-sm font-bold text-primary">{price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const coffeeMenu: MenuItem[] = [
    { name: 'Эспрессо', sizes: { ml30: '150₽' } },
    { name: 'Американо', sizes: { ml200: '260₽', ml300: '300₽', ml400: '330₽' } },
    { name: 'Капучино', sizes: { ml200: '290₽', ml300: '330₽', ml400: '380₽' } },
    { name: 'Латте', sizes: { ml200: '330₽', ml300: '380₽' } },
    { name: 'Раф', sizes: { ml200: '380₽', ml300: '430₽' } },
    { name: 'Флэт-уайт', sizes: { ml200: '350₽' } },
  ];

  const authorCoffeeMenu: MenuItem[] = [
    { name: 'Раф Соленая фисташка', sizes: { ml300: '400₽', ml400: '450₽' } },
    { name: 'Раф Халва', sizes: { ml300: '400₽', ml400: '450₽' } },
    { name: 'Раф Арахисовый', sizes: { ml300: '400₽', ml400: '450₽' } },
    { name: 'Латте Взрывная карамель', sizes: { ml300: '380₽', ml400: '430₽' } },
    { name: 'Латте Белый шоколад', sizes: { ml300: '380₽', ml400: '430₽' } },
  ];

  const bubbleTeaMenu: MenuItem[] = [
    { name: 'БаблТи Кофейный', sizes: { ml300: '400₽', ml400: '450₽' } },
    { name: 'БаблТи Матча', sizes: { ml300: '400₽', ml400: '450₽' } },
    { name: 'БаблТи Матча-Клубника', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Синнабон', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Тропик', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Малиновый пирог', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Шоколад', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Попкорн', sizes: { ml300: '440₽', ml400: '490₽' } },
    { name: 'БаблТи Salty карамель', sizes: { ml300: '440₽', ml400: '490₽' } },
  ];

  const hotDrinksMenu: MenuItem[] = [
    { name: 'Горячий шоколад', sizes: { ml200: '290₽', ml300: '330₽', ml400: '380₽' } },
    { name: 'Какао', sizes: { ml200: '290₽', ml300: '330₽', ml400: '380₽' } },
    { name: 'Матча-латте', sizes: { ml200: '290₽', ml300: '330₽', ml400: '380₽' } },
    { name: 'Глинтвейн', sizes: { ml300: '390₽', ml400: '440₽' } },
  ];

  const teaMenu: MenuItem[] = [
    { name: 'Ананас-маракуйя', sizes: { ml300: '390₽', ml400: '440₽' } },
    { name: 'Малиновый', sizes: { ml300: '390₽', ml400: '440₽' } },
    { name: 'Имбирный', sizes: { ml300: '390₽', ml400: '440₽' } },
    { name: 'Облепиховый', sizes: { ml300: '390₽', ml400: '440₽' } },
  ];

  const smoothieMenu: MenuItem[] = [
    { name: 'Смузи ягодный', sizes: { ml300: '330₽', ml400: '360₽' } },
    { name: 'Смузи мята-маракуйя', sizes: { ml300: '330₽', ml400: '360₽' } },
    { name: 'Смузи ананас-манго', sizes: { ml300: '330₽', ml400: '360₽' } },
  ];

  const menuSections: MenuSection[] = [
    { title: 'Кофе', icon: 'Coffee', items: coffeeMenu },
    { title: 'Авторский кофе', icon: 'Sparkles', items: authorCoffeeMenu },
    { title: 'Bubble Tea', icon: 'Droplet', items: bubbleTeaMenu },
    { title: 'Горячие напитки', icon: 'Flame', items: hotDrinksMenu },
    { title: 'Чай', icon: 'Leaf', items: teaMenu },
    { title: 'Смузи', icon: 'Grape', items: smoothieMenu },
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
              Авторские напитки и свежая тапиока каждый день
            </p>
          </div>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2 bg-card/50 p-2 h-auto mb-8">
              {menuSections.map((section) => (
                <TabsTrigger 
                  key={section.title} 
                  value={section.title.toLowerCase().replace(/\s+/g, '-')} 
                  className="text-xs md:text-sm"
                >
                  <Icon name={section.icon as any} className="mr-1 md:mr-2" size={16} />
                  <span className="hidden sm:inline">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuSections.map((section) => (
              <TabsContent 
                key={section.title} 
                value={section.title.toLowerCase().replace(/\s+/g, '-')} 
                className="mt-6"
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-black mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                    {section.title}
                  </h2>
                  <div className="h-1 w-20 bubble-gradient rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, index) => (
                    <MenuItemCard key={index} item={item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="mt-12 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <h2 className="text-2xl font-black mb-4" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              Дополнители
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Сироп</span>
                  <span className="font-bold text-primary">50₽</span>
                </p>
                <p className="flex justify-between">
                  <span>Сливки</span>
                  <span className="font-bold text-primary">90₽</span>
                </p>
                <p className="flex justify-between">
                  <span>Молоко</span>
                  <span className="font-bold text-primary">60₽</span>
                </p>
                <p className="flex justify-between">
                  <span>Шот эспрессо</span>
                  <span className="font-bold text-primary">70₽</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Тапиока (шарики)</span>
                  <span className="font-bold text-primary">100₽</span>
                </p>
                <p className="flex justify-between">
                  <span>Альтернативное молоко</span>
                  <span className="font-bold text-primary">90₽</span>
                </p>
                <p className="flex justify-between">
                  <span>Топпинг</span>
                  <span className="font-bold text-primary">50₽</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-xs text-muted-foreground">
                <strong>Альтернативное молоко:</strong> Безлактозное, Кокосовое, Миндальное, Банановое
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="https://yandex.ru/maps/-/CDdkiRli" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-xs">
              <Button size="lg" className="w-full bubble-gradient text-white font-bold text-lg px-8 py-6 hover-scale">
                <Icon name="MapPin" className="mr-2" size={24} />
                Яндекс Карты
              </Button>
            </a>
            <a href="https://eda.yandex.ru/moscow/r/bubble_coffee" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-xs">
              <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6">
                <Icon name="ShoppingBag" className="mr-2" size={24} />
                Яндекс Еда
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bubble-gradient flex items-center justify-center">
                  <span className="text-lg font-black text-white">BC</span>
                </div>
                <span className="text-xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                  BUBBLE COFFEE
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Место, где вкус становится стилем
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Юлиана Семенова, 8к2
                </p>
                <a href="tel:+79600001410" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  8-960-000-14-10
                </a>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@bubblecoffee.ru
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">Соцсети</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/bubble.coffee_rus" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </a>
                <a href="https://t.me/bubble_coffee_msk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-scale">
                    <Icon name="Send" size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 mt-6 text-center text-sm text-muted-foreground">
            © 2024 Bubble Coffee. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
