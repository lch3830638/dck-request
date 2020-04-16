class Intercepter {
  constructor() {
    this.handlers = []
  }
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
    })
    return this.handlers.length - 1
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null
    }
  }
  forEach(fn) {
    this.handlers.forEach(i => {
      if (i) {
        fn(i)
      }
    })
  }
}

export default Intercepter
