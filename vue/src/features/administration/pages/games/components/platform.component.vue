<script setup lang="ts">
import { Form } from 'vee-validate'

import { generateUrlSlug } from '../../../../../../../library/utilities/slug.util'

import TextInput from '@/shared/components/inputs/text.input.vue'
import DateInput from '@/shared/components/inputs/date.input.vue'
import ModalTitle from '@/shared/components/modal/base/modal-title.component.vue'

import Layout from '../layouts/platform.layout.vue'
import { usePlatformComposable, proptype } from '../composables/platform.composable'

const props = defineProps<proptype>()
const { loading, initialValues, onSubmit, validationSchema } = usePlatformComposable(props)
const { title } = props
</script>

<template>
  <Form
    @submit="onSubmit"
    :validation-schema="validationSchema"
    :initial-values="initialValues"
    v-slot="{ meta, values }"
  >
    <Layout>
      <template #title>
        <ModalTitle :title="$t(title)" />
      </template>

      <template #name>
        <TextInput
          name="name"
          type="text"
          :placeholder="$t('administration.games-and-software.platforms.placeholders.name')"
        />
      </template>

      <template #release_date>
        <DateInput name="release_date" />
      </template>

      <template #slug>
        <TextInput
          :value="generateUrlSlug(values.name)"
          name="slug"
          label="forms.slug"
          type="text"
          :placeholder="$t('administration.games-and-software.platforms.placeholders.slug')"
        />
      </template>

      <template #submit>
        <button :disabled="!meta.valid || !meta.dirty || loading" class="btn btn-primary px-0" type="submit">
          <div class="containter">
            {{ $t('actions.save-changes') }}
          </div>
        </button>
      </template>
    </Layout>
  </Form>
</template>
