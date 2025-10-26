import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PriceCard = ({ 
  title, 
  price, 
  features, 
  highlighted = false 
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  highlighted?: boolean;
}) => (
  <Card className={`p-8 space-y-6 hover-scale ${highlighted ? 'border-primary shadow-2xl bg-gradient-to-br from-primary/10 to-card' : 'border-border/50 bg-card/50'}`}>
    {highlighted && (
      <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-2">
        ПОПУЛЯРНЫЙ ПАКЕТ
      </div>
    )}
    <div>
      <h3 className="text-2xl font-black mb-2" style={{ fontFamily: '"Futura Round", sans-serif' }}>
        {title}
      </h3>
      <div className="text-4xl font-black neon-glow">
        {price}
      </div>
      <p className="text-sm text-muted-foreground mt-1">Единоразовый взнос</p>
    </div>
    
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <Button className={highlighted ? 'w-full bubble-gradient text-white font-bold' : 'w-full'} size="lg">
      Выбрать пакет
    </Button>
  </Card>
);

const TimelineStep = ({ 
  number, 
  title, 
  description, 
  duration 
}: { 
  number: number; 
  title: string; 
  description: string; 
  duration: string;
}) => (
  <div className="flex gap-6 items-start group">
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bubble-gradient flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
    </div>
    
    <div className="flex-1 pb-12">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
          {duration}
        </span>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function Franchise() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: ''
  });

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
          
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Главная</Link>
            <Link to="/brandbook" className="text-foreground hover:text-primary transition-colors font-medium">Брендбук</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold mb-4">
            ФРАНШИЗА BUBBLE COFFEE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Открой успешную кофейню с нами
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Готовая бизнес-модель, полная поддержка и проверенная концепция молодёжной кофейни
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="text-4xl font-black neon-glow mb-2">600-700К₽</div>
              <div className="text-sm text-muted-foreground">Средняя выручка/мес</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="text-4xl font-black neon-glow mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Рецептов кофе</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20">
              <div className="text-4xl font-black neon-glow mb-2">5%</div>
              <div className="text-sm text-muted-foreground">Роялти от выручки</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Почему наша франшиза?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы предлагаем не просто бренд — мы даём вам полную экосистему для успешного бизнеса
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="Palette" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Уникальный брендинг</h3>
              <p className="text-sm text-muted-foreground">
                Готовый фирменный стиль с неоновым дизайном, логотипом и визуальной айдентикой
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="BookOpen" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Обучение персонала</h3>
              <p className="text-sm text-muted-foreground">
                Полная программа подготовки бариста и управляющих. Сертификация и стандарты качества
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="Coffee" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Авторское меню</h3>
              <p className="text-sm text-muted-foreground">
                120+ рецептов кофе, bubble tea, лимонадов и десертов с детальными технологическими картами
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="TrendingUp" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Маркетинговая поддержка</h3>
              <p className="text-sm text-muted-foreground">
                Готовые стратегии продвижения, контент-планы, шаблоны для соцсетей и рекламные материалы
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="Wrench" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Помощь в запуске</h3>
              <p className="text-sm text-muted-foreground">
                Подбор помещения, расчёт инвестиций, проектирование интерьера и установка оборудования
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover-scale bg-gradient-to-br from-card to-card/50 border-primary/20">
              <Icon name="Headphones" className="text-primary" size={40} />
              <h3 className="text-xl font-bold">Постоянная поддержка</h3>
              <p className="text-sm text-muted-foreground">
                Личный менеджер, регулярные консультации, обновление меню и контроль качества
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Пакеты франшизы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящий формат для вашего бизнеса
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              title="Стартовый"
              price="500 000₽"
              features={[
                'Право использования бренда (3 года)',
                'Базовый брендбук и логотип',
                'Полное меню 30+ позиций кофе',
                'Онлайн-обучение персонала',
                'Список рекомендуемых поставщиков',
                'Маркетинговые материалы',
                'Email-поддержка',
                'Роялти 5% от выручки'
              ]}
            />

            <PriceCard 
              title="Оптимальный"
              price="800 000₽"
              highlighted
              features={[
                'Право использования бренда (5 лет)',
                'Полный брендбук + дизайн-проект',
                'Полное меню + сезонные позиции',
                'Очное обучение 2 недели',
                'Договоры с поставщиками',
                'Полная маркетинговая стратегия',
                'Помощь в запуске (2 недели)',
                'Личный менеджер',
                'Помощь в подборе помещения',
                'Роялти 5% от выручки'
              ]}
            />

            <PriceCard 
              title="Премиум"
              price="1 200 000₽"
              features={[
                'Право использования бренда (бессрочно)',
                'Индивидуальный дизайн-проект под ключ',
                'Полное меню + разработка уникальных позиций',
                'Обучение команды до 5 человек',
                'Эксклюзивные договоры с поставщиками',
                'Продвижение в соцсетях (3 месяца)',
                'Запуск под ключ (1 месяц)',
                'VIP-менеджер 24/7',
                'Помощь в поиске и согласовании локации',
                'Приоритетное обновление меню',
                'Роялти 5% от выручки'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Этапы запуска франшизы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            От подписания договора до открытия — 2-4 месяца
          </p>

          <div className="space-y-0">
            <TimelineStep 
              number={1}
              title="Знакомство и договор"
              description="Консультация, презентация франшизы, расчёт инвестиций и подписание договора"
              duration="1 неделя"
            />
            <TimelineStep 
              number={2}
              title="Поиск и согласование помещения"
              description="Подбор локации, анализ трафика, согласование с франчайзером, оформление аренды"
              duration="2-4 недели"
            />
            <TimelineStep 
              number={3}
              title="Дизайн и ремонт"
              description="Создание дизайн-проекта, закупка материалов, ремонтные работы, установка неона и брендинга"
              duration="4-6 недель"
            />
            <TimelineStep 
              number={4}
              title="Закупка оборудования"
              description="Заказ кофемашины, холодильников, мебели и инвентаря от партнёров франшизы"
              duration="2-3 недели"
            />
            <TimelineStep 
              number={5}
              title="Обучение персонала"
              description="Подбор команды, обучение бариста технологиям приготовления и стандартам обслуживания"
              duration="2 недели"
            />
            <TimelineStep 
              number={6}
              title="Запуск и маркетинг"
              description="Мягкое открытие, настройка доставки, запуск рекламы в соцсетях и локальная реклама"
              duration="1-2 недели"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-card/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
            Финансовая модель
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачный расчёт для пакета "Оптимальный" (площадь 15-25 м²)
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="DollarSign" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Инвестиции (стартовые)</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Паушальный взнос (пакет)</span>
                    <span className="font-bold">500 000 - 1 200 000₽</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Оборудование</span>
                    <span className="font-bold">до 500 000₽</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Ремонт и дизайн</span>
                    <span className="font-bold">до 500 000₽</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">ИТОГО (ориентировочно)</span>
                    <span className="font-black text-2xl neon-glow">1 500 000 - 2 200 000₽</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Зависит от выбранного пакета и региона</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="TrendingUp" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Ежемесячные показатели</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">Выручка</div>
                  <div className="text-3xl font-black neon-glow">600 - 700 000₽</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Себестоимость (30%)</span>
                    <span className="font-semibold">- 180 - 210 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Аренда</span>
                    <span className="font-semibold">- 80 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ФОТ (3 человека)</span>
                    <span className="font-semibold">- 150 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Коммунальные услуги</span>
                    <span className="font-semibold">- 20 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Роялти (5%)</span>
                    <span className="font-semibold">- 30 - 35 000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Прочие расходы</span>
                    <span className="font-semibold">- 25 000₽</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Чистая прибыль</span>
                    <span className="font-black text-2xl text-primary">115 - 215 000₽</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Рентабельность: ~25-30%</div>
                </div>

                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20 mt-6">
                  <div className="text-sm text-muted-foreground mb-1">Окупаемость</div>
                  <div className="text-2xl font-black">10-18 месяцев</div>
                  <div className="text-xs text-muted-foreground mt-1">Зависит от локации и проходимости</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bubble-gradient opacity-5"></div>
        <div className="relative max-w-3xl mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/30">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 neon-glow" style={{ fontFamily: '"Futura Round", sans-serif' }}>
              Готовы открыть франшизу?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку — наш менеджер свяжется с вами в течение 24 часов
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя *</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон *</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Город</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="Москва"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bubble-gradient text-white font-bold text-lg py-6 hover-scale">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>

            <div className="mt-8 pt-6 border-t border-border/50 text-center space-y-3">
              <p className="text-sm text-muted-foreground">Или свяжитесь с нами напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+79600001410" className="flex items-center gap-2 text-primary hover:underline font-medium">
                  <Icon name="Phone" size={20} />
                  8-960-000-14-10
                </a>
                <a href="https://t.me/bubble_coffee_msk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-medium">
                  <Icon name="Send" size={20} />
                  Telegram
                </a>
                <a href="https://www.instagram.com/bubble.coffee_rus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-medium">
                  <Icon name="Instagram" size={20} />
                  Instagram
                </a>
              </div>
            </div>
          </Card>
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

          <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
            © 2024 Bubble Coffee. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}