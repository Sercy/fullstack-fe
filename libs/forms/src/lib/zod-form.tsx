import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { ZodObjectDef, ZodSchema } from 'zod';
import { FormField, IFormField } from './FormField';

interface ZodFormProps {
  isLoading?: boolean;
  fields: IFormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  onDiscard?: () => void;
  scheme: ZodSchema;
  validateOnLoad?: boolean;
}
export const ZodForm = ({
  fields,
  isLoading,
  onSubmit,
  onDiscard,
  scheme,
  validateOnLoad = true,
}: ZodFormProps) => {
  const formMethods = useForm({
    mode: 'onChange',
    resolver: zodResolver(scheme),
  });

  const {
    control,
    getValues,
    formState: { errors },
    trigger,
  } = formMethods;

  useEffect(() => {
    validateOnLoad && trigger();
  }, [trigger, validateOnLoad]);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={event => {
          if (Object.entries(errors).length === 0) {
            event.preventDefault();
            onSubmit(getValues());
          }
        }}
      >
        {fields.map(({ fieldName, fieldType, defaultValue, placeholder }, idx) => {
          const schemeField = (scheme._def as ZodObjectDef).shape()[fieldName];
          
          if (!schemeField) {
            return null;
          }

          return (
            <Controller
              key={fieldName}
              control={control}
              name={fieldName}
              defaultValue={defaultValue}
              render={({ field: { name, onBlur, onChange }, fieldState: { invalid } }) => (
                <FormField
                  key={idx}
                  autoFocus={idx === 0}
                  defaultValue={defaultValue}
                  invalid={invalid}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder={placeholder}
                  label={schemeField._def.description}
                  type={fieldType}
                  isLoading={isLoading}
                />
              )}
            />
          )
        })}
        <div>
          {/* <input type="button" onClick={onDiscard} value="Cancel" /> */}
          <input type="submit" disabled={Object.entries(errors).length > 0} value="Apply" />
        </div>
      </form>
    </FormProvider>
  );
};
