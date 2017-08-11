import emojiIndex from '../utils/emoji-index'

export default {
  name: 'Search',
  props: {
    search: {
      type: Function,
      default() {
        return (() => {})
      }
    },
    include: Array,
    exclude: Array,
    custom: Array,
    maxResults: 75,
    emojisToShowFilter: null,
    i18n: Object,
    autoFocus: false
  },
  methods: {
    handleChange() {
      var { input } = this.$refs,
          value = input.value

      this.search(emojiIndex.search(value, {
        emojisToShowFilter: this.emojisToShowFilter,
        maxResults: this.maxResults,
        include: this.include,
        exclude: this.exclude,
        custom: this.custom,
      }))
    },

    clear() {
      this.$refs.input.value = ''
    }
  },
  render() {
    var { i18n, autoFocus } = this

    return <div class='emoji-mart-search'>
      <input
        ref='input'
        type='text'
        onInput={this.handleChange.bind(this)}
        placeholder={i18n.search}
        autoFocus={autoFocus}
      />
    </div>
  }
}
