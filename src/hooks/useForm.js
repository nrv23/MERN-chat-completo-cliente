import { useState } from "react";

const useForm = (obj = {}) => {
  const [formValues, setFormValues] = useState(obj);

  const reset = () => setFormValues(obj);

  const handleInputChange = ({ target }) => {
   

    if(target.files) {
      const { files, name } = target;

      setFormValues({
        ...formValues,
        [name]: files[0]
      })
    } else  {

      const { value, name } = target;

      setFormValues({
        ...formValues,
        [name]: value,
      });
    }

  };

  return [formValues, handleInputChange, reset];
};

export default useForm;
