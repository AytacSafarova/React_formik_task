import * as Yup from 'yup';

export const addCategorySchema = Yup.object().shape({
    name: Yup.string()
    .required("Enter string please..."),
    unitprice: Yup.number()
    .required("Enter number please..."),
    unitstock: Yup.number()
    .required("Enter number please..."),
    quantity: Yup.string()
    .required("Enter string please..."),

    discontinued: Yup.boolean()
    .required("Enter boolean please..."),

})

