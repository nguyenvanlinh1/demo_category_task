import { Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
    index: number,
    item: {
        question: string,
        answer: string
    },
}

const CustomQuestion = ({index, item} : Props) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const handleShowText = (index: number) => {
    setVisibleIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Nếu đã mở, thu gọn câu hỏi
          : [...prev, index] // Nếu chưa mở, thêm vào danh sách
    );
  };
  return (
    <Grid2
      size={{ xs: 12, md: 6 }}
      style={{
        border: "1px solid #E1DEDD",
        borderRadius: "10px",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center px-5 py-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{item.question}</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFA21A",
            borderRadius: "50%",
            color: "#fff",
            width: "24px",
            height: "24px",
            cursor: "pointer",
          }}
          onClick={() => handleShowText(index)}
        >
          {visibleIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {visibleIndexes.includes(index) && (
        <Typography variant="body2" px={6} py={3}>
          {item.answer}
        </Typography>
      )}
    </Grid2>
  );
};

export default CustomQuestion;
