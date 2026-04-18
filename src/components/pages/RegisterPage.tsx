import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

type Role = "student" | "employer";
type Step = 1 | 2 | 3;

export default function RegisterPage({ navigate }: Props) {
  const [role, setRole] = useState<Role>("student");
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    name: "", email: "", password: "",
    university: "", specialty: "", year: "",
    company: "", inn: "", position: "",
  });

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as Step);
    else navigate("dashboard");
  };

  return (
    <div className="animate-fade-in min-h-[80vh] flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="GraduationCap" size={22} className="text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              {step === 3 ? "ПОЧТИ ГОТОВО!" : "РЕГИСТРАЦИЯ"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {step === 1 && "Выберите роль и заполните данные"}
              {step === 2 && (role === "student" ? "Данные об образовании" : "Данные о компании")}
              {step === 3 && "Подтвердите данные и создайте аккаунт"}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`h-2 rounded-full flex-1 transition-all ${s <= step ? "bg-primary" : "bg-secondary"}`} />
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setRole("student")}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      role === "student" ? "border-primary bg-primary/10" : "border-border hover:border-border/80"
                    }`}
                  >
                    <div className="text-2xl mb-2">🎓</div>
                    <p className="font-display font-semibold text-foreground text-sm">Студент</p>
                    <p className="text-xs text-muted-foreground mt-1">Ищу работу</p>
                  </button>
                  <button
                    onClick={() => setRole("employer")}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      role === "employer" ? "border-primary bg-primary/10" : "border-border hover:border-border/80"
                    }`}
                  >
                    <div className="text-2xl mb-2">🏢</div>
                    <p className="font-display font-semibold text-foreground text-sm">Работодатель</p>
                    <p className="text-xs text-muted-foreground mt-1">Ищу сотрудника</p>
                  </button>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                    {role === "student" ? "Имя и фамилия" : "Имя контактного лица"}
                  </label>
                  <input
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder={role === "student" ? "Алексей Козлов" : "Анна Иванова"}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.ru"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Пароль</label>
                  <input
                    value={form.password}
                    onChange={e => setForm({...form, password: e.target.value})}
                    placeholder="Минимум 8 символов"
                    type="password"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
              </div>
            )}

            {step === 2 && role === "student" && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Университет</label>
                  <input
                    value={form.university}
                    onChange={e => setForm({...form, university: e.target.value})}
                    placeholder="МГУ им. М.В. Ломоносова"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Специальность</label>
                  <input
                    value={form.specialty}
                    onChange={e => setForm({...form, specialty: e.target.value})}
                    placeholder="Прикладная математика и информатика"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Курс</label>
                  <select
                    value={form.year}
                    onChange={e => setForm({...form, year: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  >
                    <option value="">Выберите курс</option>
                    {["1 курс", "2 курс", "3 курс", "4 курс", "5 курс (специалитет)", "Магистратура 1 год", "Магистратура 2 год"].map(y => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 2 && role === "employer" && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Название компании</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({...form, company: e.target.value})}
                    placeholder="ООО «Пример»"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">ИНН компании</label>
                  <input
                    value={form.inn}
                    onChange={e => setForm({...form, inn: e.target.value})}
                    placeholder="7712345678"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Должность</label>
                  <input
                    value={form.position}
                    onChange={e => setForm({...form, position: e.target.value})}
                    placeholder="HR-менеджер"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in text-center space-y-6">
                <div className="text-6xl">🎉</div>
                <div>
                  <p className="text-foreground font-semibold">{form.name || "Новый пользователь"}</p>
                  <p className="text-sm text-muted-foreground">{form.email || "email@example.ru"}</p>
                  <p className="text-xs text-primary mt-1">{role === "student" ? "Студент · " + (form.university || "Университет") : "Работодатель · " + (form.company || "Компания")}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Нажимая «Создать аккаунт», вы соглашаетесь с условиями использования и политикой конфиденциальности платформы.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              {step > 1 && (
                <button
                  onClick={() => setStep((step - 1) as Step)}
                  className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors border border-border text-sm"
                >
                  Назад
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex-1 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm"
              >
                {step === 3 ? (
                  <>
                    <Icon name="Rocket" size={16} />
                    Создать аккаунт
                  </>
                ) : (
                  <>
                    Продолжить
                    <Icon name="ArrowRight" size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Уже есть аккаунт?{" "}
            <button onClick={() => navigate("dashboard")} className="text-primary hover:text-primary/80 font-medium">
              Войти
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
