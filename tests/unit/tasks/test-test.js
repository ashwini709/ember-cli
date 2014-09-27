'use strict';

var assert      = require('../../helpers/assert');
var TestTask    = require('../../../lib/tasks/test');
var MockProject = require('../../helpers/mock-project');

describe('test', function() {
  var subject;

  it('transforms the options and invokes testem properly', function() {
    subject = new TestTask({
      project: new MockProject(),
      invokeTestem: function(options) {
        assert.equal(options.file, 'blahzorz.conf');
        assert.equal(options.port, 123324);
        assert.equal(options.cwd, 'blerpy-derpy');
      }
    });

    subject.run({
      configFile: 'blahzorz.conf',
      port: 123324,
      outputPath: 'blerpy-derpy'
    });
  });
});

