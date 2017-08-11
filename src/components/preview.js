import { Emoji, Skins } from '.'
import { getData } from '../utils'

export default {
  name: 'Preview',
  props: {
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skin: {
      type: Number,
      default: Emoji.defaultProps.skin
    },
    skinsProps: {
      type: Object,
      required: true
    },
    enableSkins: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return { emojiObj: null }
  },
  render(h) {
    var { emojiObj, emojiProps, skinsProps, title, emoji, enableSkins } = this

    if (emojiObj) {
      var emojiData = getData(emojiObj),
          { emoticons } = emojiData,
          knownEmoticons = [],
          listedEmoticons = []

      for (let emoticon of emoticons) {
        if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
          knownEmoticons.push(emoticon.toLowerCase())
          listedEmoticons.push(emoticon)
        }
      }

      return <div class='emoji-mart-preview'>
        <div class='emoji-mart-preview-emoji'>
          <Emoji key={emojiObj.id} emoji={emojiObj} {...{ props: emojiProps }} />
        </div>

        <div class='emoji-mart-preview-data'>
          <div class='emoji-mart-preview-name'>{emojiObj.name}</div>
          <div class='emoji-mart-preview-shortnames'>
            {emojiData.short_names.map((short_name) =>
              <span key={short_name} class='emoji-mart-preview-shortname'>:{short_name}:</span>
            )}
          </div>
          <div class='emoji-mart-preview-emoticons'>
            {listedEmoticons.map((emoticon) =>
              <span key={emoticon} class='emoji-mart-preview-emoticon'>{emoticon}</span>
            )}
          </div>
        </div>
      </div>
    } else {
      return <div class='emoji-mart-preview'>
        <div class='emoji-mart-preview-emoji'>
          {
            emoji && emoji.length && <Emoji emoji={emoji} {...{ props: emojiProps }} />
          }
        </div>

        <div class='emoji-mart-preview-data'>
          <span class='emoji-mart-title-label'>
            {title}
          </span>
        </div>

        <div class='emoji-mart-preview-skins'>
          {enableSkins && <Skins
            {...{ props: skinsProps }}
          />}
        </div>
      </div>
    }
  }
}
