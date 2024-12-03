import {
  Button,
  Grid2,
  Rating,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { FaCheck, FaMinus } from "react-icons/fa6";
import ProductItemAboutus from "../../assets/ProductItemAboutUs.png";
import ProductItemAboutus2 from "../../assets/ProductItemAboutUs2.png";
import ProductItemAboutus3 from "../../assets/ProductItem3.png";
import ProductItemAboutus4 from "../../assets/ProductItem4.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const IconPrice = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9203 2.94677L12.7069 10.4268H9.49359C8.96026 10.4268 8.44026 10.4668 7.93359 10.5734L9.26693 7.37343L9.32026 7.25343L9.40026 7.0401C9.44026 6.94677 9.46693 6.86677 9.50693 6.8001C11.0536 3.21343 12.7869 2.09343 15.9203 2.94677Z"
        fill="white"
      />
      <path
        d="M24.9735 10.7868L24.9468 10.7734C24.1468 10.5468 23.3335 10.4268 22.5068 10.4268H14.1602L17.1602 3.45344L17.2002 3.36011C17.3868 3.42677 17.5868 3.52011 17.7868 3.58677L20.7335 4.82677C22.3735 5.50677 23.5202 6.21344 24.2268 7.06677C24.3468 7.22677 24.4535 7.37344 24.5602 7.54677C24.6802 7.73344 24.7735 7.92011 24.8268 8.12011C24.8802 8.24011 24.9202 8.34677 24.9468 8.46677C25.1468 9.14677 25.1602 9.92011 24.9735 10.7868Z"
        fill="white"
      />
      <path
        d="M16.6934 23.5468H17.0267C17.4267 23.5468 17.76 23.1868 17.76 22.7468C17.76 22.1868 17.6 22.1068 17.2534 21.9734L16.6934 21.7734V23.5468Z"
        fill="white"
      />
      <path
        d="M24.3863 12.6934C23.7863 12.5201 23.1597 12.4268 22.5063 12.4268H9.49299C8.58633 12.4268 7.73299 12.6001 6.93299 12.9468C4.61299 13.9468 2.98633 16.2534 2.98633 18.9334V21.5334C2.98633 21.8534 3.01299 22.1601 3.05299 22.4801C3.34633 26.7201 5.61299 28.9868 9.85299 29.2668C10.1597 29.3068 10.4663 29.3334 10.7997 29.3334H21.1997C26.133 29.3334 28.733 26.9868 28.9863 22.3201C28.9997 22.0668 29.013 21.8001 29.013 21.5334V18.9334C29.013 15.9868 27.053 13.5068 24.3863 12.6934ZM17.7063 20.6668C18.3197 20.8801 19.1463 21.3334 19.1463 22.7468C19.1463 23.9601 18.1997 24.9334 17.0263 24.9334H16.693V25.2268C16.693 25.6134 16.3863 25.9201 15.9997 25.9201C15.613 25.9201 15.3063 25.6134 15.3063 25.2268V24.9334H15.1863C13.9063 24.9334 12.853 23.8534 12.853 22.5201C12.853 22.1334 13.1597 21.8268 13.5463 21.8268C13.933 21.8268 14.2397 22.1334 14.2397 22.5201C14.2397 23.0801 14.6663 23.5468 15.1863 23.5468H15.3063V21.2934L14.293 20.9334C13.6797 20.7201 12.853 20.2668 12.853 18.8534C12.853 17.6401 13.7997 16.6668 14.973 16.6668H15.3063V16.3734C15.3063 15.9868 15.613 15.6801 15.9997 15.6801C16.3863 15.6801 16.693 15.9868 16.693 16.3734V16.6668H16.813C18.093 16.6668 19.1463 17.7468 19.1463 19.0801C19.1463 19.4668 18.8397 19.7734 18.453 19.7734C18.0663 19.7734 17.7597 19.4668 17.7597 19.0801C17.7597 18.5201 17.333 18.0534 16.813 18.0534H16.693V20.3068L17.7063 20.6668Z"
        fill="white"
      />
      <path
        d="M14.2402 18.8532C14.2402 19.4132 14.4002 19.4932 14.7469 19.6266L15.3069 19.8266V18.0532H14.9736C14.5602 18.0532 14.2402 18.4132 14.2402 18.8532Z"
        fill="white"
      />
    </svg>
  );
};
const IconTransfer = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.667 20.6667C29.0403 20.6667 29.3337 20.9601 29.3337 21.3334V22.6667C29.3337 24.8801 27.547 26.6667 25.3337 26.6667C25.3337 24.4667 23.5337 22.6667 21.3337 22.6667C19.1337 22.6667 17.3337 24.4667 17.3337 26.6667H14.667C14.667 24.4667 12.867 22.6667 10.667 22.6667C8.46699 22.6667 6.66699 24.4667 6.66699 26.6667C4.45366 26.6667 2.66699 24.8801 2.66699 22.6667V20.0001C2.66699 19.2667 3.26699 18.6667 4.00033 18.6667H16.667C18.507 18.6667 20.0003 17.1734 20.0003 15.3334V8.00008C20.0003 7.26675 20.6003 6.66675 21.3337 6.66675H22.4537C23.4137 6.66675 24.2937 7.18675 24.7737 8.01342L25.627 9.50675C25.747 9.72008 25.587 10.0001 25.3337 10.0001C23.4937 10.0001 22.0003 11.4934 22.0003 13.3334V17.3334C22.0003 19.1734 23.4937 20.6667 25.3337 20.6667H28.667Z"
        fill="white"
      />
      <path
        d="M10.6667 29.3333C12.1394 29.3333 13.3333 28.1394 13.3333 26.6667C13.3333 25.1939 12.1394 24 10.6667 24C9.19391 24 8 25.1939 8 26.6667C8 28.1394 9.19391 29.3333 10.6667 29.3333Z"
        fill="white"
      />
      <path
        d="M21.3337 29.3333C22.8064 29.3333 24.0003 28.1394 24.0003 26.6667C24.0003 25.1939 22.8064 24 21.3337 24C19.8609 24 18.667 25.1939 18.667 26.6667C18.667 28.1394 19.8609 29.3333 21.3337 29.3333Z"
        fill="white"
      />
      <path
        d="M29.3333 16.7067V18.6667H25.3333C24.6 18.6667 24 18.0667 24 17.3333V13.3333C24 12.6 24.6 12 25.3333 12H27.0533L28.9867 15.3867C29.2133 15.7867 29.3333 16.24 29.3333 16.7067Z"
        fill="white"
      />
      <path
        d="M17.4393 2.66675H7.58602C5.19935 2.66675 3.19935 4.37341 2.75935 6.64008H8.58602C9.09268 6.64008 9.49268 7.05341 9.49268 7.56008C9.49268 8.06675 9.09268 8.46675 8.58602 8.46675H2.66602V10.3067H6.13268C6.63935 10.3067 7.05268 10.7201 7.05268 11.2267C7.05268 11.7334 6.63935 12.1334 6.13268 12.1334H2.66602V13.9734H3.69268C4.19935 13.9734 4.61268 14.3867 4.61268 14.8934C4.61268 15.4001 4.19935 15.8001 3.69268 15.8001H2.66602V16.1067C2.66602 16.8401 3.26602 17.4401 3.99935 17.4401H16.1993C17.5593 17.4401 18.666 16.3334 18.666 14.9734V3.89341C18.666 3.21341 18.1193 2.66675 17.4393 2.66675Z"
        fill="white"
      />
      <path
        d="M2.75967 6.64014H2.55967H1.25301C0.746341 6.64014 0.333008 7.05347 0.333008 7.56014C0.333008 8.0668 0.746341 8.4668 1.25301 8.4668H2.46634H2.66634V7.5868C2.66634 7.2668 2.70634 6.9468 2.75967 6.64014Z"
        fill="white"
      />
      <path
        d="M2.46634 10.3066H1.25301C0.746341 10.3066 0.333008 10.72 0.333008 11.2266C0.333008 11.7333 0.746341 12.1333 1.25301 12.1333H2.46634H2.66634V10.3066H2.46634Z"
        fill="white"
      />
      <path
        d="M2.46634 13.9734H1.25301C0.746341 13.9734 0.333008 14.3867 0.333008 14.8934C0.333008 15.4001 0.746341 15.8001 1.25301 15.8001H2.46634H2.66634V13.9734H2.46634Z"
        fill="white"
      />
    </svg>
  );
};

const IconDuration = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 30.3334C15.4533 30.3334 15 29.8801 15 29.3334V26.6667C15 26.1201 15.4533 25.6667 16 25.6667C16.5467 25.6667 17 26.1201 17 26.6667V29.3334C17 29.8801 16.5467 30.3334 16 30.3334Z"
        fill="white"
      />
      <path
        d="M16 24.9999C15.4533 24.9999 15 24.5466 15 23.9999V21.3333C15 20.7866 15.4533 20.3333 16 20.3333C16.5467 20.3333 17 20.7866 17 21.3333V23.9999C17 24.5466 16.5467 24.9999 16 24.9999Z"
        fill="white"
      />
      <path
        d="M16 19.6666C15.4533 19.6666 15 19.2133 15 18.6666V14.6666C15 8.97325 19.64 4.33325 25.3333 4.33325H29.3333C29.88 4.33325 30.3333 4.78659 30.3333 5.33325C30.3333 5.87992 29.88 6.33325 29.3333 6.33325H25.3333C20.7333 6.33325 17 10.0666 17 14.6666V18.6666C17 19.2133 16.5467 19.6666 16 19.6666Z"
        fill="white"
      />
      <path
        d="M16.0003 19.6666C15.4537 19.6666 15.0003 19.2133 15.0003 18.6666V14.6666C15.0003 10.0666 11.267 6.33325 6.66699 6.33325H2.66699C2.12033 6.33325 1.66699 5.87992 1.66699 5.33325C1.66699 4.78659 2.12033 4.33325 2.66699 4.33325H6.66699C12.3603 4.33325 17.0003 8.97325 17.0003 14.6666V18.6666C17.0003 19.2133 16.547 19.6666 16.0003 19.6666Z"
        fill="white"
      />
      <path
        d="M5.33326 8.99992C5.07992 8.99992 4.82659 8.90659 4.62659 8.70659L1.95992 6.03992C1.57326 5.65326 1.57326 5.01326 1.95992 4.62659L4.62659 1.95992C5.01326 1.57326 5.65326 1.57326 6.03992 1.95992C6.42659 2.34659 6.42659 2.98659 6.03992 3.37326L4.07992 5.33326L6.03992 7.29325C6.42659 7.67992 6.42659 8.31992 6.03992 8.70659C5.83992 8.90659 5.58659 8.99992 5.33326 8.99992Z"
        fill="white"
      />
      <path
        d="M26.6666 8.99992C26.4133 8.99992 26.1599 8.90659 25.9599 8.70659C25.5733 8.31992 25.5733 7.67992 25.9599 7.29325L27.9199 5.33326L25.9599 3.37326C25.5733 2.98659 25.5733 2.34659 25.9599 1.95992C26.3466 1.57326 26.9866 1.57326 27.3733 1.95992L30.0399 4.62659C30.4266 5.01326 30.4266 5.65326 30.0399 6.03992L27.3733 8.70659C27.1733 8.90659 26.9199 8.99992 26.6666 8.99992Z"
        fill="white"
      />
    </svg>
  );
};

const IconProtect = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7201 5.49329L17.3867 2.74662C16.6267 2.46662 15.3867 2.46662 14.6267 2.74662L7.2934 5.49329C5.88006 6.02662 4.7334 7.67995 4.7334 9.18662V19.9866C4.7334 21.0666 5.44007 22.4933 6.30673 23.1333L13.6401 28.6133C14.9334 29.5866 17.0534 29.5866 18.3467 28.6133L25.6801 23.1333C26.5467 22.48 27.2534 21.0666 27.2534 19.9866V9.18662C27.2667 7.67995 26.1201 6.02662 24.7201 5.49329ZM20.6401 12.96L14.9067 18.6933C14.7067 18.8933 14.4534 18.9866 14.2001 18.9866C13.9467 18.9866 13.6934 18.8933 13.4934 18.6933L11.3601 16.5333C10.9734 16.1466 10.9734 15.5066 11.3601 15.12C11.7467 14.7333 12.3867 14.7333 12.7734 15.12L14.2134 16.56L19.2401 11.5333C19.6267 11.1466 20.2667 11.1466 20.6534 11.5333C21.0401 11.92 21.0401 12.5733 20.6401 12.96Z"
        fill="white"
      />
    </svg>
  );
};

const IconProtect2 = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5398 4.12009L13.0398 2.06009C12.4698 1.85009 11.5398 1.85009 10.9698 2.06009L5.4698 4.12009C4.4098 4.52009 3.5498 5.76009 3.5498 6.89009V14.9901C3.5498 15.8001 4.0798 16.8701 4.7298 17.3501L10.2298 21.4601C11.1998 22.1901 12.7898 22.1901 13.7598 21.4601L19.2598 17.3501C19.9098 16.8601 20.4398 15.8001 20.4398 14.9901V6.89009C20.4498 5.76009 19.5898 4.52009 18.5398 4.12009ZM15.4798 9.72009L11.1798 14.0201C11.0298 14.1701 10.8398 14.2401 10.6498 14.2401C10.4598 14.2401 10.2698 14.1701 10.1198 14.0201L8.5198 12.4001C8.2298 12.1101 8.2298 11.6301 8.5198 11.3401C8.8098 11.0501 9.2898 11.0501 9.5798 11.3401L10.6598 12.4201L14.4298 8.65009C14.7198 8.36009 15.1998 8.36009 15.4898 8.65009C15.7798 8.94009 15.7798 9.43009 15.4798 9.72009Z"
        fill="#FFA21A"
      />
    </svg>
  );
};

const IconFeedback = () => {
  return (
    <svg
      width="82"
      height="60"
      viewBox="0 0 82 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.7849 60C50.5224 60 42.3667 50.6793 42.3667 36.91C42.4373 16.8916 57.5129 2.73399 79.226 0.0154419C81.2384 -0.231697 82.0151 2.55746 80.1792 3.36949C71.8471 7.0766 67.6457 11.7723 67.0808 16.4326C66.6571 19.9279 68.5636 22.9642 70.9291 23.5291C77.0723 25.012 81.2031 32.6733 81.2031 40.5818C81.2031 51.3148 72.5179 60 61.7849 60Z"
        fill="#FFA21A"
        fill-opacity="0.4"
      />
      <path
        d="M19.4177 60C8.15517 60 -0.000465393 50.6793 -0.000465393 36.91C0.0701447 16.8916 15.1457 2.73399 36.8588 0.0154419C38.8712 -0.231697 39.648 2.55746 37.812 3.36949C29.4799 7.0766 25.2785 11.7723 24.7136 16.4326C24.2899 19.9279 26.1964 22.9642 28.5619 23.5291C34.7051 25.012 38.8359 32.6733 38.8359 40.5818C38.8359 51.3148 30.1507 60 19.4177 60Z"
        fill="#FFA21A"
        fill-opacity="0.4"
      />
    </svg>
  );
};
const listCheckBox = [
  {
    name: "Giá tốt nhất",
    icon: <FaCheck />,
  },
  {
    name: "Flexible Duration",
    icon: <FaCheck />,
  },
  {
    name: "Nhanh chóng & Dễ dàng",
    icon: <FaCheck />,
  },
  {
    name: "Minh bạch & Bảo mật",
    icon: <FaCheck />,
  },
];

const listEquiment = [
  {
    id: 1,
    title: "Tìm kiếm",
    content: "Tìm kiếm thiết bị theo chủng loại, công suất mọi lúc, mọi nơi.",
  },
  {
    id: 2,
    title: "So sánh",
    content: "So sánh các thiết bị có sẵn, mức giá và thông số kỹ thuật.",
  },
  {
    id: 3,
    title: "Thuê ngay",
    content: "Đặt trước thiết bị và xác nhận đơn hàng bằng cách thanh toán.",
  },
];

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

const AboutUs = () => {
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
    <div className="py-3 d-flex flex-column gap-5">
      <Grid2 container spacing={{ xs: 1, lg: 5 }}>
        <Grid2
          size={{ xs: 12, md: 4.4 }}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Typography variant="h4" fontWeight={600}>
            Tại sao chọn chúng tôi?
          </Typography>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
          <Typography variant="body1">
            4 Giá trị chính của nền tảng cho thuê
          </Typography>
          <div>
            {listCheckBox.map((item) => (
              <div className="d-flex align-items-center gap-2 mb-2">
                <div
                  className="d-flex justify-content-center align-items-center rounded"
                  style={{
                    backgroundColor: "#FFA21A",
                    color: "#FFF",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  {item.icon}
                </div>
                <Typography variant="body2">{item.name}</Typography>
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFA21A",
              textTransform: "capitalize",
              borderRadius: "10px",
              color: "#121110",
              width: "122px",
            }}
          >
            Thuê ngay
          </Button>
        </Grid2>
        <Grid2
          container
          size={{ xs: 12, md: 3.8 }}
          spacing={{
            xs: 1,
            lg: 4,
          }}
          height={{
            lg: "554px",
          }}
          display={"flex"}
          alignItems={{
            xs: "center",
            lg: "flex-end",
          }}
        >
          <Grid2 size={12}>
            <div
              style={{
                border: "2px solid #E1DEDD",
                padding: "30px 15px",
                borderRadius: "10px",
              }}
              className="d-flex gap-3 flex-column"
            >
              <div
                className="p-2 border"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.8)",
                  width: "52px",
                  height: "52px",
                }}
              >
                <IconPrice />
              </div>
              <Typography variant="h6" fontWeight={600}>
                Giá tốt nhất
              </Typography>
              <Typography variant="body2">
                No more expensive prices! We help you discover the best market
                rates throughout Vietnam.
              </Typography>
            </div>
          </Grid2>
          <Grid2 size={12}>
            <div
              style={{
                border: "2px solid #E1DEDD",
                padding: "30px 15px",
                borderRadius: "10px",
              }}
              className="d-flex gap-3 flex-column"
            >
              <div
                className="p-2 border"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.8)",
                  width: "52px",
                  height: "52px",
                }}
              >
                <IconTransfer />
              </div>
              <Typography variant="h6" fontWeight={600}>
                Nhanh chóng & Dễ dàng
              </Typography>
              <Typography variant="body2">
                No more expensive prices! We help you discover the best market
                rates throughout Vietnam.
              </Typography>
            </div>
          </Grid2>
        </Grid2>
        <Grid2
          container
          size={{ xs: 12, md: 3.8 }}
          spacing={{
            xs: 1,
            lg: 4,
          }}
        >
          <Grid2 size={12}>
            <div
              style={{
                border: "2px solid #E1DEDD",
                padding: "30px 15px",
                borderRadius: "10px",
              }}
              className="d-flex gap-3 flex-column"
            >
              <div
                className="p-2 border"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.8)",
                  width: "52px",
                  height: "52px",
                }}
              >
                <IconDuration />
              </div>
              <Typography variant="h6" fontWeight={600}>
                Flexible Duration
              </Typography>
              <Typography variant="body2">
                Rent your equipment for as short as one day for up to months
                according to your needs.
              </Typography>
            </div>
          </Grid2>
          <Grid2 size={12}>
            <div
              style={{
                border: "2px solid #E1DEDD",
                padding: "30px 15px",
                borderRadius: "10px",
              }}
              className="d-flex gap-3 flex-column"
            >
              <div
                className="p-2 border"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.8)",
                  width: "52px",
                  height: "52px",
                }}
              >
                <IconProtect />
              </div>
              <Typography variant="h6" fontWeight={600}>
                Minh bạch & Bảo mật
              </Typography>
              <Typography variant="body2">
                Have information of all available equipment at one glance from
                well- vetted suppliers.
              </Typography>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={5}>
        <Grid2 container size={{ xs: 12, md: 6 }}>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_) => (
            <Grid2 size={{ xs: 4, md: 3 }} sx={{ position: "relative" }}>
              <img
                src={ProductItemAboutus}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              ></img>
              <div
                className="position-absolute"
                style={{
                  top: "5px",
                  right: "5px",
                  backgroundColor: "#3D3D3DCC",
                }}
              >
                <IconProtect2 />
              </div>
            </Grid2>
          ))}
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          padding={{
            md: 5,
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Chúng tôi bảo hiểm cho thiết bị thuê
          </Typography>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
          <Typography variant="body1">
            Hợp tác với HongLeong Assurance, thiết bị thuê từ ComacPro được cung
            cấp bảo hiểm miễn phí trị giá 300 triệu đồng.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFA21A",
              textTransform: "capitalize",
              borderRadius: "10px",
              color: "#121110",
              width: "122px",
            }}
          >
            Xem chi tiết
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={5}>
        <Grid2 size={12}>
          <Typography variant="h4" fontWeight={600}>
            Thuê thiết bị chỉ trong vài cú nhấp chuột
          </Typography>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
          <Typography variant="body1">
            Chúng tôi cố gắng tạo ra trải nghiệm cho thuê nhanh chóng và liền
            mạch
          </Typography>
        </Grid2>
        {listEquiment.map((item) => (
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
              <img
                src={ProductItemAboutus2}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              ></img>
            </div>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Typography variant="h4" fontWeight={600}>
            Kiếm thêm thu nhập với thiết bị nhàn rỗi của bạn
          </Typography>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Typography variant="body1" mb={3}>
            Thay vì để thiết bị của bạn không hoạt động, tại sao không để nó
            kiếm tiền cho bạn? Đăng ký và cho thuê chúng chỉ trong vài cú nhấp
            chuột với bảo hiểm mọi rủi ro trị giá 300 triệu miễn phí tại
            ComacPro.com!
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFA21A",
              textTransform: "capitalize",
              borderRadius: "10px",
              color: "#121110",
            }}
          >
            Đăng ký đối tác ngay
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={5}>
        <Grid2 size={12}>
          <Typography variant="h4" fontWeight={600}>
            Khách hàng nói về chúng tôi
          </Typography>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
            className="my-2"
          ></div>
          <div className="d-flex justify-content-between">
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                fontSize: {
                  xs: "12px",
                  md: "30px",
                },
              }}
            >
              Share with us your feedback to serve you better on our Google
              Review
            </Typography>
            <div className="d-flex gap-2">
              <div
                className="p-2 p-lg-3 border d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.15)",
                }}
              >
                <GoArrowLeft color="#FFA21A" />
              </div>
              <div
                className="p-2 p-lg-3 border d-flex justify-content-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.3)",
                }}
              >
                <GoArrowRight color="#FFA21A" />
              </div>
            </div>
          </div>
        </Grid2>
        <Grid2
          container
          display={"flex"}
          flexWrap={"nowrap"}
          overflow={"hidden"}
          gap={2}
        >
          {[1, 1, 1].map((index) => (
            <Grid2
              size={{ xs: 8, md: 4 }}
              key={index}
              flexDirection={"column"}
              gap={3}
              boxShadow={"0 0 20px 0 #001942"}
              padding={5}
              borderRadius={"10px"}
              flex="0 0 75%"
            >
              <div className="d-flex justify-content-between align-items-end">
                <IconFeedback />
                <Rating
                  name="half-rating"
                  defaultValue={5}
                  precision={0.5}
                  readOnly
                />
              </div>
              <Typography variant="body2">
                We are committed to providing our customers with super
                exceptional service while offering our employees the best
                training and a working environment in which they can excel best
                of all place for more than a half century. This company focus
                has been in place for more than a half century. We are
                committed.
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Tuấn Anh
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        container
        bgcolor={"#FFC900"}
        borderRadius={"30px"}
        spacing={5}
        overflow={"hidden"}
        maxHeight={"400px"}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          px={6}
          py={10}
          gap={2}
        >
          <Typography variant="h4" fontWeight={700}>
            Khám phá hàng nghìn thiết bị thuộc hàng trăm danh mục.
          </Typography>
          <Typography variant="body2">
            Tất cả đều có sẵn, đã đăng ký và sẵn sàng cho thuê tại ComacPro.com.
          </Typography>
          <div>
            <Button
              variant="contained"
              sx={{ bgcolor: "#2C2A29", color: "#fff", borderRadius: "10px" }}
            >
              Tìm kiếm ngay
            </Button>
          </div>
        </Grid2>
        <Grid2
          container
          size={6}
          spacing={5}
          px={7}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          <Grid2
            container
            size={6}
            flexDirection={"column"}
            alignItems={"flex-start"}
            spacing={5}
          >
            {[1, 1, 1].map(() => (
              <Grid2 size={12} sx={{ translate: "0 -200px" }}>
                <img
                  src={ProductItemAboutus3}
                  style={{
                    objectFit: "cover",
                    width: "263px",
                    height: "301px",
                    borderRadius: "10px",
                  }}
                ></img>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container size={6} flexDirection={"column"} spacing={5}>
            {[1, 1, 1].map(() => (
              <Grid2 size={12} sx={{ translate: "0 -50px" }}>
                <img
                  src={ProductItemAboutus4}
                  style={{
                    objectFit: "cover",
                    width: "263px",
                    height: "301px",
                    borderRadius: "10px",
                  }}
                ></img>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={5}>
        <Grid2 size={12} display={"flex"} flexDirection={"column"} gap={2}>
          <div className="d-flex justify-content-between">
            <Typography variant="h4" fontWeight={600}>
              Các câu hỏi thường gặp
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFA21A",
                textTransform: "capitalize",
                borderRadius: "10px",
                color: "#121110",
              }}
            >
              Xem thêm FAQs
            </Button>
          </div>
          <div
            style={{
              border: "6px solid #FFA21A",
              borderRadius: "10px",
              width: "100px",
            }}
          ></div>
          <Typography variant="body1">
            Nếu bạn có thêm câu hỏi, hãy truy cập FAQs của chúng tôi
          </Typography>
        </Grid2>
        <Grid2 container spacing={2} alignItems={"flex-start"}>
          {faqList.map((item, index) => (
            <Grid2
              size={{xs: 12, md: 6}}
              key={index}
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
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default AboutUs;
