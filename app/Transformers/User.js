const Transformer = use('App/Transformers/Transformer')
const get = require('lodash/get')

class User extends Transformer {
  async transform() {
    return {
      id: this.model.id,
      username: this.model.username,
      status: this.model.username,
      created_at: this.model.created_at,
      updated_at: this.model.updated_at
    }
  }
}

module.exports = User