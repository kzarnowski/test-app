import { UseFormReturn, useWatch, Controller, FieldValues } from "react-hook-form";
import { AddRequest, AddRequestWithProject, Project } from "../types";
import { Space, Input } from "antd";

export function AddRequestItems({
  useFormData
}: {
  useFormData: UseFormReturn<AddRequest> | UseFormReturn<AddRequest & Project>
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const addErrors = errors.request?.addField

  const priority = useWatch({ control, name: 'request.priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="request.date"
        control={control}
        render={() => (<Input placeholder="Enter date" />
        )}
      />
      <Controller
        name="request.priority"
        control={control}
        render={() => (<Input placeholder="Enter priority" />
        )}
      />
      <Controller
        name="request.addField"
        control={control}
        render={() => (<Input placeholder="Enter addField" />
        )}
      />
    </Space>
  )
}