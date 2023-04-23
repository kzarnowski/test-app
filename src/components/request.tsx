import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import { Input } from 'antd'

export function DateInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter date" />)}
    />
  )
}

export function PriorityInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter priority" />)}
    />
  )
}

export function OtherFieldInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  // Should be available only for Other forms (not add)
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter otherField" />)}
    />
  )
} 

export function AddFieldInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  // Should be available only for Add forms (not other)
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter addField" />)}
    />
  )
} 

