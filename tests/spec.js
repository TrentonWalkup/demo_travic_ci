describe('this is a practice test', ()=> {
  it('that goes to the correct URL', ()=> {
    browser.url('/')
    console.log(browser.getUrl())
  })
})
