export default {
  name: 'Skins',
  props: {
    change: {
      type: Function,
      default() {
        return (() => {})
      }
    },
    skin: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      opened: false
    }
  },
  methods: {
    handleClick(skin) {
      var { change } = this

      if (!this.opened) {
        this.opened = true
      } else {
        this.opened = false
        if (skin != this.skin) {
          this.change(skin)
        }
      }
    }
  },
  render() {
    var { skin, opened } = this

    return <div>
      <div class={{'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': opened}}>
        {/* Use Array.prototype.fill() when it is more widely supported. */}
        {[...Array(6)].map((_, i) => {
          var skinTone = i + 1,
              selected = skinTone == skin

          return <span key={`skin-tone-${skinTone}`} class={{'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': selected}}>
            <span
              onClick={() => this.handleClick(skinTone)}
              class={`emoji-mart-skin emoji-mart-skin-tone-${skinTone}`}>
            </span>
          </span>
        })}
      </div>
    </div>
  }
}
