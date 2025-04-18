"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function loginStudent({ email, password }: { email: string; password: string}) {
  const student = await prisma.student.findUnique({
    where: { email },
  });

  if (!student) throw new Error("Invalid Email or Password.");

  const isPasswordCorrect = await bcrypt.compare(password, student.password);
  
  if (!isPasswordCorrect) throw new Error("Invalid email or password.");
  
  return student;
}

export async function registerStudent(formData: FormData) {
  const password = formData.get("password") as string;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  await prisma.student.create({
    data: {
      firstName: (formData.get("firstName") as string).toLowerCase(),   
      lastName: (formData.get("lastName") as string).toLowerCase(),
      email: formData.get("email") as string,  
      password: hashedPassword,
    }
  })
}