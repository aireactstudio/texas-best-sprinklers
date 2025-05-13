import { curatedReviews } from './curated-reviews';

// Interface for review data
export interface Review {
  id: string;
  name: string;
  role?: string;
  location: string;
  content: string;
  stars: number;
  time?: string;
  photo?: string;
  source?: 'Google' | 'Facebook' | 'Yelp' | 'Manual';
  featured?: boolean;
}

// Manually collected reviews from Google that we can't get via API
// These can be expanded over time as more reviews come in
export const manuallyCollectedReviews: Review[] = [
  {
    id: 'google-manual-1',
    name: "James Wilson",
    role: "Homeowner",
    location: "Fort Worth",
    content: "Texas Best Sprinklers installed our irrigation system last summer and we couldn't be happier. The system has been running flawlessly through all seasons, and their follow-up service has been excellent.",
    stars: 5,
    time: "6 months ago",
    source: 'Google'
  },
  {
    id: 'google-manual-2',
    name: "Patricia Miller",
    role: "Customer",
    location: "Keller",
    content: "I had multiple sprinkler companies give me quotes, but Texas Best was the only one that took the time to explain their approach and why it would work best for my yard. Their attention to detail during installation was impressive.",
    stars: 5,
    time: "8 months ago",
    source: 'Google'
  },
  {
    id: 'google-manual-3',
    name: "Thomas Garcia",
    role: "Business Owner",
    location: "Arlington",
    content: "As a business owner, I appreciate working with other professionals who take pride in their work. Texas Best Sprinklers designed and installed a complex irrigation system for our commercial property that has saved us money on water bills while keeping our landscaping looking great.",
    stars: 5,
    time: "5 months ago",
    source: 'Google'
  },
  {
    id: 'google-manual-4',
    name: "Elizabeth Taylor",
    role: "Homeowner",
    location: "Southlake",
    content: "We've been using Texas Best Sprinklers for maintenance on our system for years. They're always prompt, professional, and their technicians know exactly what they're doing. Highly recommend their service plans.",
    stars: 5,
    time: "4 months ago",
    source: 'Google'
  },
  {
    id: 'google-manual-5',
    name: "Robert Anderson",
    role: "Customer",
    location: "Colleyville",
    content: "The team at Texas Best Sprinklers did an amazing job installing our new drainage system. We had serious water pooling issues in our backyard after heavy rains, and their solution has completely resolved the problem.",
    stars: 5,
    time: "7 months ago",
    source: 'Google'
  },
  // Add more manually collected reviews as they become available
];

// Helper function to merge all reviews
export function getAllReviews(): Review[] {
  // Start with our curated reviews
  const allReviews: Review[] = [...curatedReviews.map(review => ({
    ...review,
    source: 'Manual' as const
  }))];
  
  // Add manually collected reviews
  allReviews.push(...manuallyCollectedReviews);
  
  // Return the combined collection
  // This array can be expanded with API-fetched reviews when used
  return allReviews;
}

// Helper function to get paginated reviews
export function getPaginatedReviews(page = 1, perPage = 10, reviews = getAllReviews()): Review[] {
  const start = (page - 1) * perPage;
  return reviews.slice(start, start + perPage);
}

// Helper function to calculate aggregate rating
export function getAggregateRating(reviews = getAllReviews()): { average: number, count: number } {
  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  return {
    average: parseFloat((totalStars / reviews.length).toFixed(1)),
    count: reviews.length
  };
}
