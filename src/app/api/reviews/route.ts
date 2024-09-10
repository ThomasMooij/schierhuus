import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

interface GoogleApiResponse {
  result: {
    reviews: Review[];
  };
}

export const config = {
  runtime: 'edge',
};

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_API_ID;
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('API key or Place ID is missing');
    return new NextResponse(JSON.stringify({ error: 'Missing API key or Place ID' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch Google reviews: ${errorText}`);
      throw new Error('Failed to fetch Google reviews');
    }
    const data: GoogleApiResponse = await response.json();

    console.log(data)

    return new NextResponse(JSON.stringify(data.result.reviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch reviews' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
