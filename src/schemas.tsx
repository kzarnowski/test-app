import { z } from 'zod'

export const AddSchema = z.object({
  date: z.string(),
  priority: z.string(),
  addField: z.string()
})

export const OtherSchema = z.object({
  date: z.string(),
  priority: z.string(),
  otherField: z.string()
})

export const ProjectSchema = z.object({
  date: z.string(),
  name: z.string()
})

export const AddWithProjectSchema = z.object({
  request: AddSchema,
  project: ProjectSchema
})

export const OtherWithProjectSchema = z.object({
  request: OtherSchema,
  project: ProjectSchema
})


export type AddSchemaOutput = z.output<typeof AddSchema>
export type OtherSchemaOutput = z.output<typeof OtherSchema>
export type AddWithProjectSchemaOutput = z.output<typeof AddWithProjectSchema>
export type OtherWithProjectSchemaOutput = z.output<typeof OtherWithProjectSchema>
export type ProjectSchemaOutput = z.output<typeof ProjectSchema>