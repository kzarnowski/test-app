import { UseFormReturn, useWatch, Controller } from "react-hook-form";
import { OtherRequest, Project } from "../types";
import { Space, Input } from "antd";
import { OtherFieldInput, PriorityInput, DateInput } from "../components";

export function OtherRequestItems({
  useFormData
}: {
  useFormData: UseFormReturn<OtherRequest>
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const otherErrors = errors.request?.otherField

  const priority = useWatch({ control, name: 'request.priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <DateInput control={control} name="request.date" priority={priority}/>
      <PriorityInput control={control} name="request.priority" />
      <OtherFieldInput control={control} name="request.otherField" errors={errors}/>
    </Space>
  )
}