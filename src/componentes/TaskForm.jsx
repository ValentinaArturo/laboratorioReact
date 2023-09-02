import { useForm } from "react-hook-form"

export default function TaskForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control" {...register("task")} />
      
    <div className="text-center"><button className='btn btn-success mt-3 '  type="submit">Agregar Tarea</button></div>
      
    </form>
  )
}