import { CreateItemDto, ItemsApi } from '@fullstack-fe/api';
import { YupForm } from '@fullstack-fe/forms';
import * as yup from 'yup';

const itemsApi = new ItemsApi(undefined, 'http://localhost:3333');

const ItemSchema = yup.object<CreateItemDto>().shape({
  name: yup.string().required('required').label('name'),
  isProcessed: yup.boolean().label('is-processed'),
});

export const YupItemForm = () => {
  const onSubmit = async (data: unknown) => {
    const { data: item } = await itemsApi.itemsControllerCreate(data as CreateItemDto);
    console.log(item);
  }

  return (
    <YupForm
      fields={[
        { fieldName: 'name', fieldType: 'input', label: 'name', placeholder: 'name' },
        { fieldName: 'isProcessed', fieldType: 'checkbox', label: 'name', placeholder: 'is-processed' },
      ]}
      onSubmit={onSubmit}
      scheme={ItemSchema}
    />
  )
}
