import { Controller, Control, Path, FieldValues, FormState } from 'react-hook-form'
import { Input, Radio } from 'antd'
import { AddRequest, Project } from './types';

export function NameInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter name" />)}
    />
  )
}

export function DateInput<T extends FieldValues>({ control, name, priority }: { control: Control<T>; name: Path<T>, priority: 'high' | 'low' }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder={`Enter date, priority: ${priority}`} />)}
    />
  )
}

export function PriorityInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
            <Radio.Group {...field}>
              <Radio value="low">Low</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="high">High</Radio>
            </Radio.Group>
        )}
      />
  )
}

export function OtherFieldInput<T extends FieldValues>({
  control,
  name,
  errors
} : { 
  control: Control<T>
  name: Path<T>
  errors: FormState<T>['errors'] 
}) {
  // Should be available only for Other forms (not add)
  console.log(errors.request?.otherField)
  
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter otherField" />)}
    />
  )
} 

export function AddFieldInput<T extends FieldValues>({
  control,
  name,
  errors
} : { 
  control: Control<AddRequest> | Control<AddRequest & Project>
  name: Path<AddRequest> | Path<AddRequest & Project>
  errors: FormState<AddRequest>['errors'] | FormState<AddRequest & Project>['errors']
}) {
  // Should be available only for Add forms (not other)
  console.log(errors.request?.addField)

  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter addField" />)}
    />
  )
} 