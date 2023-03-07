import ExampleCard from "components/example/ExampleCard";
import ListContent from "data/example/ListContent";

type Props = {};

const BottomListContent = (props: Props) => {
  return (
    <div className="grid-cols-4 grid max-w-[100%] w-[1100px] md:grid-cols-1 md:mb-28 md:max-w-[320px] text-center">
      {ListContent.map((item) => (
        <ExampleCard key={item.title} href={item.href} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default BottomListContent;
