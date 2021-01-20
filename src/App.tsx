import * as React from "react";
import "./styles.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { colourOptions } from "./colors";

const validationSchema = yup.object({
  favouriteColors: yup.array().of(yup.string()).min(2, "Pick at least 2 colors")
});

export default function App() {
  const { register, control, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      favouriteColors: null
    }
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset style={{ float: "left" }}>
          <legend>With the same name</legend>
          {colourOptions.map((color, index) => (
            <label key={color.value}>
              <input
                type="checkbox"
                value={color.value}
                name="favouriteColors"
                ref={register}
              />
              {color.value}
              <br />
            </label>
          ))}
        </fieldset>

        <p style={{ color: "red" }}>
          {errors?.favouriteColors ? errors?.favouriteColors?.message : ""}
        </p>

        <button>Send</button>
      </form>
    </div>
  );
}
