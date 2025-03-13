interface SectionHeadlineProps {
  title: string;
  subTitle: string;
}

function SectionHeadline({ title, subTitle }: SectionHeadlineProps) {
  return (
    <div>
      <h3 className="font-inter font-light uppercase text-textGrey my-4 text-sm md:text-base lg:text-lg">
        {subTitle}
      </h3>
      <h2 className="font-heading text-3xl my-6 md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeadline;
