// import { Picker } from '../src'
import { Picker } from '../dist/vue-emoji-mart'

const CATEGORIES = [
  'recent',
  'people',
  'nature',
  'foods',
  'activity',
  'places',
  'objects',
  'symbols',
  'flags',
]

export default {
  data () {
    return {
      dataUrl: './emoji.json',
      emojiSize: 24,
      perLine: 9,
      skin: 1,
      native: true,
      set: 'apple',
      hidden: false,
      currentEmoji: { id: '+1' },
      autoFocus: false,
      include: [],
      exclude: [],
    }
  },

  render() {
    return <div>
      <div>
        <h1 class='demo-title'>Emoji Mart</h1>
      </div>

      {!this.hidden &&
        <Picker
          dataUrl={this.dataUrl}
          emojiSize={this.emojiSize}
          perLine={this.perLine}
          skins={this.skin}
          native={this.native}
          set={this.set}
          autoFocus={this.autoFocus}
          include={this.include}
          exclude={this.exclude}
          onItemClick={(emoji) => {
            this.currentEmoji = emoji
            console.log(emoji)
          }}
        />
      }
    </div>
  }
}
