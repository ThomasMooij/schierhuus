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
  runtime: 'experimental-edge',
};

export async function GET(req: NextRequest) {
  const apiKey = process.env.API_ID;
  const placeId = process.env.PLACE_ID; 

  console.log("keys:" , placeId, apiKey)

  try {
    
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch Google reviews');
    }
    const data: GoogleApiResponse = await response.json();

    return new NextResponse(JSON.stringify(data.result.reviews), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch reviews' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
