import { UseFormReturn, Controller } from "react-hook-form";
import { Project } from "../types";
import { Space, Input } from "antd";

export function ProjectItems({
  useFormData,
  prefix
}: {
  useFormData: UseFormReturn<Project>,
  prefix?: string
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const projectErrors = errors.project?.name

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name={`project.name`}
        control={control}
        render={() => (<Input placeholder="Enter name" />)}
      />
      <Controller
        name={`project.date`}
        control={control}
        render={() => (<Input placeholder="Enter date" />)}
      />
    </Space>
  )
}