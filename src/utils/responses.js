import { NextResponse } from "next/server"

export const Response = (message, status, success, error, ...data) => new NextResponse(JSON.stringify({ message, success, status, error: error?.message || false, ...data }))
