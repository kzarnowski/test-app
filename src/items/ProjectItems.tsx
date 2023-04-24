import { UseFormReturn, Controller} from "react-hook-form";
import { RequestWithProject, Project, AddRequest, OtherRequest } from "../types";
import { Space, Input } from "antd";
import { NameInput, DateInput } from '../components'


export function ProjectItems({
  useFormData
}: {
  useFormData: UseFormReturn<Project> | UseFormReturn<AddRequest & Project> | UseFormReturn<OtherRequest & Project>,
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const projectErrors = errors.project?.name

  return (
    <Space direction="vertical" size="large" className="full-width">
      <NameInput control={control} name="project.name"/>
      <DateInput control={control} name="project.date"/>
    </Space>
  )
}