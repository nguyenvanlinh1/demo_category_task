import { Alert, Box, Divider, Grid2, Typography } from "@mui/material";
import CustomSelect from "../Components/Form/CustomSelect";
import { FaSearch } from "react-icons/fa";
import CustomButton, { ButtonVariant } from "../Components/Form/CustomButton";
import CustomImage from "../Components/Form/CustomImage";
import { TypographyVariant } from "../Components/Form/CustomText";
import CustomTextField, {
  TextFieldVariant,
} from "../Components/Form/CustomTextField";
import React, { useMemo, useState } from "react";
import CustomInput, { InputType } from "../Components/Form/CustomInput";
import CustomSwitch from "../Components/Form/CustomSwitch";
import { API_KEY } from "../Config/ApiKey";
import { debounce } from "../Config/debounce";

const IconCancel = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="10" fill="#3D3D3D" fill-opacity="0.8" />
      <path
        d="M18 8C12.49 8 8 12.49 8 18C8 23.51 12.49 28 18 28C23.51 28 28 23.51 28 18C28 12.49 23.51 8 18 8ZM21.36 20.3C21.65 20.59 21.65 21.07 21.36 21.36C21.21 21.51 21.02 21.58 20.83 21.58C20.64 21.58 20.45 21.51 20.3 21.36L18 19.06L15.7 21.36C15.55 21.51 15.36 21.58 15.17 21.58C14.98 21.58 14.79 21.51 14.64 21.36C14.35 21.07 14.35 20.59 14.64 20.3L16.94 18L14.64 15.7C14.35 15.41 14.35 14.93 14.64 14.64C14.93 14.35 15.41 14.35 15.7 14.64L18 16.94L20.3 14.64C20.59 14.35 21.07 14.35 21.36 14.64C21.65 14.93 21.65 15.41 21.36 15.7L19.06 18L21.36 20.3Z"
        fill="#FFA21A"
      />
    </svg>
  );
};

interface Data {
  title: string;
  information: string;
  address: string;
}

const Post = () => {
  // Lưu data của TextField, Select
  const [data, setData] = useState<Data>({
    title: "",
    information: "",
    address: "",
  });

  // Lưu địa chỉ tạm thời mà hàm debounced trả về
  const [suggestions, setSuggestions] = useState<any>([]);

  // Hàm gọi api lấy địa chỉ
  const handleLoadingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (!value) {
      setSuggestions([]);
      return;
    }
    requestAPI(e);
  };

  const requestAPI = useMemo(() => {
    return debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      fetch(
        `https://rsapi.goong.io/Place/AutoComplete?api_key=${API_KEY}&input=${e.target.value}`
      )
        .then((response) => response.json())
        .then((result) => setSuggestions(result.predictions || []))
        .catch((error) => console.error("Error fetching data:", error));
    }, 500)
  }, []);

  // Lấy dữ liệu từ TextField vào state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Hàm chuyển dữ liệu trả về từ hàm debouce vào state sang state chính
  const handleSelectSuggestion = (data: string) => {
    setData((prevData) => ({
      ...prevData,
      address: data,
    }));
    setSuggestions([]);
  };

  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setTimeout(() => {
      const selectedFiles = e.target.files;
      if (selectedFiles) {
        const validFiles = Array.from(selectedFiles).filter((file) =>
          file.type.startsWith("image/jpeg")
        );

        if (validFiles) {
          setFiles([...files, ...validFiles]);
          setError("");
        } else {
          setFiles([]);
          setError("Chỉ chấp nhận định dạng JPG!");
        }
        setLoading(false);
      }
    }, 1500);
  };
  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setTimeout(() => {
      const validFiles = droppedFiles.filter((file) =>
        file.type.startsWith("image/jpeg")
      );
      if (validFiles.length > 0) {
        setFiles([...files, ...validFiles]);
        setError("");
      } else {
        setFiles([]);
        setError("Chỉ chấp nhận định dạng JPG!");
      }

      setLoading(false);
    }, 2000);
  };

  const handleDeleteImage = (value: File) => {
    const newFiles = files.filter((item) => item !== value);
    setFiles(newFiles);
  };

  return (
    <>
      <div className="p-5">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            Danh mục thiết bị mới và đã qua sử dụng
          </Typography>
        </div>
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <CustomSelect
              isBorder={true}
              listItem={[1, 2, 3]}
              lable="Tìm kiếm thiết bị bạn muốn bán từ danh sách"
              icon={<FaSearch size="30px" />}
            />
          </Grid2>
          <Grid2 size={12}>
            <CustomSelect
              isBorder={true}
              listItem={[1, 2, 3]}
              lable="Chọn model thiết bị"
            />
          </Grid2>
        </Grid2>
      </div>
      <div className="px-5">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            Điều thông tin thiết bị
          </Typography>
        </div>
        <Grid2 container spacing={2} alignItems={"flex-start"}>
          <Grid2 container size={4} spacing={2}>
            <Box
              sx={{
                padding: 5,
                border: "2px solid #DEE2E6",
                bgcolor: "#FFEFD5",
                textAlign: "center",
                alignContent: "center",
                lineHeight: 5,
                borderRadius: "10px",
                width: "100%",
              }}
              onDrop={handleDropImage}
              onDragOver={(e) => e.preventDefault()}
            >
              {loading ? (
                <Typography variant="h6">Đang tải ảnh...</Typography>
              ) : files.length === 0 ? (
                <>
                  {error && (
                    <Alert variant="filled" severity="error">
                      {error}
                    </Alert>
                  )}
                  <Typography variant="body2" fontWeight={400}>
                    Kéo thả hoặc chọn ảnh, videos từ thư viện của bạn
                  </Typography>
                  <CustomButton
                    typeButton={ButtonVariant.CONTAINED}
                    name={
                      <label htmlFor="upload_image">Chọn ảnh và Video</label>
                    }
                    isFullWidth={false}
                  />
                  <CustomInput
                    id="upload_image"
                    type={InputType.FILE}
                    placeholder="name"
                    sx={{ display: "none" }}
                    onChange={handleUploadImage}
                  />
                </>
              ) : (
                <CustomImage
                  imageUrl={URL.createObjectURL(files[files.length - 1])}
                />
              )}
            </Box>
            <ul>
              <li>
                <Typography variant="body2" fontWeight={400}>
                  Để danh sách của bạn hiển thị và thu hút tốt hơn, hãy tải lên
                  ít nhất 4 ảnh từ các góc khác nhau.
                </Typography>
              </li>
              <li>
                <Typography variant="body2" fontWeight={400}>
                  Chỉ tải lên ảnh định dạng JPG
                </Typography>
              </li>
            </ul>
            <Grid2 container size={12} justifyContent={"revert"}>
              {files
                .slice()
                .reverse()
                .map((item) => (
                  <Grid2 size={{ xs: 6, md: 4 }} sx={{ position: "relative" }}>
                    <CustomImage
                      imageUrl={URL.createObjectURL(item)}
                      style={{ borderRadius: "10px" }}
                    />
                    <div
                      className="position-absolute"
                      style={{
                        top: "5px",
                        right: "5px",
                        backgroundColor: "#3D3D3DCC",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteImage(item)}
                    >
                      <IconCancel />
                    </div>
                  </Grid2>
                ))}
            </Grid2>
          </Grid2>
          <Grid2 container size={8} spacing={2}>
            <Grid2 size={12}>
              <CustomTextField
                title="Danh mục"
                value="Diesel Articulating Boom Lift"
                variantText={TextFieldVariant.FILLED}
              />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                title="Thương hiệu"
                value="Genie"
                variantText={TextFieldVariant.FILLED}
              />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                title="Model"
                value="Z-80/60"
                variantText={TextFieldVariant.FILLED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={6}>
              <CustomSelect
                title="Tình trạng thiết bị"
                variantTypo={TypographyVariant.BODY1}
                fontWeight={600}
                isBorder={true}
                listItem={[1, 2, 3]}
                lable="Chọn tình trạng"
              />
            </Grid2>
            <Grid2 size={6}>
              <CustomTextField
                title="Serial Number"
                value=""
                lable="Nhập serial"
                variantText={TextFieldVariant.OUTLINED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={6}>
              <CustomSelect
                title="Năm sản xuất"
                variantTypo={TypographyVariant.BODY1}
                fontWeight={600}
                isBorder={true}
                listItem={[1, 2, 3]}
                lable="Chọn năm"
              />
            </Grid2>
            <Grid2 size={6}>
              <CustomTextField
                title="Thời gian sử dụng"
                value=""
                lable="Nhập thời gian sử dụng"
                variantText={TextFieldVariant.OUTLINED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                name="title"
                title="Tiêu đề"
                value={data.title}
                lable="Nhập tiêu đề sản phẩm"
                variantText={TextFieldVariant.OUTLINED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                title="Mô tả"
                value=""
                lable="Nhập mô tả"
                variantText={TextFieldVariant.OUTLINED}
                onChange={handleChange}
                multiline={true}
                rows={3}
              />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                title="Platform Capacity - Unrestricted (KG)"
                value="227"
                lable=""
                variantText={TextFieldVariant.FILLED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={6}>
              <CustomTextField
                title="Platform Height (Meter)"
                value="23.77"
                lable=""
                variantText={TextFieldVariant.FILLED}
                onChange={handleChange}
              />
            </Grid2>
            <Grid2 size={12} display={"flex"} alignItems={"center"}>
              <Typography variant="body1" fontWeight={600}>
                Catelouge
              </Typography>
              <CustomInput
                type={InputType.FILE}
                placeholder="Image"
                onDrop={(e) => e.preventDefault()}
                onDragOver={(e) => e.preventDefault()}
              />
            </Grid2>
            <Grid2
              size={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                Please mark if there are any defects
              </Typography>
              <CustomSwitch />
            </Grid2>
            <Grid2 size={12}>
              <CustomTextField
                name="information"
                value={data.information}
                title="Thông tin bị sai"
                lable="Nhập mô tả"
                variantText={TextFieldVariant.OUTLINED}
                multiline={true}
                rows={3}
                onChange={handleChange}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
      <div className="px-5">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            Kho bãi để thiết bị
          </Typography>
        </div>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <CustomSelect
              title="Thành phố"
              variantTypo={TypographyVariant.BODY1}
              fontWeight={600}
              isBorder={true}
              listItem={[1, 2, 3]}
              lable="Chọn thành phố"
            />
          </Grid2>
          <Grid2 size={6}>
            <CustomTextField
              title="Mã bưu điện"
              value=""
              lable="Mã bưu điện"
              variantText={TextFieldVariant.OUTLINED}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 container size={12} spacing={2} alignItems={"flex-end"}>
            <Grid2 size={10} position={"relative"}>
              <CustomTextField
                name="address"
                title="Địa chỉ"
                value={data.address}
                lable="Nhập địa chỉ"
                variantText={TextFieldVariant.OUTLINED}
                onChange={handleLoadingAddress}
              />
              <Box
                position={"absolute"}
                sx={{
                  top: "110%",
                  left: 0,
                  border: "2px solid #DEE2E6",
                  width: "100%",
                  zIndex: "10",
                  padding: 1,
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  opacity: suggestions.length > 0 ? 1 : 0,
                  transform:
                    suggestions.length > 0
                      ? "translateY(0)"
                      : "translateY(10px)",
                  visibility: suggestions.length > 0 ? "visible" : "hidden",
                  transition:
                    "opacity 1s ease, transform 1s ease, visibility 1s",
                }}
              >
                {suggestions?.slice(0, 4).map((suggestion: any) => (
                  <>
                    <Typography
                      key={suggestion.place_id}
                      onClick={() =>
                        handleSelectSuggestion(suggestion.description)
                      }
                      sx={{ paddingY: "8px", cursor: "pointer" }}
                    >
                      {suggestion.description}
                    </Typography>
                    <Divider sx={{ border: "2px solid #DEE2E6" }} />
                  </>
                ))}
              </Box>
            </Grid2>
            <Grid2 size={2}>
              <CustomButton
                typeButton={ButtonVariant.CONTAINED}
                name="Chọn từ bản đồ"
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
      <div className="px-5">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            Giá bán thiết bị của bạn
          </Typography>
        </div>
        <Grid2 container spacing={2}>
          <Grid2 size={10}>
            <CustomTextField
              title="Giá bán"
              value=""
              lable="Nhập giá bán"
              variantText={TextFieldVariant.OUTLINED}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={2}>
            <CustomTextField
              title="Loại tiền"
              value="VND"
              variantText={TextFieldVariant.OUTLINED}
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
      </div>
      <div className="px-5 my-5">
        <Box display="flex" justifyContent="space-between">
          <CustomButton
            typeButton={ButtonVariant.CONTAINED}
            name="Thoát"
            style={{ backgroundColor: "#E1DEDD" }}
            isFullWidth={false}
          />
          <CustomButton
            typeButton={ButtonVariant.CONTAINED}
            name="Gửi"
            isFullWidth={false}
          />
        </Box>
      </div>
    </>
  );
};

export default Post;
