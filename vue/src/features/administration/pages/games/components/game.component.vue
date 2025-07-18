<script setup lang="ts">
import { Form } from 'vee-validate'

import { generateUrlSlug } from '../../../../../../../library/utilities/slug.util'

import TextInput from '@/shared/components/inputs/text.input.vue'
import FileInput from '@/shared/components/inputs/file.input.vue'
import DateInput from '@/shared/components/inputs/date.input.vue'
import TextAreaInput from '@/shared/components/inputs/text-area.input.vue'
import SearchPaginatedInput from '@/shared/components/inputs/search-paginated-input.input.vue'
import ModalTitle from '@/shared/components/modal/base/modal-title.component.vue'

import Layout from '../layouts/game.layout.vue'
import { proptype, useGameForm } from '../composables/game.composable'

const props = defineProps<proptype>()
const { onSubmit, initialValues, validationSchema, loading, platformOptions, getPlatforms } = useGameForm(props)
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
          :placeholder="$t('administration.games-and-software.games.placeholders.name')"
        />
      </template>
      <template #cover>
        <FileInput name="cover" />
      </template>
      <template #release_date>
        <DateInput name="release_date" />
      </template>
      <template #description>
        <TextAreaInput
          name="description"
          :rows="6"
          :placeholder="$t('administration.games-and-software.games.placeholders.description')"
        />
      </template>
      <template #platforms>
        <SearchPaginatedInput name="platforms" :callback="getPlatforms" :options="platformOptions">
          <template #option="{ option }">
            {{ option.name }}
            <small class="ms-2 text-muted fst-italic">{{ option.id }}</small>
          </template>
        </SearchPaginatedInput>
      </template>
      <template #slug>
        <TextInput
          :value="generateUrlSlug(values.name)"
          name="slug"
          label="forms.slug"
          type="text"
          :placeholder="$t('administration.games-and-software.games.placeholders.slug')"
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
