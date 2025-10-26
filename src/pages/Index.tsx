import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
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
  <div className="flex flex-col gap-3 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
    <div className="w-full h-24 rounded-lg shadow-lg" style={{ background: css }}></div>
    <div className="space-y-1">
      <h4 className="font-bold text-foreground">{name}</h4>
      <code className="text-xs text-muted-foreground break-all">{css}</code>
    </div>
  </div>
);

export default function Index() {
  const [activeSection, setActiveSection] = useState('brand-core');

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-1 bubble-gradient z-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-black neon-glow animate-fade-in" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BUBBLE COFFEE
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Brand System — Место, где вкус становится стилем
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              Молодежный формат
            </div>
            <div className="px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium">
              Take-away кофейня
            </div>
            <div className="px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
              Баблти & Авторский кофе
            </div>
          </div>
        </header>

        <Tabs defaultValue="brand-core" className="w-full" onValueChange={setActiveSection}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-card/50 p-2 h-auto">
            <TabsTrigger value="brand-core" className="text-xs md:text-sm">Brand Core</TabsTrigger>
            <TabsTrigger value="colors" className="text-xs md:text-sm">Цвета</TabsTrigger>
            <TabsTrigger value="typography" className="text-xs md:text-sm">Типографика</TabsTrigger>
            <TabsTrigger value="visual" className="text-xs md:text-sm">Визуал</TabsTrigger>
            <TabsTrigger value="voice" className="text-xs md:text-sm">Tone of Voice</TabsTrigger>
            <TabsTrigger value="space" className="text-xs md:text-sm">Пространство</TabsTrigger>
            <TabsTrigger value="motion" className="text-xs md:text-sm">В движении</TabsTrigger>
            <TabsTrigger value="team" className="text-xs md:text-sm">Команда</TabsTrigger>
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
          <div className="inline-block p-8 rounded-2xl bubble-gradient-neon">
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
