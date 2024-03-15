"use client"
import { useEffect, useState } from "react";
import { MotionDiv } from "../frames/MotionDiv";

interface Review {
    author_name: string;
    rating: number;
    text: string;
  }

export const ReviewsComponent = () => {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await fetch('./api/reviews', { method: 'GET' });
            console.log("response:", response)
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setReviews(data);
          } catch (err: any) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchReviews();
      }, []);


  return (
    <>
        {loading && <div>Loading reviews...</div>}
            {error && <div>Error fetching reviews: {error}</div>}
            <div className="space-y-4">
            {reviews.map((review, index) => (
                <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow"
                    >
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                            key={i}
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            className="w-5 h-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                        </div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                    <p className="mt-4 text-right text-sm font-semibold">{review.author_name}</p>
                </MotionDiv>
            ))}
            </div>
        </>
  )
}
