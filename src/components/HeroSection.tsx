
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-24 pb-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_50%,#4F46E5_0%,rgba(255,255,255,0)_100%)] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wider text-automation-teal">
                Оптимизируйте ваши рабочие процессы
              </span>
              <span className="mt-1 block text-4xl sm:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-automation-purple via-automation-indigo to-automation-teal">
                Шаблоны автоматизации для современного бизнеса
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Экономьте бесчисленные часы с нашими готовыми шаблонами автоматизации.
              Внедряйте проверенные решения в вашу организацию за минуты, а не месяцы.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-white bg-automation-purple hover:bg-automation-indigo md:py-6 md:text-lg md:px-10">
                  Просмотр шаблонов
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md md:py-6 md:text-lg md:px-10">
                  Как это работает
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="absolute inset-0 flex bg-gradient-to-br from-automation-purple to-automation-teal rounded-lg">
                    <div className="w-full h-full bg-opacity-80 backdrop-filter backdrop-blur-sm p-6">
                      <div className="h-full w-full border-2 border-white border-opacity-20 rounded-md flex items-center justify-center">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-10 mb-4">
                            <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-medium text-white">Смотрите наши шаблоны в действии</h3>
                          <p className="mt-2 text-white text-opacity-80">Узнайте, как наши шаблоны автоматизации могут преобразить ваши рабочие процессы</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
