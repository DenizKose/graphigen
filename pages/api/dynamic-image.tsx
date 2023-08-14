import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const username = searchParams.get('username')
  if (!username) {
    return new ImageResponse(<>{'Visit with "?username=vercel"'}</>, {
      width: 1200,
      height: 630,
    })
  }

  return new ImageResponse(
    (
      <div tw="bg-gray-100 flex w-full justify-center items-center h-screen">
        <div tw="max-w-sm rounded-lg overflow-hidden shadow-md bg-white flex">
          <div tw="flex flex-col p-4">
              <span tw="text-gray-500 text-xs">August 14, 2023</span>
              <h2 tw="text-lg font-semibold mb-1 mt-0">Introducing Line Range Filtering in Rails 7.1 Testing</h2>
              <p tw="text-gray-600 text-sm mb-4">Rails 7.1 introduces line range filtering for running specific tests within a test file based on line numbers.</p>
              <div tw="flex justify-between items-center">
                  <span tw="text-gray-700 text-xs font-medium">Akhil G Krishnan</span>
                  <img src="https://avatars.githubusercontent.com/u/47183150?v=4g" tw="rounded-full" height="30" width="30"/>
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
