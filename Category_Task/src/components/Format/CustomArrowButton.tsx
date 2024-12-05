import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icon: ReactNode;
  disabled: boolean;
  style?: React.CSSProperties;
}

const CustomArrowButton = ({ onClick, icon, disabled, style }: Props) => {
  return (
    <div
      className="p-2 border d-flex justify-content-center align-items-center"
      style={{
        borderRadius: "10px",
        aspectRatio: 1,
        backgroundColor: disabled
          ? "rgba(255, 162, 26, 0.15)"
          : "rgba(255, 162, 26, 0.3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style
      }}
      onClick={!disabled ? onClick : undefined}
    >
      {icon}
    </div>
  );
};

export default CustomArrowButton;
