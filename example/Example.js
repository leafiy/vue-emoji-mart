import { Picker } from '../src'

const CUSTOM_EMOJIS = [
  {
    name: 'Octocat',
    short_names: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
  },
  {
    name: 'Squirrel',
    short_names: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7'
  }
]

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
