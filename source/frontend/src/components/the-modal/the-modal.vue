<template lang="html">
  <transition name="modal" @click="$emit('close-modal')">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal__head">
          <slot name="header">
            <span class="modal__head-close-button">
            <button class="button button--icon button--link button--sm" @click="$emit('close-modal')">
              <icon class="svg-icon" data="@icon/close.svg"></icon>
            </button>
          </span>
          </slot>
        </div>
        <div class="modal__body">
          <slot name="body"></slot>
        </div>
        <div class="modal__foot">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
export default {
  name: "TheModal",
  extends: {},
  props: {
    bar: {},
    foo: {},
    fooBar: {}
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
  }
};
</script>

<style lang="scss">
@import "src/components/the-modal/the-modal";
</style>
