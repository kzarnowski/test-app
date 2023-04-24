import { Card, Space, Button } from 'antd'
import { useForm, FormState, type FieldValues, type Path } from 'react-hook-form'
import type { Request, AddRequest, OtherRequest, Project, AddRequestWithProject, OtherRequestWithProject } from './types';
import { OtherRequestItems } from './items/OtherRequestItems';
import { AddRequestItems } from './items/AddRequestItems';
import { ProjectItems } from './items/ProjectItems';
import { Link } from 'react-router-dom';
import { DateInput, NameInput, PriorityInput, AddFieldInput, OtherFieldInput } from './components';

export function ProjectForm() {
  const useFormData = useForm<Project>()
  const { handleSubmit } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Other Request">
        <Space direction="vertical" size="large" className="full-width">
        <ProjectItems useFormData={useFormData}/>
        <Button htmlType="submit" type="primary" >Submit</Button>
        <Link to='/'>Back</Link>
        </Space>
      </Card>
    </form>
  )
}

export function AddForm() {
  const useFormData = useForm<AddRequest>()
  const { handleSubmit } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Other Request">
        <Space direction="vertical" size="large" className="full-width">
          <AddRequestItems useFormData={useFormData}/>
          <Button htmlType="submit" type="primary">Submit</Button>
          <Link to='/'>Back</Link>
        </Space>
      </Card>
    </form>
  )
}

export function OtherForm() {
  const useFormData = useForm<OtherRequest>()
  const { handleSubmit } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Other Request">
        <Space direction="vertical" size="large" className="full-width">
          <OtherRequestItems useFormData={useFormData}/>
          <Button htmlType="submit" type="primary" >Submit</Button>
          <Link to='/'>Back</Link>
        </Space>
      </Card>
    </form>
  )
}

export function AddWithProjectForm() {
  const useFormData = useForm<AddRequest & Project>()
  const { handleSubmit, control } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Add Request With Project">
        <Space direction="vertical" size="large" className="full-width">
          <h3>Project Fields</h3>
          <NameInput control={control} name="project.name"/>
          <DateInput control={control} name="project.date"/>
          <h3>Request Fields</h3>
          <DateInput control={control} name="request.date"/>
          <PriorityInput control={control} name="request.priority" />
          <AddFieldInput control={control} name="request.addField"/>
          <Button htmlType="submit" type="primary">Submit</Button>
        </Space>
      </Card>
    </form>
  )
}

export function OtherWithProjectForm() {
  const { handleSubmit, control, formState: {errors} } = useForm<OtherRequestWithProject>()

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Other Request With Project">
        <Space direction="vertical" size="large" className="full-width">
          <h3>Project Fields</h3>
          <NameInput control={control} name="project.name"/>
          <DateInput control={control} name="project.date"/>
          <h3>Request Fields</h3>
          <DateInput control={control} name="request.date"/>
          <PriorityInput control={control} name="request.priority" />
          <OtherFieldInput control={control} name="request.otherField" errors={errors}/>
          <Link to='/'>Back</Link>
        </Space>
      </Card>
    </form>
  )
}