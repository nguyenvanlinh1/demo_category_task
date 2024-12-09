import { Divider, Grid2 } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import CustomInput, { InputType } from "../Components/Form/CustomInput";
import { TypographyVariant } from "../Components/Form/CustomText";
import CustomSelect from "../Components/Form/CustomSelect";
import CustomButton, { ButtonVariant } from "../Components/Form/CustomButton";
import { useState } from "react";
import { validate } from "../Components/Validate/ValidateTextField";

const SearchHomePage = () => {

  const [data, setData] = useState({
    category: "",
    location: ""
  })
  const [errors, setErrors] = useState<{[key: string] : string | null}>({})

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  const handleSubmit = () => {
    const validationRules = [
      {
        field: "category",
        value: data.category,
        rules: {
          required: true,
          minLength: 5,
        },
      },
      {
        field: "location",
        value: data.location,
        rules: {
          required: true,
          minLength: 8,
          maxLength: 20
        },
      },
    ]

    const validationErrors = validate(validationRules)
    setErrors(validationErrors);
  }

  return (
    <div>
      <Grid2
        container
        mt={{
          xs: "45px",
          md: 0,
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        boxShadow={"0 0 20px 0 #000"}
        sx={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}
      >
        <Grid2
          container
          size={10.5}
          spacing={{
            xs: 0,
            md: 2,
          }}
        >
          <Grid2
            size={{ xs: 12, md: 4 }}
            padding={{
              xs: 0,
              md: 2,
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <CustomInput
              name="category"
              value={data.category}
              type={InputType.TEXT}
              placeholder="Bạn cần tìm gì"
              icon={<FaSearch size={30} />}
              variantTypo={TypographyVariant.BODY1}
              fontWeight={600}
              title="Danh mục"
              errorMessage={errors.category}
              onDrop={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault}
              onChange={handleChange}
            />
            <Divider
              sx={{
                border: "2px solid #000",
                display: {
                  xs: "none",
                  md: "block",
                },
                height: {
                  xs: "100%",
                  md: "60%",
                },
              }}
            />
          </Grid2>
          <Grid2 size={12} display={{ xs: "block", md: "none" }}>
            <Divider
              sx={{
                border: "2px solid #000",
                height: {
                  xs: "100%",
                  md: "60%",
                },
              }}
            />
          </Grid2>
          <Grid2 container size={{ xs: 12, md: 4 }} paddingX={2}>
            <Grid2 size={12} display={"flex"} alignItems={"center"}>
              <LuBadgeCheck size={30} />
              <CustomSelect
                lable="Tất cả tình trạng"
                isBorder={false}
                title="Tình trạng"
                fontWeight={600}
                variantTypo={TypographyVariant.BODY1}
                listItem={[1, 2, 3]}
                paddingY="5px"
              />
              <Divider
                sx={{
                  border: "2px solid #000",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  height: {
                    xs: "100%",
                    md: "40%",
                  },
                }}
              />
            </Grid2>
          </Grid2>
          <Grid2 size={12} display={{ xs: "block", md: "none" }}>
            <Divider
              sx={{
                border: "2px solid #000",
                height: {
                  xs: "100%",
                  md: "60%",
                },
              }}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            padding={{
              xs: 0,
              md: 2,
            }}
          >
            <CustomInput
              name="location"
              value={data.location}
              type={InputType.TEXT}
              placeholder="Chọn vị trí"
              icon={<IoLocationOutline size={30} />}
              variantTypo={TypographyVariant.BODY1}
              fontWeight={600}
              errorMessage={errors.location}
              title="Vị trí"
              onDrop={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault}
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 1 }}>
          <CustomButton
            typeButton={ButtonVariant.CONTAINED}
            name="Tìm kiếm"
            opacity="0.8"
            onClick={handleSubmit}
          />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default SearchHomePage;
