import { Controller, Control, Path, FieldValues } from 'react-hook-form'
import { Input } from 'antd'

export function NameInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter name" />)}
    />
  )
}

export function DateInput<T extends FieldValues>({ control, name }: { control: Control<T>; name: Path<T> }) {
  return (
    <Controller
      name={name}
      control={control}
      render={() => (<Input placeholder="Enter date" />)}
    />
  )
}