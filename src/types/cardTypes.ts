export interface CardProps {
  id: string;
}

export interface ReviewCardProps extends CardProps {
  stars: number;
  text: string;
  date: string;
  company: string;
}

export interface QualificationCardProps extends CardProps {
  index: number;
  imageSrc: string;
  imageAlt: string;
  setPreviewImage: (src: string | null) => void;
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
