interface PillarCardProps {
    name: string;
    color: string;
    icon?: string;
  }
  
  const PillarCard = ({ name, color, icon }: PillarCardProps) => (
    <div className={`p-4 shadow-md rounded-lg`} style={{ backgroundColor: color }}>
      {icon && <img src={icon} alt={`${name} icon`} className="w-10 h-10 mb-2" />}
      <h3 className="text-white font-bold">{name}</h3>
    </div>
  );
  
  export default PillarCard;
  