import { UseFormReturn, Controller} from "react-hook-form";
import { AddRequestWithProject, Project } from "../types";
import { Space, Input } from "antd";
//import { NameInput, DateInput } from '../components/project'


export function ProjectItems({
  useFormData
}: {
  useFormData: UseFormReturn<Project> | UseFormReturn<AddRequestWithProject>,
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const projectErrors = errors.project?.name

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="project.name"
        control={control}
        render={() => (<Input placeholder="Enter name" />)}
      />
      <Controller
        name="project.date"
        control={control}
        render={() => (<Input placeholder="Enter date" />)}
      />
    </Space>
  )
}