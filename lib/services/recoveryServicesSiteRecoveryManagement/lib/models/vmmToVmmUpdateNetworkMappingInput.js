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
 * Update network mappings input properties/behaviour specific to vmm to vmm.
 *
 * @extends models['FabricSpecificUpdateNetworkMappingInput']
 */
class VmmToVmmUpdateNetworkMappingInput extends models['FabricSpecificUpdateNetworkMappingInput'] {
  /**
   * Create a VmmToVmmUpdateNetworkMappingInput.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VmmToVmmUpdateNetworkMappingInput
   *
   * @returns {object} metadata of VmmToVmmUpdateNetworkMappingInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VmmToVmm',
      type: {
        name: 'Composite',
        className: 'VmmToVmmUpdateNetworkMappingInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VmmToVmmUpdateNetworkMappingInput;
