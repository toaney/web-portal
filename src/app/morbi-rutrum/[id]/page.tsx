type Props = {
  params: UrlParams;
};

type UrlParams = {
  id: string;
};

const MorbiRutrumA = ({ params }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      Morbi Rutrum - {params.id}
    </div>
  );
};

export default MorbiRutrumA;
