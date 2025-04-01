import { SymptomCardProps } from "@/types/cardTypes";

function SymptomCard({ symptomName }: SymptomCardProps) {
  return (
    <>
      <div className="bg-bgBase rounded-lg p-4">
        <h4 className="font-inter text-textGreen text-sm md:text-base text-center md:text-left">
          {symptomName}
        </h4>
      </div>
    </>
  );
}

export default SymptomCard;
