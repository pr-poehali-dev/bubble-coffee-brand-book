import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const ColorCard = ({ name, hex, rgb, usage }: { name: string; hex: string; rgb: string; usage: string }) => (
  <div className="flex flex-col gap-3 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all">
    <div className="w-full h-24 rounded-lg shadow-lg" style={{ backgroundColor: hex }}></div>
    <div className="space-y-1">
      <h4 className="font-bold text-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground">HEX: {hex}</p>
      <p className="text-xs text-muted-foreground">RGB: {rgb}</p>
      <p className="text-xs text-foreground/80 mt-2">{usage}</p>
    </div>
  </div>
);

const GradientCard = ({ name, css }: { name: string; css: string }) => (
  <div className="flex flex-col gap-3 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover-scale">
    <div className="w-full h-24 rounded-lg shadow-lg" style={{ background: css }}></div>
    <div className="space-y-1">
      <h4 className="font-bold text-foreground">{name}</h4>
      <code className="text-xs text-muted-foreground break-all">{css}</code>
    </div>
  </div>
);

const CompetitorCard = ({ name, x, y, color }: { name: string; x: number; y: number; color: string }) => (
  <div 
    className="absolute w-32 h-24 flex items-center justify-center rounded-xl border-2 backdrop-blur-sm transition-all hover-scale cursor-pointer"
    style={{ 
      left: `${x}%`, 
      top: `${y}%`,
      borderColor: color,
      backgroundColor: `${color}20`
    }}
  >
    <p className="text-sm font-bold text-center px-2" style={{ color }}>{name}</p>
  </div>
);

export default function Index() {
  const [activeSection, setActiveSection] = useState('brand-core');

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-1 bubble-gradient z-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-block relative">
            <div className="absolute inset-0 bubble-gradient blur-3xl opacity-30 animate-glow-pulse"></div>
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full bubble-gradient flex items-center justify-center animate-float shadow-2xl">
                  <span className="text-4xl font-black text-white">BC</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black neon-glow">
                BUBBLE COFFEE
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Brand System — Место, где вкус становится стилем
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover-scale">
              Молодежный формат
            </div>
            <div className="px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium hover-scale">
              Take-away кофейня
            </div>
            <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium hover-scale">
              Баблти & Авторский кофе
            </div>
          </div>
        </header>

        <Tabs defaultValue="brand-core" className="w-full" onValueChange={setActiveSection}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 bg-card/50 p-2 h-auto">
            <TabsTrigger value="brand-core" className="text-xs md:text-sm">Brand Core</TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs md:text-sm">Аналитика</TabsTrigger>
            <TabsTrigger value="swot" className="text-xs md:text-sm">SWOT</TabsTrigger>
            <TabsTrigger value="audience" className="text-xs md:text-sm">Аудитория</TabsTrigger>
            <TabsTrigger value="competitors" className="text-xs md:text-sm">Конкуренты</TabsTrigger>
            <TabsTrigger value="colors" className="text-xs md:text-sm">Цвета</TabsTrigger>
            <TabsTrigger value="typography" className="text-xs md:text-sm">Типографика</TabsTrigger>
            <TabsTrigger value="visual" className="text-xs md:text-sm">Визуал</TabsTrigger>
            <TabsTrigger value="voice" className="text-xs md:text-sm">Tone of Voice</TabsTrigger>
            <TabsTrigger value="space" className="text-xs md:text-sm">Пространство</TabsTrigger>
          </TabsList>

          <TabsContent value="brand-core" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Sparkles" className="text-primary" size={32} />
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Идея бренда</h2>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                <span className="text-primary font-bold">Bubble Coffee — это место, где вкус становится стилем.</span><br/>
                Мы соединяем энергетику молодости, современную эстетику и авторские напитки, чтобы каждый гость мог почувствовать себя частью яркого, модного и дружелюбного мира. Не просто кофе или баблти — это опыт, эмоция и настроение «хочу еще».
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-secondary/20 bg-card/50">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Target" className="text-secondary" size={28} />
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Миссия</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Дарить людям настроение через вкус и атмосферу — в каждом стакане, улыбке и деталях. Мы не про снобизм кофеен, мы про удовольствие, стиль и внимание к каждому гостю.
                </p>
              </Card>

              <Card className="p-8 border-accent/20 bg-card/50">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Award" className="text-accent" size={28} />
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Обещание бренда</h3>
                </div>
                <p className="text-xl font-semibold text-primary mb-2">"Каждый глоток — удовольствие."</p>
                <p className="text-foreground/90">
                  Вкусная тапиока, авторский кофе и идеальные пончики — всё, чтобы день стал ярче.
                </p>
              </Card>
            </div>

            <Card className="p-8 border-primary/20 bg-card/50">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Heart" className="text-primary" size={28} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ценности</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "Zap", title: "Современность", desc: "Мы идем в ногу с трендами и даже создаем свои" },
                  { icon: "Coffee", title: "Вкус и качество", desc: "Мы выбираем продукты, которые приносят радость" },
                  { icon: "Users", title: "Тепло и человечность", desc: "Каждый гость — друг, которому мы рады" },
                  { icon: "Lightbulb", title: "Открытость и гибкость", desc: "Готовы слушать, менять и улучшаться" },
                  { icon: "Sparkles", title: "Чистота и порядок", desc: "Красота начинается с чистоты во всём" }
                ].map((value, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <Icon name={value.icon as any} className="text-primary mb-2" size={24} />
                    <h4 className="font-bold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MessageCircle" className="text-secondary" size={28} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Характер бренда</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Молодой', 'Стильный', 'Уверенный', 'Дружелюбный', 'Немного дерзкий', 'Аккуратный', 'Быстрый', 'Веселый'].map((trait, idx) => (
                  <div key={idx} className="px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium">
                    {trait}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="TrendingUp" className="text-primary" size={32} />
                <h2 className="text-3xl font-bold">Рыночная позиция</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 text-primary">Локация и контекст</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Солнцево — развивающийся район за МКАДом с активным трафиком молодежи и семей
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Плотность населения</p>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Молодежная аудитория</p>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Конкуренция кофеен</p>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="font-bold text-lg mb-4 text-secondary">Потенциал роста</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="TrendingUp" className="text-secondary" size={20} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Сегмент баблти</p>
                        <p className="text-xs text-muted-foreground">Рост 40% год к году</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" className="text-secondary" size={20} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Целевая аудитория</p>
                        <p className="text-xs text-muted-foreground">~50 000 потенциальных гостей</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-secondary" size={20} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Локальное лидерство</p>
                        <p className="text-xs text-muted-foreground">Первая концептуальная точка</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-4">Архетип бренда</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bubble-gradient text-white text-center hover-scale">
                    <Icon name="Star" className="mx-auto mb-2" size={32} />
                    <p className="font-bold mb-1">Искатель</p>
                    <p className="text-xs opacity-90">Открывает новые вкусы и эмоции</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30 text-center hover-scale">
                    <Icon name="Users" className="mx-auto mb-2 text-secondary" size={32} />
                    <p className="font-bold mb-1 text-secondary">Друг</p>
                    <p className="text-xs text-muted-foreground">Теплый, искренний, доступный</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/20 border border-accent/30 text-center hover-scale">
                    <Icon name="Zap" className="mx-auto mb-2 text-accent" size={32} />
                    <p className="font-bold mb-1 text-accent">Создатель</p>
                    <p className="text-xs text-muted-foreground">Авторские напитки и стиль</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="swot" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="BarChart3" className="text-primary" size={32} />
                <h2 className="text-3xl font-bold">SWOT-анализ</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="TrendingUp" className="text-green-500" size={24} />
                    <h3 className="font-bold text-lg text-green-500">Сильные стороны</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Уникальная визуальная айдентика (неон + фиолетово-розовая палитра)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Совмещение баблти и авторского кофе — двойной рынок</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Сильный эмоциональный контакт с молодежной аудиторией</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Take-away формат — быстрота и удобство</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Локальное позиционирование без прямых конкурентов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Высокая фотогеничность продукта для соцсетей</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="AlertTriangle" className="text-red-500" size={24} />
                    <h3 className="font-bold text-lg text-red-500">Слабые стороны</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      <span>Новый игрок на рынке — требуется время на узнаваемость</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      <span>Ограниченная масштабируемость одной точки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      <span>Зависимость от пешеходного трафика района</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      <span>Средний чек может быть ниже элитных кофеен</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      <span>Отсутствие посадочных мест — только навынос</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Lightbulb" className="text-blue-500" size={24} />
                    <h3 className="font-bold text-lg text-blue-500">Возможности</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Открытие сети точек в других спальных районах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Запуск мерча с фирменной айдентикой</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Партнерство с брендами (коллаборации, лимитки)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Активное продвижение в TikTok и Reels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Программа лояльности и мобильное приложение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>Сезонное меню и эксклюзивные вкусы</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Shield" className="text-orange-500" size={24} />
                    <h3 className="font-bold text-lg text-orange-500">Угрозы</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">!</span>
                      <span>Выход крупных сетей (Starbucks, Costa) в район</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">!</span>
                      <span>Снижение покупательской способности населения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">!</span>
                      <span>Копирование концепции конкурентами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">!</span>
                      <span>Изменение трендов (падение популярности баблти)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">!</span>
                      <span>Рост цен на сырье и ингредиенты</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Users" className="text-secondary" size={32} />
                <h2 className="text-3xl font-bold">Целевая аудитория</h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bubble-gradient text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Star" size={28} />
                    <h3 className="font-bold text-xl">Основная аудитория (ядро)</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p><strong>Возраст:</strong> 18–30 лет</p>
                      <p><strong>Пол:</strong> 70% женщины, 30% мужчины</p>
                      <p><strong>Статус:</strong> студенты, молодые специалисты, фрилансеры</p>
                      <p><strong>Доход:</strong> средний</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm opacity-90"><strong>Психография:</strong></p>
                      <div className="flex flex-wrap gap-2">
                        {['Самовыражение', 'Эстетика', 'Тренды', 'Эмоции', 'Соцсети'].map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 hover-scale">
                    <Icon name="Heart" className="text-primary mb-3" size={28} />
                    <h4 className="font-bold mb-2">Мотивы</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Хочет место с вайбом</li>
                      <li>• Делает фото напитков</li>
                      <li>• Ищет новые вкусы</li>
                      <li>• Делится в соцсетях</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/30 hover-scale">
                    <Icon name="Shield" className="text-secondary mb-3" size={28} />
                    <h4 className="font-bold mb-2">Барьеры</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Страх "обычного" опыта</li>
                      <li>• Не любят пафос</li>
                      <li>• Боятся официоза</li>
                      <li>• Ценят искренность</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-accent/10 border border-accent/30 hover-scale">
                    <Icon name="Zap" className="text-accent mb-3" size={28} />
                    <h4 className="font-bold mb-2">Триггеры</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Неоновый визуал</li>
                      <li>• Необычные вкусы</li>
                      <li>• Программы лояльности</li>
                      <li>• UGC контент</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-4">Вторичные сегменты</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                      <p className="font-semibold mb-2">👨‍👩‍👧 Молодые родители (25–40 лет)</p>
                      <p className="text-sm text-muted-foreground">Берут кофе и пончики на прогулках. Ценят чистоту, качество и дружелюбие.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                      <p className="font-semibold mb-2">🎒 Школьники и подростки (15–18 лет)</p>
                      <p className="text-sm text-muted-foreground">Ходят компаниями, любят сладкое и яркий визуал. Активны в TikTok.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <h3 className="font-bold text-lg mb-4">Customer Journey Map</h3>
                  <div className="space-y-3">
                    {[
                      { step: "1. Увидел", emotion: "«Вау, что это?»", action: "Замечает яркую витрину с неоном", feeling: "😍" },
                      { step: "2. Подошел", emotion: "Интересно, но не страшно", action: "Изучает меню, делает фото", feeling: "🤔" },
                      { step: "3. Заказал", emotion: "Быстро и приятно", action: "Дружелюбное общение, рекомендация", feeling: "😊" },
                      { step: "4. Попробовал", emotion: "Вкусно и запомнилось", action: "Делает фото, пробует впервые баблти", feeling: "😋" },
                      { step: "5. Вернулся", emotion: "Хочу еще и с друзьями", action: "Приводит друзей, берет карту лояльности", feeling: "🔥" }
                    ].map((journey, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 hover-scale">
                        <span className="text-3xl">{journey.feeling}</span>
                        <div className="flex-1">
                          <p className="font-semibold">{journey.step}: {journey.emotion}</p>
                          <p className="text-sm text-muted-foreground">{journey.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Target" className="text-accent" size={32} />
                <h2 className="text-3xl font-bold">Конкурентный анализ</h2>
              </div>

              <div className="mb-8 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-6 text-center">Карта позиционирования</h3>
                <div className="relative h-96 bg-gradient-to-br from-background to-card rounded-xl border border-border/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-full bg-border"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-border"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                    ← Низкий стиль | Высокий стиль →
                  </div>
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                    ← Низкая теплота | Высокая теплота →
                  </div>
                  
                  <CompetitorCard name="Cofix" x={20} y={65} color="#666" />
                  <CompetitorCard name="One Price" x={35} y={50} color="#888" />
                  <CompetitorCard name="Bubbleology" x={60} y={45} color="#FF72D2" />
                  <CompetitorCard name="BUBBLE COFFEE" x={70} y={20} color="#A259FF" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30">
                  <h3 className="font-bold text-lg mb-4 text-red-500">Прямые конкуренты</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1">Сети кофеен (Cofix, One Price, Surf)</p>
                      <p className="text-sm text-muted-foreground mb-2">✓ Узнаваемость, отлаженные процессы</p>
                      <p className="text-sm text-muted-foreground">✗ Безличность, отсутствие эмоции</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-semibold mb-1">Локальные точки кофе</p>
                      <p className="text-sm text-muted-foreground mb-2">✓ Дешевле, ближе к дому</p>
                      <p className="text-sm text-muted-foreground">✗ Устаревший визуал, скучное меню</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30">
                  <h3 className="font-bold text-lg mb-4 text-orange-500">Косвенные конкуренты</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1">Баблти-бары (Bubbleology, Boba Boom)</p>
                      <p className="text-sm text-muted-foreground mb-2">✓ Оригинальные вкусы, узнаваемость</p>
                      <p className="text-sm text-muted-foreground">✗ Низкое качество кофе, "детскость"</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-semibold mb-1">Премиум кофейни (Starbucks, Costa)</p>
                      <p className="text-sm text-muted-foreground mb-2">✓ Статус, качество</p>
                      <p className="text-sm text-muted-foreground">✗ Высокая цена, пафосность, далеко</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bubble-gradient text-white">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Award" size={24} />
                  Конкурентное преимущество Bubble Coffee
                </h3>
                <p className="text-lg">
                  Мы занимаем нишу между кофейней и баблти-баром, создавая баланс между <strong>вкусом, стилем и эмоцией</strong>. 
                  Не просто продаем напитки — даем ощущение нового и модного формата.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="colors" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Palette" className="inline mr-3 text-primary" size={32} />
                Основная палитра
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorCard 
                  name="Фиолетовый (главный акцент)"
                  hex="#A259FF"
                  rgb="(162, 89, 255)"
                  usage="Логотип, заголовки, элементы декора и подсветка"
                />
                <ColorCard 
                  name="Розовый (второй фирменный)"
                  hex="#FF72D2"
                  rgb="(255, 114, 210)"
                  usage="Акценты, кнопки, упаковка и детали"
                />
                <ColorCard 
                  name="Черный (фоновый)"
                  hex="#0F0F10"
                  rgb="(15, 15, 16)"
                  usage="Основа для визуала, яркие цвета светятся"
                />
                <ColorCard 
                  name="Белый (чистота и воздух)"
                  hex="#FFFFFF"
                  rgb="(255, 255, 255)"
                  usage="Текст и пространство, визуал дышит"
                />
              </div>
            </Card>

            <Card className="p-8 border-accent/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Дополнительные акценты
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <ColorCard 
                  name="Неоновый розово-фиолетовый"
                  hex="#D96CFF"
                  rgb="(217, 108, 255)"
                  usage="Подсветки и эффект свечения"
                />
                <ColorCard 
                  name="Светлый лиловый"
                  hex="#E9D5FF"
                  rgb="(233, 213, 255)"
                  usage="Фон и мягкие градиенты"
                />
                <ColorCard 
                  name="Нежный розово-бежевый"
                  hex="#FFD6F2"
                  rgb="(255, 214, 242)"
                  usage="Упаковка, фон, баланс"
                />
              </div>
            </Card>

            <Card className="p-8 border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Фирменные градиенты
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <GradientCard 
                  name="Фиолетово-розовый (основной)"
                  css="linear-gradient(90deg, #A259FF 0%, #FF72D2 100%)"
                />
                <GradientCard 
                  name="Неоновый градиент (подсветка)"
                  css="linear-gradient(135deg, #FF72D2 0%, #D96CFF 50%, #A259FF 100%)"
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Type" className="inline mr-3 text-primary" size={32} />
                Типографика
              </h2>
              
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="text-sm font-bold text-primary mb-4">ОСНОВНОЙ ШРИФТ — ЗАГОЛОВКИ</h3>
                  <div className="space-y-3">
                    <p className="text-5xl font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>Montserrat Black</p>
                    <p className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Montserrat Bold</p>
                    <p className="text-3xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Montserrat SemiBold</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Используется для всех заголовков, логотипа и акцентов</p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="text-sm font-bold text-secondary mb-4">ВТОРИЧНЫЙ ШРИФТ — ТЕКСТ</h3>
                  <div className="space-y-3">
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Rubik Bold</p>
                    <p className="text-xl font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>Rubik Medium</p>
                    <p className="text-lg" style={{ fontFamily: 'Rubik, sans-serif' }}>Rubik Regular</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Используется для всех текстов, описаний и интерфейса</p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-sm font-bold text-foreground mb-4">ПРИМЕРЫ СОЧЕТАНИЙ</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Поймай вкус. Возьми с собой.</h4>
                      <p className="text-base text-muted-foreground" style={{ fontFamily: 'Rubik, sans-serif' }}>Каждый глоток — удовольствие. Bubble Coffee — это кофе, который улыбается.</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-primary neon-glow" style={{ fontFamily: 'Montserrat, sans-serif' }}>BUBBLE COFFEE</h4>
                      <p className="text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>Место, где вкус становится стилем</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="visual" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Image" className="inline mr-3 text-primary" size={32} />
                Визуальные элементы
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Circle" className="text-primary" size={20} />
                    Графические элементы
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Пузырьки разных размеров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Волны и мягкие формы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Неоновые контуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Контрастные паттерны</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Объемные 3D элементы</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Camera" className="text-secondary" size={20} />
                    Стиль фото и видео
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Яркое контрастное освещение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Неоновые акценты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Чистая обработка без желтизны</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Напитки крупным планом</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Эмоции гостей</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-3">Визуальный вайб</h3>
                <p className="text-lg text-primary font-semibold mb-2">"Современный город, энергия, стиль"</p>
                <p className="text-sm text-muted-foreground">
                  Современная дороговизна без показного пафоса. Яркий контраст, неон, отражения, легкий глянец.
                </p>
              </div>

              <div className="mt-6 p-6 rounded-xl bubble-gradient text-white">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Ban" size={20} />
                  Запрещено
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Пастель', 'Золото', 'Винтаж', 'Дешевые эффекты', 'Желтые фильтры'].map((item, idx) => (
                    <div key={idx} className="px-3 py-1 rounded-full bg-white/20 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="voice" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-secondary/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="MessageSquare" className="inline mr-3 text-secondary" size={32} />
                Tone of Voice
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 text-primary">Тональность</h3>
                  <ul className="space-y-2 text-sm">
                    {['Дружелюбный и современный', 'Легкий юмор, без фривольности', 'Без сюсюканья', 'Без официоза', 'Короткие живые фразы', 'Энергия, уверенность, стиль'].map((tone, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>{tone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="font-bold text-lg mb-4 text-secondary">Формат общения</h3>
                  <p className="text-sm mb-4">Обращение на <strong>«вы»</strong>, но с теплом и дружелюбием</p>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                      <p className="text-xs text-muted-foreground mb-1">✅ Правильно:</p>
                      <p className="text-sm">"Если не хватает сладости — добавим!"</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50 border border-border/30">
                      <p className="text-xs text-muted-foreground mb-1">❌ Неправильно:</p>
                      <p className="text-sm">"Если тебе мало сладкого, скажи"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-4">Примеры фраз бренда</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Твое настроение — наш главный ингредиент",
                    "Поймай вкус. Возьми с собой",
                    "Bubble Coffee — ярко, вкусно, по делу",
                    "Скучно не будет. Даже если просто кофе",
                    "В каждом стакане — кусочек яркости",
                    "Bubble Coffee — кофе, который улыбается",
                    "Неон, пончики и любовь — всё, как ты любишь",
                    "Поймай вкус, пока не улетел 🫧"
                  ].map((phrase, idx) => (
                    <div key={idx} className="p-4 rounded-lg bubble-gradient text-white font-medium text-sm">
                      "{phrase}"
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="space" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-accent/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Store" className="inline mr-3 text-accent" size={32} />
                Пространство и атмосфера
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <Icon name="Palette" className="text-primary mb-3" size={28} />
                  <h3 className="font-bold mb-2">Интерьер</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Фиолетовый + розовый + черный</li>
                    <li>• Неоновая подсветка</li>
                    <li>• Чистота и яркость</li>
                    <li>• Визуальная гармония</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <Icon name="Music" className="text-secondary mb-3" size={28} />
                  <h3 className="font-bold mb-2">Музыка</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Лёгкий pop</li>
                    <li>• Indie</li>
                    <li>• R&B</li>
                    <li>• Современные треки</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                  <Icon name="Camera" className="text-accent mb-3" size={28} />
                  <h3 className="font-bold mb-2">Фото-зона</h3>
                  <p className="text-sm text-muted-foreground">
                    Небольшой неон с фразой: <br/>
                    <span className="text-foreground font-semibold">"Take it with smile"</span> или <br/>
                    <span className="text-foreground font-semibold">"Bubble your day"</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-4">Customer Journey</h3>
                <div className="space-y-4">
                  {[
                    { step: "1. Увидел", emotion: "«Вау!»", icon: "Eye" },
                    { step: "2. Подошел", emotion: "Ярко, но уютно", icon: "Footprints" },
                    { step: "3. Заказал", emotion: "Быстро, с улыбкой", icon: "ShoppingCart" },
                    { step: "4. Попробовал", emotion: "Вкусно и запомнилось", icon: "Heart" },
                    { step: "5. Вернулся", emotion: "Потому что кайф", icon: "RotateCcw" }
                  ].map((journey, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/30">
                      <Icon name={journey.icon as any} className="text-primary" size={24} />
                      <div className="flex-1">
                        <p className="font-semibold">{journey.step}</p>
                        <p className="text-sm text-muted-foreground">{journey.emotion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="motion" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-primary/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Play" className="inline mr-3 text-primary" size={32} />
                Бренд в движении
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" size={20} />
                    Анимация и эффекты
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Неоновые подсветки (пульсация)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Плавные переходы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Эффект свечения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Летящие пузырьки</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary animate-glow-pulse shadow-lg shadow-primary/50"></div>
                    <div className="w-12 h-12 rounded-full bg-secondary animate-glow-pulse shadow-lg shadow-secondary/50" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-12 h-12 rounded-full bg-accent animate-glow-pulse shadow-lg shadow-accent/50" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Video" className="text-secondary" size={20} />
                    Контент для видео
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Крупные планы напитков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Процесс приготовления</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Разбрызгивающиеся пузырьки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>"Летящие" пончики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Неоновые переходы</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bubble-gradient-neon text-white">
                <h3 className="font-bold text-lg mb-3">Примеры анимации</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center animate-float">
                      🫧
                    </div>
                    <p className="text-xs">Floating bubble</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white/20 flex items-center justify-center">
                      <div className="text-2xl neon-glow">BC</div>
                    </div>
                    <p className="text-xs">Neon glow</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bubble-gradient flex items-center justify-center animate-glow-pulse">
                      ☕
                    </div>
                    <p className="text-xs">Pulse effect</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="mt-8 space-y-8 animate-fade-in">
            <Card className="p-8 border-accent/20">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Icon name="Users" className="inline mr-3 text-accent" size={32} />
                Командная культура
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 text-primary">Принципы команды</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Бариста = амбассадоры бренда',
                      'Каждый гость — гость, а не покупатель',
                      'Энергия, чистота, общение с теплом',
                      'Простота и скорость без потери качества'
                    ].map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5" size={16} />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <h3 className="font-bold text-lg mb-4 text-secondary">Внешний вид</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Верх:</p>
                      <p className="text-muted-foreground">Черный / белый / розовый</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Низ:</p>
                      <p className="text-muted-foreground">Свободный, удобный</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Акценты:</p>
                      <p className="text-muted-foreground">Яркие детали — значок, фартук, бейдж Bubble</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-bold text-lg mb-4">Мерч и расширение</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: "Shirt", title: "Футболки", desc: "С фирменным логотипом" },
                    { icon: "Coffee", title: "Термостаканы", desc: "Многоразовые стаканы" },
                    { icon: "Sticker", title: "Наклейки", desc: "Яркие стикерпаки" },
                    { icon: "ShoppingBag", title: "Шопперы", desc: "Эко-сумки с логотипом" },
                    { icon: "Sparkles", title: "Значки", desc: "Коллекционные пины" },
                    { icon: "Gift", title: "Подарочные наборы", desc: "Сезонные линейки" }
                  ].map((merch, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/30 text-center">
                      <Icon name={merch.icon as any} className="text-primary mx-auto mb-2" size={32} />
                      <h4 className="font-bold mb-1">{merch.title}</h4>
                      <p className="text-xs text-muted-foreground">{merch.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center pb-8">
          <div className="inline-block p-8 rounded-2xl bubble-gradient-neon hover-scale">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-float">
                <span className="text-3xl font-black text-white">BC</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-3 neon-glow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BUBBLE COFFEE
            </h3>
            <p className="text-white/90 text-lg">
              Не просто кофе. Это настроение, стиль и вкус, <br className="hidden md:block"/>к которому хочется возвращаться снова.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}