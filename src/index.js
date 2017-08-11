import { loadEmojiData } from './utils'
import emojiIndex from './utils/emoji-index'
import store from './utils/store'
import frequently from './utils/frequently'

await loadEmojiData()

export { Picker, Emoji, Category } from './components'
export { emojiIndex, store, frequently }
