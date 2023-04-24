import { UseFormReturn, useWatch, Controller, FieldValues } from "react-hook-form";
import { AddRequest, AddRequestWithProject, Project } from "../types";
import { Space, Input } from "antd";
import { AddFieldInput, PriorityInput, DateInput } from "../components";

export function AddRequestItems({
  useFormData
}: {
  useFormData: UseFormReturn<AddRequest>
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const addErrors = errors.request?.addField

  const priority = useWatch({ control, name: 'request.priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <DateInput control={control} name="request.date" priority={priority}/>
      <PriorityInput control={control} name="request.priority" />
      <AddFieldInput control={control} name="request.addField" errors={errors}/>
    </Space>
  )
}