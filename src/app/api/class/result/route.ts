import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

// ローカルファイルのパスを定義
const logFilePath = join(process.cwd(), './public/logs.html');

export async function POST(request: NextRequest) {
  try {
    // リクエストのbodyを取得
    const body = await request.text();

    // bodyの内容をlogs.txtに追記
    let html = `<div style=\"border: 1px solid black; padding: 10px; margin: 10px;\">${new Date().toISOString()}<br>${body.replaceAll('\n', '<br>')}</div>`
    await fs.appendFile(logFilePath, html + '\n');

    await fetch(process.env.DISCORD_WEBHOOK_EXPERIMENT_URL || '', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: body
      })
    });
    
    return NextResponse.json({ message: 'Log saved successfully' });
  } catch (error) {
    console.error('Error saving log:', error);
    return NextResponse.json({ error: 'Failed to save log' }, { status: 500 });
  }
}
