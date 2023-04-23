import { UseFormReturn, Controller } from "react-hook-form";
import { Project } from "../types";
import { Space, Input } from "antd";

export function ProjectItems({
  useFormData
}: {
  useFormData: UseFormReturn<Project>
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const projectErrors = errors.name

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="name"
        control={control}
        render={() => (<Input placeholder="Enter name" />)}
      />
      <Controller
        name="date"
        control={control}
        render={() => (<Input placeholder="Enter date" />)}
      />
    </Space>
  )
}