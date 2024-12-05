import { Grid2 } from "@mui/material";
import CustomTitle from "../../Format/CustomTitle";
import ProductItemAboutus2 from "../../../assets/ProductItemAboutUs2.png";
import RentalItemCard from "./RentalItemCard";

const listEquiment = [
  {
    id: 1,
    title: "Tìm kiếm",
    content: "Tìm kiếm thiết bị theo chủng loại, công suất mọi lúc, mọi nơi.",
    imageUrl: ProductItemAboutus2,
  },
  {
    id: 2,
    title: "So sánh",
    content: "So sánh các thiết bị có sẵn, mức giá và thông số kỹ thuật.",
    imageUrl: ProductItemAboutus2,
  },
  {
    id: 3,
    title: "Thuê ngay",
    content: "Đặt trước thiết bị và xác nhận đơn hàng bằng cách thanh toán.",
    imageUrl: ProductItemAboutus2,
  },
];

const RentalItems = () => {
  return (
    <Grid2 container spacing={5}>
      <Grid2 size={12}>
        <CustomTitle
          title="Thuê thiết bị chỉ trong vài cú nhấp chuột"
          description="Chúng tôi cố gắng tạo ra trải nghiệm cho thuê nhanh chóng và liền mạch"
        />
      </Grid2>
      {listEquiment.map((item) => (
        <RentalItemCard key={item.id} item={item} />
      ))}
    </Grid2>
  );
};

export default RentalItems;
