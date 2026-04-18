import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const faqs = [
  { q: "Как зарегистрироваться на платформе?", a: "Нажмите «Начать» в верхнем меню, выберите роль (студент или работодатель) и заполните профиль. Регистрация занимает 2-3 минуты и полностью бесплатна." },
  { q: "Сколько стоит использование платформы для студентов?", a: "Для студентов платформа абсолютно бесплатна. Все функции доступны без ограничений: поиск вакансий, отклики, чат с работодателями." },
  { q: "Как подтвердить, что я студент?", a: "При регистрации загрузите студенческий билет или справку из вуза. Верификация занимает до 24 часов в рабочие дни." },
  { q: "Могу ли я откликнуться на несколько вакансий одновременно?", a: "Да, количество откликов не ограничено. Отслеживайте статус всех заявок в разделе «Мои отклики» в дашборде." },
  { q: "Как оставить отзыв о работодателе?", a: "После завершения стажировки или работы зайдите в раздел «Отзывы», найдите компанию и напишите честный отзыв. Анонимность гарантируем." },
  { q: "Что делать, если работодатель нарушает условия?", a: "Сразу напишите в поддержку через этот раздел. Мы оперативно рассмотрим жалобу и при необходимости заблокируем работодателя." },
];

export default function SupportPage({ navigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="animate-fade-in container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Помощь</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">ПОДДЕРЖКА</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Ответим в течение 2 часов в рабочее время
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {[
          { icon: "MessageCircle", title: "Чат", desc: "Мгновенная помощь в рабочее время", sub: "Пн-Пт 9:00–20:00" },
          { icon: "Mail", title: "Email", desc: "support@studrabota.ru", sub: "Ответ в течение 24ч" },
          { icon: "Send", title: "Telegram", desc: "@studrabota_support", sub: "Сообщество и помощь" },
        ].map(c => (
          <div key={c.title} className="card-hover p-6 rounded-xl bg-card border border-border flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name={c.icon as "Mail"} size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-primary">{c.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="HelpCircle" size={22} className="text-primary" />
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-muted-foreground flex-shrink-0 ml-2"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Send" size={22} className="text-primary" />
            Написать в поддержку
          </h2>

          {sent ? (
            <div className="p-8 rounded-xl bg-primary/10 border border-primary/30 text-center animate-fade-in-up">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Сообщение отправлено!</h3>
              <p className="text-sm text-muted-foreground mb-6">Мы ответим на вашу почту в течение 2 часов</p>
              <button
                onClick={() => setSent(false)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold"
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Имя</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Алексей Козлов"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.ru"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Тема</label>
                <select
                  value={form.topic}
                  onChange={e => setForm({...form, topic: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                >
                  <option value="">Выберите тему</option>
                  <option>Проблема с аккаунтом</option>
                  <option>Вопрос по вакансии</option>
                  <option>Жалоба на работодателя</option>
                  <option>Предложение</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Сообщение</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Опишите вашу проблему или вопрос..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={18} />
                Отправить сообщение
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
