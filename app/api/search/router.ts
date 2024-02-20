import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const url = new URL(request.url);
    const title = url.searchParams.get('title');
    const author = url.searchParams.get('author');


    if (!title || !author) {
        return new Response("Both title and author parameters are required.", { status: 400 });
    }

    const listings = await prisma.listing.findMany({
        where: {
            title: {
                contains: title 
            },
            author: {
                contains: author 
            }
        }
    });

    return NextResponse.json(listings);
}
