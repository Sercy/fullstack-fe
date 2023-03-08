import { CreateItemDto, ItemsApi } from '@fullstack-fe/api';
import { useForm } from 'react-hook-form';

const itemsApi = new ItemsApi(undefined, 'http://localhost:3333');

export const ItemForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: unknown) => {
    const { data: item } = await itemsApi.itemsControllerCreate(data as CreateItemDto);
    console.log(item);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          name:
          <input {...register("name", { required: true })} />
        </label>
        {errors.name && <span>Name is required</span>}
      </div>

      <div>
        <label>
          processed:
          <input type='checkbox' {...register("isProcessed")} />
        </label>
      </div>

      <input type="submit" />
    </form>
  );
};
