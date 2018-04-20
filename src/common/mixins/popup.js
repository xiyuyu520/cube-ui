const EVENT_TOGGLE = 'toggle'

export default {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: this.visible
    }
  },
  watch: {
    visible(newVal) {
      this.isVisible = newVal
    },
    isVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal)
    }
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}