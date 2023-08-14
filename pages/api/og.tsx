import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const author = searchParams.get('author')
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const image = searchParams.get('image')
  let date = searchParams.get('date') || new Date()
  date = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const type = searchParams.get('type') || 'blog'

  return new ImageResponse(
    (
      <div tw="bg-gray-100 flex w-full justify-center items-center h-screen">
        <div tw="max-w-sm rounded-lg overflow-hidden shadow-md bg-white flex">
          <div tw="flex flex-col p-4">
              <span tw="text-gray-500 text-xs">{date}</span>
              <h2 tw="text-lg font-semibold mb-1 mt-0">{title}</h2>
              <p tw="text-gray-600 text-sm mb-4">{description}</p>
              <div tw="flex justify-between items-center">
                  <span tw="text-gray-700 text-xs font-medium">{author}</span>
                  { image && <img src={image} tw="rounded-full" height="30" width="30"/> }
              </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
