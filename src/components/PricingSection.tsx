
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    description: "Идеально для частных лиц и небольших команд",
    price: "3 990",
    billing: "за шаблон",
    features: [
      "Загрузка одного шаблона",
      "60 дней доступа к обновлениям",
      "Базовая поддержка по email",
      "Включенная документация",
      "Использование в 1 проекте"
    ],
    cta: "Купить шаблон",
    featured: false
  },
  {
    name: "Профессиональный",
    description: "Идеально для растущего бизнеса",
    price: "14 990",
    billing: "в месяц",
    features: [
      "Доступ ко всем шаблонам",
      "Неограниченные обновления",
      "Приоритетная поддержка по email",
      "Видеоруководства по внедрению",
      "Использование в неограниченных проектах",
      "Ежемесячные новые шаблоны"
    ],
    cta: "Начать 14-дневную пробную версию",
    featured: true
  },
  {
    name: "Корпоративный",
    description: "Для крупных организаций",
    price: "39 990",
    billing: "в месяц",
    features: [
      "Все возможности Профессионального тарифа",
      "Запросы на пользовательские шаблоны",
      "Выделенный менеджер поддержки",
      "Помощь во внедрении",
      "Обучающие сессии для команды",
      "Индивидуальные интеграции"
    ],
    cta: "Связаться с отделом продаж",
    featured: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Цены
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Выберите свой план
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Простые и прозрачные цены, которые масштабируются вместе с вашими потребностями
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col h-full ${
                plan.featured 
                  ? "border-automation-purple shadow-xl shadow-automation-purple/10 relative z-10 scale-105" 
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 translate-y-[-50%] left-0 right-0 mx-auto w-fit">
                  <div className="bg-automation-purple text-white text-sm font-bold px-4 py-1 rounded-full">
                    Самый популярный
                  </div>
                </div>
              )}
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 mt-2">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price} ₽</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">{plan.billing}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-automation-purple flex-shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full py-6 ${
                    plan.featured 
                      ? "bg-automation-purple hover:bg-automation-indigo"
                      : "bg-white border-2 border-automation-purple text-automation-purple hover:bg-automation-purple hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Нужно индивидуальное решение? <a href="#" className="text-automation-purple font-medium">Свяжитесь с нами</a> чтобы обсудить ваши конкретные требования.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
