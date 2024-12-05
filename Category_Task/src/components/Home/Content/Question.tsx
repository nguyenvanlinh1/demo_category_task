import { Grid2, Typography } from "@mui/material";
import CustomButton, { ButtonVariant } from "../../Format/CustomButton";
import CustomQuestion from "../../Format/CustomQuestion";
import CustomText, { TypographyVariant } from "../../Format/CustomText";

const faqList = [
  {
    question: "What is Antbuildz.com?",
    answer:
      "Antbuildz.com is the first and largest online construction equipment rental platform in South East Asia. We make your equipment rentals Smarter, Faster, Easier, and Safer by streamlining the entire rental process into a few clicks.",
  },
  {
    question: "How do I sign up and start renting on Antbuildz.com?",
    answer:
      "We provide a platform where equipment owners can list their machines, and renters can search and book the equipment they need.",
  },
  {
    question: "How do I sign up and start renting on Antbuildz.com?",
    answer:
      "We provide a platform where equipment owners can list their machines, and renters can search and book the equipment they need.",
  },
  {
    question: "What is the minimum rental duration?",
    answer:
      "We ensure the best rates and safety in transactions while providing a wide range of equipment for your needs.",
  },
];

const Question = () => {
  return (
    <div>
      <Grid2 container spacing={5}>
        <Grid2 size={12} display={"flex"} flexDirection={"column"} gap={2}>
          <div className="d-flex justify-content-between">
            <Typography variant="h4" fontWeight={600}>
              Các câu hỏi thường gặp
            </Typography>
            <CustomButton
              typeButton={ButtonVariant.CONTAINED}
              name="Xem thêm FAQs"
              opacity="0.8"
            />
          </div>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
          <CustomText
            variantTypo={TypographyVariant.BODY1}
            title="Nếu bạn có thêm câu hỏi, hãy truy cập FAQs của chúng tôi"
          />
        </Grid2>
        <Grid2 container spacing={2} alignItems={"flex-start"}>
          {faqList.map((item, index) => (
            <CustomQuestion index={index} item={item} />
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Question;
