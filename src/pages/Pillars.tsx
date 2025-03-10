import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PillarCard from "../components/PillarCard";

const Pillars = () => {
  const pillars = useSelector((state: RootState) => state.pillars);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Pillars</h2>
      <div className="grid grid-cols-3 gap-4">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.id} name={pillar.name} color={pillar.color} icon={pillar.icon} />
        ))}
      </div>
    </div>
  );
};

export default Pillars;
