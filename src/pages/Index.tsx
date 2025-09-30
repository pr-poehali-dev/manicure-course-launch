import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const courses = [
    {
      title: "Классический обрезной маникюр",
      description: "Освоите технику работы с кутикулой, правильную форму ногтей и безопасность процедуры",
      icon: "Scissors"
    },
    {
      title: "Аппаратный маникюр",
      description: "Научитесь работать с аппаратом, выбирать фрезы и делать деликатную обработку",
      icon: "Zap"
    },
    {
      title: "Комбинированный маникюр",
      description: "Сочетание двух техник для идеального результата за минимальное время",
      icon: "Sparkles"
    },
    {
      title: "Покрытие гель-лаком",
      description: "Идеальное покрытие без затёков, сколов и отслоек на 3-4 недели",
      icon: "Paintbrush"
    },
    {
      title: "Дизайн и декор",
      description: "5+ трендовых дизайнов: френч, втирки, стемпинг, геометрия, слайдеры",
      icon: "Palette"
    },
    {
      title: "Ценообразование и продвижение",
      description: "Расчёт себестоимости, прайс, продвижение в соцсетях, привлечение клиентов",
      icon: "TrendingUp"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Я всегда мечтала о своём деле, и этот курс стал для меня стартом! Уже через месяц после обучения у меня появились постоянные клиентки",
      rating: 5
    },
    {
      name: "Мария Соколова",
      text: "Очень понравилась подача материала — всё понятно и структурировано. Теперь делаю маникюр себе, подругам и зарабатываю!",
      rating: 5
    },
    {
      name: "Екатерина Иванова",
      text: "Курс превзошёл все ожидания! Столько практики и поддержки. Спасибо за новую профессию и уверенность в себе",
      rating: 5
    }
  ];

  const pricingOptions = [
    {
      name: "Базовый",
      price: "29 900 ₽",
      features: [
        "6 видов маникюра",
        "Видеоуроки в записи",
        "Доступ на 6 месяцев",
        "Чат с куратором",
        "Сертификат"
      ]
    },
    {
      name: "Премиум",
      price: "49 900 ₽",
      features: [
        "Всё из тарифа Базовый",
        "3 онлайн-созвона с наставником",
        "Личный разбор работ",
        "Доступ на 12 месяцев",
        "Бонусный модуль: маркетинг"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "79 900 ₽",
      features: [
        "Всё из тарифа Премиум",
        "Безлимитные созвоны",
        "Пожизненный доступ",
        "Стартовый набор инструментов",
        "Помощь в трудоустройстве"
      ]
    }
  ];

  const faqs = [
    {
      question: "Нужен ли опыт для обучения?",
      answer: "Нет, курс создан специально для новичков. Мы начинаем с самых основ и постепенно переходим к сложным техникам."
    },
    {
      question: "Сколько времени займёт обучение?",
      answer: "В среднем 2-3 месяца при занятиях 3-4 раза в неделю по 2 часа. Но вы можете учиться в своём темпе."
    },
    {
      question: "Нужно ли покупать материалы и инструменты?",
      answer: "Да, для практики понадобятся базовые инструменты и материалы. Мы предоставим список необходимого с рекомендациями по выбору."
    },
    {
      question: "Получу ли я сертификат после обучения?",
      answer: "Да, все выпускники получают именной сертификат о прохождении курса."
    },
    {
      question: "Можно ли начать зарабатывать сразу после курса?",
      answer: "Да! Многие наши ученицы начинают принимать клиентов уже во время обучения."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/img/c16b4f33-ea3c-4d5d-888c-c2e9ba0c6f3f.jpg)` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Хобби, которое<br />приносит <span className="text-gold">доход</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Освой профессию мастера маникюра за 2 месяца и начни зарабатывать на любимом деле
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-6 text-lg rounded-none border-2 border-gold transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на курс
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-none transition-all"
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать программу
            </Button>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Программа курса</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">6 модулей для полного погружения в профессию</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gold/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink to-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы учениц</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-2 border-gold/30 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящий формат обучения</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 animate-scale-in ${
                  option.popular ? 'border-4 border-gold scale-105' : 'border-2 border-gold/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-6 py-1 font-semibold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{option.name}</CardTitle>
                  <p className="text-4xl font-bold text-center text-gold mt-4">{option.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" size={20} className="text-gold mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 py-6 text-lg font-semibold rounded-none transition-all ${
                      option.popular 
                        ? 'bg-gold hover:bg-gold/90 text-black' 
                        : 'bg-black hover:bg-black/90 text-white'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-pink">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="/img/9de859b2-a235-4b1b-a0a9-aeb3fe6f4826.jpg" 
                alt="Преподаватель"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О преподавателе</h2>
              <p className="text-lg mb-4">
                Меня зовут Елена, и я мастер маникюра с 8-летним опытом работы.
              </p>
              <p className="text-lg mb-4">
                За это время я обучила более 500 учениц, которые успешно работают в индустрии красоты и имеют собственную клиентскую базу.
              </p>
              <p className="text-lg mb-4">
                Я создала этот курс, чтобы поделиться своим опытом и помочь вам войти в профессию легко и уверенно — с пониманием техник, бизнес-процессов и секретов мастерства.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold">8+</p>
                  <p className="text-sm text-muted-foreground">лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold">500+</p>
                  <p className="text-sm text-muted-foreground">выпускниц</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold">1000+</p>
                  <p className="text-sm text-muted-foreground">довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-2 border-gold/20 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-gold/10 to-pink/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Начни свой путь к успеху</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставь заявку и получи бесплатную консультацию</p>
          
          <Card className="border-2 border-gold/30 shadow-2xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Имя</label>
                  <Input 
                    required
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-gold/30"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input 
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-gold/30"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gold/30"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о своих целях и ожиданиях от курса"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-gold/30 min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-6 text-lg rounded-none transition-all hover:scale-105"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Или свяжитесь с нами напрямую:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="tel:+79999999999" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 999-99-99</span>
              </a>
              <a href="mailto:info@manicure.ru" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Icon name="Mail" size={20} />
                <span>info@manicure.ru</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Хобби, которое приносит доход</h3>
          <p className="text-gray-400 mb-6">Курс по маникюру для начинающих</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-gold transition-colors" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-gold transition-colors" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:text-gold transition-colors" />
          </div>
          <p className="text-sm text-gray-500">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
