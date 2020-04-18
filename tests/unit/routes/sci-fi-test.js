import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sci-fi', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sci-fi');
    assert.ok(route);
  });
});
