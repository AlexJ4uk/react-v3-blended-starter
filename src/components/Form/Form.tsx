import toast from "react-hot-toast";
import style from "./Form.module.css";
import { FiSearch } from "react-icons/fi";

interface FormProps {
  onSubmit: (search: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = (formData: FormData) => {
    const search = formData.get("search") as string;
    if (search === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(search);
  }
  return (
    <form
      action={handleSubmit}
      className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus />
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
</form>
  )
}