import data from '../../data'

import { getData, getSanitizedData, unifiedToNative } from '../utils'

const SHEET_COLUMNS = 49

const _getPosition = (props) => {
  var { sheet_x, sheet_y } = _getData(props),
      multiply = 100 / (SHEET_COLUMNS - 1)

  return `${multiply * sheet_x}% ${multiply * sheet_y}%`
}

const _getData = (props) => {
  var { emoji, skin, set } = props
  return getData(emoji, skin, set)
}

const _getSanitizedData = (props) => {
  var { emoji, skin, set } = props
  return getSanitizedData(emoji, skin, set)
}

const _handleClick = (e, props) => {
  if (!props.emojiClick) { return }
  var { emojiClick } = props,
      emoji = _getSanitizedData(props)

  emojiClick(emoji, e)
}

const _handleOver = (e, props) => {
  if (!props.emojiOver) { return }
  var { emojiOver } = props,
      emoji = _getSanitizedData(props)

  emojiOver(emoji, e)
}

const _handleLeave = (e, props) => {
  if (!props.emojiLeave) { return }
  var { emojiLeave } = props,
      emoji = _getSanitizedData(props)

  emojiLeave(emoji, e)
}

const defaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  native: false,
  forceSize: false,
  backgroundImageFn: ((set, sheetSize) => `https://unpkg.com/emoji-datasource-${set}@${EMOJI_DATASOURCE_VERSION}/img/${set}/sheets/${sheetSize}.png`),
  onOver: (() => {}),
  onLeave: (() => {}),
  onClick: (() => {}),
}

const Emoji = {
  name: 'Emoji',
  props: {
    size: Number,
    emoji: Object|String,
    skin: {
      type: Number,
      default: defaultProps.skin
    },
    set: {
      type: String,
      default: defaultProps.set
    },
    sheetSize: {
      type: Number,
      default: defaultProps.sheetSize
    },
    native: {
      type: Boolean,
      default: defaultProps.native
    },
    forceSize: {
      type: Boolean,
      default: defaultProps.forceSize
    },
    backgroundImageFn: {
      type: Function,
      default() {
        return defaultProps.backgroundImageFn
      }
    },
    emojiOver: {
      type: Function,
      default() {
        return defaultProps.emojiOver
      }
    },
    emojiLeave: {
      type: Function,
      default() {
        return defaultProps.emojiLeave
      }
    },
    emojiClick: {
      type: Function,
      default() {
        return defaultProps.emojiClick
      }
    }
  },
  data() {
    return {}
  },
  render() {
    const {emoji} = this
    var { unified, custom, imageUrl } = _getData(this),
        style = {},
        children = this.children

    if (!unified && !custom) {
      return null
    }

    if (this.native && unified) {
      style = { fontSize: this.size }
      children = unifiedToNative(unified)

      if (this.forceSize) {
        style.display = 'inline-block'
        style.width = this.size
        style.height = this.size
      }
    } else if (custom) {
      style = {
        width: this.size,
        height: this.size,
        display: 'inline-block',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '100%',
      }
    } else {
      let setHasEmoji = _getData(this)[`has_img_${this.set}`]

      if (!setHasEmoji) {
        return null
      }

      style = {
        width: this.size,
        height: this.size,
        display: 'inline-block',
        backgroundImage: `url(${this.backgroundImageFn(this.set, this.sheetSize)})`,
        backgroundSize: `${100 * SHEET_COLUMNS}%`,
        backgroundPosition: _getPosition(this),
      }
    }
    return <span
      key={emoji.id || emoji}
      onClick={(e) => _handleClick(e, this)}
      onMouseenter={(e) => _handleOver(e, this)}
      onMouseleave={(e) => _handleLeave(e, this)}
      class='emoji-mart-emoji'>
      <span style={style}>{children}</span>
    </span>
  }
}

Emoji.defaultProps = defaultProps

export default Emoji