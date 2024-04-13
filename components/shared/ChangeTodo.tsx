import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" type="hidden" value={todo.id} />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default ChangeTodo;
