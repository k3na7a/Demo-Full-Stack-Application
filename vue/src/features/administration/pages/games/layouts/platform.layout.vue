<script setup lang="ts" />

<template>
  <div class="d-flex flex-column gap-3">
    <slot name="title"></slot>

    <div class="d-flex flex-column gap-1">
      <h6 class="d-block fw-semibold">{{ $t('forms.name') }}</h6>
      <slot name="name"></slot>
    </div>

    <div class="d-flex flex-column gap-1">
      <h6 class="fw-semibold">{{ $t('forms.release-date') }}</h6>
      <slot name="release_date"></slot>
    </div>

    <div class="d-flex flex-column gap-1">
      <slot name="slug"></slot>
      <small class="text-light-alt">{{ $t('forms.seo-item') }}</small>
    </div>

    <div class="d-grid">
      <slot name="submit"></slot>
    </div>
  </div>
</template>
