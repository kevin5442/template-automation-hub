
import { CheckCircle } from "lucide-react";

const features = [
  {
    name: "Готовые к внедрению шаблоны",
    description: "Наши шаблоны полностью протестированы и готовы к внедрению в ваши существующие системы с минимальной настройкой."
  },
  {
    name: "Интеграция с популярными инструментами",
    description: "Работает без проблем с инструментами, которые вы уже используете: Zapier, Make, Airtable, Notion и другими."
  },
  {
    name: "Гибкая настройка",
    description: "Все шаблоны легко настраиваются под ваши конкретные бизнес-требования и процессы."
  },
  {
    name: "Регулярные обновления",
    description: "Все шаблоны регулярно обновляются для обеспечения совместимости с последними изменениями платформ."
  },
  {
    name: "Проверены сообществом",
    description: "Наши шаблоны созданы экспертами и проверены нашим сообществом профессионалов в области автоматизации."
  },
  {
    name: "Поддержка внедрения",
    description: "Получите экспертную помощь по внедрению и настройке ваших шаблонов, когда она вам понадобится."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-automation-purple font-semibold tracking-wide uppercase">Возможности</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Всё необходимое для быстрой автоматизации
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Наши шаблоны автоматизации разработаны, чтобы помочь вам внедрять проверенные решения быстро и эффективно.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-automation-purple" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
