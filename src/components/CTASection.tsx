
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-automation-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Готовы начать автоматизацию?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Присоединяйтесь к тысячам предприятий, которые экономят время и деньги с нашими шаблонами автоматизации. Начните сегодня и трансформируйте работу вашего бизнеса.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-automation-blue hover:bg-gray-100">
                Просмотреть шаблоны
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-automation-blue">
                Запланировать демонстрацию
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-5 rounded-lg p-8 backdrop-filter backdrop-blur-sm border border-white border-opacity-10">
              <div className="text-center">
                <h3 className="text-xl font-medium text-white mb-2">Подпишитесь на нашу рассылку</h3>
                <p className="text-gray-300">Получайте последние шаблоны и советы по автоматизации на вашу почту</p>
                <form className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Введите ваш email"
                      className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-automation-purple"
                      required
                    />
                    <Button type="submit" className="bg-automation-purple hover:bg-automation-indigo text-white sm:flex-shrink-0">
                      Подписаться
                    </Button>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
