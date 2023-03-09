import { CreateItemDto, ItemsApi } from '@fullstack-fe/api';
import { ZodForm } from '@fullstack-fe/forms';
import * as zod from 'zod';

const itemsApi = new ItemsApi(undefined, 'http://localhost:3333');

const ItemSchema = zod.object({
  name: zod.string().min(1, { message: 'required '}).describe('name'),
  isProcessed: zod.boolean().optional().describe('is-processed'),
});

export const ZodItemForm = () => {
  const onSubmit = async (data: unknown) => {
    const { data: item } = await itemsApi.itemsControllerCreate(data as CreateItemDto);
    console.log(item);
  }

  return (
    <ZodForm
      fields={[
        { fieldName: 'name', fieldType: 'input', label: 'name', placeholder: 'name' },
        { fieldName: 'isProcessed', fieldType: 'checkbox', label: 'name', placeholder: 'is-processed' },
      ]}
      onSubmit={onSubmit}
      scheme={ItemSchema}
    />
  )
}
