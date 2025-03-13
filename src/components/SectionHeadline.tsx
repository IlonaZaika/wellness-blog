interface SectionHeadlineProps {
  title: string;
  subTitle: string;
}

function SectionHeadline({ title, subTitle }: SectionHeadlineProps) {
  return (
    <div>
      <h3 className="font-inter font-light uppercase text-textGrey my-4 text-xs text-center md:text-left md:text-sm lg:text-base">
        {subTitle}
      </h3>
      <h2 className="font-heading text-3xl mt-4 mb-10 text-textGreen text-center md:text-left md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeadline;
