import { Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ProductFieldsType } from "./AdminForm";
import ProductFields from "./ProductFields";

type ProductFormProps = {
  onSubmit: (values: ProductFieldsType) => void;
};

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const { handleSubmit, register } = useForm<ProductFieldsType>({});

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductFields register={register} />
      </form>
    </Box>
  );
};

export default ProductForm;