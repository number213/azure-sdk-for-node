/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Continuous Web Job Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class ContinuousWebJob extends models['ProxyOnlyResource'] {
  /**
   * Create a ContinuousWebJob.
   * @member {string} [status] Job status. Possible values include:
   * 'Initializing', 'Starting', 'Running', 'PendingRestart', 'Stopped'
   * @member {string} [detailedStatus] Detailed status.
   * @member {string} [logUrl] Log URL.
   * @member {string} [continuousWebJobName] Job name. Used as job identifier
   * in ARM resource URI.
   * @member {string} [runCommand] Run command.
   * @member {string} [url] Job URL.
   * @member {string} [extraInfoUrl] Extra Info URL.
   * @member {string} [jobType] Job type. Possible values include:
   * 'Continuous', 'Triggered'
   * @member {string} [error] Error information.
   * @member {boolean} [usingSdk] Using SDK?
   * @member {object} [settings] Job settings.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContinuousWebJob
   *
   * @returns {object} metadata of ContinuousWebJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContinuousWebJob',
      type: {
        name: 'Composite',
        className: 'ContinuousWebJob',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Initializing', 'Starting', 'Running', 'PendingRestart', 'Stopped' ]
            }
          },
          detailedStatus: {
            required: false,
            serializedName: 'properties.detailedStatus',
            type: {
              name: 'String'
            }
          },
          logUrl: {
            required: false,
            serializedName: 'properties.logUrl',
            type: {
              name: 'String'
            }
          },
          continuousWebJobName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          runCommand: {
            required: false,
            serializedName: 'properties.runCommand',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'properties.url',
            type: {
              name: 'String'
            }
          },
          extraInfoUrl: {
            required: false,
            serializedName: 'properties.extraInfoUrl',
            type: {
              name: 'String'
            }
          },
          jobType: {
            required: false,
            serializedName: 'properties.jobType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Continuous', 'Triggered' ]
            }
          },
          error: {
            required: false,
            serializedName: 'properties.error',
            type: {
              name: 'String'
            }
          },
          usingSdk: {
            required: false,
            serializedName: 'properties.usingSdk',
            type: {
              name: 'Boolean'
            }
          },
          settings: {
            required: false,
            serializedName: 'properties.settings',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ContinuousWebJob;
