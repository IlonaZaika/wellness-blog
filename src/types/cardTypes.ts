export interface CardProps {
  id: string;
  imageUrl?: string;
  imageAlt?: string;
  setPreviewImage?: (src: string | null) => void;
}

export interface ReviewCardProps extends CardProps {
  stars: number;
  text: string;
  date: string;
  company: string;
}

export interface QualificationCardProps extends CardProps {
  imageUrl: string;
  imageAlt: string;
}

export interface OfferItemCardProps extends CardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

export interface SymptomCardProps extends CardProps {
  symptomName: string;
}

export interface ServiceCardProps extends CardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  duration: string;
  price: number;
  bookingUrl: string;
  callToAction: string;
}
