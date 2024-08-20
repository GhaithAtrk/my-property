import SingleCard from "../SingleCard/page";

function Cards({propData}: any) {

  return (
    <div className="flex my-4 mb-20 flex-col md:flex-row flex-wrap gap-4">
      {Object.entries(propData).map(([key, value]) => {
        return <SingleCard key={key} card={value} />;
      })}
    </div>
  );
}

export default Cards;
