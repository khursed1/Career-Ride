import { Request, Response } from "express";
import { prisma } from "../client.js";

export async function education_entry(req: Request, res: Response) {
  // send json array
  const data = req.body;
  const user_id = req.id;

  await prisma.education.createMany({
    data: data.map((d: any) => ({ ...d, user_id })),
  });

  res.json({ success: true });
}

export async function Update_Summery(req: Request, res: Response) {
  const data = req.body;
  const id = req.id;

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      prof_summery: data,
    },
  });

  res.json({ success: true });
}

export async function personal_details(req: Request, res: Response) {
  const { jobTitle, address, phone, email, firstName, lastName } = req.body;
  const id = req.id;

  const name = firstName + " " + lastName;

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      job_title: jobTitle,
      address,
      phone,
      email,
      name,
    },
  });

  res.json({ success: true });
}

export async function ExpAdd(req: Request, res: Response) {
  const data = req.body;
  const user_id = req.id;

  await prisma.profession.createMany({
    data: data.map((d: any) => ({ ...d, user_id })),
  });

  res.json({ success: true });
}
