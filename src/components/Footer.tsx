import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bubble-gradient flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white">BC</span>
              </div>
              <span className="text-xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
                BUBBLE COFFEE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Авторский кофе и bubble tea в молодёжном формате
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Франшиза
                </Link>
              </li>
              <li>
                <Link to="/brandbook" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Брендбук
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:89600001410" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Icon name="Phone" size={16} />
                  8-960-000-141-0
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bubble.coffee@mail.ru" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Icon name="Mail" size={16} />
                  bubble.coffee@mail.ru
                </a>
              </li>
              <li>
                <a 
                  href="https://yandex.ru/maps/org/bubble_coffee/40703572870?si=wu3j1g3qy8cjnawtewrkhb6jn8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Icon name="MapPin" size={16} />
                  Яндекс.Карты
                </a>
              </li>
              <li>
                <a 
                  href="https://eda.yandex.ru/restaurant/bubble_coffee" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Icon name="UtensilsCrossed" size={16} />
                  Заказать на Яндекс.Еда
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Соцсети</h3>
            <div className="flex gap-3">
              <a
                href="https://vk.com/bubble.coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="VK"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.29h-1.55c-.46 0-.61-.37-1.44-1.21-.73-.69-1.05-.78-1.24-.78-.25 0-.33.08-.33.48v1.1c0 .3-.09.48-1.01.48-1.49 0-3.14-.91-4.3-2.59-1.75-2.4-2.23-4.21-2.23-4.58 0-.19.08-.37.48-.37h1.55c.36 0 .5.16.64.54.69 2.07 1.85 3.88 2.33 3.88.18 0 .25-.08.25-.54v-2.11c-.05-1.13-.66-1.23-.66-1.63 0-.16.13-.31.33-.31h2.45c.3 0 .42.17.42.52v2.84c0 .3.14.43.23.43.18 0 .33-.13.67-.47 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.37.62-.37h1.55c.37 0 .45.19.37.52-.17.79-1.81 3.37-1.81 3.37-.15.25-.21.37 0 .65.15.21.65.63 1.01 1.03.64.69 1.13 1.26 1.27 1.66.13.4-.08.6-.48.6z"/>
                </svg>
              </a>
              
              <a
                href="https://t.me/bubble_coffee_msk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.65-2.87 7.98-3.42 3.8-1.58 4.59-1.85 5.1-1.86.11 0 .37.03.53.17.14.11.18.27.2.38-.01.06.01.24 0 .38z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/bubble.coffee.msc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@bubble.coffee.msc?_t=ZN-90uSz8EmZSY&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bubble Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
