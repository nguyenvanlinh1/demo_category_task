import { Grid2, Typography } from "@mui/material";
import CustomImage from "../../Components/Form/CustomImage";

interface Props {
  item: {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
  };
}

const RentalItemCard = ({ item }: Props) => {
  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      key={item.id}
      border={"2px solid #E1DEDD"}
      borderRadius={"10px"}
      padding={5}
    >
      <div className="d-flex flex-column gap-3">
        <Typography variant="h4" fontWeight={700} color="#FFA21A">
          0{item.id}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          {item.title}
        </Typography>
        <Typography variant="body2">{item.content}</Typography>
        <CustomImage imageUrl={item.imageUrl} alt={`Product ${item.id}`} />
      </div>
    </Grid2>
  );
};

export default RentalItemCard;
