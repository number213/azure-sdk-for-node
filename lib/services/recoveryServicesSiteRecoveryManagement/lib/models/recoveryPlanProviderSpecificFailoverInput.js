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

/**
 * Recovery plan provider specific failover input base class.
 *
 */
class RecoveryPlanProviderSpecificFailoverInput {
  /**
   * Create a RecoveryPlanProviderSpecificFailoverInput.
   * @member {string} instanceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryPlanProviderSpecificFailoverInput
   *
   * @returns {object} metadata of RecoveryPlanProviderSpecificFailoverInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPlanProviderSpecificFailoverInput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'RecoveryPlanProviderSpecificFailoverInput',
        className: 'RecoveryPlanProviderSpecificFailoverInput',
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

module.exports = RecoveryPlanProviderSpecificFailoverInput;