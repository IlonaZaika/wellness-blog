import { SymptomCardProps } from "@/types/cardTypes";

function SymptomCard({ symptomName }: SymptomCardProps) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-inter text-textGreen text-sm md:text-base text-center md:text-left">
          {symptomName}
        </h4>
      </div>
    </>
  );
}

export default SymptomCard;
