import todoLogo from "../../assets/todo-logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onchangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onchangeTitle}
          value={title}
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
