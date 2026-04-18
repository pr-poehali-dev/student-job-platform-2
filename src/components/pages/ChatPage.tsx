import { useState } from "react";
import { type Page } from "@/pages/Index";
import Icon from "@/components/ui/icon";

interface Props { navigate: (page: Page) => void; }

const contacts = [
  { id: 1, name: "Яндекс HR", role: "Рекрутер", last: "Когда удобно пройти интервью?", time: "14:32", unread: 2, online: true, avatar: "Я" },
  { id: 2, name: "VK Team", role: "Нанимающий менеджер", last: "Посмотрели ваше портфолио...", time: "вчера", unread: 0, online: false, avatar: "V" },
  { id: 3, name: "Тинькофф", role: "Рекрутер", last: "Спасибо за отклик!", time: "вчера", unread: 0, online: true, avatar: "Т" },
  { id: 4, name: "Сбер Карьера", role: "HR-менеджер", last: "Ваша заявка рассматривается", time: "2 дня", unread: 0, online: false, avatar: "С" },
];

const messages = [
  { id: 1, from: "them", text: "Добрый день! Меня зовут Анна, я рекрутер в Яндексе. Мы рассмотрели ваш отклик на позицию Junior Frontend разработчика.", time: "14:15" },
  { id: 2, from: "them", text: "Ваше резюме нам очень понравилось! Хотели бы пригласить вас на техническое интервью.", time: "14:16" },
  { id: 3, from: "me", text: "Добрый день, Анна! Очень рад слышать, спасибо большое!", time: "14:20" },
  { id: 4, from: "me", text: "Конечно, был бы рад пройти интервью. Когда удобно?", time: "14:21" },
  { id: 5, from: "them", text: "Когда удобно пройти интервью? У нас есть слоты на следующей неделе: вторник 15:00 или четверг 11:00.", time: "14:32" },
];

export default function ChatPage({ navigate }: Props) {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [inputText, setInputText] = useState("");
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="animate-fade-in h-[calc(100vh-64px)] flex">
      <div className={`
        w-full md:w-80 lg:w-96 border-r border-border bg-card flex-shrink-0 flex flex-col
        ${showContacts ? "flex" : "hidden md:flex"}
      `}>
        <div className="p-4 border-b border-border">
          <p className="font-display text-lg font-bold text-foreground mb-3">Сообщения</p>
          <div className="relative">
            <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Поиск..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map(c => (
            <button
              key={c.id}
              onClick={() => { setActiveContact(c); setShowContacts(false); }}
              className={`w-full flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors border-b border-border/50 text-left ${
                activeContact.id === c.id ? "bg-secondary/80" : ""
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                  {c.avatar}
                </div>
                {c.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <span className="text-xs text-muted-foreground">{c.time}</span>
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-xs text-muted-foreground truncate">{c.last}</p>
                  {c.unread > 0 && (
                    <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium flex-shrink-0">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`flex-1 flex flex-col min-w-0 ${!showContacts ? "flex" : "hidden md:flex"}`}>
        <div className="p-4 border-b border-border bg-card flex items-center gap-3">
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowContacts(true)}
          >
            <Icon name="ArrowLeft" size={18} />
          </button>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
              {activeContact.avatar}
            </div>
            {activeContact.online && (
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-card" />
            )}
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{activeContact.name}</p>
            <p className="text-xs text-muted-foreground">{activeContact.role} · {activeContact.online ? "онлайн" : "был(а) вчера"}</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Phone" size={16} />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="MoreVertical" size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-sm lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.from === "me"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-card border border-border text-foreground rounded-bl-sm"
              }`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-start">
            <div className="flex gap-1.5 p-3 rounded-2xl bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce delay-100" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce delay-200" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-3 items-end">
            <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
              <Icon name="Paperclip" size={18} />
            </button>
            <div className="flex-1 relative">
              <input
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Написать сообщение..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                onKeyDown={e => e.key === "Enter" && setInputText("")}
              />
            </div>
            <button
              className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex-shrink-0"
              onClick={() => setInputText("")}
            >
              <Icon name="Send" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
