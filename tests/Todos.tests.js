import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import Todos from '../components/Todos'

describe('<Todos /> Component', function() {
  it('has a button tag', function() {
    expect(shallow(<Todos />).contains(<button id="addButton" className="text_button btn btn-default glyph_hover" type="button" onClick={this.click} value={this.state.newTodo} onChange={this.typing} />)).to.equal(true)
  })
  })

  it('contain glyph_hover class', function() {
    expect(mount(<Todos />).find('.glyph_hover').length).to.equal(1)
  })
