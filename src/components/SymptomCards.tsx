interface SymptomCardsProps {
  symptoms: string[];
}

function SymptomCards({ symptoms }: SymptomCardsProps) {
  console.log(symptoms);
  return (
    <>
      {symptoms.map((symptom, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-inter text-textGreen text-sm md:text-base text-center md:text-left">
            {symptom}
          </h4>
        </div>
      ))}
    </>
  );
}

export default SymptomCards;
