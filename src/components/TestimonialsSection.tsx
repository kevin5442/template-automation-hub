
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "Эти шаблоны автоматизации сэкономили нашей команде бесчисленные часы работы. Шаблон адаптации помог нам стандартизировать процесс и повысить удовлетворенность клиентов на 30%.",
    author: "Мария Иванова",
    role: "Менеджер по работе с клиентами",
    company: "ТехКорп",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "Сначала я скептически относился, но эти шаблоны невероятно хорошо спроектированы. Мы внедрили рабочий процесс обработки счетов и сократили время обработки на 70%.",
    author: "Михаил Чен",
    role: "Финансовый директор",
    company: "Глобал Солюшнс",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    content: "Шаблон адаптации сотрудников преобразил то, как мы принимаем новых сотрудников в нашу компанию. То, что раньше занимало дни, теперь происходит автоматически с лучшей согласованностью.",
    author: "Елена Родригез",
    role: "HR-директор",
    company: "Инновейт Партнерс",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-automation-purple uppercase tracking-wide">
            Отзывы
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Нам доверяют бизнесы по всему миру
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Посмотрите, что говорят наши клиенты о наших шаблонах автоматизации
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-automation-purple mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1.646 13.825 2.228 20.354c3.213-4.112 6.359-6.175 9.918-6.617-1.171 3.332-3.643 5.662-7.106 6.768C9.516 28.136 19.073 32 19.073 32c-4.743-7.963-3.86-13.788-.967-18.169 1.896.147 3.739-.341 5.045-1.235-1.252 3.492-4.129 6.007-7.689 6.796C22.285 22.939 26.678 25.605 30 32c6.19-11.824-.877-20.271-4.614-25.033-.667 3.04-2.439 5.904-5.257 7.727 1.59-3.64 1.024-7.598-1.492-10.694C15.467 7.165 12.448 5.469 9.352 4z" />
                  </svg>
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                </div>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 border border-gray-200">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
