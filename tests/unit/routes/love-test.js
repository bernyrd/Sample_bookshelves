import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | love', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:love');
    assert.ok(route);
  });
});
