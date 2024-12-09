interface InfoListProps {
    items: { label: string; value: string }[];
  };

const InfoList = ({ items} : InfoListProps) => {
  return (
    <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
      {items.map((item, index) => (
        <div key={index} className="d-flex justify-content-between">
          <div>{item.label}</div>
          <div>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoList;
