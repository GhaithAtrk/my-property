import SingleCard from "../SingleCard/page";

function Cards() {

  let propData: any;

  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("propData");
    if (storedData) {
      propData = JSON.parse(storedData);
    } else {
      propData = {};
    }
  }

  return (
    <div className="flex my-4 flex-col md:flex-row flex-wrap gap-4">
      {Object.entries(propData).map(([key, value]) => {
        return <SingleCard key={key} card={value} />;
      })}
    </div>
  );
}

export default Cards;
