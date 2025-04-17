import { Request, Response } from "express";
import { prisma } from "../client.js";

export async function education_entry_create(req: Request, res: Response) {
  // send json array
  const data = req.body;
  const user_id = req.id;

  await prisma.education.createMany({
    data: data.map((d: any) => ({ ...d, user_id })),
  });

  res.json({ success: true });
}

export async function Update_Summery(req: Request, res: Response) {
  const { data, id } = req.body;
  const user_id = req.id as string;

  await prisma.basicDetails.upsert({
    where: {
      id,
    },
    create: {
      prof_summery: data.summary,
      address: "",
      email: "",
      firstName: "",
      job_title: "",
      lastName: "",
      phone: "",
      user_id,
    },
    update: {
      prof_summery: data.summary,
    },
  });

  res.json({ success: true });
}

export async function personal_details_CU(req: Request, res: Response) {
  const { jobTitle, address, phone, email, firstName, lastName, id } = req.body;
  const user_id = req.params.user_id as string;

  await prisma.basicDetails.upsert({
    where: {
      id,
    },
    create: {
      job_title: jobTitle,
      address,
      phone,
      email,
      firstName,
      lastName,
      user_id,
    },
    update: {
      job_title: jobTitle,
      address,
      phone,
      email,
      firstName,
      lastName,
    },
  });

  res.json({ success: true });
}

export async function Exp_Add(req: Request, res: Response) {
  const { data, BasicDetails_id } = req.body;

  await prisma.profession.createMany({
    data: data.map((d: any) => ({ ...d, BasicDetails_id })),
  });

  res.json({ success: true });
}

export async function Exp_Update(req: Request, res: Response) {
  const { data, BasicDetails_id } = req.body;

  await prisma.profession.updateMany({
    where: {
      BasicDetails_id,
    },
    data: data.map((d: any) => ({ ...d, BasicDetails_id })),
  });

  res.json({ success: true });
}

export async function FetchAllId(req: Request, res: Response) {
  const user_id = req.id;

  const data = await prisma.basicDetails.findMany({
    where: {
      user_id,
    },
    select: {
      id: true,
    },
  });

  res.json(data);
}

export async function FetchOneResumeData(req: Request, res: Response) {
  const { id } = req.params;

  const data = await prisma.basicDetails.findFirst({
    where: {
      id,
    },
    include: {
      education: true,
      profession: true,
    },
  });

  res.json(data);
}

// i will send all basicdetails id to frontend
