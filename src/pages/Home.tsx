import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const StatCard = ({ value, label, icon }: { value: string; label: string; icon: string }) => (
  <Card className="p-6 text-center hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
    <Icon name={icon} className="mx-auto mb-3 text-primary" size={40} />
    <div className="text-4xl font-black mb-2 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
      {value}
    </div>
    <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Rubik, sans-serif' }}>
      {label}
    </div>
  </Card>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-1 bubble-gradient z-50"></div>
      
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bubble-gradient flex items-center justify-center shadow-lg">
              <span className="text-xl font-black text-white">BC</span>
            </div>
            <span className="text-2xl font-black neon-glow hidden md:block" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              BUBBLE COFFEE
            </span>
          </div>
          
          <div className="hidden md:flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Главная</Link>
            <Link to="/menu" className="text-foreground hover:text-primary transition-colors font-medium">Меню</Link>
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
              <Link to="/menu" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Меню</Link>
              <Link to="/franchise" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Франшиза</Link>
              <Link to="/brandbook" className="p-3 hover:bg-primary/10 rounded-lg transition-colors">Брендбук</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/files/235da5ee-d2f4-48e5-b1fd-e434f0a5c358.png"
            alt="Bubble Coffee Neon"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black neon-glow leading-tight" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Поймай вкус.<br/>Возьми с собой.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Авторский кофе, bubble tea и пончики в молодёжном формате
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bubble-gradient text-white font-bold text-lg px-8 py-6 hover-scale">
              <Icon name="Coffee" className="mr-2" size={24} />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6">
              <Icon name="TrendingUp" className="mr-2" size={24} />
              Открыть франшизу
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Почему гости выбирают нас
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="800₽" label="Средний чек" icon="Wallet" />
            <StatCard value="5★" label="Рейтинг на Яндекс.Картах" icon="Star" />
            <StatCard value="120+" label="Уникальных напитков" icon="Coffee" />
            <StatCard value="24/7" label="Доставка работает" icon="Truck" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                Bubble Tea с тапиокой
              </h2>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Наша фишка — настоящая тапиока, которую мы варим сами каждый день. 
                Свежие ингредиенты, яркие вкусы и Instagram-worthy подача.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Свежая тапиока каждый день</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Альтернативное молоко: кокос, банан, миндаль</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Авторские топпинги и декор</span>
                </li>
              </ul>
              <Button className="bubble-gradient text-white font-bold hover-scale">
                Попробовать сейчас
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bubble-gradient blur-2xl opacity-20 rounded-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/251f2c76-8fe8-4871-bef8-9a6ad2bc5c37.JPG"
                alt="Pink Bubble Tea"
                className="relative rounded-3xl shadow-2xl w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bubble-gradient blur-2xl opacity-20 rounded-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/84e6c595-079e-4efb-aeed-96d93f4e1eb5.JPG"
                alt="Bubble Coffee Barista"
                className="relative rounded-3xl shadow-2xl w-full hover-scale"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                Атмосфера неона и вкуса
              </h2>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Яркий дизайн, неоновая подсветка и дружелюбная команда. 
                У нас создают не просто напитки — мы создаём настроение и эмоции.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Palette" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Уникальный неоновый дизайн интерьера</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Users" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Команда профессиональных бариста</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Heart" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">Pet-friendly и семейная атмосфера</span>
                </li>
              </ul>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bubble-gradient opacity-5"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Хочешь открыть свою Bubble Coffee?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Присоединяйся к нашей франшизе! Полная поддержка, готовая бизнес-модель и фирменный стиль.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bubble-gradient text-white font-bold text-lg px-10 py-6 hover-scale">
              <Icon name="Rocket" className="mr-2" size={24} />
              Условия франшизы
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-10 py-6">
              <Icon name="Download" className="mr-2" size={24} />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
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

          <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
            © 2024 Bubble Coffee. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}