import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./useForm.js";
import * as employeeService from "./employeeService.js";
import "./admin.css";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  name: "",
  watts: "",
  brand: "",
  city: "",
  gender: "male",
  categoryId: "",
  typeId: "",

  isPermanent: false,
};

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("watts" in fieldValues)
      temp.watts = fieldValues.watts ? "" : "This field is required.";

    if ("brand" in fieldValues)
      temp.brand = fieldValues.brand ? "" : "This field is required.";
    if ("brand" in fieldValues)
      temp.brand = fieldValues.brand ? "" : "This field is required.";
    if ("categoryId" in fieldValues)
      temp.categoryId =
        fieldValues.categoryId.length != 0 ? "" : "This field is required.";
    if ("typeId" in fieldValues)
      temp.typeId =
        fieldValues.typeId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      //   employeeService.insertEmployee(values);3
      console.log(values);
      //   resetForm();
    }
  };

  return (
    <div className="container">
      <h1 className="dash_header">add product</h1>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="name"
              label="Name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
            />
            <Controls.Input
              label="Power"
              name="watts"
              value={values.watts}
              onChange={handleInputChange}
              error={errors.watts}
            />
            <Controls.Input
              label="Brand"
              name="brand"
              value={values.brand}
              onChange={handleInputChange}
              error={errors.brand}
            />
            <Controls.Input
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
            <Controls.Select
              name="categoryId"
              label="Category"
              value={values.categoryId}
              onChange={handleInputChange}
              options={employeeService.getCategoryCollection()}
              error={errors.categoryId}
            />
            {values.categoryId !== "" && (
              <Controls.Select
                name="typeId"
                label="Type"
                value={values.typeId}
                onChange={handleInputChange}
                options={
                  employeeService.getTypeCollection()[values.categoryId - 1]
                }
                error={errors.typeId}
              />
            )}

            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />

            <div>
              <Controls.Button type="submit" text="Submit" />
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
