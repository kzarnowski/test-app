import { UseFormReturn, useWatch, Controller } from "react-hook-form";
import { OtherRequest } from "../types";
import { Space, Input } from "antd";

export function OtherRequestItems({
useFormData
}: {
useFormData: UseFormReturn<OtherRequest>
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const otherErrors = errors.otherField

  const priority = useWatch({ control, name: 'priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="date"
        control={control}
        render={() => (<Input placeholder="Enter date" />)}
      />
      <Controller
        name="priority"
        control={control}
        render={() => (<Input placeholder="Enter priority" />)}
      />
      <Controller
        name="otherField"
        control={control}
        render={() => (<Input placeholder="Enter otherField" />)}
      />
    </Space>
  )
}