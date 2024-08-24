// src/app/api/example.ts

import { sqlRequst } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { WorkInfo, WorkInfoDB, WorkInfoNew } from "@/types/WorkInfo";

const listFiles = (dirPath: string) => {
  const files: string[] = [];
  const paths = fs.readdirSync(dirPath);

  for (let name of paths) {
    try {
      const path = `${dirPath}/${name}`;
      const stat = fs.statSync(path);

      switch (true) {
        case stat.isFile():
          files.push(path);
          break;

        case stat.isDirectory():
          files.push(...listFiles(path));
          break;

        default:
      }
    } catch (err) {
      console.error("error:", err);
    }
  }

  return files;
};

export async function GET(req: Request) {
  {
    const result = await sqlRequst("SELECT * FROM works_tag;");
    if (!result) return NextResponse.json({ error: "Database error" });
    else {
      const tagsDB = result.rows;
    }
  }
  {
    const result = await sqlRequst("SELECT * FROM works;");
    if (!result) return NextResponse.json({ error: "Database error" });
    else {
      const worksDB = result.rows as WorkInfoDB[];
      // let worksDB = result.rows as WorkInfoDB[];
      // worksDB.push({
      //   id: "1bad6b8cf97131fc",
      //   title: "hoge",
      //   thumbnail: "/works/1bad6b8cf97131fc/tuba.png",
      //   tags: 0,
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // });
      const works: WorkInfo[] = worksDB.map((workDB) => {
        return {
          id: workDB.id,
          title: workDB.title,
          thumbnail: workDB.thumbnail,
          assets: listFiles(`./public/works/${workDB.id}/assets`),
          tags: ["game"],
          detail: "",
          created_at: workDB.created_at,
          updated_at: workDB.updated_at,
        } as WorkInfo;
      });

      return NextResponse.json(works);
    }
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const workInfoNew: WorkInfoNew = body.work;
  console.log(workInfoNew);
}
