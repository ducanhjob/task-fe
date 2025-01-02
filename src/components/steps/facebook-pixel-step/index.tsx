import React from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  FormLayout,
  Link,
  Select,
  Text,
  TextField,
} from '@shopify/polaris'
import { CheckIcon } from '@shopify/polaris-icons'
import { useForm, Controller } from 'react-hook-form'

interface FacebookPixelFormData {
  pixelTitle: string
  pixelId: string
  accessToken: string
  target: string
}

interface Props {
  isEnabled: boolean
}

export function FacebookPixelStep({ isEnabled }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FacebookPixelFormData>({
    defaultValues: {
      target: 'entire-store',
    },
  })

  const onSubmit = (data: FacebookPixelFormData) => {
    console.log(data)
  }

  if (!isEnabled) {
    return null
  }

  return (
    <Card>
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
            <CheckIcon className="w-4 h-4 text-surface" />
          </div>
          <Text variant="headingMd" as="h3">
            Setup your Facebook Pixel
          </Text>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormLayout>
            <Controller
              name="pixelTitle"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Facebook Pixel Title"
                  {...field}
                  error={errors.pixelTitle && 'Facebook Pixel Title is required'}
                  helpText="It helps you to do easily management facebook pixel"
                  autoComplete="off"
                />
              )}
            />

            <div className="flex items-center justify-between">
              <Controller
                name="pixelId"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label="Facebook Pixel ID (Dataset ID)"
                    {...field}
                    error={errors.pixelId && 'Facebook Pixel ID is required'}
                    autoComplete="off"
                  />
                )}
              />
              <Link url="#">Where can I get it?</Link>
            </div>

            <div className="space-y-4">
              <ButtonGroup>
                <Button variant="primary">Browser</Button>
                <Button>Conversions API</Button>
              </ButtonGroup>

              <div>
                <Text as="p" variant="bodySm" tone="subdued">
                  Maximum combines all data-sharing options to reach the highest amount of customers.
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  It uses Conversions API, which shares data directly from our servers to Facebook. This
                  means the data can't be blocked by ad blockers, iOS 14+
                </Text>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Controller
                name="accessToken"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label="Facebook Pixel Access Token"
                    {...field}
                    error={errors.accessToken && 'Access Token is required'}
                    autoComplete="off"
                  />
                )}
              />
              <Link url="#">Where can I get it?</Link>
            </div>

            <Controller
              name="target"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Target"
                  options={[{ label: 'Entire Store', value: 'entire-store' }]}
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <div className="flex justify-end">
              <Button variant="primary" submit>
                Next step
              </Button>
            </div>
          </FormLayout>
        </form>
      </div>
    </Card>
  )
}

