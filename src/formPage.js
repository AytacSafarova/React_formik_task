import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useFormik } from 'formik';
import { Field, Form, Formik } from "formik";
import { addCategorySchema } from "./addCategoryValidation";

const FormPage = () => {
  const [categories, setCategories] = useState([]);

  const baseURL = "https://northwind.vercel.app/api/categories";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          categoryId: '',
          name: '',
          unitprice: '',

          unitstock: '',
          discontinued: '',
          quantity: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post("https://northwind.vercel.app/api/products", values)
            .then((res) => {
              console.log("RESPONSE", res);
            });
        }}
        validationSchema={addCategorySchema}
      >
        {({ errors, touched }) => {
          //   console.log("Errors", errors);

          return (
            <Form>
              <Field as="select" name="categoryId">
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
              </Field>

              <label htmlFor="name">Name</label>
              <Field name="name" placeholder="name" />
              <p>{errors.name}</p>
              <label htmlFor="unitprice">Unit Price</label>
              <Field name="unitprice" placeholder="Unit Price" />
              <p>{errors.unitprice}</p>

              <label htmlFor="unitstock">Unit is in Stock</label>
              <Field name="unitstock" placeholder="Unit is in stock" />
              <p>{errors.unitstock}</p>

              <label htmlFor="discontinued">discontinued</label>
              <Field
                name="discontinued"
                type="checkbox"
                placeholder="discontinued"
              />
              <p>{errors.discontinued}</p>

              <label htmlFor="quantity">quantity</label>
              <Field name="quantity" placeholder="quantity" />
              <p>{errors.quantity}</p>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormPage;
