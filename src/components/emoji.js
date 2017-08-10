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

const Emoji = (props, h) => {
  for (let k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k]
    }
  }

  var { unified, custom, imageUrl } = _getData(props),
      style = {},
      children = props.children

  if (!unified && !custom) {
    return null
  }

  if (props.native && unified) {
    style = { fontSize: props.size }
    children = unifiedToNative(unified)

    if (props.forceSize) {
      style.display = 'inline-block'
      style.width = props.size
      style.height = props.size
    }
  } else if (custom) {
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: '100%',
    }
  } else {
    let setHasEmoji = _getData(props)[`has_img_${props.set}`]

    if (!setHasEmoji) {
      return null
    }

    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block',
      backgroundImage: `url(${props.backgroundImageFn(props.set, props.sheetSize)})`,
      backgroundSize: `${100 * SHEET_COLUMNS}%`,
      backgroundPosition: _getPosition(props),
    }
  }

  return h('span', {
    key: props.emoji.id || props.emoji,
    class: 'emoji-mart-emoji',
    on: {
      click: (e) => _handleClick(e, props),
      mouseenter: (e) => _handleOver(e, props),
      mouseleave: (e) => _handleLeave(e, props)
    }
  },
  [
    h('span', {
      style: style
    }, children)
  ])
}

Emoji.defaultProps = {
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

export default Emoji
