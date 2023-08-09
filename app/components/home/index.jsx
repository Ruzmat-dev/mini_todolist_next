"use client";
import { useState, useEffect } from "react";
import {
  Alert,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Card from "@mui/material/Card";
import "./style.scss";
import { useForm } from "react-hook-form";
import { getData, postData } from "@/api/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required().min(3).max(20),
    price: yup.number().required(),
    weight: yup.number().required(),
  })
  .required();

const Home = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Erkak");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fetchData = async () => {
    const res = await getData();
    setCount(res.data.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const onSubmit = async (data) => {
    const new_data = {
      id: count + 1,
      title: data.title,
      price: data.price,
      weight: data.weight,
      isActive: false,
      created_at: Date.now(),
      gender: selectedValue,
    };

    try {
      console.log(1);
      const res = await postData(new_data);
      console.log(res);

      if (res.status === 201) {
        console.log(1);
        setLoading(true);
        toast.success("Task added successfully", {
          position: "top-right",
          autoClose: 1000,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Please enter a title and a date", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 700, padding: "100px", marginLeft: "20%" }}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            sx={{ width: "550px" }}
            minRows={3}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...register("title")}
            error={errors.title?.message}
          />
  {/* <Alert severity="error"> { errors && errors.title?.message}</Alert> */}
          <FormControl fullWidth sx={{ width: "550px" }}>
            <InputLabel htmlFor="outlined-adornment-amount"> Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              {...register("price")}
              error={errors.price?.message}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>

          <TextField
            {...register("weight")}
            label="weight"
            type="number"
            id="outlined-start-adornment"
            sx={{ width: "550px" }}
            error={errors.weight?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" {...register("weight")}>
                  kg
                </InputAdornment>
              ),
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4>Jinsingiz:</h4>
            <p>
              <span>Erkak</span>
              <Radio
                checked={selectedValue === "Erkak"}
                onChange={handleChange}
                sx={{ width: "50px" }}
                value="Erkak"
                name="radio-buttons"
                inputProps={{ "aria-label": "Erkak" }}
              />
            </p>
            <p>
              <span>Ayol</span>
              <Radio
                checked={selectedValue === "Ayoll"}
                onChange={handleChange}
                sx={{ width: "50px" }}
                value="Ayoll"
                name="radio-buttons"
                inputProps={{ "aria-label": "Ayoll" }}
              />
            </p>
            <p>
              <span>Bilmayman</span>
              <Radio
                checked={selectedValue === "Bilmaydi"}
                onChange={handleChange}
                sx={{ width: "50px" }}
                value="Bilmaydi"
                name="radio-buttons"
                inputProps={{ "aria-label": "Bilmaydi" }}
              />
            </p>
          </div>

          <LoadingButton
            size="small"
            sx={{ width: "550px" }}
            type="submit"
            loading={loading}
            loadingIndicator="Loading…"
            variant="contained"
          >
            <span> Submit</span>
          </LoadingButton>
        </form>
      </Card>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Home;
