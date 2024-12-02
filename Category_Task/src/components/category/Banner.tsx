import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import image from "../../assets/image.png";
import { useReducer } from "react";

const IconCheck = () => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7191 3.49332L13.3858 0.746652C12.6258 0.466652 11.3858 0.466652 10.6258 0.746652L3.29242 3.49332C1.87909 4.02665 0.732422 5.67998 0.732422 7.18665V17.9867C0.732422 19.0667 1.43909 20.4933 2.30576 21.1333L9.63909 26.6133C10.9324 27.5866 13.0524 27.5866 14.3458 26.6133L21.6791 21.1333C22.5458 20.48 23.2524 19.0667 23.2524 17.9867V7.18665C23.2658 5.67998 22.1191 4.02665 20.7191 3.49332ZM16.6391 10.96L10.9058 16.6933C10.7058 16.8933 10.4524 16.9867 10.1991 16.9867C9.94575 16.9867 9.69242 16.8933 9.49242 16.6933L7.35909 14.5333C6.97242 14.1467 6.97242 13.5067 7.35909 13.12C7.74576 12.7333 8.38575 12.7333 8.77242 13.12L10.2124 14.56L15.2391 9.53332C15.6258 9.14665 16.2658 9.14665 16.6524 9.53332C17.0391 9.91998 17.0391 10.5733 16.6391 10.96Z"
        fill="white"
      />
    </svg>
  );
};

const Banner = () => {
  const reducer = (state: number, action: string) => {
    switch (action) {
      case "Next":
        return state + 1 > 3 ? 3 : state + 1;
      case "Prev":
        return state - 1 < 0 ? 0 : state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const handleNext = () => {
    dispatch("Next");
  };
  const handlePrev = () => {
    dispatch("Prev");
  };

  return (
    <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
      <div className="d-flex justify-content-between pe-4">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <div
            className="p-2 border"
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba(255, 162, 26, 0.8)",
            }}
          >
            <IconCheck />
          </div>
          <div className="d-none d-sm-inline">
            Việc mua thiết bị của bạn sẽ được bảo vệ bởi chế độ bảo hành mua
            thiết bị của ComacPro
          </div>
        </div>
        <div className="d-flex gap-2">
          <div
            className="p-2 border d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "10px",
              aspectRatio: 1,
              backgroundColor: state === 0 ? "rgba(255, 162, 26, 0.15)" : "rgba(255, 162, 26, 0.3)",
            }}
            onClick={handlePrev}
          >
            <GoArrowLeft color="#FFA21A" />
          </div>
          <div
            className="p-2 border d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "10px",
              aspectRatio: 1,
              backgroundColor: state === 3 ? "rgba(255, 162, 26, 0.15)" : "rgba(255, 162, 26, 0.3)",
            }}
            onClick={handleNext}
          >
            <GoArrowRight color="#FFA21A" />
          </div>
        </div>
      </div>
      <div
        className="d-flex gap-2 mt-2"
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${state * 71}%)`,
        }}
      >
        {[1, 1, 1, 1].map((_, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 70%",
              borderRadius: "10px",
            }}
          >
            <img
              src={image}
              alt={`banner${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
