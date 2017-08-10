// TODO: svg loader
import * as SVGs from '../svgs'
export default {
  name: 'Anchors',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    },
    anchorClick: Function,
    i18n: Object,
    color: String
  },
  data () {
    let defaultCategory = null
    for (let category of this.categories) {
      if (category.first) {
        defaultCategory = category
        break
      }
    }
    return {
      selected: defaultCategory.name
    }
  },
  render () {
    var { categories, anchorClick, color, i18n, selected } = this

    return <div class='emoji-mart-anchors'>
      {categories.map((category, i) => {
        var { name, anchor } = category,
            isSelected = name == selected,
            SVGElement = SVGs[name]

        if (anchor === false) {
          return null
        }

        return (
          <span
            key={name}
            title={i18n.categories[name.toLowerCase()]}
            onClick={() => anchorClick(category, i)}
            class={{'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': isSelected}}
            style={{ color: isSelected ? color : null }}
          >
            <SVGElement />
            <span class='emoji-mart-anchor-bar' style={{ backgroundColor: color }}></span>
          </span>
        )
      })}
    </div>
  }
}
