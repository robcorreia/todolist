import { ITask } from "../../App";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styles from "./task.module.css";

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
