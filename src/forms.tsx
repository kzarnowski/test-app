import { Card, Space, Button } from 'antd'
import { useForm, FormState, type FieldValues, type Path } from 'react-hook-form'
import type { Request, AddRequest, OtherRequest, Project, AddRequestWithProject, OtherRequestWithProject } from './types';
import { OtherRequestItems } from './items/OtherRequestItems';
import { AddRequestItems } from './items/AddRequestItems';
import { ProjectItems } from './items/ProjectItems';
import { Link } from 'react-router-dom';

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
  const useFormData = useForm<AddRequestWithProject>()
  const { handleSubmit } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Add Request With Project">
        <Space direction="vertical" size="large" className="full-width">
          <ProjectItems useFormData={useFormData}/>
          <AddRequestItems useFormData={useFormData}/>
          <Button htmlType="submit" type="primary">Submit</Button>
        </Space>
      </Card>
    </form>
  )
}

export function OtherWithProjectForm() {
  const useFormData = useForm<OtherRequestWithProject>()
  const { handleSubmit } = useFormData

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <Card title="Create Other Request With Project">
        <Space direction="vertical" size="large" className="full-width">
          <ProjectItems useFormData={useFormData}/>
          <OtherRequestItems useFormData={useFormData}/>
          <Button htmlType="submit" type="primary" >Submit</Button>
          <Link to='/'>Back</Link>
        </Space>
      </Card>
    </form>
  )
}