// import { Picker } from '../src'
import { Picker } from '../dist/vue-emoji-mart'

export default {
  components: {
    Picker
  },
  template: `
  <div class="dash">
    <Picker
      :dataUrl="dataUrl"
      :emoji-size="emojiSize"
      :per-line="perLine"
      :skins="skin"
      :native="native"
      :set="set"
      :auto-focus="autoFocus"
      :include="include"
      :exclude="exclude"
      :onItemClick="insertSymbol"
    />
  </div>
  `,
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
  methods: {
    insertSymbol (emoji) {
      console.log(emoji)
    }
  }
}