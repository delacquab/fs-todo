"use client";
import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { todoType } from "@/types/todoType";
import { BsFillTabletFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="inputId" type="hidden" value={todo.id} />
      <Button actionButton type="submit" text={<BsFillTabletFill />} />
    </Form>
  );
};

export default DeleteTodo;
