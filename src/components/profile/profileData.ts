export const profileData = {
  firstName: "Алексей",
  lastName: "Козлов",
  middleName: "Дмитриевич",
  role: "student" as "student" | "employer",
  photo: "https://cdn.poehali.dev/projects/f95a81f7-0c80-4a83-a109-66d58d5f56f3/files/26467e67-1c2f-4cc3-9e3b-9f3ae03e58d2.jpg",
  birthDate: "12 марта 2003",
  age: 21,
  city: "Москва",
  phone: "+7 (916) 234-56-78",
  email: "a.kozlov@student.msu.ru",
  telegram: "@alex_kozlov",
  about: "Студент 3 курса факультета ВМК МГУ. Увлекаюсь веб-разработкой и машинным обучением. Ищу стажировку или частичную занятость в IT-компании. Открыт к интересным задачам и готов быстро обучаться.",
  education: {
    university: "МГУ им. М.В. Ломоносова",
    faculty: "Факультет вычислительной математики и кибернетики",
    specialty: "Прикладная математика и информатика",
    year: "3 курс",
    period: "2022 – 2026",
    gpa: "4.7 / 5.0",
  },
  skills: [
    { name: "React", level: 80 }, { name: "TypeScript", level: 75 },
    { name: "Python", level: 85 }, { name: "SQL", level: 70 },
    { name: "Git", level: 90 }, { name: "Figma", level: 60 },
    { name: "FastAPI", level: 65 }, { name: "Docker", level: 50 },
  ],
  languages: [
    { lang: "Русский", level: "Родной" },
    { lang: "Английский", level: "B2 Upper-Intermediate" },
  ],
  schedule: {
    days: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    available: ["Вт", "Чт", "Пт", "Сб"],
    hours: "от 4 часов в день",
    type: "Гибкий / Удалённо",
    preferredStart: "После 14:00",
  },
  employment: ["Стажировка", "Частичная занятость", "Удалённо"],
  portfolio: [
    { name: "Task Manager App", tech: "React + FastAPI", url: "#", stars: 12 },
    { name: "ML модель предсказания цен", tech: "Python + sklearn", url: "#", stars: 7 },
  ],
};

export const reviews = [
  { author: "Анна Сергеева", role: "HR-менеджер, Яндекс", rating: 5, date: "март 2024", text: "Алексей прошёл стажировку в нашем отделе. Невероятно быстро разбирается в новых технологиях, всегда выполняет задачи в срок. Особо отмечу высокую самостоятельность и инициативность. Рекомендую!", avatar: "АС" },
  { author: "Михаил Орлов", role: "Tech Lead, VK", rating: 5, date: "янв 2024", text: "Участвовал в нашем хакатоне — занял 2 место. Отличный командный игрок, умеет работать под давлением. Код пишет чистый и структурированный.", avatar: "МО" },
  { author: "Елена Васина", role: "Преподаватель, МГУ", rating: 5, date: "дек 2023", text: "Один из лучших студентов потока. Глубокое понимание алгоритмов, активен на семинарах. Сдал все проекты с оценкой «отлично».", avatar: "ЕВ" },
];

export const applied = [
  { company: "Яндекс", role: "Junior Frontend", status: "Приглашение", date: "12 апр", statusColor: "text-primary bg-primary/10" },
  { company: "VK", role: "UI/UX дизайнер", status: "На рассмотрении", date: "10 апр", statusColor: "text-yellow-400 bg-yellow-400/10" },
  { company: "Сбер", role: "Аналитик данных", status: "Отказ", date: "8 апр", statusColor: "text-red-400 bg-red-400/10" },
];

export const allDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
