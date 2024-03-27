import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userid } = req.query;


    if (!userid || typeof userid !== 'string') {
      throw new Error('Invalid ID');
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userid
      }
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userid
        }
      }
    })

    return res.status(200).json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};