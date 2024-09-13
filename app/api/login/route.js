import { NextResponse } from "next/server"

export async function POST(req) {

    const data = await req.json()

    if(data){
        console.log('dataRecieved',data)
        return new NextResponse("DataRecived",{status:200})
    }
}