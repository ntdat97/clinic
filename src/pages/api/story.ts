// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

type Data = {
  storyMd: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(process.cwd(), 'public', 'story.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  res.status(200).json({ storyMd: fileContents  })
}
