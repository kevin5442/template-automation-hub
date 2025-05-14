
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    id: 1,
    title: "Автоматизация адаптации клиентов",
    description: "Оптимизируйте процесс адаптации клиентов с автоматизированными email-последовательностями, сбором документов и назначением задач.",
    category: "Клиентский сервис",
    popularity: "Бестселлер",
    price: "7 990 ₽",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=250"
  },
  {
    id: 2,
    title: "Обработка счетов и платежей",
    description: "Автоматизируйте утверждение счетов, отслеживание платежей и синхронизацию с бухгалтерскими системами.",
    category: "Финансы",
    popularity: "Новинка",
    price: "9 990 ₽",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=250"
  },
  {
    id: 3,
    title: "Адаптация новых сотрудников",
    description: "Автоматизируйте распространение документов, назначение обучения и предоставление доступа для новых сотрудников.",
    category: "HR",
    popularity: "Популярное",
    price: "11 990 ₽",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=250"
  }
];

const FeaturedTemplates = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">Библиотека шаблонов</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Популярные шаблоны автоматизации
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Готовые рабочие процессы, которые экономят ваше время и устраняют рутинные задачи
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="h-40 relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{template.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">{template.category}</CardDescription>
                  </div>
                  <Badge className={template.popularity === "Бестселлер" ? "bg-automation-purple" : 
                                   template.popularity === "Новинка" ? "bg-automation-teal" : 
                                   "bg-automation-indigo"}>
                    {template.popularity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{template.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                <div className="font-bold text-lg">{template.price}</div>
                <Button size="sm" className="bg-automation-purple hover:bg-automation-indigo">
                  Предпросмотр
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-automation-purple hover:bg-automation-indigo">
            Посмотреть все шаблоны
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
