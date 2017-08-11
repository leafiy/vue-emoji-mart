import frequently from '../utils/frequently'
import { Emoji } from '.'

export default {
  name: 'Category',
  props: {
    emojis: {
      type: Array,
      default () {
        return []
      }
    },
    hasStickyPosition: true,
    name: {
      type: String,
      required: true
    },
    custom: Array,
    native: {
      type: Boolean,
      required: true
    },
    perLine: {
      type: Number,
      required: true
    },
    i18n: Object,
    emojiProps: {
      type: Object,
      required: true
    }
  },
  methods: {
    getEmojis () {
      let { name, emojis, perLine } = this

      if (name == 'Recent') {
        let { custom } = this
        let frequentlyUsed = frequently.get(perLine)

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map((id) => {
            for (let emoji of custom) {
              if (emoji.id === id) {
                return emoji
              }
            }

            return id
          })
        }
      }

      if (emojis) {
        emojis = emojis.slice(0)
      }

      return emojis
    },
    memoizeSize() {
      var { top, height } = this.container.getBoundingClientRect()
      var { top: parentTop } = this.parent.getBoundingClientRect()
      var { height: labelHeight } = this.label.getBoundingClientRect()

      this.top = top - parentTop + this.parent.scrollTop

      if (height == 0) {
        this.maxMargin = 0
      } else {
        this.maxMargin = height - labelHeight
      }
    },
    handleScroll(scrollTop) {
      var margin = scrollTop - this.top
      margin = margin < this.minMargin ? this.minMargin : margin
      margin = margin > this.maxMargin ? this.maxMargin : margin

      if (margin == this.margin) return
      var { name } = this

      if (!this.hasStickyPosition) {
        this.label.style.top = `${margin}px`
      }

      this.margin = margin
      return true
    },
    updateDisplay(display) {
      var emojis = this.getEmojis()

      if (!emojis) {
        return
      }

      this.container.style.display = display
    }
  },
  mounted() {
    this.container = this.$refs.container
    this.label = this.$refs.label
    this.parent = this.container.parentNode

    this.margin = 0
    this.minMargin = 0

    this.memoizeSize()
  },
  render(h) {
    var { name, hasStickyPosition, emojiProps, i18n } = this,
        emojis = this.getEmojis(),
        labelStyles = {},
        labelSpanStyles = {},
        containerStyles = {}

    if (!emojis) {
      containerStyles = {
        display: 'none',
      }
    }

    if (!hasStickyPosition) {
      labelStyles = {
        height: 28,
      }

      labelSpanStyles = {
        position: 'absolute',
      }
    }

    return <div ref='container' class={{'emoji-mart-category': true, 'emoji-mart-no-results': emojis && !emojis.length}} style={containerStyles}>
      <div style={labelStyles} data-name={name} class='emoji-mart-category-label'>
        <span style={labelSpanStyles} ref='label'>{i18n.categories[name.toLowerCase()]}</span>
      </div>

      {emojis && emojis.map((emoji) =>
        <Emoji emoji={emoji} {...{ props: emojiProps }} />
      )}

      {emojis && !emojis.length &&
        <div>
          <div>
            <Emoji size={38} emoji={'sleuth_or_spy'} {...{ props: emojiProps }} />
          </div>

          <div class='emoji-mart-no-results-label'>
            {i18n.notfound}
          </div>
        </div>
      }
    </div>
  }
}
