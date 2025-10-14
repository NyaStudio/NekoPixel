import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://status.nekopixel.cn/api/status-page/heartbeat/nekopixel', {
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`)
    }

    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching status:', error)
    return NextResponse.json(
      { error: 'Failed to fetch status' },
      { status: 500 }
    )
  }
}
