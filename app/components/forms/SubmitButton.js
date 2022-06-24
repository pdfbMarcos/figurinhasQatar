import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ marginLeft, title, width, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      marginLeft={marginLeft}
      onPress={handleSubmit}
      width={width}
      {...otherProps}
    />
  );
}

export default SubmitButton;
