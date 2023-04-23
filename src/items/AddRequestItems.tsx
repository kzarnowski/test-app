import { UseFormReturn, useWatch, Controller } from "react-hook-form";
import { AddRequest } from "../types";
import { Space, Input } from "antd";

export function AddRequestItems({
useFormData,
prefix
}: {
useFormData: UseFormReturn<AddRequest>,
prefix: string
}) {
  const {
    control,
    formState: { errors }
  } = useFormData

  const addErrors = errors.addField

  const priority = useWatch({ control, name: 'priority' })

  return (
    <Space direction="vertical" size="large" className="full-width">
      <Controller
        name="date"
        control={control}
        render={() => (<Input placeholder="Enter date" />
        )}
      />
      <Controller
        name="priority"
        control={control}
        render={() => (<Input placeholder="Enter priority" />
        )}
      />
      <Controller
        name="addField"
        control={control}
        render={() => (<Input placeholder="Enter addField" />
        )}
      />
    </Space>
  )
}