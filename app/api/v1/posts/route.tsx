import { promises as fs } from 'fs';
import { Post, UnitPost } from '@/app/lib/posts/definitions';
import { NextRequest, NextResponse } from 'next/server';
import { createPost } from '@/app/lib/posts/data';


const path = process.cwd() + '/app/lib/posts/posts.json';

export async function GET() {
    const data = await fs.readFile(path, 'utf-8');
    const res = JSON.parse(data);

    return NextResponse.json(res)
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body (assuming JSON data)
        const data: Post = await request.json()

        // Perform any logic with the data
        const response: UnitPost[] = await createPost(data);

        await fs.writeFile(path, JSON.stringify(response), 'utf-8');

        // Respond with a JSON object
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error processing POST request", error);
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}
