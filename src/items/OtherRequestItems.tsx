import { UseFormReturn, useWatch, Controller } from "react-hook-form";
import { OtherRequest } from "../types";
import { Space, Input } from "antd";

export function OtherRequestItems({
  useFormData,
  prefix
}: {
  useFormData: UseFormReturn<OtherRequest>,
  prefix?: string
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const otherErrors = errors.request?.otherField

  const priority = useWatch({ control, name: 'request.priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="request.date"
        control={control}
        render={() => (<Input placeholder="Enter date" />)}
      />
      <Controller
        name="request.priority"
        control={control}
        render={() => (<Input placeholder="Enter priority" />)}
      />
      <Controller
        name="request.otherField"
        control={control}
        render={() => (<Input placeholder="Enter otherField" />)}
      />
    </Space>
  )
}