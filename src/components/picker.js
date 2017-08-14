import '../vendor/raf-polyfill'

import measureScrollbar from 'measure-scrollbar'

import store from '../utils/store'
import frequently from '../utils/frequently'
import { deepMerge, loadEmojiData } from '../utils'

import { Anchors, Category, Emoji, Preview, Search } from '.'

const RECENT_CATEGORY = { name: 'Recent', emojis: null }
const SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false }
const CUSTOM_CATEGORY = { name: 'Custom', emojis: [] }

const I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom',
  },
}

export default {
  name: 'Picker',
  props: {
    dataUrl: {
      type: String
    },
    onItemClick: {
      type: Function,
      default() {
        return (() => {})
      }
    },
    perLine: {
      type: Number,
      default: 9
    },
    emojiSize: {
      type: Number,
      default: 24
    },
    i18ns: {
      type: Object,
      default() {
        return {}
      }
    },
    styles: {
      type: Object,
      default() {
        return {}
      }
    },
    title: {
      type: String,
      default: 'Emoji Mart™'
    },
    emoji: {
      type: String,
      default: 'department_store'
    },
    color: {
      type: String,
      default: '#ae65c5'
    },
    set: {
      type: String,
      default: Emoji.defaultProps.set
    },
    skins: {
      type: Number,
      default: Emoji.defaultProps.skin
    },
    native: {
      type: Boolean,
      default: Emoji.defaultProps.native
    },
    backgroundImageFn: {
      type: Function,
      default() {
        return Emoji.defaultProps.backgroundImageFn
      }
    },
    sheetSize: {
      type: Number,
      default: Emoji.defaultProps.sheetSize
    },
    emojisToShowFilter: null,
    include: {
      type: Array,
      default() {
        return []
      }
    },
    exclude: {
      type: Array,
      default() {
        return []
      }
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Array,
      default() {
        return []
      }
    },
    enableSkins: {
      type: Boolean,
      default: false
    }
  },
  data () {
    this.i18n = deepMerge(I18N, this.i18ns)
    this.categories = []
    return {
      loading: true,
      skin: store.get('skin') || this.skins,
      firstRender: true
    }
  },
  mounted () {
    loadEmojiData(this.dataUrl).then((data) => {
      this.processData(data)
      this.loading = false
      if (this.firstRender) {
        this.testStickyPosition()
        this.firstRenderTimeout = setTimeout(() => {
          this.firstRender = false
        }, 60)
      }
    })
  },
  watch: {
    'firstRender': function(val, oldVal) {
      this.$nextTick(function() {
        this.updateCategoriesSize()
        this.handleScroll()
      });
    }
  },
  destoryed () {
    SEARCH_CATEGORY.emojis = null

    clearTimeout(this.leaveTimeout)
    clearTimeout(this.firstRenderTimeout)
  },
  methods: {
    processData(data) {
      this.categories = []
      let allCategories = [].concat(data.categories)

      if (this.custom.length > 0) {
        CUSTOM_CATEGORY.emojis = this.custom.map(emoji => {
          return {
            ...emoji,
            // `<Category />` expects emoji to have an `id`.
            id: emoji.short_names[0],
            custom: true,
          }
        })

        allCategories.push(CUSTOM_CATEGORY)
      }

      this.hideRecent = true

      if (this.include != undefined) {
        data.categories.sort((a, b) => {
          let aName = a.name.toLowerCase()
          let bName = b.name.toLowerCase()

          if (this.include.indexOf(aName) > this.include.indexOf(bName)) {
            return 1
          }

          return 0
        })
      }

      for (let category of allCategories) {
        let isIncluded = this.include && this.include.length ? this.include.indexOf(category.name.toLowerCase()) > -1 : true
        let isExcluded = this.exclude && this.exclude.length ? this.exclude.indexOf(category.name.toLowerCase()) > -1 : false
        if (!isIncluded || isExcluded) { continue }

        if (this.emojisToShowFilter) {
          let newEmojis = []

          for (let emoji of category.emojis) {
            if (this.emojisToShowFilter(data.emojis[emoji] || emoji)) {
              newEmojis.push(emoji)
            }
          }

          if (newEmojis.length) {
            let newCategory = {
              emojis: newEmojis,
              name: category.name,
            }

            this.categories.push(newCategory)
          }
        } else {
          this.categories.push(category)
        }
      }

      let includeRecent = this.include && this.include.length ? this.include.indexOf('recent') > -1 : true
      let excludeRecent = this.exclude && this.exclude.length ? this.exclude.indexOf('recent') > -1 : false
      if (includeRecent && !excludeRecent) {
        this.hideRecent = false
        this.categories.unshift(RECENT_CATEGORY)
      }

      if (this.categories[0]) {
        this.categories[0].first = true
      }
      this.categories.unshift(SEARCH_CATEGORY)
    },
    testStickyPosition() {
      var stickyTestElement = document.createElement('div')
      for (let prefix of ['', '-webkit-', '-ms-', '-moz-', '-o-']) {
        stickyTestElement.style.position = `${prefix}sticky`
      }

      this.hasStickyPosition = !!stickyTestElement.style.position.length
    },

    handleEmojiOver(emoji) {
      var { preview } = this.$refs
      // Use Array.prototype.find() when it is more widely supported.
      const emojiData = CUSTOM_CATEGORY.emojis.filter(customEmoji => customEmoji.id === emoji.id)[0]
      preview.emojiObj = Object.assign(emoji, emojiData)
      clearTimeout(this.leaveTimeout)
    },

    handleEmojiLeave(emoji) {
      this.leaveTimeout = setTimeout(() => {
        var { preview } = this.$refs
        preview.emojiObj = null
      }, 16)
    },

    handleEmojiClick(emoji, e) {
      this.onItemClick(emoji, e)
      if (!this.hideRecent) frequently.add(emoji)

      var component = this.$refs['category-1']
      if (component) {
        let maxMargin = component.maxMargin
        component.$forceUpdate()

        window.requestAnimationFrame(() => {
          component.memoizeSize()
          if (maxMargin == component.maxMargin) return

          this.updateCategoriesSize()
          this.handleScrollPaint()

          if (SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none')
          }
        })
      }
    },

    handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true
        window.requestAnimationFrame(this.handleScrollPaint.bind(this))
      }
    },

    handleScrollPaint() {
      this.waitingForPaint = false

      if (!this.$refs.scroll) {
        return
      }

      let activeCategory = null

      if (SEARCH_CATEGORY.emojis) {
        activeCategory = SEARCH_CATEGORY
      } else {
        var target = this.$refs.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0

        for (let i = 0, l = this.categories.length; i < l; i++) {
          let ii = scrollingDown ? (this.categories.length - 1 - i) : i,
              category = this.categories[ii],
              component = this.$refs[`category-${ii}`]

          if (component) {
            let active = component.handleScroll(scrollTop)

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top
              }
            }

            if (active && !activeCategory) {
              activeCategory = category
            }
          }
        }

        if (scrollTop < minTop) {
          for (let category of this.categories) {
            if (category.anchor === false) { continue }

            activeCategory = category
            break
          }
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1]
        }
      }

      if (activeCategory) {
        let { anchors } = this.$refs,
            { name: categoryName } = activeCategory

        if (anchors.selected != categoryName) {
          anchors.selected = categoryName
        }
      }

      this.scrollTop = scrollTop
    },

    handleSearch(emojis) {
      SEARCH_CATEGORY.emojis = emojis

      for (let i = 0, l = this.categories.length; i < l; i++) {
        let component = this.$refs[`category-${i}`]

        if (component && component.name != 'Search') {
          let display = emojis ? 'none' : 'inherit'
          component.updateDisplay(display)
        }
      }

      this.$forceUpdate()
      this.$refs.scroll.scrollTop = 0
      this.handleScroll()
    },
    handleAnchorClick(category, i) {
      var component = this.$refs[`category-${i}`],
          { scroll, anchors } = this.$refs,
          scrollToComponent = null

      scrollToComponent = () => {
        if (component) {
          let { top } = component

          if (category.first) {
            top = 0
          } else {
            top += 1
          }

          scroll.scrollTop = top
        }
      }

      if (SEARCH_CATEGORY.emojis) {
        this.handleSearch(null)
        this.$refs.search.clear()

        window.requestAnimationFrame(scrollToComponent)
      } else {
        scrollToComponent()
      }
    },

    handleSkinChange(skin) {
      var newState = { skin: skin }

      this.skin = skin
      store.update(newState)
    },

    updateCategoriesSize() {
      for (let i = 0, l = this.categories.length; i < l; i++) {
        let component = this.$refs[`category-${i}`]
        if (component) component.memoizeSize()
      }

      if (this.$refs.scroll) {
        let target = this.$refs.scroll
        this.scrollHeight = target.scrollHeight
        this.clientHeight = target.clientHeight
      }
    },

    getCategories() {
      return this.firstRender ? this.categories.slice(0, 3) : this.categories
    }
  },
  render() {
    if (this.loading) {
      return <span>loading...</span>
    }

    var { perLine, emojiSize, skin, set, sheetSize, styles, title, emoji, color, native, backgroundImageFn, emojisToShowFilter, include, exclude, autoFocus, enableSkins } = this,
        width = (perLine * (emojiSize + 12)) + 12 + 2 + measureScrollbar()

    return <div style={{width: width, ...styles}} class='emoji-mart'>
      <div class='emoji-mart-bar'>
        <Anchors
          ref='anchors'
          i18n={this.i18n}
          color={color}
          categories={this.categories}
          anchorClick={this.handleAnchorClick.bind(this)}
        />
      </div>

      <Search
        ref='search'
        search={this.handleSearch.bind(this)}
        i18n={this.i18n}
        emojisToShowFilter={emojisToShowFilter}
        include={include}
        exclude={exclude}
        custom={CUSTOM_CATEGORY.emojis}
        autoFocus={autoFocus}
      />
      <div ref="scroll" class='emoji-mart-scroll' onScroll={this.handleScroll.bind(this)}>
        {this.getCategories().map((category, i) => {
          return <Category
            ref={`category-${i}`}
            key={category.name}
            name={category.name}
            emojis={category.emojis}
            perLine={perLine}
            native={native}
            hasStickyPosition={this.hasStickyPosition}
            i18n={this.i18n}
            custom={category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined}
            emojiProps={{
              native: native,
              skin: skin,
              size: emojiSize,
              set: set,
              sheetSize: sheetSize,
              forceSize: native,
              backgroundImageFn: backgroundImageFn,
              emojiOver: this.handleEmojiOver.bind(this),
              emojiLeave: this.handleEmojiLeave.bind(this),
              emojiClick: this.handleEmojiClick.bind(this),
            }}
          />
        })}
      </div>

      <div class='emoji-mart-bar'>
        {<Preview
          ref='preview'
          title={title}
          emoji={emoji}
          enableSkins={enableSkins}
          emojiProps={{
            native: native,
            size: 38,
            skin: skin,
            set: set,
            sheetSize: sheetSize,
            backgroundImageFn: backgroundImageFn,
          }}
          skinsProps={{
            skin: skin,
            change: this.handleSkinChange.bind(this)
          }}
        />}
      </div>
    </div>
  }
}
