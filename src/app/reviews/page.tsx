import { ReviewsComponent } from '@/components/reviews/ReviewsComponent';

const ReviewsPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Customer Reviews</h1>
          <ReviewsComponent />
      </div>
    </div>
  );
};

export default ReviewsPage;
