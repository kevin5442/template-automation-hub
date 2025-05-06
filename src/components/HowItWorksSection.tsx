
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Выбор шаблона",
    description: "Изучите нашу библиотеку шаблонов автоматизации, разделенных по отделам, функциям и платформам.",
    image: "bg-gradient-to-br from-automation-purple to-automation-indigo"
  },
  {
    number: "02",
    title: "Покупка и загрузка",
    description: "Выберите шаблон, который соответствует вашим потребностям, и завершите покупку для немедленного доступа.",
    image: "bg-gradient-to-br from-automation-teal to-cyan-500"
  },
  {
    number: "03",
    title: "Настройка и внедрение",
    description: "Следуйте нашему пошаговому руководству для настройки шаблона под ваши конкретные требования.",
    image: "bg-gradient-to-br from-violet-600 to-automation-purple"
  },
  {
    number: "04",
    title: "Автоматизация и масштабирование",
    description: "Разверните автоматизацию, экономьте время и эффективно масштабируйте бизнес-процессы.",
    image: "bg-gradient-to-br from-blue-600 to-automation-teal"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Простой процесс
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Как это работает
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Начните использовать шаблоны автоматизации всего за четыре простых шага
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.image} h-24 w-24 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group`}>
                  <div className="absolute inset-0 opacity-20 bg-white mix-blend-overlay"></div>
                  <div className="absolute inset-0 border-4 border-white border-opacity-30 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
