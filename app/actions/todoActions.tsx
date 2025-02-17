"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) return;

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) return;

  const updateStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updateStatus,
    },
  });

  revalidatePath("/");

  return updateStatus;
}

export async function edit(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const input = formData.get("newTitle") as string;

  if (!input.trim()) return;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}
